import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  type: string;
  onClick: MouseEventHandler<HTMLButtonElement> & void;
  children: React.ReactNode;
  icon?: React.ReactNode;
};

const Button = ({ type, onClick, children, ...props }: ButtonProps) => (
  <button
    className="font-nunito bg-red-400 text-white px-6 py-2 rounded-2xl laptop:text-md tablet:text-sm phone:text-xs phone:px-4 phone:py-1.5"
    onClick={onClick}
    type={type || "button"}
    {...props}>
    {children}
  </button>
);

export default Button;
