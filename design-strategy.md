# My Script Website - Design Strategy

## Brand Colors
- **Primary Dark:** #1D3833 (Deep forest green - professional, trustworthy)
- **Accent Red:** #0B1816 (Deep burgundy-red - energy, action)

## Design Philosophy: Modern Professional with Warmth

This design combines a sophisticated, minimalist aesthetic with the app's natural, grounded color palette. The deep forest green conveys professionalism and reliability, while the deep red accent adds energy and draws attention to key actions.

### Core Principles
1. **Clarity First:** Clean typography and generous whitespace ensure the app's value proposition is immediately understood
2. **Purposeful Color:** The green creates a calming, trustworthy foundation; the red accent highlights calls-to-action and important features
3. **Subtle Sophistication:** Minimal animations, refined shadows, and careful spacing create a premium feel without distraction
4. **Accessibility:** High contrast text, clear hierarchy, and semantic HTML ensure the site works for everyone

### Color Philosophy
- **Background:** Off-white/cream (#FAFAF8) - warm, inviting, reduces eye strain
- **Primary Text:** Deep forest green (#1D3833) - professional, readable
- **Accent:** Deep red (#0B1816) - draws attention to CTAs and key features
- **Borders/Dividers:** Soft gray (#E8E8E5) - subtle structure without harshness

### Layout Paradigm
- Hero section with asymmetric layout (image on right, content left)
- Feature cards in a 2-column grid on desktop, single column on mobile
- Full-width sections with alternating background colors for visual rhythm
- Sticky navigation for easy access to legal pages

### Signature Elements
1. **Gradient Accents:** Subtle gradients from green to red on hover states
2. **Feature Icons:** Custom icons representing each core feature
3. **Rounded Corners:** Consistent 8px radius for cards and buttons
4. **Typography Hierarchy:** Bold display font for headlines, clean sans-serif for body

### Interaction Philosophy
- Smooth transitions on all interactive elements
- Hover states that reveal depth (shadow increase, slight scale)
- Clear focus states for keyboard navigation
- Loading states with subtle animations

### Animation Guidelines
- Fade-in animations on page load (200ms, ease-out)
- Hover effects on cards (shadow depth increase, subtle lift)
- Smooth scroll behavior for navigation links
- Button interactions: slight press animation on click

### Typography System
- **Headlines:** Bold, geometric sans-serif (system font stack)
- **Body Text:** Clean, readable sans-serif (system font stack)
- **Font Sizes:** Responsive scaling from mobile to desktop
- **Line Height:** 1.6 for body text, 1.2 for headlines

## Implementation Notes
- Use Tailwind CSS for all styling
- Leverage shadcn/ui components for consistency
- Implement responsive design mobile-first
- Ensure WCAG AA compliance for accessibility
