'use client'

import React from 'react'

interface InputDisabledProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
}

export default function InputDisabled({
  label,
  className = '',
  ...props
}: InputDisabledProps) {
  return (
    <div className="space-y-2">
  
      <label className="text-sm font-medium text-[#013941]">
        {label}
      </label>

   
      <input
        {...props}
        disabled
        className={`
          w-full
          bg-gray-100
          border
          border-gray-200
          rounded-xl
          p-4
          text-sm
          font-medium
          text-[#828282]
          cursor-not-allowed
          outline-none
          placeholder:text-gray-500
          ${className}
        `}
      />
    </div>
  )
}
