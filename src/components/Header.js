import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {

  const logoGenerator = (titleArray) => {
    return titleArray.map((char, i) => (
      <span key={i}className='header--home-char'>{char}</span>
    ))
  };

  return(
    <header className="header">
      <nav className='header--nav'>
        <Link to="/" 
          className='nav--link -home'
          onClick={() => window.scrollTo(0,0)} 
          >{logoGenerator(["<","S","K","/",">"])}
        </Link>
        <a href='#about' className='nav--link -about'>About</a>
        <a href='#projects' className='nav--link -projects'>Projects</a>
        <a href='#contact' className='nav--link -contact'>Contact</a>
        <Link to="/Resume" className='nav--link -resume'>Resume</Link>
      </nav>
    </header>
  );
}