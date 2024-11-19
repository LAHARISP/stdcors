import Image from 'next/image'
import Link from 'next/link'

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
          </div>
          </header>
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
       

      {/* Dashboard Content */}
      <main className="flex-1 container mx-auto px-4 py-8">
        <h2 className="text-3xl text-black font-bold text-center mb-12">MENTOR DASHBOARD</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          
           
                 <Link href="/student-details">
              <button 
                className="w-full py-6 px-4 text-base font-medium text-white rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-colors"
              >
                            STUDENT DETAILS

              </button></Link>
                
                
                <Link href="/technical-events">
              <button 
                className="w-full py-6 px-4 text-base font-medium text-white rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-colors"
              >
              TECHNICAL EVENTS

              </button></Link>
              
              <Link href="/extra-curricular"><button 
                className="w-full py-6 px-4 text-base font-medium text-white rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-colors"
              >
                  EXTRA CURRICULAR
              </button></Link>
              
              
              <Link href="/disciplinary-action">
              <button 
                className="w-full py-6 px-4 text-base font-medium text-white rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-colors"
              >
                 DISCIPLINARY ACTIONS
              </button></Link>
              
              
              <Link href="/councelling">
              <button 
                className="w-full py-6 px-4 text-base font-medium text-white rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-colors"
              >
                      COUNSELLING
              </button></Link>


              <Link href="/course-reg">
              <button 
                className="w-full py-6 px-4 text-base font-medium text-white rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-colors"
              >
                    COURSE-REGISTRATION
              </button></Link>
              
              <Link href="/results">
              <button 
                className="w-full py-6 px-4 text-base font-medium text-white rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-colors"
              >
                      RESULT
              </button></Link>

              
              <Link href="/fee-details">
              <button 
                className="w-full py-6 px-4 text-base font-medium text-white rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-colors"
              >
                      FEE-DETAILS
              </button></Link>

            
        
        </div>
      </main>
    </div>
  )
}