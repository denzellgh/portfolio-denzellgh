import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card = ({ children, className = '', hover = true }: CardProps) => {
  const hoverStyles = hover
    ? 'hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] hover:border-[#A855F7]/50'
    : '';

  return (
    <div
      className={`rounded-xl border border-[#A1A1AA]/20 bg-[#0A0A0A]/50 p-6 backdrop-blur-sm transition-all duration-300 ${hoverStyles} ${className}`}
    >
      {children}
    </div>
  );
};
