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
      'bg-gradient-to-r from-accent-blue via-accent-violet to-accent-green text-white hover:shadow-[0_0_30px_rgba(14,165,233,0.5)] hover:scale-105',
    secondary:
      'border-2 border-accent-blue text-primary-text hover:bg-accent-blue/10 hover:shadow-[0_0_20px_rgba(14,165,233,0.3)]',
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
