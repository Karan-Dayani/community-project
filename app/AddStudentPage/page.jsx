"use client";
import React, { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

const AddStudentForm = () => {
  const router = useRouter();
  const [studentData, setStudentDate] = useState({
    name: "",
    grade: "",
    contNo: null,
    parentContNo: null,
    stream: "",
    loginEmail: "",
  });
  const [studentPass, setStudentPass] = useState();

  async function signUpNewUser() {
    const { data, error } = await supabase.auth.signUp({
      email: studentData.loginEmail,
      password: studentPass,
    });
  }

  const addStudent = async () => {
    const { data, error } = await supabase
      .from("students")
      .insert([studentData])
      .select();

    signUpNewUser();

    router.replace("/TeacherPage");
  };

  const onFieldChange = (name, value) => {
    setStudentDate((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="px-32 py-10">
      <h1 className="text-2xl font-bold">New Admission Form</h1>
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label
            htmlFor="name"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Name
          </label>
          <div className="mt-2">
            <input
              required
              id="name"
              name="name"
              onChange={(e) => onFieldChange("name", e.target.value)}
              type="text"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="grade"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Grade
          </label>
          <div className="mt-2">
            <input
              required
              id="grade"
              name="grade"
              onChange={(e) => onFieldChange("grade", e.target.value)}
              type="text"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="contno"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Contact number
          </label>
          <div className="mt-2">
            <input
              required
              id="contno"
              name="contno"
              onChange={(e) => onFieldChange("contNo", e.target.value)}
              type="number"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="parno"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Parent number
          </label>
          <div className="mt-2">
            <input
              required
              id="parno"
              name="parno"
              onChange={(e) => onFieldChange("parentContNo", e.target.value)}
              type="number"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="col-span-full">
          <label
            htmlFor="stream"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Stream
          </label>
          <div className="mt-2">
            <input
              required
              id="stream"
              name="stream"
              onChange={(e) => onFieldChange("stream", e.target.value)}
              type="text"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Student Login Email
          </label>
          <div className="mt-2">
            <input
              required
              id="email"
              name="email"
              onChange={(e) => onFieldChange("loginEmail", e.target.value)}
              type="email"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="pass"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Student Login Password
          </label>
          <div className="mt-2">
            <input
              required
              id="password"
              name="password"
              type="password"
              onChange={(e) => setStudentPass(e.target.value)}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-3">
          <button
            className="bg-blue-400 p-3 text-xl rounded-md"
            onClick={() => addStudent()}
          >
            <span>+</span> Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddStudentForm;
