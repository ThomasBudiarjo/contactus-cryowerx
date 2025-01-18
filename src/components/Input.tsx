import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  error?: string;
  textarea?: boolean;
}

const Input: React.FC<InputProps> = ({ label, error, textarea, className, ...props }) => {
  const Component = textarea ? 'textarea' : 'input';
  
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}
      </label>
      <Component
        className={`w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-800 
        border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white
        focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent
        outline-none transition-colors ${error ? 'border-red-500' : ''} ${className || ''}`}
        {...props}
      />
      {error && (
        <span className="text-sm text-red-500">{error}</span>
      )}
    </div>
  );
};

export default Input;
