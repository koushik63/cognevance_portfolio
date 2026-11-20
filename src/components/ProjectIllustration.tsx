interface ProjectIllustrationProps {
  type: 'ralvik' | 'gamified' | 'gamerz';
  title: string;
}

export function ProjectIllustration({ type, title }: ProjectIllustrationProps) {
  if (type === 'ralvik') {
    return (
      <svg
        viewBox="0 0 400 220"
        className="w-full h-full object-cover"
        role="img"
        aria-label={`${title} interface schematic`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="400" height="220" fill="#080D13" />
        {/* Grid lines */}
        <path
          d="M0 55H400M0 110H400M0 165H400M100 0V220M200 0V220M300 0V220"
          stroke="#22D3EE"
          strokeOpacity="0.08"
          strokeWidth="1"
        />
        {/* Terminal Frame */}
        <rect
          x="24"
          y="22"
          width="352"
          height="176"
          rx="8"
          fill="#0D1720"
          stroke="#22D3EE"
          strokeOpacity="0.24"
        />
        {/* Header Bar */}
        <line
          x1="24"
          y1="48"
          x2="376"
          y2="48"
          stroke="#22D3EE"
          strokeOpacity="0.16"
        />
        <circle cx="42" cy="35" r="3.5" fill="#22D3EE" fillOpacity="0.6" />
        <circle cx="54" cy="35" r="3.5" fill="#94A3B8" fillOpacity="0.4" />
        <rect x="260" y="30" width="96" height="10" rx="2" fill="#22D3EE" fillOpacity="0.14" />

        {/* Trend Curve */}
        <polyline
          points="44,158 88,142 124,148 168,110 212,124 256,82 296,94 348,64"
          stroke="#22D3EE"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Candlesticks */}
        <rect x="68" y="132" width="8" height="28" rx="1" fill="#06B6D4" fillOpacity="0.45" />
        <rect x="116" y="126" width="8" height="32" rx="1" fill="#22D3EE" fillOpacity="0.55" />
        <rect x="164" y="98" width="8" height="36" rx="1" fill="#22D3EE" fillOpacity="0.7" />
        <rect x="212" y="112" width="8" height="28" rx="1" fill="#06B6D4" fillOpacity="0.45" />
        <rect x="260" y="76" width="8" height="38" rx="1" fill="#22D3EE" fillOpacity="0.8" />
        <rect x="308" y="84" width="8" height="30" rx="1" fill="#22D3EE" fillOpacity="0.65" />

        {/* Data Nodes */}
        <circle cx="168" cy="110" r="4.5" fill="#F8FAFC" stroke="#22D3EE" strokeWidth="2" />
        <circle cx="256" cy="82" r="4.5" fill="#F8FAFC" stroke="#22D3EE" strokeWidth="2" />
        <circle cx="348" cy="64" r="5" fill="#22D3EE" />
      </svg>
    );
  }

  if (type === 'gamified') {
    return (
      <svg
        viewBox="0 0 400 220"
        className="w-full h-full object-cover"
        role="img"
        aria-label={`${title} AI learning network illustration`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="400" height="220" fill="#080D13" />
        <path
          d="M0 55H400M0 110H400M0 165H400M100 0V220M200 0V220M300 0V220"
          stroke="#22D3EE"
          strokeOpacity="0.08"
          strokeWidth="1"
        />
        {/* Connected Learning Path */}
        <path
          d="M72 150 L145 92 L215 130 L282 72 L338 112"
          stroke="#22D3EE"
          strokeOpacity="0.55"
          strokeWidth="2"
          strokeDasharray="5 5"
        />
        <path
          d="M72 150 L145 162 L215 130 L282 158 L338 112"
          stroke="#06B6D4"
          strokeOpacity="0.35"
          strokeWidth="1.5"
        />
        {/* Skill / Quest Nodes */}
        <circle cx="72" cy="150" r="18" fill="#0D1720" stroke="#22D3EE" strokeWidth="1.8" />
        <circle cx="72" cy="150" r="6" fill="#22D3EE" />

        <circle cx="145" cy="92" r="22" fill="#0D1720" stroke="#22D3EE" strokeWidth="1.8" />
        <polygon points="145,82 154,98 136,98" fill="#22D3EE" fillOpacity="0.85" />

        <circle cx="215" cy="130" r="24" fill="#0D1720" stroke="#22D3EE" strokeWidth="2" />
        <rect x="206" y="121" width="18" height="18" rx="3" stroke="#F8FAFC" strokeWidth="1.8" />

        <circle cx="282" cy="72" r="20" fill="#0D1720" stroke="#22D3EE" strokeWidth="1.8" />
        <circle cx="282" cy="72" r="7" fill="#22D3EE" />

        <circle cx="338" cy="112" r="18" fill="#0D1720" stroke="#06B6D4" strokeWidth="1.8" />
        <circle cx="338" cy="112" r="5" fill="#F8FAFC" />

        {/* Status Pills */}
        <rect x="32" y="26" width="94" height="20" rx="4" fill="#0D1720" stroke="#22D3EE" strokeOpacity="0.3" />
        <circle cx="44" cy="36" r="3" fill="#22D3EE" />
        <rect x="54" y="33" width="58" height="6" rx="2" fill="#94A3B8" fillOpacity="0.45" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 400 220"
      className="w-full h-full object-cover"
      role="img"
      aria-label={`${title} gaming hub HUD illustration`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="400" height="220" fill="#080D13" />
      <path
        d="M0 55H400M0 110H400M0 165H400M100 0V220M200 0V220M300 0V220"
        stroke="#22D3EE"
        strokeOpacity="0.08"
        strokeWidth="1"
      />
      {/* Hexagonal Arena HUD */}
      <polygon
        points="200,32 276,74 276,146 200,188 124,146 124,74"
        fill="#0D1720"
        stroke="#22D3EE"
        strokeOpacity="0.35"
        strokeWidth="1.8"
      />
      <polygon
        points="200,52 258,84 258,136 200,168 142,136 142,84"
        stroke="#06B6D4"
        strokeOpacity="0.45"
        strokeWidth="1.2"
        strokeDasharray="4 4"
      />
      {/* Stylized Controller / Crosshair Emblem */}
      <circle cx="200" cy="110" r="24" stroke="#22D3EE" strokeWidth="2" />
      <line x1="200" y1="76" x2="200" y2="92" stroke="#22D3EE" strokeWidth="2" />
      <line x1="200" y1="128" x2="200" y2="144" stroke="#22D3EE" strokeWidth="2" />
      <line x1="166" y1="110" x2="182" y2="110" stroke="#22D3EE" strokeWidth="2" />
      <line x1="218" y1="110" x2="234" y2="110" stroke="#22D3EE" strokeWidth="2" />
      <circle cx="200" cy="110" r="6" fill="#22D3EE" />

      {/* Side HUD Brackets */}
      <path d="M44 64H72M44 64V92" stroke="#22D3EE" strokeOpacity="0.5" strokeWidth="2" />
      <path d="M356 156H328M356 156V128" stroke="#22D3EE" strokeOpacity="0.5" strokeWidth="2" />
    </svg>
  );
}
