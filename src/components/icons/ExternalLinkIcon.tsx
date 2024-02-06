import React from "react";

export default function ExternalLinkIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.7632 7.27156L12 7.27156L12.0001 0H4.68155L4.66016 1.19492L9.93504 1.20128L4.01819 7.0802L4.87417 7.9307L10.7696 2.07306L10.7632 7.27156Z"
        fill="white"
      />
      <path
        d="M1.21042 1.05494V9.83506C1.21042 10.0756 1.3113 10.2961 1.51304 10.4966C1.71481 10.697 1.93673 10.7972 2.17882 10.7972H11.0156V12H2.17882C1.57408 12 1.05975 11.7894 0.6358 11.3682C0.211882 10.947 -7.9155e-05 10.4359 -7.9155e-05 9.83506V1.05494H1.21042Z"
        fill="white"
      />
    </svg>
  );
}
