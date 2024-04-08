import React from "react";

interface DotIconProps {
  active: boolean;
  size?: number;
  className?: string;
}

const DotIcon: React.FC<DotIconProps> = ({
  active,
  size = 10,
  className = "",
}) => {
  const fillColor = active ? "#000" : "#ddd";

  return (
    <svg
      height={size}
      width={size}
      viewBox="0 0 8 8 "
      fill={fillColor}
      className={className}
    >
      <circle cx="10" cy="10" r="20" />
    </svg>
  );
};

export default DotIcon;
