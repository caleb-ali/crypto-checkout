import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
}

export default function Button({ 
  children, 
  className = '', 
  variant = 'primary',
  disabled,
  ...props 
}: ButtonProps) {
  const baseStyles =
    'px-6 py-4 rounded-full font-medium text-sm transition-all'

  const variants = {
    primary:
      'bg-[#013941] text-white hover:bg-[#024951] active:scale-95',
    secondary:
      'bg-gray-100 text-gray-900 hover:bg-gray-200',
  }

  const disabledStyles =
    'opacity-50 cursor-not-allowed hover:bg-[#013941] active:scale-100'

  return (
    <button
      disabled={disabled}
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${disabled ? disabledStyles : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  )
}
