import React from "react";

interface ChevronIconProps {
  className?: string;
  size?: number;
}

const ChevronIcon: React.FC<ChevronIconProps> = ({ className, size }) => {
  return (
    <svg
      width="16"
      height="31"
      viewBox="0 0 16 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M2 28.7812L13.0236 17.7576C14.3255 16.4558 14.3255 14.3254 13.0236 13.0236L2 2"
        strokeWidth="4"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ChevronIcon;
