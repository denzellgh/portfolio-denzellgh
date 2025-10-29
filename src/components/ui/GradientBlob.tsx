interface GradientBlobProps {
  color: 'blue' | 'violet' | 'green' | 'cyan';
  size?: 'sm' | 'md' | 'lg';
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  delay?: number;
}

export const GradientBlob = ({
  color,
  size = 'md',
  position,
  delay = 0,
}: GradientBlobProps) => {
  const colors = {
    blue: 'bg-[#0EA5E9]',
    violet: 'bg-[#7C3AED]',
    green: 'bg-[#10B981]',
    cyan: 'bg-[#06B6D4]',
  };

  const sizes = {
    sm: 'w-64 h-64',
    md: 'w-96 h-96',
    lg: 'w-[32rem] h-[32rem]',
  };

  return (
    <div
      className={`absolute ${sizes[size]} ${colors[color]} pointer-events-none rounded-full opacity-20 blur-[100px]`}
      style={{
        ...position,
        animation: `float 20s ease-in-out infinite, pulse-glow 8s ease-in-out infinite`,
        animationDelay: `${delay}s`,
      }}
    />
  );
};
