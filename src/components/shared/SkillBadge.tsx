interface SkillBadgeProps {
  name: string;
}

export const SkillBadge = ({ name }: SkillBadgeProps) => {
  return (
    <div className="rounded-lg border border-accent-blue/30 bg-primary-bg/80 px-4 py-2 text-center text-sm font-medium text-primary-text transition-all duration-300 hover:border-accent-blue hover:shadow-[0_0_15px_rgba(14,165,233,0.3)]">
      {name}
    </div>
  );
};
