# Alex Rivera — Portfolio

A premium personal portfolio built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## ✨ Features

- 🎨 Minimal, elegant design with light & dark mode
- 🎭 Smooth Framer Motion animations throughout
- 🌊 Animated background blobs and subtle particle grid
- ⚓ Floating bottom dock with animated tooltips
- 📱 Fully responsive (mobile → desktop)
- ♿ Accessible with proper ARIA labels
- ⚡ Optimized performance

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## 📝 Editing Your Content

All portfolio data lives in one file:

```
src/data/portfolio.ts
```

Edit it to update:
- Your name, role, bio, location
- Work experience entries
- Skills by category
- Projects (title, description, tags, links)
- Hackathons / achievements
- Education

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css        # Global styles & CSS variables
│   ├── layout.tsx         # Root layout with fonts
│   └── page.tsx           # Main page assembling all sections
├── components/
│   ├── layout/
│   │   ├── AnimatedBackground.tsx   # Animated blobs & grid
│   │   ├── FloatingDock.tsx         # Bottom navigation dock
│   │   └── ThemeProvider.tsx        # Light/dark theme context
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── HackathonsSection.tsx
│   │   ├── EducationSection.tsx
│   │   └── ContactSection.tsx
│   └── ui/
│       └── index.tsx       # Shared: Reveal, Section, Card, Pill, Button…
├── data/
│   └── portfolio.ts        # ← All your content lives here
└── lib/
    └── utils.ts            # cn() utility
```

## 🎨 Customization

### Colors
Edit CSS variables in `src/app/globals.css`:
```css
:root {
  --accent: #5B4FE8;   /* Change accent color */
}
```

### Fonts
Edit `src/app/layout.tsx` — swap `Playfair_Display` / `DM_Sans` for any Google Font.

### Profile Image
Replace the gradient placeholder in `HeroSection.tsx` with:
```tsx
<Image src="/profile.jpg" alt="Alex Rivera" fill className="object-cover" />
```
Then add your photo to `/public/profile.jpg`.

## 🛠 Tech Stack

| Tool | Purpose |
|------|---------|
| Next.js 14 | Framework |
| TypeScript | Type safety |
| Tailwind CSS | Styling |
| Framer Motion | Animations |
| Lucide React | Icons |

## 📦 Build for Production

```bash
npm run build
npm start
```

Or deploy instantly to **Vercel** — just push to GitHub and import.
