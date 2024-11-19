

// export default AlumniPage;
"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface Student {
  slNo: number;
  usno: string;
  s_name: string;
}

const AlumniPage: React.FC = () => {
  const [academicYear, setAcademicYear] = useState<string>("");
  const [students, setStudents] = useState<Student[]>([]);

  // Fetch students from the API
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch(`/api/alumini`);
        const data = await response.json();
        const formattedStudents = data.map((student: any, index: number) => ({
          slNo: index + 1,
          usno: student.usno,
          s_name: student.s_name,
        }));
        setStudents(formattedStudents);
      } catch (error) {
        console.error("Error fetching alumni data:", error);
      }
    };

    fetchStudents();
  }, []); // Fetch data on initial render

  const viewDetails = (usno: string) => {
    alert(`View details for student with USN: ${usno}`);
    // Implement the logic to display student details
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Full width header */}
      <header className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image
              src="/DRAIT.jpg"
              alt="Institute Logo"
              width={60}
              height={60}
              className="rounded-full"
            />
            <div className="flex flex-col">
              <h1 className="text-xl font-bold">Dr. AMBEDKAR INSTITUTE OF TECHNOLOGY</h1>
              <p className="text-sm opacity-90">
                Outer Ring Road, Malathahalli, Bengaluru-560056, Karnataka, India
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Alumni Page Content */}
      <main className="py-8">
        <h2 className="text-center text-2xl text-black font-semibold mb-6">Alumni List</h2>

        {/* Dropdown for Academic Year */}
        <div className="flex justify-center mb-6">
          <select
            id="academicYear"
            className="px-4 py-2 border rounded-md text-gray-700"
            value={academicYear}
            onChange={(e) => setAcademicYear(e.target.value)}
          >
            <option value="">Select Academic Year</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            {/* Add more years as needed */}
          </select>
        </div>

        {/* Table for Passed-Out Students */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead>
              <tr>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase">
                  SL NO
                </th>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase">
                  USN
                </th>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase">
                  Name
                </th>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase">
                  Select
                </th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.usno} className="bg-white hover:bg-gray-100">
                  <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                    {student.slNo}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                    {student.usno}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                    {student.s_name}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200 text-sm">
                    <Link href="/mentor-dashboard">
                      <button
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
                        onClick={() => viewDetails(student.usno)}
                      >
                        View
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default AlumniPage;

