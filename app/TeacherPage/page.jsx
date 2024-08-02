"use client";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const TeacherPage = () => {
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
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Walter White
                </th>
                <td className="px-6 py-4">10th</td>
                <td className="px-6 py-4">9185023548</td>
                <td className="px-6 py-4">3933264109</td>
                <td className="px-6 py-4">Science</td>
                <td className="px-6 py-4">80%</td>
                <td className="px-6 py-4">22 / 30</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Saul Goodman
                </th>
                <td className="px-6 py-4">10th</td>
                <td className="px-6 py-4">5508218391</td>
                <td className="px-6 py-4">1614543197</td>
                <td className="px-6 py-4">Science</td>
                <td className="px-6 py-4">72%</td>
                <td className="px-6 py-4">18 / 30</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Jessy Pinkman
                </th>
                <td className="px-6 py-4">10th</td>
                <td className="px-6 py-4">2623029716</td>
                <td className="px-6 py-4">4776676370</td>
                <td className="px-6 py-4">Science</td>
                <td className="px-6 py-4">50%</td>
                <td className="px-6 py-4">12 / 30</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Dustin Henderson
                </th>
                <td className="px-6 py-4">10th</td>
                <td className="px-6 py-4">9572722862</td>
                <td className="px-6 py-4">2955206249</td>
                <td className="px-6 py-4">Science</td>
                <td className="px-6 py-4">90%</td>
                <td className="px-6 py-4">28 / 30</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Light Yagami
                </th>
                <td className="px-6 py-4">10th</td>
                <td className="px-6 py-4">6940143374</td>
                <td className="px-6 py-4">4570666573</td>
                <td className="px-6 py-4">Science</td>
                <td className="px-6 py-4">35%</td>
                <td className="px-6 py-4">29 / 30</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TeacherPage;
