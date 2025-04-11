import React from "react";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  // Add custom props here if needed
  customProp?: string;
}

export const Textarea = (props: TextareaProps) => {
  return (
    <textarea
      {...props}
      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
};