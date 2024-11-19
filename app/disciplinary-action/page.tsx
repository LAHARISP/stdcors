'use client'

import Image from 'next/image'
import { useState } from 'react'

interface DisciplinaryData {
  id: number
  issuePertainingTo: string
  reprimanded: string
  actionInitiated: string
  natureOfAction: string
  date: string
}

export default function Component() {
  const [disciplinaryActions, setDisciplinaryActions] = useState<DisciplinaryData[]>([
    { id: 1, issuePertainingTo: '', reprimanded: '', actionInitiated: '', natureOfAction: '', date: '' },
    { id: 2, issuePertainingTo: '', reprimanded: '', actionInitiated: '', natureOfAction: '', date: '' },
  ])

  const handleChange = (id: number, field: keyof Omit<DisciplinaryData, 'id'>, value: string) => {
    setDisciplinaryActions((prevActions) =>
      prevActions.map((action) =>
        action.id === id ? { ...action, [field]: value } : action
      )
    )
  }

  const handleSave = () => {
    console.log('Saved Data:', disciplinaryActions)
    // Save data to a server or local storage
  }

  const handleSubmit = () => {
    console.log('Submitted Data:', disciplinaryActions)
    // Submit data to a server or database
  }

  const addDisciplinaryAction = () => {
    const newId = Math.max(...disciplinaryActions.map(a => a.id)) + 1
    setDisciplinaryActions([
      ...disciplinaryActions, 
      { id: newId, issuePertainingTo: '', reprimanded: '', actionInitiated: '', natureOfAction: '', date: '' }
    ])
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
        <h2 className="text-2xl font-bold mb-6 text-black">DISCIPLINARY ACTIONS</h2>
        <div className="w-full max-w-4xl">
          <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
            <thead>
              <tr>
                <th className="bg-blue-100 p-3 text-left text-black font-semibold border">Issue Pertaining To</th>
                <th className="bg-gray-50 p-3 text-left text-black font-semibold border">Reprimanded</th>
                <th className="bg-gray-50 p-3 text-left text-black font-semibold border">Action Initiated</th>
                <th className="bg-gray-50 p-3 text-left text-black font-semibold border">Nature of Action</th>
                <th className="bg-gray-50 p-3 text-left text-black font-semibold border">Date</th>
              </tr>
            </thead>
            <tbody>
              {disciplinaryActions.map((action) => (
                <tr key={action.id}>
                  <td className="p-3 border">
                    <input
                      type="text"
                      value={action.issuePertainingTo}
                      onChange={(e) => handleChange(action.id, 'issuePertainingTo', e.target.value)}
                      className="w-full p-1 border rounded text-black"
                      placeholder="Enter issue"
                    />
                  </td>
                  <td className="p-3 border">
                    <input
                      type="text"
                      value={action.reprimanded}
                      onChange={(e) => handleChange(action.id, 'reprimanded', e.target.value)}
                      className="w-full p-1 border rounded text-black"
                      placeholder="Enter reprimanded"
                    />
                  </td>
                  <td className="p-3 border">
                    <input
                      type="text"
                      value={action.actionInitiated}
                      onChange={(e) => handleChange(action.id, 'actionInitiated', e.target.value)}
                      className="w-full p-1 border rounded text-black"
                      placeholder="Enter action initiated"
                    />
                  </td>
                  <td className="p-3 border">
                    <input
                      type="text"
                      value={action.natureOfAction}
                      onChange={(e) => handleChange(action.id, 'natureOfAction', e.target.value)}
                      className="w-full p-1 border rounded text-black"
                      placeholder="Enter nature of action"
                    />
                  </td>
                  <td className="p-3 border">
                    <input
                      type="date"
                      value={action.date}
                      onChange={(e) => handleChange(action.id, 'date', e.target.value)}
                      className="w-full p-1 border rounded text-black"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between mt-6">
            <button
              onClick={addDisciplinaryAction}
              className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition"
            >
              Add Disciplinary Action
            </button>
            <div className="space-x-4">
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
    </div>
  )
}
