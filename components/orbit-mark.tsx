/** Kenar çubuğunun altındaki statik yörünge çizimi; fizik göndermesi, animasyonsuz ve baskıda da görünür. */
export function OrbitMark() {
  return (
    <svg className="orbitMark" viewBox="0 0 240 200" aria-hidden="true" focusable="false">
      <g fill="none" stroke="currentColor" strokeWidth="0.75">
        <ellipse cx="120" cy="100" rx="104" ry="38" transform="rotate(-18 120 100)" />
        <ellipse cx="120" cy="100" rx="104" ry="38" transform="rotate(42 120 100)" opacity="0.7" />
        <ellipse cx="120" cy="100" rx="70" ry="24" transform="rotate(-72 120 100)" opacity="0.55" />
        <circle cx="120" cy="100" r="86" strokeDasharray="1.5 5" opacity="0.45" />
      </g>
      <circle cx="120" cy="100" r="3.2" fill="currentColor" />
      <circle cx="218.5" cy="68" r="2.4" fill="currentColor" />
      <circle cx="70.7" cy="170.4" r="1.8" fill="currentColor" opacity="0.8" />
    </svg>
  );
}
