export function HeroFallbackVisual() {
  return (
    <div
      className="relative w-full h-full flex items-center justify-center select-none"
      aria-label="Abstract 3D developer avatar illustration"
    >
      <svg
        viewBox="0 0 360 360"
        className="w-full max-w-[340px] h-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer Orbital Rings */}
        <ellipse
          cx="180"
          cy="170"
          rx="145"
          ry="52"
          transform="rotate(-24 180 170)"
          stroke="#22D3EE"
          strokeOpacity="0.35"
          strokeWidth="1.2"
          strokeDasharray="6 6"
        />
        <ellipse
          cx="180"
          cy="170"
          rx="130"
          ry="46"
          transform="rotate(28 180 170)"
          stroke="#06B6D4"
          strokeOpacity="0.25"
          strokeWidth="1.2"
        />

        {/* Shoulder Chassis */}
        <path
          d="M95 285L135 230H225L265 285L220 305H140L95 285Z"
          fill="#0D1720"
          stroke="#22D3EE"
          strokeOpacity="0.3"
          strokeWidth="1.5"
        />

        {/* Neck */}
        <rect
          x="160"
          y="198"
          width="40"
          height="34"
          rx="4"
          fill="#0D1720"
          stroke="#22D3EE"
          strokeOpacity="0.25"
          strokeWidth="1.2"
        />

        {/* Geometric Head */}
        <polygon
          points="180,68 242,105 242,175 180,210 118,175 118,105"
          fill="#0D1720"
          stroke="#22D3EE"
          strokeOpacity="0.45"
          strokeWidth="1.8"
        />
        <polygon
          points="180,68 242,105 180,140 118,105"
          fill="#111E2B"
          stroke="#22D3EE"
          strokeOpacity="0.2"
          strokeWidth="1"
        />

        {/* Cyan Visor */}
        <rect
          x="134"
          y="128"
          width="92"
          height="18"
          rx="4"
          fill="#22D3EE"
          fillOpacity="0.88"
        />
        <line
          x1="142"
          y1="137"
          x2="218"
          y2="137"
          stroke="#080D13"
          strokeWidth="2"
          strokeOpacity="0.4"
        />

        {/* Floating Nodes */}
        <circle cx="62" cy="110" r="4" fill="#22D3EE" fillOpacity="0.6" />
        <circle cx="302" cy="128" r="3.5" fill="#22D3EE" fillOpacity="0.5" />
        <circle cx="78" cy="245" r="3" fill="#06B6D4" fillOpacity="0.5" />
        <circle cx="288" cy="235" r="4" fill="#22D3EE" fillOpacity="0.6" />
      </svg>
    </div>
  );
}
