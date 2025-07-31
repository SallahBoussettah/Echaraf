# Echaraf Educational Institution Website

A modern, responsive website for Echaraf Educational Institution built with React, TypeScript, and Relume UI components.

## Features

- 🎨 Modern, clean design with Tailwind CSS
- 📱 Fully responsive layout
- ⚡ Built with Vite for fast development
- 🔧 TypeScript for type safety
- 🎭 Smooth animations with Framer Motion
- 📚 Educational content focused on middle and high school students

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project folder:
   ```bash
   cd echaraf-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Install Relume UI components:
   ```bash
   npm i @relume_io/relume-ui @relume_io/relume-tailwind
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:3000`

### Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.tsx      # Navigation component
│   ├── Hero.tsx        # Hero section
│   ├── Features.tsx    # Features section
│   ├── Subjects.tsx    # Core subjects section
│   ├── StudentPortal.tsx # Student portal features
│   ├── Testimonials.tsx # Customer testimonials
│   ├── Newsletter.tsx  # Newsletter signup
│   └── Footer.tsx      # Footer component
├── pages/              # Page components
│   └── Home.tsx        # Home page
├── App.tsx             # Main app component
├── main.tsx           # App entry point
└── index.css          # Global styles
```

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Relume UI** - Component library
- **Framer Motion** - Animations
- **React Router** - Routing
- **React Icons** - Icon library

## Customization

The website is designed to be easily customizable:

1. **Colors**: Modify the Tailwind config or use Relume's design tokens
2. **Content**: Update text content in each component
3. **Images**: Replace placeholder images with actual school photos
4. **Sections**: Add or remove sections by modifying the Home page component

## Next Steps

After setting up the home page, you can:

1. Create additional pages (About, Courses, Contact, etc.)
2. Add routing for navigation between pages
3. Implement authentication for student/parent portals
4. Add a content management system
5. Integrate with a backend API

## Support

For questions or support, please contact the development team.