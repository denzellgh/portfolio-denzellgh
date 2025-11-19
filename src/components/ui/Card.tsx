import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card = ({ children, className = '', hover = true }: CardProps) => {
  const hoverStyles = hover
    ? 'hover:scale-105 hover:shadow-[0_0_30px_rgba(14,165,233,0.2)] hover:border-accent-blue/50'
    : '';

  return (
    <div
      className={`rounded-xl border border-primary-muted/20 bg-primary-bg/50 p-6 backdrop-blur-sm transition-all duration-300 ${hoverStyles} ${className}`}
    >
      {children}
    </div>
  );
};
