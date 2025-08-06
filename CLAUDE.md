# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Use **pnpm** as the package manager for all operations:

- `pnpm dev` - Start the Next.js development server
- `pnpm build` - Build the production application
- `pnpm start` - Start the production server
- `pnpm lint` - Run ESLint to check code quality

## Project Architecture

This is a **Next.js 15** React application for the Pomotea landing page, built with modern web technologies and focused on performance and user experience.

### Tech Stack
- **Framework**: Next.js 15 with App Router
- **Styling**: TailwindCSS 4.x with custom CSS variables
- **UI Components**: Radix UI primitives with shadcn/ui configuration
- **Animations**: GSAP with ScrollTrigger for advanced scroll-based animations
- **Icons**: Lucide React icons
- **Typography**: Karla font (Google Fonts via @fontsource)
- **Theme System**: Custom CSS variables with dark/light mode support

### Key Architecture Patterns

**Component Organization**: 
- Main landing page components are in `components/landing/`
- Feature showcase components follow a pattern: `[feature].showcase.tsx` and `[feature].workflow.tsx`
- Shared UI components are in `components/ui/` following shadcn/ui conventions
- Feature data is centralized in `components/landing/features/data.ts`

**Animation System**:
- GSAP is registered globally with ScrollTrigger plugin
- Scroll-based animations are used extensively for feature showcases
- Animation context is properly cleaned up using `gsap.context()`
- Progress indicators and spotlight effects are animation-driven

**Feature Structure**:
- Each major feature (AI, Tasks, Goals, Settings) has dedicated showcase and workflow components
- Features use a consistent data structure from `data.ts` for icons, titles, and descriptions
- Scroll progress is tracked across 4 main feature sections

**Styling Architecture**:
- CSS custom properties defined in `app/styles/` for consistent theming
- Landing-specific styles use `landing-` prefixed CSS variables
- Component-specific styles in `components.css` and `landing.css`
- TailwindCSS configuration supports both custom properties and utility classes

### File Structure Highlights

- `app/page.tsx` - Simple entry point that renders the main landing component
- `components/landing.tsx` - Main landing page orchestrator with GSAP setup
- `components/landing/features/` - All feature showcase components and shared data
- `components/landing/modals/` - Waitlist and beta tester modals
- `app/styles/` - Centralized CSS with theme variables and component styles

### Development Notes

- Uses `"use client"` directives for client-side features (GSAP, interactions)
- Imports use `@/` path mapping configured in `tsconfig.json`
- Component refs are properly typed and managed for GSAP animations
- Feature showcases use index-based activation system for scroll progress tracking
