# Data Consultants Corporation (DCC) - Angular Website

A modern, responsive website for Data Consultants Corporation built with Angular 15, Tailwind CSS, and best practices for enterprise web applications.

## 🚀 Features

### Modern Design
- **Glass morphism effects** with backdrop blur
- **Responsive design** that works on all devices
- **Premium animations** and micro-interactions
- **Professional branding** with custom colors and typography

### Modular Architecture
- **Component-based architecture** for maintainability
- **Separation of concerns** with dedicated services
- **Reusable components** for scalability
- **TypeScript** for type safety

### Key Sections
1. **Hero Slider** - Dynamic content showcase
2. **About Section** - Company overview with statistics
3. **Services** - Core competencies display
4. **Success Stories** - Interactive case studies
5. **Trusted By** - Animated partner logos
6. **Contact Footer** - Newsletter subscription

## 🛠 Tech Stack

- **Angular 15** - Modern web framework
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type-safe JavaScript
- **Font Awesome** - Professional icons
- **Plus Jakarta Sans** - Modern typography

## 🏗 Project Structure

```
src/app/
├── components/
│   ├── layout/
│   │   ├── header/          # Navigation with dropdowns
│   │   └── footer/          # Contact and links
│   └── home/
│       ├── hero/            # Dynamic slider
│       ├── about/           # Company info
│       ├── services/        # Core competencies
│       ├── success-stories/ # Case studies
│       └── trusted-by/      # Partner logos
├── services/
│   ├── navigation.service   # Menu data management
│   └── content.service      # Content data management
└── styles.scss              # Global styles and CSS variables
```

## 🎨 Design System

### Colors
- **Primary Brand**: `#fb9902` (Orange)
- **Brand Dark**: `#e58a00`
- **Glass Background**: `rgba(255, 255, 255, 0.6)`
- **Text Primary**: `#1e293b`

### Typography
- **Font Family**: Plus Jakarta Sans
- **Weights**: 300, 400, 500, 600, 700, 800
- **Responsive sizing** with Tailwind classes

### Components
- **Glass Cards**: Backdrop blur with subtle borders
- **Section Tags**: Branded pill-shaped labels
- **CTA Buttons**: Premium styling with shadows
- **Navigation**: Multi-level dropdowns

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd dcc-angular-new

# Install dependencies
npm install

# Start development server
npm start
```

### Development Commands
```bash
# Serve the app in development mode
npm start

# Build for production
npm run build

# Run tests
npm test

# Generate new component
ng generate component components/new-component
```

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🎯 Key Features Implementation

### Navigation
- **Multi-level dropdown menus**
- **Mobile hamburger menu**
- **Scroll-based header styling**
- **Smooth scroll navigation**

### Hero Section
- **Auto-rotating slides** (6-second intervals)
- **Interactive dot navigation**
- **Responsive image handling**
- **Dynamic content loading**

### Services
- **Grid-based layout**
- **Hover animations**
- **Icon integration**
- **Content from service layer**

### Success Stories
- **Dark-themed cards**
- **Image overlay effects**
- **Metric highlighting**
- **Responsive grid**

## 🔧 Configuration

### Tailwind Configuration
Custom brand colors and utilities configured in `tailwind.config.js`

### Angular Configuration
- **Strict TypeScript** enabled
- **OnPush change detection** for performance
- **Lazy loading** ready architecture

## 📈 Performance Features

- **Optimized images** with proper sizing
- **CSS animations** using transform properties
- **Minimal JavaScript** for smooth performance
- **Tree-shaking** enabled for production builds

## 🔍 SEO Features

- **Semantic HTML** structure
- **Meta tags** and descriptions
- **Proper heading hierarchy**
- **Alt texts** for all images

## 🎨 Customization

### Adding New Sections
1. Generate component: `ng g c components/new-section`
2. Add to app.component.html
3. Update content service if needed
4. Style with Tailwind classes

### Updating Content
- Modify `content.service.ts` for dynamic content
- Update `navigation.service.ts` for menu items
- Edit component templates for static content

## 📦 Build & Deployment

```bash
# Build for production
npm run build

# The dist/ folder contains all files needed for deployment
```

## 🤝 Contributing

1. Follow Angular style guide
2. Use TypeScript strict mode
3. Implement responsive design
4. Add proper error handling
5. Write clear commit messages

## 📄 License

This project is proprietary to Data Consultants Corporation.

## 🏢 About DCC

Data Consultants Corporation has been delivering premium IT consulting services since 1985, specializing in:
- SAP & Oracle solutions
- Gen AI implementation
- Cybersecurity services
- Enterprise modernization

**Global Presence**: USA • Africa • India
