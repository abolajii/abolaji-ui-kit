// Loading Spinner Component
import React from "react";

type LoadingSpinnerProps = {
  size?: "small" | "medium" | "large" | "xl";
  variant?: "primary" | "white" | "gray";
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = "medium",
  variant = "primary",
  className = "",
  ...props
}) => {
  const sizes: Record<NonNullable<LoadingSpinnerProps["size"]>, string> = {
    small: "w-4 h-4",
    medium: "w-6 h-6",
    large: "w-8 h-8",
    xl: "w-12 h-12",
  };

  const variants: Record<
    NonNullable<LoadingSpinnerProps["variant"]>,
    string
  > = {
    primary: "text-blue-500",
    white: "text-white",
    gray: "text-gray-500",
  };

  return (
    <div className={`inline-block ${className}`} {...props}>
      <svg
        className={`animate-spin ${sizes[size]} ${variants[variant]}`}
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    </div>
  );
};
