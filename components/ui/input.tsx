import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<InputProps> = ({ className = '', ...props }) => {
  return (
    <input
      className={`px-4 py-2 rounded border border-gray-700 bg-gray-800 text-gray-100 focus:ring-2 focus:ring-blue-500 ${className}`}
      {...props}
    />
  )
}
