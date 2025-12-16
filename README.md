# South Asia Materials Testing Laboratory

<div align="center">

![South Asia Logo](public/southasia.png)

**Nepal's Premier Materials Testing Laboratory**

Committed to rigorous precision and inspired by the pursuit of discovery


</div>

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Design System](#design-system)
- [Services](#services)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## 🎯 About

**Southasia Materials Science and Engineering Research (SA)** is a comprehensive web platform for Nepal's leading materials testing laboratory located in Chitwan. The website showcases our complete range of testing services, from geotechnical investigations to environmental analysis, providing clients with easy access to information and service requests.

### Key Highlights

- 🏆 **One-Stop Solution**: All testing services under one roof
- 🔬 **State-of-the-Art Equipment**: Latest testing instruments for accurate results
- 👨‍🔬 **Expert Team**: Qualified engineers and scientists
- ⏰ **24/7 Support**: Round-the-clock assistance
- 🏔️ **Nepal-Focused**: Understanding local terrain and requirements

---

## ✨ Features

### Core Features

- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Dark/Light Mode**: Toggle between themes with system preference detection
- **Modern UI/UX**: Clean, professional interface with smooth animations
- **SEO Optimized**: Complete meta tags, Open Graph, and structured data
- **Accessibility**: WCAG compliant with semantic HTML

### Sections

1. **Hero Section**: Eye-catching introduction with trust indicators
2. **About Section**: Company vision, values, and credentials
3. **Services Section**: Comprehensive listing of 6+ testing services
4. **Why Choose Us**: Key advantages and statistics
5. **Industries Section**: Sectors we serve with detailed applications
6. **Blog Section**: Technical guides and industry insights
7. **Contact Section**: Multi-channel contact form with validation
8. **Footer**: Complete site navigation and company information

### Technical Features

- **Type-Safe**: Built with TypeScript for robust code
- **Component Library**: shadcn/ui components for consistency
- **Form Validation**: React Hook Form with Zod schemas
- **Toast Notifications**: User feedback with Sonner
- **Smooth Scrolling**: Anchor navigation between sections
- **Custom Animations**: Tailwind CSS animations and transitions

---

## 🛠️ Tech Stack

### Frontend Framework
- **React 18.3** - UI library
- **TypeScript 5.8** - Type safety
- **Vite 5.4** - Build tool & dev server

### Styling
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **Custom Design System** - Brand colors and components
- **CSS Variables** - Theme switching support

### UI Components
- **shadcn/ui** - Component library
- **Radix UI** - Headless UI primitives
- **Lucide React** - Icon library

### Forms & Validation
- **React Hook Form** - Form management
- **Zod** - Schema validation

### Routing & State
- **React Router DOM 6** - Client-side routing
- **TanStack Query** - Server state management

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **SWC** - Fast compilation

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** >= 18.0.0
- **npm** or **yarn** or **pnpm**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/sa-materials.git
   cd sa-materials
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open browser**
   ```
   http://localhost:8080
   ```

---

## 📁 Project Structure

```
sa-materials/
├── public/                  # Static assets
│   ├── placeholder.svg     # Logo placeholder
│   └── robots.txt          # SEO robots file
│
├── src/
│   ├── assets/             # Images, fonts, etc.
│   ├── components/         # React components
│   │   ├── layout/         # Layout components (Navbar)
│   │   ├── sections/       # Page sections
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── WhyChoose.tsx
│   │   │   ├── Industries.tsx
│   │   │   ├── Blog.tsx
│   │   │   ├── Contact.tsx
│   │   │   └── Footer.tsx
│   │   └── ui/             # shadcn/ui components
│   │
│   ├── data/               # Static data
│   │   └── blogData.ts     # Blog posts data
│   │
│   ├── hooks/              # Custom React hooks
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   │
│   ├── lib/                # Utility functions
│   │   └── utils.ts
│   │
│   ├── pages/              # Route pages
│   │   ├── Index.tsx
│   │   └── NotFound.tsx
│   │
│   ├── App.tsx             # Root component
│   ├── main.tsx            # Entry point
│   └── index.css           # Global styles
│
├── components.json         # shadcn/ui config
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript config
├── vite.config.ts          # Vite configuration
└── package.json            # Dependencies
```

---

## 📜 Available Scripts

```bash
# Development
npm run dev              # Start dev server (localhost:8080)

# Building
npm run build           # Production build
npm run build:dev       # Development build

# Quality
npm run lint            # Run ESLint
npm run preview         # Preview production build

# Type Checking
npm run type-check      # Check TypeScript types
```

---

## 🎨 Design System

### Brand Colors

```typescript
// Gold Palette (Primary)
--sa-gold: #D4A647          // Primary gold
--sa-gold-light: #E0B963    // Light gold
--sa-gold-dark: #B08D35     // Dark gold

// Purple Palette (Accent)
--sa-purple: #2D1F4A        // Deep purple
--sa-purple-light: #4A3666  // Light purple
--sa-purple-dark: #1E142F   // Dark purple

// Neutral
--sa-cream: #F5F1E8         // Cream background
--sa-slate: #64748B         // Slate text
```

### Typography

- **Primary Font**: Inter (Sans-serif)
- **Display Font**: Playfair Display (Serif)

### Component Variants

- `hero` - Gold gradient primary button
- `hero-outline` - Gold outline button
- `purple` - Purple gradient button
- `purple-outline` - Purple outline button

---

## 🧪 Services

### Testing Services Offered

1. **Geotechnical & Geophysical Investigations**
   - Drilling & Boring
   - SPT, CPT, Vane Shear Tests
   - Seismic Surveys
   - Resistivity Testing

2. **Foundation Testing**
   - Static/Dynamic Pile Load Tests
   - Pile Integrity Testing (PIT)
   - Pull-out Tests

3. **Non-Destructive Testing (NDT)**
   - Ultrasonic Testing
   - Rebound Hammer Test
   - Corrosion Detection

4. **Pavement Investigation**
   - Falling Weight Deflectometer
   - Roughness Index Surveys
   - CBR Testing

5. **Construction Material Testing**
   - Concrete Testing
   - Steel Testing
   - Mix Design Services

6. **Environmental Testing**
   - Water Quality Testing
   - Air Quality Analysis
   - Soil Testing

---

## 🌐 Deployment



### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Netlify

```bash
# Build the project
npm run build

# Deploy the dist folder via Netlify CLI or dashboard
```

### Custom Domain

Connect your custom domain in Project Settings:
- Lovable: Project > Settings > Domains
- Vercel: Project Settings > Domains
- Netlify: Site Settings > Domain Management

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Style

- Follow ESLint rules
- Use TypeScript for type safety
- Write meaningful commit messages
- Add comments for complex logic

---

## 📄 License

This project is proprietary and confidential.

**© 2025 Southasia Materials Science and Engineering Research (SA). All rights reserved.**

---

## 📞 Contact

**South Asia Materials Testing Laboratory**

- 📍 **Address**: Sirjana Chowk, Bharatpur-10, Chitwan, Nepal
- 📞 **Phone**: +977-9862546765, 9855015491, 9855015492, 9855015493
- 📧 **Email**: southasia.materials.lab@gmail.com
- 🌐 **Website**: [Coming Soon]

### Business Information

- **Registration No**: 367842/081/082
- **PAN**: 622371582
- **Registered**: June 2025

---

## 🙏 Acknowledgments

- Design inspiration from modern testing laboratories worldwide
- Icons by [Lucide](https://lucide.dev)
- UI components by [shadcn/ui](https://ui.shadcn.com)


---

<div align="center">

**Made with ❤️ in Nepal**

[⬆ Back to Top](#south-asia-materials-testing-laboratory)

</div>