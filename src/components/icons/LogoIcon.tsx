import React from "react";

export default function LogoIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M50 25.4698C50 32.6698 44.0906 36.8523 39.4213 41.4781C36.4327 44.4389 33.0324 47.0876 28.9297 48.6527C26.9415 49.4111 24.7754 49.9635 22.3561 49.9979C16.0437 50.0876 16.8297 47.3103 12.6046 42.9578C9.63951 39.9034 0.467179 36.3924 0.0668807 31.6579C-0.703718 22.5435 5.31362 17.9816 11.4727 11.3897C16.8025 5.68532 19.2338 0 27.7543 0C38.5846 0 37.4658 7.77891 42.4251 13.9904C45.7677 18.177 50 22.5836 50 25.4698Z"
        fill="url(#paint0_linear_45_63)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_45_63"
          x1="-6.87754e-07"
          y1="50"
          x2="50.2584"
          y2="0.261117"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E3442F" />
          <stop offset="0.5" stopColor="#111111" />
          <stop offset="0.989583" stopColor="#3E2FE3" />
        </linearGradient>
      </defs>
    </svg>
  );
}
