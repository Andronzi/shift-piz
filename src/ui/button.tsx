import React, { ButtonHTMLAttributes, MouseEventHandler } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  type: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | void;
  children: React.ReactNode;
  icon?: React.ReactNode;
};

const Button = ({
  type,
  className,
  onClick,
  children,
  ...props
}: ButtonProps) => (
  <button
    className={`rounded-2xl bg-red-400 px-6 py-2 font-nunito text-white phone:px-4 phone:py-1.5 phone:text-xs tablet:text-sm laptop:text-md ${className} `}
    onClick={onClick}
    type={type || "button"}
    {...props}>
    {children}
  </button>
);

export default Button;
