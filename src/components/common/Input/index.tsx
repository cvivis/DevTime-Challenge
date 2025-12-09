import { error } from "console";
import React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isError?: boolean;
}
export const TextFieldInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ isError, className = "", ...rest }, ref) => {
    const baseStyle = `w-full[120px] h-full[44px] box-border px-4 py-3 rounded-[5px]
        bg-gray-50
        text-gray-400,
        focus:text-gray-600,
        placeholder:text-gray-300,
        outline-none border border-transparent transition-colors duration-200
        
        `;
    const errorStyle = isError
      ? `border-red-500 focus:border-red-500 bg-red-50 text-red-900 placeholder:text-red-300`
      : ``;
    return <input ref={ref} className={`${baseStyle} ${errorStyle}`} {...rest}></input>;
  }
);

// TextFieldInput.displayName = "TextFieldInput";
