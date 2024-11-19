'use client'

import Image from 'next/image'
import { useState } from 'react'

interface ActivityData {
  id: number
  category: 'SPORTS' | 'NSS' | 'OTHER ACTIVITY'
  activity: string
  date: string
  award: string
}

export default function Component() {
  const [activities, setActivities] = useState<ActivityData[]>([
    { id: 1, category: 'SPORTS', activity: '', date: '', award: '' },
    { id: 2, category: 'SPORTS', activity: '', date: '', award: '' },
    { id: 3, category: 'NSS', activity: '', date: '', award: '' },
    { id: 4, category: 'NSS', activity: '', date: '', award: '' },
    { id: 5, category: 'OTHER ACTIVITY', activity: '', date: '', award: '' },
    { id: 6, category: 'OTHER ACTIVITY', activity: '', date: '', award: '' },
  ])

  const handleChange = (id: number, field: keyof Omit<ActivityData, 'id' | 'category'>, value: string) => {
    setActivities((prevActivities) =>
      prevActivities.map((activity) =>
        activity.id === id ? { ...activity, [field]: value } : activity
      )
    )
  }

  const handleSave = () => {
    console.log('Saved Data:', activities)
    // Here, you would typically save the data to a server or local storage
  }
  const handleSubmit = () => {
    console.log('Submitted Data:', event)
    // Here, you would typically submit the data to a server or database
  }

  const addActivity = (category: ActivityData['category']) => {
    const newId = Math.max(...activities.map(a => a.id)) + 1
    setActivities([...activities, { id: newId, category, activity: '', date: '', award: '' }])
  }

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
              <p className="text-sm opacity-90">Outer Ring Road, Malathahalli, Bengaluru-560056, Karnataka, India</p>
            </div>
          </div>
        </div>
      </header>

      <div className="flex-grow flex flex-col items-center p-6">
        <h2 className="text-2xl font-bold mb-6 text-black">EXTRA CURRICULAR</h2>
        <div className="w-full max-w-4xl">
          <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
            <thead>
              <tr>
                <th className="bg-blue-100 p-3 text-left text-black font-semibold border">Category</th>
                <th className="bg-gray-50 p-3 text-left text-black font-semibold border">Activity</th>
                <th className="bg-gray-50 p-3 text-left text-black font-semibold border">Date</th>
                <th className="bg-gray-50 p-3 text-left text-black font-semibold border">Award/Certificate</th>
              </tr>
            </thead>
            <tbody>
              {activities.map((activity) => (
                <tr key={activity.id}>
                  <td className="bg-blue-50 p-3 border text-black">{activity.category}</td>
                  <td className="p-3 border">
                    <input
                      type="text"
                      value={activity.activity}
                      onChange={(e) => handleChange(activity.id, 'activity', e.target.value)}
                      className="w-full p-1 border rounded text-black"
                      placeholder="Enter activity"
                    />
                  </td>
                  <td className="p-3 border">
                    <input
                      type="date"
                      value={activity.date}
                      onChange={(e) => handleChange(activity.id, 'date', e.target.value)}
                      className="w-full p-1 border rounded text-black"
                    />
                  </td>
                  <td className="p-3 border">
                    <input
                      type="text"
                      value={activity.award}
                      onChange={(e) => handleChange(activity.id, 'award', e.target.value)}
                      className="w-full p-1 border rounded text-black"
                      placeholder="Enter award/certificate"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between mt-6">
            <div className="space-x-4">
              <button
                onClick={() => addActivity('SPORTS')}
                className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition"
              >
                Add Sports
              </button>
              <button
                onClick={() => addActivity('NSS')}
                className="px-4 py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600 transition"
              >
                Add NSS
              </button>
              <button
                onClick={() => addActivity('OTHER ACTIVITY')}
                className="px-4 py-2 bg-purple-500 text-white font-semibold rounded hover:bg-purple-600 transition"
              >
                Add Other Activity
              </button>
            </div>
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
    </div>
  )
}