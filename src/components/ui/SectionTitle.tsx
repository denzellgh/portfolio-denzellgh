import type { ReactNode } from 'react';

interface SectionTitleProps {
  children: ReactNode;
  subtitle?: string;
  className?: string;
}

export const SectionTitle = ({
  children,
  subtitle,
  className = '',
}: SectionTitleProps) => {
  return (
    <div className={`mb-16 text-center ${className}`}>
      <h2 className="from-accent-blue via-accent-violet to-accent-green mb-4 bg-gradient-to-r bg-clip-text font-[family-name:var(--font-heading)] text-4xl font-bold text-transparent md:text-5xl">
        {children}
      </h2>
      {subtitle && (
        <p className="text-primary-muted mx-auto max-w-2xl text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
};
