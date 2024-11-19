'use client'

import Image from 'next/image'
import React, { useState } from 'react'

interface EventData {
  id: number
  counselling: string
  date: string
}

const CounsellingEvents: React.FC = () => {
  const [events, setEvents] = useState<EventData[]>([
    { id: 1, counselling: '', date: '' },
    { id: 2, counselling: '', date: '' },
    { id: 3, counselling: '', date: '' },
    { id: 4, counselling: '', date: '' },
  ])

  const handleChange = (id: number, field: keyof EventData, value: string) => {
    setEvents((prevEvents) =>
      prevEvents.map((event) =>
        event.id === id ? { ...event, [field]: value } : event
      )
    )
  }

  const handleSave = () => {
    console.log('Saved Data:', events)
    // Here, you would typically save the data to a server or local storage
  }

  const handleSubmit = () => {
    console.log('Submitted Data:', events)
    // Here, you would typically submit the data to a server or database
  }
  


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

      {/* Main content */}
      <div className="flex-grow flex flex-col items-center p-6">
        <h3 className="text-xl text-black font-bold my-4">COUNSELLING EVENTS</h3>
        <table className="w-full max-w-4xl border border-gray-300 rounded-lg bg-white shadow-md">
          <thead>
            <tr className="bg-blue-400">
              <th className="p-2 border border-gray-300">SL NO</th>
              <th className="p-2 border border-gray-300">PARTICULARS</th>
              <th className="p-2 border border-gray-300">DATE</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event, index) => (
              <tr key={event.id}>
                <td className="p-2 border border-gray-800 text-center">{index + 1}</td>
                <td className="p-2 border border-gray-800">
                  <input
                    type="text"
                    value={event.counselling}
                    onChange={(e) => handleChange(event.id, 'counselling', e.target.value)}
                    className="w-full p-1 border border-gray-800 rounded text-black"
                  />
                </td>
                <td className="p-2 border border-gray-800">
                  <input
                    type="date"
                    value={event.date}
                    onChange={(e) => handleChange(event.id, 'date', e.target.value)}
                    className="w-full p-1 border border-gray-800 rounded text-black"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex gap-4 mt-4">
          <button
            onClick={handleSave}
            className="px-6 py-2 bg-green-600 text-white font-semibold rounded hover:bg-green-700 transition"
          >
            SAVE
          </button>
          <button
            onClick={handleSubmit}
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
          >
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  )
}

export default CounsellingEvents
