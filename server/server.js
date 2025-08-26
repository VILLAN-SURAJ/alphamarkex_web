const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

// Enable CORS for all routes
app.use(cors());

// Parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the React app build directory
app.use(express.static(path.join(__dirname, '../build')));

// API Routes (if needed for future backend functionality)
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Alphamarkex API is running' });
});

// Contact form endpoint (optional - can be used instead of Google Sheets)
app.post('/api/contact', (req, res) => {
  const { name, email, phone, message } = req.body;
  
  // Here you could:
  // 1. Save to database
  // 2. Send email notification
  // 3. Integrate with CRM
  
  console.log('Contact form submission:', {
    name,
    email,
    phone,
    message,
    timestamp: new Date().toISOString()
  });

  res.json({ 
    success: true, 
    message: 'Thank you for your message! We will get back to you soon.' 
  });
});

// Quote form endpoint (optional - can be used instead of Google Sheets)
app.post('/api/quote', (req, res) => {
  const { name, business, requirement, email, phone, budget, message } = req.body;
  
  console.log('Quote form submission:', {
    name,
    business,
    requirement,
    email,
    phone,
    budget,
    message,
    timestamp: new Date().toISOString()
  });

  res.json({ 
    success: true, 
    message: 'Thank you for your quote request! We will contact you within 24 hours.' 
  });
});

// Catch all handler: send back React's index.html file for any non-API routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`
🚀 Alphamarkex Server is running!
📱 App: http://localhost:${PORT}
🔧 API: http://localhost:${PORT}/api/health
🏢 Environment: ${process.env.NODE_ENV || 'development'}
  `);
});

module.exports = app;
