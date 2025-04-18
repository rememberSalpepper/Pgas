import React from 'react'

// Usamos `type` en lugar de `interface`
type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input: React.FC<InputProps> = ({ className = '', ...props }) => {
  return (
    <input
      className={`px-4 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-blue-500 ${className}`}
      {...props}
    />
  )
}
