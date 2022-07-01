import React, {useState} from 'react';
import resume from '../documents/skylar_resume_july_2022.pdf';

interface HeaderProps {
  width: number | undefined;
}

export default function Header({width}: HeaderProps) {

  const [navOpen, setNavOpen] = useState(false);

  const logoGenerator = (titleArray: string[]) => {
    return titleArray.map((char, i) => (
      <span key={i}className='header--home-char'>{char}</span>
    ))
  };

  if (width && width < 750) {
    return (
      <header className="header--mobile">
        <nav className='header--nav-mobile'>
          <a 
            href="#hero" 
            className='nav--link -home -mobile'
            > {'<SK/>'}
          </a>
          
          <div className='nav--hamburger' onClick={() => setNavOpen(prevNavOpen => !prevNavOpen)}>
            <div className={navOpen ? 'hamburger-top -open' : 'hamburger-top'}/>
            <div className={navOpen ? 'hamburger-mid -open' : 'hamburger-mid'}/>
            <div className={navOpen ? 'hamburger-bot -open' : 'hamburger-bot'}/>
          </div>
          
            <div className={navOpen ? 'nav--hamburger-menu -open' : 'nav--hamburger-menu'}>
              <a href='#about' className='nav--link -mobile -about'>About</a>
              <a href='#projects' className='nav--link -mobile -projects'>Projects</a>
              <a href='#contact' className='nav--link -mobile -contact'>Contact</a>
              <a href={resume} className='nav--link -mobile -resume'>Resume</a>
            </div>
          
        </nav>
      </header>
    );
  }
  else {
    return (
      <header className="header">
        <nav className='header--nav'>
          <a 
            href="#hero" 
            className='nav--link -home'
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
}