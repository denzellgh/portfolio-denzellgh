import { cn } from '@/lib';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  href?: string;
}

export const Button = ({
  children,
  variant = 'primary',
  href,
  className = '',
  ...props
}: ButtonProps) => {
  const baseStyles =
    'px-8 py-3 rounded-lg font-medium transition-all duration-300 inline-flex items-center justify-center gap-2';

  const variants = {
    primary:
      'bg-gradient-to-r from-[#0EA5E9] via-[#7C3AED] to-[#10B981] text-white hover:shadow-[0_0_30px_rgba(14,165,233,0.5)] hover:scale-105',
    secondary:
      'border-2 border-[#0EA5E9] text-[#F5F5F5] hover:bg-[#0EA5E9]/10 hover:shadow-[0_0_20px_rgba(14,165,233,0.3)]',
  };

  const classStyles = cn(`${baseStyles} ${variants[variant]}`, className);

  if (href) {
    return (
      <a href={href} className={classStyles}>
        {children}
      </a>
    );
  }

  return (
    <button className={classStyles} {...props}>
      {children}
    </button>
  );
};
