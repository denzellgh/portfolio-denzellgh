export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-primary-muted/10 bg-primary-bg/80 border-t py-8">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col items-center gap-6">
          <div className="text-center">
            <p className="text-primary-muted text-sm">
              © {currentYear} Denzell Griffith. All rights reserved
            </p>
            <p className="text-primary-muted text-sm">
              Based in Tegucigalpa, Honduras
            </p>
            <p className="text-primary-muted/60 mt-2 text-xs">
              Built with React, TypeScript, and TailwindCSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
