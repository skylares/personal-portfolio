import React, {useState, useEffect} from 'react';

export default function Hero() {

  const [titleShown, setTitleShown] = useState(true);
  const [yPosition, setYPosition] = useState(0);

  const trackYPos = () => {
    if (typeof window !== 'undefined') {
      if (600 > yPosition) setTitleShown(true);
      else setTitleShown(false);
      setYPosition(window.scrollY);
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', trackYPos);

      return () => window.removeEventListener('scroll', trackYPos);
    }
  }, [yPosition, trackYPos]);

  return(
    <section className="hero" id="hero">
      <div className={titleShown ? "hero--title-section" : "hero--title-section-hidden"}>
        <h3 className="hero--introduction">Hello, my name is</h3>
        <h1 className="hero--name">SKYLAR</h1>
        <p className="hero--description">I am a frontend developer who is passionate about designing and coding beautiful websites</p>
      </div>  
    </section>
  );
}

