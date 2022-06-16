import React from 'react';
import heroWave from '../assets/heroWave.svg';
import fancyUnderline from '../assets/fancy-underline.svg'

export default function Hero({yPosition}) {

  return(
    <section className="hero" id="hero">
      <div className={yPosition < 650 ? "hero--title-section" : "hero--title-section-hidden"}>
        <h3 className="hero--introduction">Hello, my name is</h3>
        <h1 className="hero--name">SKYLAR</h1>
        <img src={fancyUnderline} className="hero--underline" alt='fancy underline for name'/>
        <p className="hero--description">I am a frontend developer who is passionate about designing and coding beautiful websites</p>
      </div>  
      <img src={heroWave} className="hero--wave" alt="design at bottom of hero"/>
    </section>
  );
}