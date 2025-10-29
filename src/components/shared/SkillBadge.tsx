interface SkillBadgeProps {
  name: string;
}

export const SkillBadge = ({ name }: SkillBadgeProps) => {
  return (
    <div className="rounded-lg border border-[#0EA5E9]/30 bg-[#0A0A0A]/80 px-4 py-2 text-center text-sm font-medium text-[#F5F5F5] transition-all duration-300 hover:border-[#0EA5E9] hover:shadow-[0_0_15px_rgba(14,165,233,0.3)]">
      {name}
    </div>
  );
};
