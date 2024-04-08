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
      viewBox="0 0 12 12 "
      fill={fillColor}
      className={className}
    >
      <circle cx="5" cy="5" r="5" />
    </svg>
  );
};

export default DotIcon;
