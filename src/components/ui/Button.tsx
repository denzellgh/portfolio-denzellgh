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
      'bg-gradient-to-r from-[#A855F7] to-[#EC4899] text-white hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] hover:scale-105',
    secondary:
      'border-2 border-[#A855F7] text-[#F5F5F5] hover:bg-[#A855F7]/10 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]',
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};
