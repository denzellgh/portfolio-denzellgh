import { cn } from '@/lib';

interface BlurredCardProps {
  amount: string;
  title: string;
  variant: 'green' | 'purple';
}

export const BlurredCard = ({ amount, title, variant }: BlurredCardProps) => {
  const baseStyles = 'rounded-lg border p-4';

  const variants = {
    green: 'border-[#0EA5E9]/30 bg-[#0EA5E9]/10',
    purple: 'border-[#7C3AED]/30 bg-[#7C3AED]/10',
  };

  const classStyles = `${baseStyles} ${variants[variant]}`;

  return (
    <div className={classStyles}>
      <p
        className={cn(
          'mb-1 text-3xl font-bold',
          variant === 'green' ? 'text-[#0EA5E9]' : 'text-[#7C3AED]',
        )}
      >
        {amount}
      </p>
      <p className="text-sm text-[#A1A1AA]">{title}</p>
    </div>
  );
};
