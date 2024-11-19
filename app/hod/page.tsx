"use client"
import Image from 'next/image';
import Link from 'next/link';

export default function Component() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
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
              <p className="text-sm opacity-90">Outer Ring Road, Malathahalli, Bengaluru-560056, Karnataka, India</p>
            </div>
          </div>
          {/*<div className="flex items-center gap-2">
            <span className="font-medium">DR. Abc</span>
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
          </div>*/}
        </div>
      </header>

      {/* Dashboard Content */}
      <main className="flex-1 container mx-auto px-4 py-8">
        <h2 className="text-3xl text-black font-bold text-center mb-12">HOD DASHBOARD</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          
           <Link href="\mentor-student">
              <button 
                className="w-full py-6 px-4 text-base font-medium text-white rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-colors"
              >
                            STUDENT-MENTOR-ALLOCATION

              </button></Link>


<Link href="/subject-mapping">
              <button 
                className="w-full py-6 px-4 text-base font-medium text-white rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-colors"
              >
              SUBJECT-MAPPING

              </button></Link>
              
              <Link href= "/subject-handling"> 
              <button 
                className="w-full py-6 px-4 text-base font-medium text-white rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-colors"
              >
                  SUBJECT-HANDLING
              </button></Link>
              <Link href="/alumini" >    <button 
                className="w-full py-6 px-4 text-base font-medium text-white rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-colors"
              >
                    ALUMINI
              </button></Link>     
              

            
        
        </div>
      </main>
    </div>
  )
}