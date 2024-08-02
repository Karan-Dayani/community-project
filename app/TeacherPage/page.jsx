"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

const TeacherPage = () => {
  const [studentsData, setStudentsData] = useState();
  useEffect(() => {
    const getStudents = async () => {
      let { data: students, error } = await supabase
        .from("students")
        .select("*");
      setStudentsData(students);
    };
    getStudents();
  }, []);

  return (
    <div>
      <div className="flex justify-between px-52 pt-10">
        <h1 className="text-4xl font-bold">Students</h1>
        <Link
          className="bg-blue-400 p-2 rounded-md text-lg"
          href={"/AddStudentPage"}
        >
          <span className="text-xl">+</span> Add Student
        </Link>
      </div>
      <div className="flex justify-center">
        <div className="relative overflow-x-auto pt-10">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Grade
                </th>
                <th scope="col" className="px-6 py-3">
                  Contact no.
                </th>
                <th scope="col" className="px-6 py-3">
                  Parent Contact no.
                </th>
                <th scope="col" className="px-6 py-3">
                  Stream
                </th>
                <th scope="col" className="px-6 py-3">
                  Attendance
                </th>
                <th scope="col" className="px-6 py-3">
                  Last Test Result
                </th>
                <th scope="col" className="px-6 py-3">
                  Student Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Edit
                </th>
              </tr>
            </thead>
            <tbody>
              {studentsData?.map((student) => (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  key={student.id}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {student.name}
                  </th>
                  <td className="px-6 py-4">{student.grade}</td>
                  <td className="px-6 py-4">{student.contNo}</td>
                  <td className="px-6 py-4">{student.parentContNo}</td>
                  <td className="px-6 py-4">{student.stream}</td>
                  <td className="px-6 py-4">
                    {student.attendance ? student.attendance : 0}%
                  </td>
                  <td className="px-6 py-4">
                    {student.lastTestResult ? student.lastTestResult : "null"}
                  </td>
                  <td className="px-6 py-4">{student.loginEmail}</td>
                  <td className="px-6 py-4">
                    <Link href={`/student/${student.id}`}>Edit</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TeacherPage;
