interface SkillBadgeProps {
  name: string;
}

export const SkillBadge = ({ name }: SkillBadgeProps) => {
  return (
    <div className="border-accent-blue/30 bg-primary-bg/80 text-primary-text hover:border-accent-blue rounded-lg border px-4 py-2 text-center text-sm font-medium transition-all duration-300 hover:shadow-[0_0_15px_rgba(14,165,233,0.3)]">
      {name}
    </div>
  );
};
