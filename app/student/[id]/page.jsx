"use client";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

const StudentEditPage = () => {
  const router = useRouter();
  const params = useParams();
  const [data, setData] = useState();

  const [attendance, setAttendance] = useState();
  const [lastTestRes, setLastTestRes] = useState();

  useEffect(() => {
    const getStudents = async () => {
      let { data: student, error } = await supabase
        .from("students")
        .select("*")
        .eq("id", params.id);

      setData(student[0]);
    };
    getStudents();
  });

  const update = async () => {
    const { data, error } = await supabase
      .from("students")
      .update({ attendance: attendance, lastTestResult: lastTestRes })
      .eq("id", params.id)
      .select();

    router.replace("/TeacherPage");
  };
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">{data?.name}</h1>
      <div className="px-44 py-5 flex flex-col gap-5">
        <div>
          <h1 className="text-lg">Attendance</h1>
          <input
            id="attendance"
            name="attendance"
            value={data?.attendance}
            onChange={(e) => setAttendance(e.target.value)}
            type="number"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
        <div>
          <h1 className="text-lg">Last Test Result</h1>
          <input
            id="LTR"
            name="LTR"
            value={data?.lastTestResult}
            onChange={(e) => setLastTestRes(e.target.value)}
            type="text"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
        <div>
          <button
            className="bg-blue-400 px-4 py-2 rounded-md text-lg"
            onClick={() => update()}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentEditPage;
