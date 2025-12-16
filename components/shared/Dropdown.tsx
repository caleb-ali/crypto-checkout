'use client'

import { useState } from 'react'

interface DropdownOption {
  id: string
  name: string
  icon?: string
}

interface DropdownProps {
  label: string
  options: DropdownOption[]
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

export default function Dropdown({
  label,
  options,
  value,
  onChange,
  placeholder = 'Select an option',
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  
  const selectedOption = options.find((opt) => opt.id === value)

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-[#013941]">{label}</label>
      
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between text-[#828282] bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-300 transition-colors text-left"
        >
          {selectedOption ? (
            <div className="flex items-center gap-3 ">
              {selectedOption.icon && <span className="text-lg">{selectedOption.icon}</span>}
              <span className="text-sm font-medium text-[#828282]">{selectedOption.name}</span>
            </div>
          ) : (
            <span className="text-sm text-gray-500">{placeholder}</span>
          )}
          
          <svg
            className={`w-5 h-5 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isOpen && (
          <>
            <div
              className="fixed inset-0 z-10"
              onClick={() => setIsOpen(false)}
            />
            <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg z-20 overflow-hidden">
              {options.map((option) => (
                <button
                  key={option.id}
                  onClick={() => {
                    onChange(option.id)
                    setIsOpen(false)
                  }}
                  className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors text-left text-[#828282]"
                >
                  {option.icon && <span className="text-lg">{option.icon}</span>}
                  <span className="text-sm font-medium">{option.name}</span>
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}