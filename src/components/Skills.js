import React, {useState, useEffect, useRef} from 'react';

import HtmlLogo from '../assets/logo-html-purp.svg';
import CssLogo from '../assets/logo-css-purp.svg';
import JavascriptLogo from '../assets/logo-js-purp.svg';
import ReactLogo from '../assets/logo-react-purp.svg';
import NodeLogo from '../assets/logo-node-purp.svg';

export default function Skills() {

  return (
    <section className="skills">

      <h1 className="skills--title">SKILLS</h1>
      <div className='skills--container'>
        <img src={HtmlLogo} className='skills--icon html' alt='html logo'></img>
        <img src={CssLogo} className='skills--icon css' alt='css logo'></img>
        <img src={JavascriptLogo} className='skills--icon js' alt='javascript logo'></img>
        <img src={ReactLogo} className='skills--icon react' alt='react logo'></img>
        <img src={NodeLogo} className='skills--icon node' alt='node logo'></img>
      </div>
    </section>
  );
}

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