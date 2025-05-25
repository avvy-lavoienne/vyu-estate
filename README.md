# Estatein - Modern Real Estate Website

A modern, production-ready real estate website built with Next.js 15, featuring a responsive design, comprehensive property listings, and seamless user experience.

## 🚀 Features

- **Modern Design**: Pixel-perfect implementation of the Figma design with dark theme
- **Responsive Layout**: Optimized for mobile, tablet, and desktop viewports
- **Next.js 15**: Built with the latest Next.js features including App Router and Server Components
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Performance Optimized**: Image optimization, lazy loading, and efficient code splitting
- **SEO Ready**: Proper meta tags, structured data, and semantic HTML
- **Accessibility**: WCAG compliant with proper ARIA attributes and keyboard navigation

## 📋 Pages

- **Home**: Hero section, services overview, featured properties, testimonials, and FAQ
- **About Us**: Company journey, values, achievements, team, and client testimonials
- **Properties**: Property search, filtering, and comprehensive property listings
- **Services**: Detailed service offerings and value propositions
- **Contact**: Contact information, inquiry form, and office locations
- **Property Details**: Individual property pages with galleries, specifications, and pricing

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Image Optimization**: Next.js Image component

## 📦 Installation

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd estatein-website
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

\`\`\`
estatein-website/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── properties/        # Properties pages
│   ├── services/          # Services page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── ui/               # UI primitives
│   ├── about/            # About page components
│   ├── contact/          # Contact page components
│   ├── properties/       # Property components
│   ├── services/         # Service components
│   └── ...               # Other components
├── lib/                  # Utility functions and data
├── public/               # Static assets
└── ...                   # Configuration files
\`\`\`

## 🎨 Design System

### Colors
- **Primary**: Purple (#7c3aed)
- **Background**: Dark gray (#111827)
- **Cards**: Medium gray (#1f2937)
- **Text**: White and gray variants
- **Accents**: Purple variants for interactive elements

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold weights with proper hierarchy
- **Body**: Regular weight with good readability

### Components
- **Cards**: Rounded corners with subtle borders
- **Buttons**: Purple primary with hover states
- **Forms**: Dark theme with proper validation
- **Navigation**: Fixed header with mobile menu

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for any environment-specific variables:

\`\`\`env
# Add your environment variables here
NEXT_PUBLIC_SITE_URL=http://localhost:3000
\`\`\`

### Tailwind Configuration
The project uses a custom Tailwind configuration with:
- Dark mode support
- Custom color palette
- Extended spacing and sizing
- Animation utilities

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ⚡ Performance

- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic route-based code splitting
- **Server Components**: Reduced client-side JavaScript
- **Caching**: Optimized caching strategies

## 🔍 SEO

- **Meta Tags**: Comprehensive meta tags for all pages
- **Structured Data**: JSON-LD for better search engine understanding
- **Semantic HTML**: Proper HTML5 semantic elements
- **Open Graph**: Social media sharing optimization

## ♿ Accessibility

- **WCAG Compliance**: Follows WCAG 2.1 guidelines
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Readers**: Proper ARIA labels and descriptions
- **Color Contrast**: Sufficient contrast ratios

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
\`\`\`bash
npm run build
npm start
\`\`\`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation

---

Built with ❤️ using Next.js 15 and modern web technologies.
