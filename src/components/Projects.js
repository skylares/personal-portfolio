import React from 'react';

export default function Projects() {

  return(
    <section className="projects" id="projects">
      <h1 className='projects--title'>PROJECTS</h1>
      
      <div className='projects--container'>
        <div className='projects--project -trivia'>
          <h4>Quizzical</h4>
          <hr className='line' />
          <p>A trivia game</p>
        </div>
        <div className='projects--project -portfolio'>
          <h4>Personal Website</h4>
          <hr className='line' />
          <p>The website you're currently on (thanks for visiting!)</p>
        </div>
        <div className='test-div'>
        <div className='projects--project -tenzies'>
          <h4>Tenzies</h4>
          <hr className='line' />
          <p>Dice game</p>
        </div>
        </div>
      </div>
    </section>
  );
}