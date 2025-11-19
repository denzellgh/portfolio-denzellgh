import { cn } from '@/lib';

interface BlurredCardProps {
  amount: string;
  title: string;
  variant: 'green' | 'purple';
}

export const BlurredCard = ({ amount, title, variant }: BlurredCardProps) => {
  const baseStyles = 'rounded-lg border p-4';

  const variants = {
    green: 'border-accent-blue/30 bg-accent-blue/10',
    purple: 'border-accent-violet/30 bg-accent-violet/10',
  };

  const classStyles = `${baseStyles} ${variants[variant]}`;

  return (
    <div className={classStyles}>
      <p
        className={cn(
          'mb-1 text-3xl font-bold',
          variant === 'green' ? 'text-accent-blue' : 'text-accent-violet',
        )}
      >
        {amount}
      </p>
      <p className="text-primary-muted text-sm">{title}</p>
    </div>
  );
};
