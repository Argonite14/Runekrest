import React from 'react';

export default function Logomark({ className = "w-6 h-6", stroke = "#C9A84C", strokeWidth = 2 }) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path 
        d="M50 10V90M50 10L75 35L50 60M50 35L25 10M50 60L75 85" 
        stroke={stroke} 
        strokeWidth={strokeWidth} 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <circle cx="50" cy="10" r="2" fill={stroke}/>
      <circle cx="50" cy="90" r="2" fill={stroke}/>
      <circle cx="25" cy="10" r="1.5" fill={stroke}/>
      <circle cx="75" cy="35" r="1.5" fill={stroke}/>
      <circle cx="75" cy="85" r="1.5" fill={stroke}/>
    </svg>
  );
}
