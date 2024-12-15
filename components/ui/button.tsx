import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'ghost' | 'outline'; // Variantes disponibles
  size?: 'sm' | 'md' | 'lg'; // Tamaños disponibles
  className?: string; // Clases personalizadas
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'default', // Valor predeterminado
  size = 'md', // Valor predeterminado
  className = '',
  children,
  ...props
}) => {
  const variantClasses = {
    default: 'bg-blue-500 text-white hover:bg-blue-600',
    ghost: 'bg-transparent text-blue-500 hover:bg-blue-100',
    outline: 'border border-blue-500 text-blue-500 hover:bg-blue-100',
  };

  const sizeClasses = {
    sm: 'px-2 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  // Concatenar las clases finales
  const combinedClasses = `rounded ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};
