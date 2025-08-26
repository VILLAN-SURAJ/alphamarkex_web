# Alphamarkex React Website - Deployment Guide

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager
- Your original images and media files

### Step 1: Setup
```bash
# Install dependencies
npm install

# Copy your assets
# Copy images from your original project to public/images/
# Follow the structure in public/images/placeholder.txt
```

### Step 2: Development
```bash
# Start React development server
npm start

# In a new terminal, start the backend server (optional)
npm run server:dev
```

### Step 3: Production Build
```bash
# Build the React app
npm run build

# Start production server
npm run server
```

## 🌐 Deployment Options

### Option 1: Netlify (Recommended for Static Hosting)

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify:**
   - Connect your GitHub repository to Netlify
   - Set build command: `npm run build`
   - Set publish directory: `build`
   - Deploy automatically on every push

3. **Configure redirects** (create `public/_redirects`):
   ```
   /*    /index.html   200
   ```

### Option 2: Vercel

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   npm run build
   vercel --prod
   ```

### Option 3: Traditional Web Hosting

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Upload the `build` folder contents to your web server**

3. **Configure your server** to serve `index.html` for all routes

### Option 4: Full-Stack Deployment (with Backend)

#### Using Heroku:

1. **Create `Procfile` in project root:**
   ```
   web: npm run build && npm run server
   ```

2. **Add heroku-postbuild script to package.json:**
   ```json
   "scripts": {
     "heroku-postbuild": "npm run build"
   }
   ```

3. **Deploy to Heroku:**
   ```bash
   heroku create alphamarkex-app
   git push heroku main
   ```

#### Using Digital Ocean/AWS/VPS:

1. **Setup Node.js environment**
2. **Install PM2 for process management:**
   ```bash
   npm install -g pm2
   ```

3. **Build and start:**
   ```bash
   npm run build
   cd server
   npm install
   pm2 start server.js --name "alphamarkex"
   ```

## ⚙️ Environment Configuration

### Environment Variables

Create `.env` file for environment-specific settings:

```env
# React App
REACT_APP_API_URL=http://localhost:3001
REACT_APP_WORDPRESS_SITE=alphamarkex.wordpress.com

# Server
PORT=3001
NODE_ENV=production
```

### Google Sheets Integration

Update the Google Apps Script URLs in:
- `src/pages/Book.js` (line 35)
- `src/pages/Portfolio.js` (line 89)

### WordPress Blog Integration

Update WordPress site URL in `src/pages/Blog.js` (line 15):
```javascript
const response = await fetch(
  "https://public-api.wordpress.com/wp/v2/sites/YOUR-SITE.wordpress.com/posts"
);
```

## 🔧 Configuration Checklist

### Before Deployment:

- [ ] Copy all images to `public/images/` folder
- [ ] Update Google Sheets URLs in forms
- [ ] Update WordPress site URL in Blog component
- [ ] Test all pages and functionality locally
- [ ] Verify mobile responsiveness
- [ ] Test contact forms
- [ ] Check ChatBot functionality
- [ ] Verify all navigation links work
- [ ] Test image galleries and sliders

### After Deployment:

- [ ] Verify all pages load correctly
- [ ] Test contact form submissions
- [ ] Check blog post loading
- [ ] Verify ChatBot responses
- [ ] Test mobile navigation
- [ ] Check image loading and optimization
- [ ] Verify Google Analytics/tracking (if added)
- [ ] Test social media links
- [ ] Check favicon and meta tags

## 🚨 Troubleshooting

### Common Issues:

**Images not loading:**
- Ensure images are in `public/images/` folder
- Check file paths match the component references
- Verify image file extensions are correct

**Routing issues in production:**
- Configure server redirects to serve `index.html` for all routes
- For Apache, add `.htaccess` file:
  ```apache
  Options -MultiViews
  RewriteEngine On
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteRule ^ index.html [QR,L]
  ```

**API calls failing:**
- Update API URLs for production environment
- Check CORS configuration if using separate backend
- Verify SSL certificates for HTTPS

**Build errors:**
- Run `npm install` to ensure all dependencies are installed
- Clear node_modules and reinstall if needed
- Check for any linting errors with `npm run build`

## 📊 Performance Optimization

### Pre-deployment Optimization:

1. **Image Optimization:**
   - Compress images using tools like TinyPNG
   - Convert to WebP format where supported
   - Implement lazy loading for gallery images

2. **Bundle Analysis:**
   ```bash
   npm install -g webpack-bundle-analyzer
   npm run build
   npx webpack-bundle-analyzer build/static/js/*.js
   ```

3. **Lighthouse Audit:**
   - Run Google Lighthouse on your deployed site
   - Address performance, accessibility, and SEO recommendations

### Post-deployment Monitoring:

- Set up Google Analytics
- Monitor Core Web Vitals
- Use tools like GTmetrix or PageSpeed Insights
- Monitor error logs for any runtime issues

## 🔐 Security Considerations

- Keep dependencies updated: `npm audit fix`
- Use HTTPS in production
- Implement proper CORS policies
- Sanitize form inputs if handling on backend
- Use environment variables for sensitive data
- Regularly update Node.js and npm versions

---

**✅ Your Alphamarkex React website is now ready for deployment!**

For additional support or customization, refer to the comprehensive README.md file or contact the development team.
