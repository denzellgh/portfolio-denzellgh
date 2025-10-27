export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#A1A1AA]/10 bg-[#0A0A0A]/80 py-8">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col items-center gap-6">
          <div className="text-center">
            <p className="text-sm text-[#A1A1AA]">
              © {currentYear} Denzell Griffith. All rights reserved
            </p>
            <p className="text-sm text-[#A1A1AA]">
              Based in Tegucigalpa, Honduras
            </p>
            <p className="mt-2 text-xs text-[#A1A1AA]/60">
              Built with React, TypeScript, and TailwindCSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
