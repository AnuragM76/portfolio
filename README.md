# Portfolio

A modern personal portfolio website built with React 18, TypeScript, Vite, Tailwind CSS, Framer Motion, and Lucide React.

## Getting Started

```bash
npm install
npm run dev
```

## Scripts

| Command           | Description                   |
| ----------------- | ----------------------------- |
| `npm run dev`     | Start development server      |
| `npm run build`   | Type-check and build for prod |
| `npm run preview` | Preview production build      |

## Project Structure

```
src/
├── components/       # React components
│   ├── Navbar.tsx
│   ├── SocialLinks.tsx
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── ExperienceSection.tsx
│   ├── ServicesSection.tsx
│   ├── ProjectsSection.tsx
│   ├── ProjectCard.tsx
│   ├── TestimonialsSection.tsx
│   └── Footer.tsx
├── hooks/
│   └── usePortfolio.ts      # Typed hook to consume portfolio data
├── types/
│   └── portfolio.ts         # TypeScript interfaces
├── data/
│   └── portfolio.json       # All editable content
├── App.tsx
├── main.tsx
└── index.css                # Tailwind + custom styles
```

## Editing Content

All profile, experience, project, and testimonial content lives in:

```
src/data/portfolio.json
```

Edit that file to update:

- **profile** — name, tagline, role, bio, avatar, social links
- **skills.categories** — skill groups and items
- **experience** — work history entries
- **projects** — portfolio projects
- **testimonials** — client/colleague quotes

The `usePortfolio()` hook reads this JSON and returns fully typed data.

### Hiding Empty Social Links

Set a social field to an empty string `""` in `portfolio.json` and the `SocialLinks` component will automatically hide it.

### Empty Project Links

If a project's `link` field is empty, the "LIVE PROJECT" button will not render.

### Highlighted Projects

Set `"highlight": true` on a project to sort it first in the projects section.

## Tech Stack

- [React 18](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Vite](https://vitejs.dev)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [Lucide React](https://lucide.dev)
- [Kanit font](https://fonts.google.com/specimen/Kanit)
