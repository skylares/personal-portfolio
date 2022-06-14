import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  
  const [navShown, setNavShown] = useState(true);
  const [yPosition, setYPosition] = useState(0);

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
  }, [yPosition, trackYPos]);

  const spanner = () => {
    let arr = ["<", "S", "K", "/", ">"];
    return arr.map((char, i) => <span key={i}className='header--home-char'>{char}</span>);
  }

  return(
    <header className="header">
      <nav className={navShown ? 'header--nav' : 'header--nav hidden'}>
        <Link to="/" className='nav--link -home'>
          {spanner()}
        </Link>
        <a href='#about' className='nav--link -about'>About</a>
        <a href='#projects' className='nav--link -projects'>Projects</a>
        <a href='#contact' className='nav--link -contact'>Contact</a>
        <Link to="/Resume" className='nav--link -resume'>Resume</Link>
      </nav>
    </header>
  );
}