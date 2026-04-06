import React from "react";

export default function LogoIcon({ size = 40 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 1024 1024"
      role="img"
      aria-label="Abstract stylized a logo"
    >
    
      <path
        fill="#4c43e8"
        fillRule="evenodd"
        d="
          M 365 430
          A 170 170 0 1 1 364.999 430
          Z
          M 365 523
          A 77 77 0 1 0 365.001 523
          Z
        "
      />

  
      <path
        fill="#4c43e8"
        d="
          M 495 215
          H 640
          L 846 784
          H 715
          L 462 320
          L 420 405
          C 414 417 398 420 387 412
          L 350 369
          C 330 346 322 312 327 282
          C 334 236 371 215 411 215
          Z
        "
      />
    </svg>
     );
}
