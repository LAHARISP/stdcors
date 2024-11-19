"use client"; // Ensures this is a client component for hooks

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function SubjectManagement() {
  const [subjects, setSubjects] = useState([]);
  // const [academicYear, setAcademicYear] = useState('');
  const [branch, setBranch] = useState('');
  const [subjectType, setSubjectType] = useState('');
  const [subjectCode, setSubjectCode] = useState('');
  const [subjectName, setSubjectName] = useState('');
  const [credits, setCredits] = useState('');

  // Fetch subjects from the database when the component loads
  useEffect(() => {
    async function fetchSubjects() {
      // Replace '/api/subjects' with your actual API route
      const response = await fetch('/api/courseregstud');
      const data = await response.json();
      console.log(data);
      setSubjects(data);
    }
    fetchSubjects();
  }, []);

  // Handle adding a new subject
  const handleAddSubject = async () => {
    const newSubject = {  branch, subjectType, subjectCode, subjectName, credits };
    
    // Save the new subject to the database
    await fetch('/api/subjects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newSubject),
    });

    // Update the table data after adding
    setSubjects([...subjects, newSubject]);

    // Reset form fields
    // setAcademicYear('');
    setBranch('');
    setSubjectType('');
    setSubjectCode('');
    setSubjectName('');
    setCredits('');
  };

  // Handle submit button (optional if you want separate functionality)
  const handleSubmit = async () => {
    // Add any additional logic for submit here
    handleAddSubject();
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

      {/* Subject Management Content */}
      <main className="flex-1 container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">SUBJECT MAPPING</h2>
        
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          {/* Dropdowns */}
          {/* <select 
            value={academicYear} 
            onChange={(e) => setAcademicYear(e.target.value)}
            className="w-48 py-2 px-4 rounded-full bg-gray-200 text-gray-800 focus:outline-none"
          >
            <option value="">Academic Year</option>
            <option value="2023-24">2023-24</option>
            <option value="2024-25">2024-25</option>
            {/* Add more options here 
          </select> */}
          <select 
            value={branch} 
            onChange={(e) => setBranch(e.target.value)}
            className="w-48 py-2 px-4 rounded-full bg-gray-200 text-gray-800 focus:outline-none"
          >
            <option value="">Branch</option>
            <option value="CSE">Computer Science</option>
            <option value="ECE">Electronics</option>
            {/* Add more branches here */}
          </select>
          <select 
            value={subjectType} 
            onChange={(e) => setSubjectType(e.target.value)}
            className="w-48 py-2 px-4 rounded-full bg-gray-200 text-gray-800 focus:outline-none"
          >
            <option value="">Subject Type</option>
            <option value="Core">Core</option>
            <option value="Elective">Elective</option>
          </select>
          <select 
            value={subjectCode} 
            onChange={(e) => setSubjectCode(e.target.value)}
            className="w-48 py-2 px-4 rounded-full bg-gray-200 text-gray-800 focus:outline-none"
          >
            <option value="">Subject Code</option>
            <option value="CS101">CS101</option>
            <option value="ECE202">ECE202</option>
            {/* Add more subject codes here */}
          </select>
          <select 
            value={subjectName} 
            onChange={(e) => setSubjectName(e.target.value)}
            className="w-48 py-2 px-4 rounded-full bg-gray-200 text-gray-800 focus:outline-none"
          >
            <option value="">Subject Name</option>
            <option value="Data Structures">Data Structures</option>
            <option value="Microprocessors">Microprocessors</option>
            {/* Add more subject names here */}
          </select>
          <select 
            value={credits} 
            onChange={(e) => setCredits(e.target.value)}
            className="w-48 py-2 px-4 rounded-full bg-gray-200 text-gray-800 focus:outline-none"
          >
            <option value="">Credits</option>
            <option value="3">3</option>
            <option value="4">4</option>
            {/* Add more credit options here */}
          </select>
        </div>

        {/* Add and Submit Buttons */}
        <div className="flex justify-center gap-4 mb-6">
          <button 
            onClick={handleAddSubject}
            className="py-2 px-6 text-base font-medium text-white rounded-full bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            ADD
          </button>
          
        </div>

        {/* Subjects Table */}
        <table className="w-full max-w-3xl mx-auto bg-white rounded-md overflow-hidden shadow-lg text-gray-800">
          <thead className="bg-gray-200">
            <tr>
              {/* //<th className="py-3 px-4 text-gray-800">Academic Year</th> */}
              <th className="py-3 px-4 text-gray-800">Branch</th>
              <th className="py-3 px-4 text-gray-800">Subject Type</th>
              <th className="py-3 px-4 text-gray-800">Subject Code</th>
              <th className="py-3 px-4 text-gray-800">Subject Name</th>
              <th className="py-3 px-4 text-gray-800">Credits</th>
            </tr>
          </thead>
          <tbody>
            {subjects.map((subject, index) => (
              <tr key={index} className="border-b">
                {/* <td className="py-3 px-4 text-center">{subject.academicYear}</td> */}
                <td className="py-3 px-4 text-center">{subject.branch}</td>
                <td className="py-3 px-4 text-center">{subject.SUBJECT_TYPE}</td>
                <td className="py-3 px-4 text-center">{subject.sub_codee}</td>
                <td className="py-3 px-4 text-center">{subject.sub_desc}</td>
                <td className="py-3 px-4 text-center">{subject.crhrs}</td>
              </tr>
            ))}
          </tbody>
        </table>
       
        <button 
            onClick={handleSubmit}
            className="py-2 px-6 text-base font-medium text-white rounded-full bg-green-600 item-center hover:bg-green-700 transition-colors"
          >
            SUBMIT
          </button>
          
      </main>
    </div>
  );
}


