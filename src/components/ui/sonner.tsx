import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from '@/components/assets/icons';
import { Toaster as Sonner, type ToasterProps } from 'sonner';

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="dark"
      className="toaster group"
      icons={{
        success: <CircleCheckIcon className="size-4" />,
        info: <InfoIcon className="size-4" />,
        warning: <TriangleAlertIcon className="size-4" />,
        error: <OctagonXIcon className="size-4" />,
        loading: <Loader2Icon className="size-4 animate-spin" />,
      }}
      toastOptions={{
        style: {
          background: 'var(--color-primary-bg)',
          border: '1px solid rgba(14, 165, 233, 0.3)',
          color: 'var(--color-primary-text)',
          borderRadius: '0.75rem',
          backdropFilter: 'blur(8px)',
        },
        className: 'sonner-toast',
      }}
      style={
        {
          '--normal-bg': 'var(--color-primary-bg)',
          '--normal-text': 'var(--color-primary-text)',
          '--normal-border': 'rgba(14, 165, 233, 0.3)',
          '--success-bg': 'rgba(16, 185, 129, 0.1)',
          '--success-border': 'rgba(16, 185, 129, 0.5)',
          '--success-text': 'var(--color-accent-green)',
          '--error-bg': 'rgba(239, 68, 68, 0.1)',
          '--error-border': 'rgba(239, 68, 68, 0.5)',
          '--error-text': '#EF4444',
          '--info-bg': 'rgba(14, 165, 233, 0.1)',
          '--info-border': 'rgba(14, 165, 233, 0.5)',
          '--info-text': 'var(--color-accent-blue)',
          '--warning-bg': 'rgba(124, 58, 237, 0.1)',
          '--warning-border': 'rgba(124, 58, 237, 0.5)',
          '--warning-text': 'var(--color-accent-violet)',
          '--border-radius': '0.75rem',
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
