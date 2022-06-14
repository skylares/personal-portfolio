import React from 'react';

import HtmlLogo from '../assets/logo-html.svg';
import CssLogo from '../assets/logo-css.svg';
import JavascriptLogo from '../assets/logo-js.svg';
import ReactLogo from '../assets/logo-react.svg';

export default function Skills() {
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