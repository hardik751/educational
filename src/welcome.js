import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./welcome.css"; // Import CSS for styling

const WelcomePage = () => {
  const navigate = useNavigate();
  const [animationDone, setAnimationDone] = useState(false);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        navigate('/home');
      }
    };

    // Wait for 4-5 seconds before redirecting to the next page
    const timer = setTimeout(() => {
      setAnimationDone(true);
      setTimeout(() => {
        console.log("hello");
        navigate('/home'); // Redirect to the home page
      }, 1000); // Wait for the last animation to finish
    }, 8000);

    document.addEventListener('keypress', handleKeyPress); // Add event listener

    return () => {
      clearTimeout(timer); // Clear the timer on unmount
      document.removeEventListener('keypress', handleKeyPress); // Remove event listener
    };
  }, [navigate]);

  return (
    <div className={`welcome-page ${animationDone ? 'animation-done' : ''}`}>
      {/* Add your animation elements here */}
      <img src={require('./assets/bg4.avif.png')} alt="Background" className="background-image" />
      <div className="welcome-page">
        <div className="animation-container">
          <h1 className='h1-1'>Welcome to ParentBridge Academy</h1>
          <div className="animated-text">where students cherished by the</div>
          <div className="animated-text">most loving parents, finds solace and guidance within a nurturing world of learning and care.</div>
          {/* You can add more elements for animation */}
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
