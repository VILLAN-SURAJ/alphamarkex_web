import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ChatBot.css';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [quickReplies, setQuickReplies] = useState([]);
  const chatBoxRef = useRef(null);
  const navigate = useNavigate();

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      showMessage("bot", "Greetings, citizen! I'm AlphaMan — your brand's superhero. How can I save your day?", true);
      setQuickReplies(["Services", "Booking", "Contact Us", "About Us", "Pricing", "Portfolio"]);
    }
  };

  const showMessage = (sender, text, playSound = false) => {
    const newMessage = {
      id: Date.now(),
      sender,
      text,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, newMessage]);

    if (playSound) {
      // Optional: Add sound effect here
      try {
        const audio = new Audio('/whoosh-velocity-383019.mp3');
        audio.volume = 0.3;
        audio.play().catch(() => {
          // Ignore audio play errors
        });
      } catch (error) {
        // Ignore audio errors
      }
    }
  };

  const handleQuickReply = (choice) => {
    showMessage("user", choice, true);

    setTimeout(() => {
      switch (choice) {
        case "Services":
          showMessage("bot", "Here's my heroic arsenal of services! Choose one to reveal its powers:", true);
          setQuickReplies([
            "Video Editing", "Thumbnail Design", "SMO", "Print Design", "Branding",
            "Traditional Marketing", "Social Media Marketing", "Portfolio Creation",
            "Landing Page", "Packaging Design", "Social Media Management", "Website",
            "Logo Designing", "Photoshoots", "Campaigns", "Back"
          ]);
          break;

        case "Booking":
          showMessage("bot", "To book my superhero skills, I'll fly you to the booking page now! 🦸‍♂️", true);
          setTimeout(() => {
            navigate('/book');
          }, 1500);
          break;

        case "Contact Us":
          showMessage("bot", "📧 Mail us at team@alphamarkex.com or 📞 call on +91 9235860901 — We'll reach you in 24 hours!", true);
          break;

        case "About Us":
          showMessage("bot", "We are AlphaMarkex — blending creativity & heroism to make your brand soar above the rest!", true);
          break;

        case "Pricing":
          showMessage("bot", "Even superheroes have fair rates! Let's discuss and make your budget fly high. Would you like to get a quote?", true);
          setTimeout(() => {
            setQuickReplies(["Yes, Get Quote", "Tell me more", "Back"]);
          }, 500);
          break;

        case "Portfolio":
          showMessage("bot", "Feast your eyes on my past heroic deeds! Check out our amazing portfolio.", true);
          setTimeout(() => {
            navigate('/portfolio');
          }, 1000);
          break;

        case "Yes, Get Quote":
          navigate('/book');
          break;

        case "Back":
          setQuickReplies(["Services", "Booking", "Contact Us", "About Us", "Pricing", "Portfolio"]);
          break;

        default:
          // Individual service responses
          const serviceReplies = {
            "Video Editing": "I splice, dice, and add cinematic flair so your videos have more punch than a supervillain's plot!",
            "Thumbnail Design": "Thumbnails so good, people will click faster than a speeding bullet!",
            "SMO": "Social Media Optimization — making your brand more visible than a hero's cape in the wind.",
            "Print Design": "From flyers to posters, I make print materials that leap off the page!",
            "Branding": "I craft your identity so strong, even kryptonite can't weaken it.",
            "Traditional Marketing": "Old-school tactics with a heroic twist — billboards, flyers, and more!",
            "Social Media Marketing": "I'll boost your social presence faster than I chase villains.",
            "Portfolio Creation": "I'll present your best work so well it could win awards.",
            "Landing Page": "Pages so persuasive, visitors can't resist taking action!",
            "Packaging Design": "Make your product look like it belongs in a hero's utility belt.",
            "Social Media Management": "I'll handle your posts while you handle your success.",
            "Website": "I'll build a fortress of code that looks amazing and performs even better.",
            "Logo Designing": "Your brand's emblem — designed to inspire like the Bat-Signal.",
            "Photoshoots": "Capture moments so epic, they belong in a comic book.",
            "Campaigns": "Strategic missions to win hearts, minds, and market share."
          };

          if (serviceReplies[choice]) {
            showMessage("bot", serviceReplies[choice], true);
          }
          break;
      }
    }, 800);
  };

  // Auto scroll to bottom when new messages are added
  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <>
      <div className="bot-icon" onClick={toggleChat}>
        <img src="/ChatGPT Image Aug 7, 2025, 11_32_23 PM.png" alt="AlphaMan" />
      </div>

      {isOpen && (
        <div className="chat-container">
          <div className="chat-header">
            <div className="header-left">
              <img src="/ChatGPT Image Aug 7, 2025, 11_32_23 PM.png" alt="AlphaMan" />
              <span>AlphaMan</span>
            </div>
            <div className="close-btn" onClick={toggleChat}>×</div>
          </div>
          
          <div className="chat-box" ref={chatBoxRef}>
            {messages.map((message) => (
              <div key={message.id} className={`message ${message.sender}`}>
                {message.sender === "bot" && (
                  <img 
                    src="/ChatGPT Image Aug 7, 2025, 11_32_23 PM.png" 
                    alt="AlphaMan" 
                    className="bot-avatar" 
                  />
                )}
                <div className={`bubble ${message.sender}`}>
                  {message.text}
                </div>
              </div>
            ))}
          </div>
          
          <div className="quick-buttons">
            {quickReplies.map((reply, index) => (
              <button
                key={index}
                onClick={() => handleQuickReply(reply)}
              >
                {reply}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
