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
      <h2 className="mb-4 bg-gradient-to-r from-[#A855F7] via-[#EC4899] to-[#F97316] bg-clip-text font-[family-name:var(--font-heading)] text-4xl font-bold text-transparent md:text-5xl">
        {children}
      </h2>
      {subtitle && (
        <p className="mx-auto max-w-2xl text-lg text-[#A1A1AA]">{subtitle}</p>
      )}
    </div>
  );
};
