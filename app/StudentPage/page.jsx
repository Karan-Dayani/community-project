"use client";
import React, { Suspense, useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useSearchParams } from "next/navigation";

const StudentPage = () => {
  const [data, setData] = useState();
  const searchParams = useSearchParams();
  const user = searchParams.get("user");

  useEffect(() => {
    const getStudent = async () => {
      let { data: student, error } = await supabase
        .from("students")
        .select("*")
        .eq("loginEmail", user);
      setData(student[0]);
    };
    getStudent();
  }, [user]);

  console.log(data);
  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <div className="p-10 flex flex-col gap-5">
        <div>
          <h1 className="text-3xl font-bold">{data?.name}</h1>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-xl">Grade: {data?.grade}</h1>
          <h1 className="text-xl">Stream : {data?.stream}</h1>
          <h1 className="text-xl">Attendance: {data?.attendance}%</h1>
          <h1 className="text-xl">Email: {data?.loginEmail}</h1>
          <h1 className="text-xl">Last Test Result: {data?.lastTestResult}</h1>
        </div>
      </div>
    </Suspense>
  );
};

export default StudentPage;
