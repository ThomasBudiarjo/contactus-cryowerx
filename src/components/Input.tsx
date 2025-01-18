import React, { useState } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  error?: string;
  textarea?: boolean;
}

const Input: React.FC<InputProps> = ({ label, error, textarea, className, value, defaultValue, ...props }) => {
  const Component = textarea ? 'textarea' : 'input';
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState(value || defaultValue || '');
  
  const isActive = isFocused || inputValue.toString().length > 0;
  
  return (
    <div className="flex flex-col gap-1 w-full">
      <label className={`text-base font-medium transition-all ${isActive ? 'text-slate-800 dark:text-[#fbfbfb]' : 'text-gray-400 dark:text-gray-500'}`}>
        {label}
      </label>
      <Component
        className={`w-full pb-2 bg-transparent 
        border-b border-gray-300 dark:border-gray-500 
        text-gray-900 dark:text-white text-base
        focus:border-b-2 focus:border-slate-400 dark:focus:border-[#fbfbfb]
        outline-none transition-all cursor-pointer
        placeholder:text-sm placeholder:text-gray-400 pt-2
        ${error ? 'border-red-500' : ''} 
        ${className || ''}`}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={(e) => {
          setInputValue(e.target.value);
          props.onChange?.(e);
        }}
        value={inputValue}
        defaultValue={defaultValue}
        {...props}
      />
      {error && (
        <span className="text-sm text-red-500 mt-1">{error}</span>
      )}
    </div>
  );
};

export default Input;