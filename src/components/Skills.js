import React, {useState, useEffect, useRef} from 'react';

import HtmlLogo from '../assets/logo-html-purp.svg';
import CssLogo from '../assets/logo-css-purp.svg';
import JavascriptLogo from '../assets/logo-js-purp.svg';
import ReactLogo from '../assets/logo-react-purp.svg';
import NodeLogo from '../assets/logo-node-purp.svg';

export default function Skills() {

  const [logoFlip, setLogoFlip] = useState(
    {
      html: false,
      css: false,
      js: false,
      react: false,
      node: false
    }
  );

  const logoFlipper = ({target: {id}}) => {
    setLogoFlip(prevLogoFlip => {
      return {...prevLogoFlip, [id]: !prevLogoFlip[id]};
    });
    console.log(logoFlip);
  };

  return (
    <section className="skills">
      <h1 className="skills--title">SKILLS</h1>
      <div className='skills--container'>
        <img  
          src={HtmlLogo} 
          onClick={logoFlipper}
          className={logoFlip.html ? 'skills--icon html flipped' : 'skills--icon html'}
          alt='html logo'
          id='html'
        />
        <img 
          src={CssLogo} 
          onClick={logoFlipper}
          className={logoFlip.css ? 'skills--icon css flipped' : 'skills--icon css'} 
          alt='css logo'
          id='css'
        />
        <img 
          src={JavascriptLogo} 
          onClick={logoFlipper}
          className={logoFlip.js ? 'skills--icon js flipped' : 'skills--icon js'} 
          alt='js logo'
          id='js'
        />
        <img 
          src={ReactLogo} 
          onClick={logoFlipper}
          className={logoFlip.react ? 'skills--icon react flipped' : 'skills--icon react'} 
          alt='react logo'
          id='react'
        />
        <img 
          src={NodeLogo} 
          onClick={logoFlipper}
          className={logoFlip.node ? 'skills--icon node flipped' : 'skills--icon node'} 
          alt='node logo'
          id='node'
        />
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