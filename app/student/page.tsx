import Image from 'next/image';
import Link from 'next/link';

export default function StudentDashboard() {
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

      {/* Student Dashboard Content */}
      <main className="flex-1 container mx-auto px-4 py-8">
        <h2 className="text-3xl text-black font-bold text-center mb-12">STUDENT DASHBOARD</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <Link href="/results">
            <button 
              className="w-full py-6 px-4 text-base font-medium text-white rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-colors"
            >
              RESULT
            </button>
          </Link>

          <Link href="/course_reg_student">
            <button 
              className="w-full py-6 px-4 text-base font-medium text-white rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-colors"
            >
              COURSE REGISTERED
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
