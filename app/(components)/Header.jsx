"use client";
import React from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  async function signOut() {
    const { error } = await supabase.auth.signOut();
    router.replace("/");
  }
  return (
    <div className="bg-secondary text-primary flex justify-between items-center p-5">
      <h1 className="text-lg">{`<Private institute name>`}</h1>
      <button
        className="bg-red-400 p-2 rounded-lg text-secondary"
        onClick={signOut}
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
