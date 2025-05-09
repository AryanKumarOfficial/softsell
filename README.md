# SoftSell Marketing Website

A responsive, single-page marketing site for SoftSell - a fictional software-resale startup that allows businesses to buy and sell unused software licenses.

## Live Demo

This site is deployed at: [https://softsell-demo.vercel.app/](https://softsell-demo.vercel.app/)

## Features

### Core Components
- **Header**: Responsive navigation with smooth-scrolling and a mobile menu
- **Hero Section**: Eye-catching headline, description, and CTA buttons with a visual representation of software savings
- **How It Works**: 3-step process with icons explaining the platform's workflow
- **Why Choose Us**: 4 benefit cards highlighting the platform's advantages
- **Testimonials**: Customer reviews showcasing positive experiences
- **Contact Form**: Lead capture form with front-end validation for Name, Email, Company, License Type, and Message
- **Chat Widget**: AI-powered chat that handles common questions about software license sales
- **Footer**: Site navigation, company information, and legal links

### Technical Features

- Built with Next.js for optimal performance and SEO
- Fully responsive design for all screen sizes
- Interactive animations with Framer Motion
- Typed with TypeScript for improved code quality and developer experience
- Styled with Tailwind CSS for rapid development
- Form validation for the contact form
- Smooth scroll navigation between sections

## Design Decisions

### Technology Stack
- **Next.js**: Chosen for its performance benefits, SEO capabilities, and developer experience
- **TypeScript**: For type safety and improved code quality
- **Tailwind CSS**: For rapid styling and consistent design system
- **Framer Motion**: To add subtle animations that enhance user experience

### Color Palette
- Primary blue colors for CTAs and interactive elements
- Neutral/gray tones for text and backgrounds
- High contrast for accessibility
- Consistent use of rounded corners and shadows for depth

### Typography
- Poppins for headings (font-display class)
- Inter for body text (font-sans class)
- Responsive font sizes across breakpoints

### Component Architecture
- Modular components organized by feature
- Responsive design built into each component
- Client-side interaction isolated with 'use client' directives

## Development Time

| Component/Feature | Time Spent |
|-------------------|------------|
| Project Setup & Configuration | 1.5 hours |
| Hero Section | 1.5 hours |
| How It Works | 1 hour |
| Why Choose Us | 1 hour |
| Testimonials | 1 hour |
| Contact Form with Validation | 2 hours |
| AI Chat Widget | 2.5 hours |
| Header Navigation | 1.5 hours |
| Footer | 1 hour |
| Responsive Testing & Fixes | 1.5 hours |
| Animation & Polish | 1.5 hours |
| **Total** | **15 hours** |

## Running the Project Locally

1. Clone this repository
```bash
git clone https://github.com/yourusername/softsell.git
cd softsell
```

2. Install dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Future Enhancements

- Full authentication flow for user accounts
- Marketplace browser with filters and search
- Integration with a payment processor
- Admin dashboard for license verification
- Multi-language support
