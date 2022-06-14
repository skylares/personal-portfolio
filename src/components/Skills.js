import React from 'react';
import {ReactComponent as HtmlLogo} from '../assets/logo-html.svg';
import {ReactComponent as CssLogo} from '../assets/logo-css.svg';
import {ReactComponent as JavascriptLogo} from '../assets/logo-js.svg';
import {ReactComponent as ReactLogo} from '../assets/logo-react.svg';

export default function Skills() {
  return (
    <section className="skills">

      <h1 className="skills--title">SKILLS</h1>
      <div className='skills--container'>
        <HtmlLogo className='skills--icon'/>
        <CssLogo className='skills--icon'/>
        <JavascriptLogo className='skills--icon'/>
        <ReactLogo className='skills--icon'/>
      </div>

    </section>
  );
}