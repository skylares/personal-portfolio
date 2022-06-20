import React, {useState, useEffect, useRef} from 'react';

import HtmlLogo from '../assets/logo-html.svg';
import CssLogo from '../assets/logo-css.svg';
import JavascriptLogo from '../assets/logo-js.svg';
import ReactLogo from '../assets/logo-react.svg';

export default function Skills() {

  // const myRef = useRef(null);

  // useEffect(() => {

  //   const observer = new IntersectionObserver((entries) => {
  //     const entry = entries[0];
  //     if (entry.isIntersecting) {
  //       setSkillsVisible(true);
  //     }
  //     else {
  //       setSkillsVisible(false);
  //     }

  //   }, {
  //     rootMargin: '-40px 0% 0% 0%',
  //     threshold: [1.0]
  //   });   
  //   observer.observe(myRef.current);
  // }, []);

  return (
    <section className="skills">

      <h1 className="skills--title">SKILLS</h1>
      <div className='skills--container'>
        <img src={HtmlLogo} className='skills--icon' alt='html logo'></img>
        <img src={CssLogo} className='skills--icon' alt='css logo'></img>
        <img src={JavascriptLogo} className='skills--icon' alt='javascript logo'></img>
        <img src={ReactLogo} className='skills--icon' alt='react logo'></img>
      </div>
    </section>
  );
}