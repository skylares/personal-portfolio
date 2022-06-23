import React from 'react';

export default function Projects() {

  const quizzical = {
    title: "Quizzical",
    name: "quizzical",
    description: "A multiple-choice trivia game. You can select the category and difficulty, along with the number of questions. Questions are pulled from an open-source API, opentdb.",
    demoUrl: "https://skylares.github.io/trivia-app/",
    gitUrl: "https://github.com/skylares/trivia-app",
  }

  const portfolio = {
    title: "Personal Portfolio",
    name: "portfolio",
    description: "The website you're currently on (thanks for visiting!)",
    demoUrl: "http://www.skylarkesselring.com",
    gitUrl: "https://github.com/skylares/personal-portfolio",
  } 

  const tenzies = {
    title: "Tenzies",
    name: "tenzies",
    description: "Dice game",
    demoUrl: "https://skylares.github.io/tenzies-game/",
    gitUrl: "https://github.com/skylares/tenzies-game",
  }

  const projects = [quizzical, portfolio, tenzies];

  const projectDisplayer = (projects) => {
    return projects.map((project, i) => (
      <div className={`projects--project -${project.title}`} key={i}>
        <h4>{project.title}</h4>
        <hr className='line'/>
        <p>{project.description}</p>
        <a href={project.demoUrl} target="_blank">live demo</a>
        <a href={project.gitUrl} target="_blank">github repo</a>
      </div>
    ));
  };

  return(
    <section className="projects" id="projects">
      <h1 className='projects--title'>PROJECTS</h1>
      <div className='projects--container'>
        {projectDisplayer(projects)}
      </div>
    </section>
  );
}