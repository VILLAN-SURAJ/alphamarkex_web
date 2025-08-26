# Alphamarkex React Website

A modern React-based website for Alphamarkex, a performance-driven marketing agency. This project converts the original HTML/CSS/JavaScript website into a modern React application with improved performance, maintainability, and user experience.

## 🚀 Features

- **Modern React 18** with functional components and hooks
- **React Router** for seamless navigation between pages
- **Responsive Design** that works on all devices
- **Interactive ChatBot** (AlphaMan) with quick reply functionality
- **Animated Background** with moving stars
- **Portfolio Gallery** with mobile-friendly sliders
- **Contact Forms** integrated with Google Sheets
- **Blog Integration** with WordPress API
- **SEO Optimized** with proper meta tags and structure

## 📋 Pages

1. **Home** - Hero section, services overview, and call-to-action
2. **About** - Company story, mission, vision, and team information
3. **Services** - Detailed service descriptions with visual presentations
4. **Portfolio** - Complete portfolio showcase with image galleries and sliders
5. **Design** - Design category showcase (bags, packaging, ads, perfume)
6. **Book/Quote** - Contact form for service inquiries and quotes
7. **Blog** - WordPress blog integration with post listings

## 🛠 Technologies Used

- **React 18.2.0** - Frontend framework
- **React Router 6.8.1** - Client-side routing
- **CSS3** - Custom styling with CSS modules
- **Font Awesome 6.5.0** - Icons and visual elements
- **Google Fonts** - Typography (Montserrat, Segoe UI)
- **Axios 1.6.7** - HTTP client for API requests

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd alphamarkex-react
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Add your assets:**
   - Copy images from the original project to `public/images/`
   - Follow the structure outlined in `public/images/placeholder.txt`
   - Add videos to `public/videos/`
   - Add audio files to `public/sounds/`

4. **Start the development server:**
   ```bash
   npm start
   ```

5. **Open your browser:**
   Navigate to `http://localhost:3000`

## 🏗 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header.js       # Navigation header
│   ├── Footer.js       # Site footer
│   ├── ChatBot.js      # Interactive chatbot
│   └── StarAnimation.js # Background animation
├── pages/              # Page components
│   ├── Home.js         # Homepage
│   ├── About.js        # About page
│   ├── Services.js     # Services page
│   ├── Portfolio.js    # Portfolio page
│   ├── Design.js       # Design showcase
│   ├── Book.js         # Contact/Quote form
│   └── Blog.js         # Blog page
├── App.js              # Main app component
├── App.css             # Global styles
└── index.js            # Entry point

public/
├── images/             # Image assets
├── videos/             # Video files
├── sounds/             # Audio files
└── index.html          # HTML template
```

## ⚙️ Configuration

### Google Sheets Integration

The contact forms are configured to submit to Google Sheets. Update the following URLs in the respective components:

- **Book.js**: Update the Google Apps Script URL for the booking form
- **Portfolio.js**: Update the Google Apps Script URL for the portfolio quote form

### WordPress Blog Integration

The blog page fetches posts from WordPress. Update the WordPress site URL in `Blog.js`:

```javascript
const response = await fetch(
  "https://public-api.wordpress.com/wp/v2/sites/YOUR-SITE.wordpress.com/posts"
);
```

### ChatBot Configuration

The ChatBot component includes predefined responses and navigation. Customize the responses in `ChatBot.js` to match your business requirements.

## 🎨 Styling

The project uses a combination of:

- **CSS Custom Properties** for consistent theming
- **Responsive Design** with mobile-first approach
- **CSS Grid and Flexbox** for modern layouts
- **Smooth Animations** and transitions for enhanced UX

### Color Scheme
- Primary: `#007bff` (Blue)
- Primary Hover: `#339dff` (Light Blue)
- Text: `#222222` (Dark Gray)
- Background: `#ffffff` (White)

## 📱 Responsive Features

- **Mobile Navigation** with hamburger menu
- **Image Sliders** for portfolio viewing on mobile devices
- **Responsive Grid Layouts** that adapt to screen size
- **Touch-Friendly Interactions** for mobile users

## 🤖 ChatBot Features

The AlphaMan chatbot includes:

- **Quick Reply Buttons** for common inquiries
- **Service Information** with detailed descriptions
- **Navigation Assistance** to different pages
- **Contact Information** display
- **Interactive Responses** with personality

## 🔧 Development

### Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add the route in `App.js`
3. Update navigation in `Header.js`
4. Add appropriate styling

### Customizing Styles

1. Update CSS custom properties in `App.css` for global changes
2. Modify component-specific styles in their respective CSS files
3. Use consistent spacing and color variables

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates a `build` folder with optimized files ready for deployment.

### Deployment Options

- **Netlify**: Connect your GitHub repository for automatic deployments
- **Vercel**: Import your project for seamless deployment
- **GitHub Pages**: Use the build folder for static hosting
- **Traditional Hosting**: Upload the build folder contents to your web server

## 🔄 Migration from Original

This React version includes all features from the original HTML website:

✅ **Converted Features:**
- All 7 pages with identical functionality
- Interactive chatbot with original responses
- Portfolio galleries with mobile sliders
- Contact forms with Google Sheets integration
- Blog integration with WordPress API
- Background animations and effects
- Responsive design across all devices

✅ **Improvements:**
- Better performance with React optimization
- Improved code organization and maintainability
- Enhanced mobile experience
- Better SEO structure
- Modern development workflow

## 📞 Support

For questions about the React implementation or customization:

1. Check the component documentation in code comments
2. Refer to React and React Router official documentation
3. Contact the development team for specific business logic questions

## 📄 License

This project is proprietary to Alphamarkex. All rights reserved.

---

**Built with ❤️ for Alphamarkex - Leading trends, shaping brands, and exchanging ideas that create growth.**
