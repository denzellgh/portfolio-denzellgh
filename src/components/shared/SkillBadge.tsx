interface SkillBadgeProps {
  name: string;
}

export const SkillBadge = ({ name }: SkillBadgeProps) => {
  return (
    <div className="px-4 py-2 rounded-lg bg-[#0A0A0A]/80 border border-[#0EA5E9]/30 text-[#F5F5F5] text-sm font-medium hover:border-[#0EA5E9] hover:shadow-[0_0_15px_rgba(14,165,233,0.3)] transition-all duration-300 text-center">
      {name}
    </div>
  );
};
