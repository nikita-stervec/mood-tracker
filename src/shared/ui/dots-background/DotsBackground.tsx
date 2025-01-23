import React from 'react';

export const DotsBackground = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      style={{ position: 'absolute', top: 0, left: 0 }}
    >
      <pattern
        id="dots"
        x="0"
        y="0"
        width="12"
        height="12"
        patternUnits="userSpaceOnUse"
      >
        {/* Используем CSS-переменную для заливки кружков */}
        <circle cx="5" cy="5" r="1" fill="var(--dots-color)" />
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#dots)" />
    </svg>
  );
};
