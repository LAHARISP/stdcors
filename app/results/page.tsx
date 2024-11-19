'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

// Define the types for your data
interface StudentDetails {
  s_name: string;
  usn: string;
  semester: string;
}

interface SubjectResult {
  subcode: string;
  brcode: string;
  suborder: number;
  grd: string;
}

export default function ResultsPage() {
  // Use proper types for state variables
  const [studentDetails, setStudentDetails] = useState<StudentDetails>({
    s_name: '',
    usno: '',
    semester: '',
  });

  const [subjectResults, setSubjectResults] = useState<SubjectResult[]>([]);

  useEffect(() => {
    const fetchStudentDetails = async () => {
      try {
        const response = await fetch('/api/getStudentDetails');
        if (!response.ok) {
          throw new Error(`Failed to fetch student details: ${response.status}`);
        }
        const data = await response.json();
        if (Array.isArray(data) && data.length > 0) {
          setStudentDetails(data[0]);
        } else {
          console.warn('Unexpected student details response:', data);
        }
      } catch (error) {
        console.error('Error fetching student details:', error);
      }
    };

    const fetchSubjectResults = async () => {
      try {
        const response = await fetch('/api/getSubjectResult');
        if (!response.ok) {
          throw new Error(`Failed to fetch subject results: ${response.status}`);
        }
        const data = await response.json();
        if (Array.isArray(data)) {
          setSubjectResults(data);
        } else {
          console.warn('Unexpected subject results response:', data);
          setSubjectResults([]); // Set to an empty array to avoid errors
        }
      } catch (error) {
        console.error('Error fetching subject results:', error);
      }
    };

    fetchStudentDetails();
    fetchSubjectResults();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
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

      {/* Student Details */}
      <div>
        <h1 className="text-center text-2xl text-black font-semibold mb-6">RESULTS</h1>
      </div>
      <div className="flex-grow flex items-center justify-center p-6">
        <div className="container mx-auto p-4">
          <div className="max-w-md mx-auto bg-white text-black shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-xl text-black font-bold mb-4">Student Details</h2>
            <div>
              <p>
                <strong>Name:</strong> {studentDetails.s_name || 'N/A'}
              </p>
              <p>
                <strong>USN:</strong> {studentDetails.usno || 'N/A'}
              </p>
              <p>
                <strong>Semester:</strong> {studentDetails.semester || 'N/A'}
              </p>
            </div>
          </div>

          {/* Subject Results Table */}
          <div className="mt-6">
            <h3 className="text-xl text-black font-bold mb-4">Subject Results</h3>
            {subjectResults.length > 0 ? (
              <table className="min-w-full bg-white border">
                <thead>
                  <tr>
                    <th className="py-2 text-black px-4 border">Subject Code</th>
                    <th className="py-2 text-black px-4 border">Subject Name</th>
                    <th className="py-2 text-black px-4 border">Credits</th>
                    <th className="py-2 text-black px-4 border">Grade Awarded</th>
                  </tr>
                </thead>
                <tbody>
                  {subjectResults.map((subject, index) => (
                    <tr key={index}>
                      <td className="py-2 text-black px-4 border">{subject.subcode || 'N/A'}</td>
                      <td className="py-2 text-black px-4 border">{subject.brcode || 'N/A'}</td>
                      <td className="py-2 text-black px-4 border">{subject.suborder || 'N/A'}</td>
                      <td className="py-2 text-black px-4 border">{subject.grd || 'N/A'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-black">No subject results available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

