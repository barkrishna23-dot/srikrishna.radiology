import React from 'react';

interface SkLogoProps {
  className?: string;
  size?: number;
}

export const SkLogo: React.FC<SkLogoProps> = ({ className = '', size = 52 }) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center select-none shrink-0 ${className}`}
      style={{ width: size, height: size }}
      role="img"
      aria-label="SK Logo"
    >
      <svg
        viewBox="0 0 200 200"
        width={size}
        height={size}
        className="w-full h-full drop-shadow-md"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Circular Rainbow Border Gradient */}
          <linearGradient id="skRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FACC15" />
            <stop offset="25%" stopColor="#42D8D5" />
            <stop offset="50%" stopColor="#3B82F6" />
            <stop offset="75%" stopColor="#E44CA5" />
            <stop offset="100%" stopColor="#FF873B" />
          </linearGradient>

          {/* S Letter Gradient: Coral & Turquoise mix */}
          <linearGradient id="sLetterGrad" x1="20%" y1="10%" x2="80%" y2="90%">
            <stop offset="0%" stopColor="#42D8D5" />
            <stop offset="35%" stopColor="#5EEAD4" />
            <stop offset="55%" stopColor="#FF6B4A" />
            <stop offset="100%" stopColor="#FF873B" />
          </linearGradient>

          {/* K Letter Gradient: Turquoise / Cyan with depth */}
          <linearGradient id="kLetterGrad" x1="10%" y1="0%" x2="90%" y2="100%">
            <stop offset="0%" stopColor="#2DD4BF" />
            <stop offset="50%" stopColor="#42D8D5" />
            <stop offset="100%" stopColor="#0EA5E9" />
          </linearGradient>

          {/* Background Mesh Gradient */}
          <radialGradient id="skBgRadial" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1E1642" />
            <stop offset="85%" stopColor="#0D1127" />
            <stop offset="100%" stopColor="#070A18" />
          </radialGradient>
        </defs>

        {/* Outer circular background */}
        <circle cx="100" cy="100" r="95" fill="url(#skBgRadial)" />

        {/* Outer Multi-color Ring */}
        <circle
          cx="100"
          cy="100"
          r="92"
          stroke="url(#skRingGrad)"
          strokeWidth="6"
          fill="none"
        />

        {/* Fine inner accent ring */}
        <circle
          cx="100"
          cy="100"
          r="86"
          stroke="rgba(66, 216, 213, 0.25)"
          strokeWidth="1.5"
          fill="none"
        />

        {/* Textured mesh lines inside background */}
        <path
          d="M30 60 Q 100 40 170 60 M25 100 Q 100 80 175 100 M30 140 Q 100 120 170 140"
          stroke="rgba(255, 255, 255, 0.05)"
          strokeWidth="1"
          strokeDasharray="2 3"
        />

        {/* 'S' Letter Graphic */}
        <path
          d="M 50 78 C 50 60, 64 50, 84 50 C 98 50, 108 55, 114 62 L 98 75 C 94 70, 89 67, 82 67 C 73 67, 68 71, 68 77 C 68 83, 72 86, 85 91 L 93 94 C 111 101, 118 109, 118 122 C 118 139, 104 150, 82 150 C 66 150, 52 143, 44 133 L 60 120 C 66 127, 73 132, 82 132 C 92 132, 98 127, 98 120 C 98 114, 94 110, 81 105 L 72 101 C 55 94, 50 87, 50 78 Z"
          fill="url(#sLetterGrad)"
        />

        {/* 'K' Letter Graphic */}
        <g fill="url(#kLetterGrad)">
          {/* Vertical Stem */}
          <path d="M 115 52 L 134 52 L 134 148 L 115 148 Z" />
          {/* Upper Diagonal Arm */}
          <path d="M 130 102 L 158 52 L 178 52 L 144 108 Z" />
          {/* Lower Diagonal Leg */}
          <path d="M 137 98 L 176 148 L 154 148 L 124 108 Z" />
        </g>

        {/* Word "short" at bottom */}
        <text
          x="100"
          y="170"
          textAnchor="middle"
          fontSize="24"
          fontWeight="bold"
          fontFamily="system-ui, -apple-system, sans-serif"
          letterSpacing="3"
          fill="#F5E8C7"
        >
          short
        </text>

        {/* Sparkle cross near 't' */}
        <path
          d="M 152 157 L 152 169 M 146 163 L 158 163"
          stroke="#FACC15"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};
