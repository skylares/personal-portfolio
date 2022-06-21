import React from 'react';

export default function Projects() {

  return(
    <section className="projects" id="projects">
      <h1 className='projects--title'>PROJECTS</h1>
      
      <div className='projects--container'>
        <a className='projects--project -trivia' href='https://skylares.github.io/trivia-app/'>
          <h4>Quizzical</h4>
          <hr className='line' />
          <p>A trivia game</p>
        </a>
        <a className='projects--project -portfolio' href='http://www.skylarkesselring.com'>
          <h4>Personal Website</h4>
          <hr className='line' />
          <p>The website you're currently on (thanks for visiting!)</p>
        </a>
        <a className='projects--project -tenzies' href='https://skylares.github.io/tenzies-game/'>
          <h4>Tenzies</h4>
          <hr className='line' />
          <p>Dice game</p>
        </a>
      </div>
    </section>
  );
}