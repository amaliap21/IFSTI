import React from "react";

interface DotIconProps {
  active: boolean; // Make sure this matches the expected type in your icon component
  size?: number; // Optional if you have a default size
  className?: string;
}

const DotIcon: React.FC<DotIconProps> = ({ active, size, className }) => {
  return (
    <svg
      height={size}
      width={size} // Correct the typo from widtht to width
      viewBox="0 0 10 10"
      fill="currentColor" // This allows the dot color to be changed using the `className`
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="5" cy="5" r="5" />
    </svg>
  );
};

export default DotIcon;
