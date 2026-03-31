type BrandSymbolProps = {
  className?: string;
};

function BrandSymbol({ className = "w-[clamp(5rem,10vw,8.8rem)] text-on-surface drop-shadow-lg" }: BrandSymbolProps) {
  return (
    <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 82 66" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.4 39.2C29.1 46.7 52.9 46.7 61.6 39.2" stroke="currentColor" strokeWidth="1.7" />
      <path d="M20.4 39.2L13.6 49.2" stroke="currentColor" strokeWidth="1.7" />
      <path d="M61.6 39.2L68.4 49.2" stroke="currentColor" strokeWidth="1.7" />
      <path d="M41 46.6V59" stroke="currentColor" strokeWidth="1.7" />
      <path d="M18 10V3M18 17V24M11 10H4M25 10H32" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
      <path d="M41 6V0M41 12V18M35 6H29M47 6H53" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
      <path d="M64 12V6M64 18V24M58 12H52M70 12H76" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
    </svg>
  );
}

export default BrandSymbol;
