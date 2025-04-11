import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  // Add custom props here if needed
  customProp?: string;
}

export const Input = (props: InputProps) => {
  return (
    <input
      {...props}
      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
};