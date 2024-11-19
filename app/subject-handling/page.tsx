"use client";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function SubjectHandlingForm() {
  const [faculty, setFaculty] = useState("");
  const [subjectCode, setSubjectCode] = useState("");
  const [subjectList, setSubjectList] = useState([]);
  const [facultyList, setFacultyList] = useState([]);

  useEffect(() => {
    const fetchFacultyList = async () => {
      try {
        const response = await fetch("/api/facultylist");
        const data = await response.json();
        console.log("Faculty List Response:", data);
        setFacultyList(data);
      } catch (error) {
        console.error("Error fetching faculty list:", error);
      }
    };

    const fetchSubjectList = async () => {
      try {
        const response = await fetch("/api/courseregstud");
        const data = await response.json();
        console.log("Subject List Response:", data);
        setSubjectList(data);
      } catch (error) {
        console.error("Error fetching subject list:", error);
      }
    };

    fetchFacultyList();
    fetchSubjectList();
  }, []);

  const handleAllocate = async () => {
    try {
      console.log("Requesting allocation:", { faculty, subjectCode });

      // const response = await fetch("/api/allocatesubject", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({ faculty, subjectCode }),
      // });
      const response = await axios.post("/api/allocatesubject",{faculty,subjectCode})
      console.log(response)
      //const data = await response.json();

      if (!response.ok) {
        console.error("API Error Response:", data);
        alert(`Failed to allocate subject: ${data.error}`);
      } else {
        console.log("API Success Response:", data);
        alert("Subject allocated successfully!");
      }
    } catch (error) {
      console.error("Error allocating subject:", error);
      alert("Failed to allocate subject due to an error.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
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
      <div className="flex-grow flex items-center justify-center p-6">
        <div className="container mx-auto p-4">
          <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-2xl text-black font-bold text-center mb-6">Subject Handling</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleAllocate();
              }}
            >
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="faculty">
                  Faculty
                </label>
                <select
                  id="faculty"
                  value={faculty}
                  onChange={(e) => setFaculty(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="">Select Faculty</option>
                  {facultyList.map((fac: any) => (
                    <option key={fac.id} value={fac.id}>
                      {fac.fname}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subjectCode">
                  Subject
                </label>
                <select
                  id="subjectCode"
                  value={subjectCode}
                  onChange={(e) => setSubjectCode(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="">Select Subject</option>
                  {subjectList.map((sub: any) => (
                    <option key={sub.sub_code} value={sub.sub_code}>
                      {sub.sub_desc} ({sub.sub_code}, {sub.crhrs} credits)
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => {
                    setFaculty("");
                    setSubjectCode("");
                  }}
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Allocate
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
