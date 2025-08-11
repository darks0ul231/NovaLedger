import React from "react";
import { cn } from "@/lib/utils"; // optional: helper to merge Tailwind classes

type ButtonVariant = "primary" | "secondary" | "danger" | "outline";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-blue-600 text-white hover:bg-blue-700",
  secondary: "bg-gray-600 text-white hover:bg-gray-700",
  danger: "bg-red-600 text-white hover:bg-red-700",
  outline: "border border-gray-400 text-gray-700 hover:bg-gray-100",
}

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "px-4 py-2 rounded-lg font-medium transition-colors duration-200",
        variantStyles[variant],
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      {label}
    </button>
  );
};
