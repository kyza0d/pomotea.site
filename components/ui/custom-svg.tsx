interface CustomSvgProps {
  className?: string;
  size?: number;
  showBackground?: boolean;
}

export const CustomSvg = ({ className = "", size = 28, showBackground = true }: CustomSvgProps) => {
  return (
    <div className={`flex items-center ${className}`}>
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 28 28" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className={showBackground ? "bg-landing-borders/50 border-2 border-landing-borders/60 rounded-md" : ""}
      >
        <path 
          d="M14 6L20 10V18L14 22L8 18V10L14 6Z" 
          fill="var(--color-landing-foreground)" 
        />
        <circle 
          cx="14" 
          cy="14" 
          r="3" 
          fill="var(--color-landing-background)" 
        />
      </svg>
    </div>
  );
};