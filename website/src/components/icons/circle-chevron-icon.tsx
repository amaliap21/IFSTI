import React from "react";

interface CircleChevronIconProps {
  size: number | string; // Accept both number and string values for size
  className?: string;
}

const CircleChevronIcon: React.FC<CircleChevronIconProps> = ({
  size,
  className,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 15 16"
      fill="none" // If you want to change the fill color, use fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M7.5 0.5C3.3675 0.5 0 3.8675 0 8C0 12.1325 3.3675 15.5 7.5 15.5C11.6325 15.5 15 12.1325 15 8C15 3.8675 11.6325 0.5 7.5 0.5ZM10.545 7.4525L7.8975 10.1C7.785 10.2125 7.6425 10.265 7.5 10.265C7.3575 10.265 7.215 10.2125 7.1025 10.1L4.455 7.4525C4.2375 7.235 4.2375 6.875 4.455 6.6575C4.6725 6.44 5.0325 6.44 5.25 6.6575L7.5 8.9075L9.75 6.6575C9.9675 6.44 10.3275 6.44 10.545 6.6575C10.7625 6.875 10.7625 7.2275 10.545 7.4525Z" />
    </svg>
  );
};

export default CircleChevronIcon;