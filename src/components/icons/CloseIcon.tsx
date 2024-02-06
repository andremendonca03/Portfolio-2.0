import React from "react";

export default function CloseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
    {...props}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17 17L1 1M17 1L1 17" stroke="black" strokeWidth="2" />
    </svg>
  );
}
