'use client'

import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
}

export default function Input({
  label,
  className = '',
  ...props
}: InputProps) {
  return (
    <div className="space-y-2">
   
      <label className="text-sm font-medium text-[#013941]">
        {label}
      </label>

      
      <input
        {...props}
        className={`
          w-full
          bg-white
          border
          border-gray-200
          rounded-xl
          p-4
          text-sm
          font-medium
          text-[#828282]
          outline-none
          transition-colors
          focus:border-gray-300
          placeholder:text-gray-500
          ${className}
        `}
      />
    </div>
  )
}
