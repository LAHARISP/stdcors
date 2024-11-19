"use client"; // Ensures this is a client component for hooks

import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

type Student = {
  id: number;
  usn: string;
  name: string;
  mentor: string;
};

export default function StudentListPage() {
  const [students, setStudents] = useState<Student[]>([]);
  const [academicYear, setAcademicYear] = useState('');
  const [semester, setSemester] = useState('');
  const [section, setSection] = useState('');
  const [showConfirm, setShowConfirm] = useState(false);
  const [studentToDelete, setStudentToDelete] = useState<number | null>(null);
  const [newStudent, setNewStudent] = useState({ usn: '', name: '', mentor: '' });
  const router = useRouter();

  useEffect(() => {
    if (academicYear && semester) {
      fetchStudents();
    }
  }, [academicYear, semester]);

  const fetchStudents = async () => {
    try {
      const response = await axios.get(`/api/students?year=${academicYear}&semester=${semester}`);
      setStudents(response.data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  const handleRegister = () => {
    router.push('/course-registration');
  };

  const handleViewUpdate = (studentId: number) => {
    router.push(`/mentor-dashboard/${studentId}`);
  };

  const handleDrop = (studentId: number) => {
    setStudentToDelete(studentId);
    setShowConfirm(true);
  };

  const confirmDelete = async () => {
    if (studentToDelete !== null) {
      try {
        await axios.delete(`/api/students/${studentToDelete}`);
        setStudents(students.filter((student) => student.id !== studentToDelete));
      } catch (error) {
        console.error('Error deleting student:', error);
      } finally {
        setShowConfirm(false);
        setStudentToDelete(null);
      }
    }
  };

  const handleAddStudent = async () => {
    if (newStudent.name.trim() === '' || newStudent.usn.trim() === '' || newStudent.mentor.trim() === '') return;

    try {
      const response = await axios.post('/api/students', newStudent);
      setStudents([...students, response.data]);
      setNewStudent({ usn: '', name: '', mentor: '' }); // Reset the input fields
    } catch (error) {
      console.error('Error adding student:', error);
    }
  };

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
              <p className="text-sm opacity-90">Outer Ring Road, Malathahalli, Bengaluru-560056, Karnataka, India</p>
            </div>
          </div>
        </div>
      </header>

      {/* Student Mentor Allocation Content */}
      <main className="flex-1 container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">STUDENT MENTOR ALLOCATION</h2>
        
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          {/* Dropdowns */}
          <select 
            className="w-48 py-2 px-4 rounded-full bg-gray-200 text-gray-800 focus:outline-none"
            onChange={(e) => setAcademicYear(e.target.value)} 
            value={academicYear}
          >
            <option value="">ACADEMIC YEAR</option>
            {/* Add more options dynamically */}
          </select>
          <select 
            className="w-48 py-2 px-4 rounded-full bg-gray-200 text-gray-800 focus:outline-none"
            onChange={(e) => setSemester(e.target.value)} 
            value={semester}
          >
            <option value="">SEMESTER</option>
            {/* Add more options dynamically */}
          </select>
          <select 
            className="w-48 py-2 px-4 rounded-full bg-gray-200 text-gray-800 focus:outline-none"
            onChange={(e) => setSection(e.target.value)} 
            value={section}
          >
            <option value="">SECTION</option>
            {/* Add more options dynamically */}
          </select>
        </div>

        {/* Add New Student Section
        <div className="flex justify-center gap-4 mb-6">
          <input 
            type="text" 
            value={newStudent.usn} 
            onChange={(e) => setNewStudent({ ...newStudent, usn: e.target.value })} 
            placeholder="Enter USN" 
            className="py-2 px-4 w-40 rounded-full bg-gray-200 text-gray-800 focus:outline-none"
          />
          <input 
            type="text" 
            value={newStudent.name} 
            onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })} 
            placeholder="Enter Name" 
            className="py-2 px-4 w-40 rounded-full bg-gray-200 text-gray-800 focus:outline-none"
          />
          <input 
            type="text" 
            value={newStudent.mentor} 
            onChange={(e) => setNewStudent({ ...newStudent, mentor: e.target.value })} 
            placeholder="Enter Mentor" 
            className="py-2 px-4 w-40 rounded-full bg-gray-200 text-gray-800 focus:outline-none"
          />
          <button 
            onClick={handleAddStudent} 
            className="py-2 px-6 text-base font-medium text-white rounded-full bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Add Student
          </button>
        </div> */}

        {/* Student Table */}
        <table className="w-full max-w-3xl mx-auto bg-white rounded-md overflow-hidden shadow-lg text-gray-800">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-3 px-4 text-gray-800">SL NO</th>
              <th className="py-3 px-4 text-gray-800">USN</th>
              <th className="py-3 px-4 text-gray-800">NAME</th>
              <th className="py-3 px-4 text-gray-800">MENTOR</th>
              <th className="py-3 px-4 text-gray-800">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={student.id} className="border-b">
                <td className="py-3 px-4 text-center">{index + 1}</td>
                <td className="py-3 px-4 text-center">{student.usn}</td>
                <td className="py-3 px-4 text-center">{student.name}</td>
                <td className="py-3 px-4 text-center">{student.mentor}</td>
                <td className="py-3 px-4 text-center">
                  <button 
                    onClick={handleRegister} 
                    className="text-blue-500 hover:underline"
                  >
                    Register
                  </button>
                  <button 
                    onClick={() => handleViewUpdate(student.id)} 
                    className="ml-2 text-blue-500 hover:underline"
                  >
                    View and Update
                  </button>
                  <button 
                    onClick={() => handleDrop(student.id)} 
                    className="ml-2 text-red-500 hover:underline"
                  >
                    Drop
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Custom Confirmation Dialog */}
        {showConfirm && (
          <div className="confirm-dialog fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded-md shadow-lg text-center">
              <p>Are you sure you want to delete this student?</p>
              <button 
                onClick={confirmDelete} 
                className="mt-4 py-1 px-4 bg-red-500 text-white rounded-full"
              >
                Yes
              </button>
              <button 
                onClick={() => setShowConfirm(false)} 
                className="mt-4 ml-2 py-1 px-4 bg-gray-500 text-white rounded-full"
              >
                No
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
