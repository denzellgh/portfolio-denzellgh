interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

interface SocialLinksProps {
  className?: string;
}

export const SocialLinks = ({ className = '' }: SocialLinksProps) => {
  const socials: SocialLink[] = [
    {
      name: 'GitHub',
      url: 'https://github.com/denzellgh',
      icon: '📦',
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/denzellgh',
      icon: '💼',
    },
    {
      name: 'Email',
      url: 'mailto:denzell@example.com',
      icon: '✉️',
    },
  ];

  return (
    <div className={`flex gap-4 ${className}`}>
      {socials.map(social => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#0EA5E9] text-2xl transition-all duration-300 hover:scale-110 hover:bg-[#0EA5E9]/10 hover:shadow-[0_0_20px_rgba(14,165,233,0.4)]"
          aria-label={social.name}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};
