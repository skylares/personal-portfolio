import React from 'react';

export default function Projects() {

  interface ProjectType {
    company: string;
    startDate: string;
    endDate: string;
    description: string;
  }

  const paperlessEnvironments = {
    company: "Paperless Environments",
    startDate: "Apr 2020",
    endDate: "Present",
    description: "Helped construction companies manage and organize documents and information in a central repository. Assisted clients in managing a documents lifecycle from creation to removal and everything inbetween.",
  }

  const capco = {
    company: "Capco",
    startDate: "Jun 2018",
    endDate: "Feb 2020",
    description: "Utilized cutting-edge technologies, advanced methodologies and a network of industry partners to quickly and effectively address insurance client's problems. Rapidly prototyped solutions to quickly iterate designs and achieve the best product in the shortest possible time.",
  } 

  const sangoma = {
    company: "Sangoma",
    startDate: "Feb 2017",
    endDate: "May 2018",
    description: "Provide resturants with a unified communication system to address the issues of food service in the modern digital age. Helps to bring together online orders, phone reservations, and third-party food deliveries into one service.",
  }

  const projects = [sangoma, capco, paperlessEnvironments];

  const projectDisplayer = (projects: ProjectType[]) => {
    return projects.map((project: ProjectType, i: number) => (
      <div className={`projects--project -${project.company}`} key={i}>
        <h4>{project.company}</h4>
        <p className='project--date'>{`${project.startDate} - ${project.endDate}`}</p>
        <hr className='line'/>
        <p>{project.description}</p>
      </div>
    ));
  };

  return (
    <section className="projects" id="projects">
      <h1 className='projects--title'>EXPERIENCE</h1>
      <div className='projects--container'>
        {projectDisplayer(projects)}
      </div>
    </section>
  );
}