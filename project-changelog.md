# Project Changelog

## [2025-10-22] — Gradient Color Palette Update (Blue–Purple–Green)

**Scope:** Global Design System, All UI Components, All Sections  
**Changes:**  
- Updated color palette from purple-pink-orange to blue-violet-green scheme
- Modified CSS variables in `global.css` to use new accent colors:
  - `--color-accent-blue: #0EA5E9` (Deep Blue)
  - `--color-accent-violet: #7C3AED` (Electric Violet)
  - `--color-accent-green: #10B981` (Neon Green)
  - `--color-accent-cyan: #06B6D4` (Cyan Glow)
- Updated all gradient definitions across components and sections
- Modified hover effects, borders, and glow shadows to match new palette
- Updated scrollbar colors to blue-violet scheme

**Affected Files:**
- `src/global.css` - Color variables and scrollbar
- `src/utils/constants.ts` - Color constants
- `src/components/ui/Button.tsx` - Button gradients and borders
- `src/components/ui/SectionTitle.tsx` - Heading gradients
- `src/components/ui/Card.tsx` - Hover effects
- `src/components/ui/GradientBlob.tsx` - Background blob colors
- `src/components/ui/SocialLinks.tsx` - Social icon borders
- `src/components/shared/ProjectCard.tsx` - Project card styling
- `src/components/shared/SkillBadge.tsx` - Skill badge colors
- `src/components/shared/TimelineItem.tsx` - Timeline gradient and accents
- `src/components/layout/Navbar.tsx` - Navigation colors
- `src/sections/Hero.tsx` - Hero gradient blobs and text
- `src/sections/About.tsx` - Stats cards and decorative gradient
- `src/sections/Education.tsx` - Education card accents
- `src/sections/Contact.tsx` - Location text accent

**Reason:**  
Implemented new futuristic blue-purple-green color scheme to create a cooler, more elegant visual atmosphere while maintaining the Outrun/cyberpunk aesthetic. The new palette provides better visual harmony and a more professional, immersive experience.

**Technical Details:**
- All gradients now transition smoothly between blue → violet → green
- Opacity levels maintained for soft, diffused glow effects
- Blur parameters unchanged (120px-180px range)
- Background blobs varied: blue→violet, violet→green, cyan→blue
- Maintained accessibility and contrast ratios
