// Animation variants for Framer Motion
export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6 },
  },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const scaleOnHover = {
  scale: 1.05,
  transition: { duration: 0.3 },
};

// Color constants
export const colors = {
  primary: {
    bg: '#0A0A0A',
    text: '#F5F5F5',
    muted: '#A1A1AA',
  },
  accent: {
    blue: '#0EA5E9',
    violet: '#7C3AED',
    green: '#10B981',
    cyan: '#06B6D4',
  },
};

// Navigation links
export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];
