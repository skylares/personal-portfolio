import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  
  const [navShown, setNavShown] = useState(true);
  const [yPosition, setYPosition] = useState(0);

  // Checks if user is scrolling, and sets state based on direction
  const trackYPos = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY < yPosition) setNavShown(true);
      else setNavShown(false);
      setYPosition(window.scrollY);
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', trackYPos);

      return () => window.removeEventListener('scroll', trackYPos);
    }
  }, [yPosition]);

  return(
    <header className="header">
      <nav className={navShown ? 'header--nav' : 'header--nav hidden'}>
        <Link to="/">Home</Link>
        <Link to="/Resume">Resume</Link>
        <a href='#about'>About</a>
        <a href='#projects'>Projects</a>
        <a href='#contact'>Contact</a>
      </nav>
    </header>
  );
}