import React, { useState } from 'react'

export default function UserMenu({ userName = "User", onLogout }) {
  const [isOpen, setIsOpen] = useState(false)
  const firstLetter = userName.charAt(0).toUpperCase()

  return (
    <div className="relative">
      <div
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className="w-10 h-10 bg-indigo-600 text-white flex items-center justify-center rounded-full font-bold cursor-pointer"
      >
        {firstLetter}
      </div>

      {isOpen && (
        <div
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow-lg z-50"
        >
          <ul className="flex flex-col text-sm">
            <li>
              <button
                className="w-full text-left px-4 py-2 hover:bg-indigo-50"
                onClick={() => alert("Add Blog")}
              >
                ➕ Add Blog
              </button>
            </li>
            <li>
              <button
                className="w-full text-left px-4 py-2 hover:bg-indigo-50"
                onClick={() => alert("Update Blog")}
              >
                ✏️ Update Blog
              </button>
            </li>
            <li>
              <button
                className="w-full text-left px-4 py-2 hover:bg-red-100 text-red-600"
                onClick={() => alert("Delete Blog")}
              >
                🗑️ Delete Blog
              </button>
            </li>
            <li>
              <button
                className="w-full text-left px-4 py-2 hover:bg-gray-100"
                onClick={onLogout}
              >
                🚪 Logout
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}
