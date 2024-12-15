import React from 'react'

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea: React.FC<TextareaProps> = ({ className, ...props }) => {
  return (
    <textarea
      className={`px-4 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-blue-500 ${className}`}
      {...props}
    />
  )
}