// "use client"; // Ensures this is a client component for hooks

// import Image from 'next/image';
// import { useEffect, useState } from 'react';

// export default function SubjectManagement() {
//   const [subjects, setSubjects] = useState([]);
//   const [dropdownOptions, setDropdownOptions] = useState([]);
//   const [branch, setBranch] = useState('');
//   const [subjectType, setSubjectType] = useState('');
//   const [subjectCode, setSubjectCode] = useState('');
//   const [subjectName, setSubjectName] = useState('');
//   const [credits, setCredits] = useState('');

//   // Fetch subjects from the database when the component loads
//   useEffect(() => {
//     async function fetchSubjects() {
//       const response = await fetch('/api/courseregstud');
//       const data = await response.json();
//       console.log(data);
//       setSubjects(data);
//     }
//     fetchSubjects();
//   }, []);

//   // Handle adding a new subject
//   const handleAddSubject = async () => {
//     if (!branch || !subjectType || !subjectCode || !subjectName || !credits) {
//       alert('Please fill in all fields');
//       return;
//     }

//     const newSubject = { branch, subjectType, subjectCode, subjectName, credits };

//     // Add to table data
//     setSubjects([...subjects, newSubject]);

//     // Update dropdown options
//     setDropdownOptions((prevOptions) => [
//       ...prevOptions,
//       { sub_code, sub_desc, crhrs},
//     ]);

//     // Reset form fields
//     setBranch('');
//     setSubjectType('');
//     setSubjectCode('');
//     setSubjectName('');
//     setCredits('');
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-gray-100">
//       {/* Header */}
//       <header className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white">
//         <div className="container mx-auto px-4 py-4 flex items-center justify-between">
//           <div className="flex items-center gap-4">
//             <Image
//               src="/DRAIT.jpg"
//               alt="Institute Logo"
//               width={60}
//               height={60}
//               className="rounded-full"
//             />
//             <div className="flex flex-col">
//               <h1 className="text-xl font-bold">Dr. AMBEDKAR INSTITUTE OF TECHNOLOGY</h1>
//               <p className="text-sm opacity-90">Outer Ring Road, Malathahalli, Bengaluru-560056, Karnataka, India</p>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Subject Management Content */}
//       <main className="flex-1 container mx-auto px-4 py-8">
//         <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">SUBJECT MAPPING</h2>

//         <div className="flex flex-wrap gap-4 justify-center mb-8">
//           {/* Dropdowns */}
//           <select
//             value={branch}
//             onChange={(e) => setBranch(e.target.value)}
//             className="w-48 py-2 px-4 rounded-full bg-gray-200 text-gray-800 focus:outline-none"
//           >
//             <option value="">Branch</option>
//             <option value="CSE">Computer Science</option>
//             <option value="ECE">Electronics</option>
//           </select>
//           <select
//             value={subjectType}
//             onChange={(e) => setSubjectType(e.target.value)}
//             className="w-48 py-2 px-4 rounded-full bg-gray-200 text-gray-800 focus:outline-none"
//           >
//             <option value="">Subject Type</option>
//             <option value="Core">Core</option>
//             <option value="Elective">Elective</option>
//           </select>
//           <input
//             type="text"
//             value={subjectCode}
//             onChange={(e) => setSubjectCode(e.target.value)}
//             placeholder="Subject Code"
//             className="w-48 py-2 px-4 rounded-full bg-gray-200 text-gray-800 focus:outline-none"
//           />
//           <input
//             type="text"
//             value={subjectName}
//             onChange={(e) => setSubjectName(e.target.value)}
//             placeholder="Subject Name"
//             className="w-48 py-2 px-4 rounded-full bg-gray-200 text-gray-800 focus:outline-none"
//           />
//           <select
//             value={credits}
//             onChange={(e) => setCredits(e.target.value)}
//             className="w-48 py-2 px-4 rounded-full bg-gray-200 text-gray-800 focus:outline-none"
//           >
//             <option value="">Credits</option>
//             <option value="3">3</option>
//             <option value="4">4</option>
//           </select>
//         </div>

//         {/* Add Button */}
//         <div className="flex justify-center gap-4 mb-6">
//           <button
//             onClick={handleAddSubject}
//             className="py-2 px-6 text-base font-medium text-white rounded-full bg-blue-600 hover:bg-blue-700 transition-colors"
//           >
//             ADD
//           </button>
//         </div>

//         {/* Subjects Table */}
//         <table className="w-full max-w-3xl mx-auto bg-white rounded-md overflow-hidden shadow-lg text-gray-800">
//           <thead className="bg-gray-200">
//             <tr>
//               <th className="py-3 px-4 text-gray-800">Branch</th>
//               <th className="py-3 px-4 text-gray-800">Subject Type</th>
//               <th className="py-3 px-4 text-gray-800">Subject Code</th>
//               <th className="py-3 px-4 text-gray-800">Subject Name</th>
//               <th className="py-3 px-4 text-gray-800">Credits</th>
//             </tr>
//           </thead>
//           <tbody>
//             {subjects.map((subject, index) => (
//               <tr key={index} className="border-b">
//                 <td className="py-3 px-4 text-center">{subject.branch}</td>
//                 <td className="py-3 px-4 text-center">{subject.SUBJECT_TYPE}</td>
//                 <td className="py-3 px-4 text-center">{subject.suB_CODE}</td>
//                 <td className="py-3 px-4 text-center">{subject.sub_DESC}</td>
//                 <td className="py-3 px-4 text-center">{subject.crhrs}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </main>
//     </div>
//   );
// }

