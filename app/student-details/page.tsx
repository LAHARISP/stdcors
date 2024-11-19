"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface StudentDetails {
  s_name: string;
  dob: string;
  usno: string;
  st_email: string;
  st_mobile: string; // Phone number
  m_name: string;
  f_name: string;
  parent_mobile: string;
  category: string;
  gardian_mobile: string;
  nationality: string;
  blood_group: string;
  permanent_adrs: string;
}

const StudentDetailsPage: React.FC = () => {
  const [studentDetails, setStudentDetails] = useState<StudentDetails | null>(
    null
  );

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("/api/students");
        const data = await response.json();
        console.log(data);
        setStudentDetails(data[0]);
      } catch (error) {
        console.error("Error fetching student details:", error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 py-4 flex items-center">
          <Image
            src="/DRAIT.jpg"
            alt="Institute Logo"
            width={60}
            height={60}
            className="rounded-full"
          />
          <div className="ml-4">
            <h1 className="text-xl font-bold">
              Dr. AMBEDKAR INSTITUTE OF TECHNOLOGY
            </h1>
            <p className="text-sm opacity-90">
              Outer Ring Road, Malathahalli, Bengaluru-560056, Karnataka, India
            </p>
          </div>
        </div>
      </header>

      {/* Student Details Content */}
      <main className="py-8">
        <h2 className="text-center text-2xl text-black font-semibold mb-6">
          Student Details
        </h2>

        {studentDetails ? (
          <div className="container mx-auto px-4">
            <div className="overflow-x-auto bg-white shadow-md rounded-lg p-6">
              <table className="min-w-full text-left">
                <tbody>
                  <tr className="border-b">
                    <th className="py-3 px-6 font-medium text-gray-500">Name</th>
                    <td className="py-3 px-6 text-gray-700">
                      {studentDetails.s_name}
                    </td>
                  </tr>
                  <tr className="border-b">
                    <th className="py-3 px-6 font-medium text-gray-500">
                      Date of Birth
                    </th>
                    <td className="py-3 px-6 text-gray-700">
                      {studentDetails.dob}
                    </td>
                  </tr>
                  <tr className="border-b">
                    <th className="py-3 px-6 font-medium text-gray-500">USN</th>
                    <td className="py-3 px-6 text-gray-700">
                      {studentDetails.usno}
                    </td>
                  </tr>
                  <tr className="border-b">
                    <th className="py-3 px-6 font-medium text-gray-500">
                      Email ID
                    </th>
                    <td className="py-3 px-6 text-gray-700">
                      {studentDetails.st_email}
                    </td>
                  </tr>
                  <tr className="border-b">
                    <th className="py-3 px-6 font-medium text-gray-500">
                      Phone Number
                    </th>
                    <td className="py-3 px-6 text-gray-700">
                      {studentDetails.st_mobile}
                    </td>
                  </tr>
                  <tr className="border-b">
                    <th className="py-3 px-6 font-medium text-gray-500">
                      Mother Name
                    </th>
                    <td className="py-3 px-6 text-gray-700">
                      {studentDetails.m_name}
                    </td>
                  </tr>
                  <tr className="border-b">
                    <th className="py-3 px-6 font-medium text-gray-500">
                      Father Name
                    </th>
                    <td className="py-3 px-6 text-gray-700">
                      {studentDetails.f_name}
                    </td>
                  </tr>
                  <tr className="border-b">
                    <th className="py-3 px-6 font-medium text-gray-500">
                      Parent Phone Number
                    </th>
                    <td className="py-3 px-6 text-gray-700">
                      {studentDetails.parent_mobile}
                    </td>
                  </tr>
                  <tr className="border-b">
                    <th className="py-3 px-6 font-medium text-gray-500">
                      Category
                    </th>
                    <td className="py-3 px-6 text-gray-700">
                      {studentDetails.category}
                    </td>
                  </tr>
                  <tr className="border-b">
                    <th className="py-3 px-6 font-medium text-gray-500">
                      Guardian Phone Number
                    </th>
                    <td className="py-3 px-6 text-gray-700">
                      {studentDetails.gardian_mobile}
                    </td>
                  </tr>
                  <tr className="border-b">
                    <th className="py-3 px-6 font-medium text-gray-500">
                      Blood Group
                    </th>
                    <td className="py-3 px-6 text-gray-700">
                      {studentDetails.blood_group}
                    </td>
                  </tr>
                  <tr>
                    <th className="py-3 px-6 font-medium text-gray-500">
                      Address
                    </th>
                    <td className="py-3 px-6 text-gray-700">
                      {studentDetails.permanent_adrs}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-700">Loading student details...</p>
        )}
      </main>
    </div>
  );
};

export default StudentDetailsPage;
