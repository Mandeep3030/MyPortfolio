# Mandeep Singh - Portfolio Website

A modern, responsive portfolio website built with React + Vite, showcasing my skills, projects, and experience as a Software Engineering student.

## 🚀 Features

### Required Pages (6 Pages)
- **Home** - Welcome message, mission statement, and call-to-action button to About page
- **About Me** - Legal name, bio, photo placeholder, and PDF resume download link
- **Projects** - 3+ projects with images, descriptions, and technology highlights
- **Education** - Academic background, schools, years, degrees, and learning journey
- **Services** - Professional services offered with descriptions and technology lists
- **Contact** - Contact information panel + form (first name, last name, phone, email, message) → redirects to Home

### Additional Features
- ✅ Custom logo in navbar (MS initials with modern design)
- ✅ Fully responsive design (mobile-first approach)
- ✅ React Router for navigation
- ✅ Professional color scheme and typography
- ✅ Smooth animations and transitions
- ✅ Accessible design with proper ARIA labels
- ✅ Form validation with error handling
- ✅ Internal documentation with comments
- ✅ Modern component structure
- ✅ Optimized performance

## 🛠️ Technologies Used

- **Frontend Framework:** React 19.1.1
- **Build Tool:** Vite 7.1.7
- **Routing:** React Router DOM
- **Styling:** CSS3 with CSS Variables
- **Icons:** Emoji-based icons
- **Font:** System fonts (Segoe UI, Arial)

## 📁 Project Structure

```
src/
├── components/
│   ├── Layout/         # Main layout wrapper
│   ├── Navbar/         # Navigation header with logo
│   └── Footer/         # Site footer
├── pages/
│   ├── Home/           # Landing page with hero section
│   ├── About/          # Personal information & bio
│   ├── Projects/       # Project showcase with filtering
│   ├── Education/      # Academic timeline & achievements
│   ├── Services/       # Professional services offered
│   └── Contact/        # Contact form & information
├── data/
│   └── portfolio-data.js    # Centralized content data
├── styles/
│   └── global.css          # Global styles & CSS variables
└── assets/
    ├── images/             # Project images & photos
    ├── icons/              # Icon assets
    └── documents/          # Resume PDF
```

## 🎨 Design Features

### Color Palette
- **Primary:** #2c3e50 (Dark Blue-Gray)
- **Secondary:** #3498db (Blue)
- **Accent:** #e74c3c (Red)
- **Gradients:** Modern blue-purple gradients for visual appeal

### Typography
- **Primary Font:** Segoe UI system font stack
- **Responsive:** Fluid typography scaling with clamp()
- **Hierarchy:** Clear heading structure with proper contrast

### Layout
- **Container:** Max-width 1200px with responsive padding
- **Grid System:** CSS Grid for complex layouts
- **Flexbox:** For component alignment and distribution
- **Cards:** Consistent card design with shadows and hover effects

## 🚦 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## 📱 Responsive Breakpoints

- **Desktop:** 1200px+ (Full layout)
- **Tablet:** 768px - 1199px (Adjusted grid)
- **Mobile Large:** 481px - 767px (Single column)
- **Mobile Small:** 320px - 480px (Compact layout)

## 🔧 Key Components

### Navigation
- Fixed header with blur effect on scroll
- Custom logo with animated hover states
- Mobile hamburger menu with smooth transitions
- Active link highlighting

### Contact Form
- Full form validation with real-time feedback
- Required fields: first name, last name, phone, email, message
- Success/error states with visual feedback
- Automatic redirect to Home page after submission

### Project Showcase
- Technology-based filtering system
- Hover effects revealing demo/GitHub links
- Responsive grid layout
- Project statistics and overview

## 🎯 Academic Requirements Met

- ✅ 6 required pages implemented
- ✅ React + Vite project structure
- ✅ Custom logo in navbar
- ✅ Navigation between all pages
- ✅ Contact form with all required fields
- ✅ Resume PDF download functionality
- ✅ Professional design and responsive layout
- ✅ Internal code documentation
- ✅ Clean, maintainable code structure

## 🔮 Future Enhancements

- Backend integration for contact form
- Blog section with technical articles
- Dark/light theme toggle
- Advanced project filtering
- Performance analytics
- SEO optimization
- Progressive Web App features

## 👨‍💻 Developer

**Mandeep Singh**
- Email: Mandeep.singh3030@gmail.com
- LinkedIn: [linkedin.com/in/mandeepsingh3030](www.linkedin.com/in/mandeepsingh3030)
- GitHub: [github.com/mandeep3030](https://mandeep3030.github.io/Mandeep3030/)

## 📄 License

This project is created for educational purposes as part of the Software Engineering program at Centennial College.

---

*Built with ❤️ using React + Vite*+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
