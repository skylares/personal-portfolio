import React from 'react';
import resume from "../documents/resume.pdf";

export default function Header() {

  const logoGenerator = (titleArray) => {
    return titleArray.map((char, i) => (
      <span key={i}className='header--home-char'>{char}</span>
    ))
  };

  return(
    <header className="header">
      <nav className='header--nav'>
        <a 
          href="#hero" 
          className='nav--link -home'
          onClick={() => window.scrollTo(0,0)} 
          >{logoGenerator(["<","S","K","/",">"])}
        </a>
        <a href='#about' className='nav--link -about'>About</a>
        <a href='#projects' className='nav--link -projects'>Projects</a>
        <a href='#contact' className='nav--link -contact'>Contact</a>
        <a href={resume} className='nav--link -resume'>Resume</a>
      </nav>
    </header>
  );
}