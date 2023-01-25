import React from 'react';
import heroWave from '../assets/heroWave.svg';
import fancyUnderline from '../assets/fancy-underline.svg'
import computerMan from '../assets/man-on-computer.png';

type HeroProps = {
  yPosition?: number | any;
  width?: number | any;
};

export default function Hero({yPosition, width}: HeroProps) {


  const style = {
    background: `url(${computerMan}), url(${heroWave})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: width<750 ? '90%, 110%' : 'auto, contain',
    backgroundPosition: width<1200 ? '100% 90%, 100% 100%' : '80% 50%, 100% 100%'
    
  };

  return (
    <section className="hero" id="hero" style={style}>
      {yPosition < 800 &&
      <div className="hero--title-section">
        <h3 className="hero--introduction">Hello, my name is</h3>
        <h1 className="hero--name">SKYLAR</h1>
        <img src={fancyUnderline} className="hero--underline" alt='fancy underline for name'/>
        <p className="hero--description">Frontend Software Engineer</p>
      </div>  
      }
    </section>
  );
}