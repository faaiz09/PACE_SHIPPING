# Pace Marine Solutions

A modern, responsive shipping website built with React, Vite, and TailwindCSS. The website features smooth animations, a cool shipping-themed loader, and comprehensive information about maritime services.

## Features

- 🚢 Modern and responsive design
- ⚡ Fast performance with Vite
- 🎨 Beautiful animations with Framer Motion
- 📱 Mobile-first approach
- 🌊 Shipping-themed loader and transitions
- 📝 Comprehensive service pages
- 📞 Contact form with validation
- 🔍 SEO optimized with React Helmet
- 🎯 Interactive UI elements

## Pages

- Home
- About Us
- Our Associates
- Our Network
- Contact Us
- Careers
- Gallery
- Share File
- Services
  - Terminal Consulting
  - Ship to Ship Operations
  - Training Programs
  - Commercial Services

## Technologies Used

- React 18
- Vite
- TailwindCSS
- Framer Motion
- React Router
- React Icons
- React Helmet Async
- React Intersection Observer

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/pace-shipping-solution.git
cd pace-shipping-solution
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   └── PageLoader.jsx
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Services.jsx
│   ├── Contact.jsx
│   └── ...
├── App.jsx
├── main.jsx
└── index.css
```

## Customization

### Colors

The color scheme can be customized in the `tailwind.config.js` file:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        DEFAULT: '#1a365d',
        light: '#2c5282',
        dark: '#0f172a',
      },
      secondary: {
        DEFAULT: '#38b2ac',
        light: '#4fd1c5',
        dark: '#2c7a7b',
      },
      accent: {
        DEFAULT: '#f6ad55',
        light: '#fbd38d',
        dark: '#ed8936',
      },
    },
  },
}
```

### Animations

Custom animations can be added in `index.css`:

```css
@keyframes custom-animation {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries, please contact us at info@paceshipping.com 
