"use client";
import { useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      if (session) {
        if (session.user.email === "teacher@gmail.com") {
          router.replace("/TeacherPage");
        } else {
          router.replace("/StudentPage");
        }
      } else {
        router.replace("/Login");
      }
    });
    supabase.auth.onAuthStateChange(async (_event, session) => {
      if (session) {
        if (session.user.email === "teacher@gmail.com") {
          router.replace("/TeacherPage");
        } else {
          router.replace("/StudentPage");
        }
      } else {
        router.replace("/Login");
      }
    });
  });
}
