import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import StarAnimation from './components/StarAnimation';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Design from './pages/Design';
import Book from './pages/Book';
import Blog from './pages/Blog';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <StarAnimation />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/design" element={<Design />} />
            <Route path="/book" element={<Book />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>
        <Footer />
        <ChatBot />
      </div>
    </Router>
  );
}

export default App;
