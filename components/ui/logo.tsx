interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export const Logo = ({ className = "", size = 28, showText = true }: LogoProps) => {
  return (
    <div className={`flex items-center cursor-pointer ${className}`}>
      <svg width={size} height={size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className={showText ? "mr-3" : ""}>
        <path d="M15.2733 15.9596H13.3337L12.6981 19.529C11.1676 19.529 10.0081 18.1471 10.2739 16.6399L11.8343 7.79395H16.8054C18.0332 7.79395 18.9079 8.07646 19.4295 8.64148C19.8098 9.07611 19.9999 9.63027 19.9999 10.3039C19.9999 10.5321 19.9782 10.7712 19.9347 11.0211L19.6087 12.8628C19.4458 13.7647 18.9677 14.509 18.1745 15.0958C17.3813 15.6717 16.4142 15.9596 15.2733 15.9596ZM15.7785 10.3365H14.3117L13.7738 13.417H15.2244C16.1154 13.417 16.6315 13.0204 16.7728 12.2272L16.8869 11.5589C16.9086 11.4612 16.9195 11.3308 16.9195 11.1678C16.9195 11.0048 16.838 10.8255 16.675 10.6299C16.512 10.4343 16.2132 10.3365 15.7785 10.3365Z" fill="var(--color-landing-foreground)" />
        <path d="M26 14C26 20.6274 20.6274 26 14 26C7.37258 26 2 20.6274 2 14C2 7.37258 7.37258 2 14 2C15.5533 2 17.0376 2.29511 18.4 2.83232" stroke="var(--color-landing-primary)" strokeWidth="3" strokeLinecap="round" />
      </svg>
      {showText && <label className='text-sm font-semibold text-landing-foreground cursor-pointer hover:underline'>pomotea</label>}
    </div>
  );
};
