import React from 'react'
import "./projects.css"
import projectData from "../../assets/dataJsons/projects.json"
import { Link } from 'react-router-dom'
function Projects() {
  return (
    <div className='ProjectWrapper'>
        <h1 className='ProjectWaterMark'>Projects</h1>
        <div className="ProjectHeading">
            <h1>Projects</h1>
        </div>

        <div className='ProjectContent'>
            <div className='ProjectSectionDetals'>
              <p> Worked as a Back end Software engineer/Devops Engineer. Developed efficient microservices, API for custoemr charging gateways. Modernized legacy applications to latest standards. Provide realitime support for applications and infrastructure.</p>
              <div className='MoreProjects'>
                <a href='https://github.com/DahamDev' target="_blank" rel="noopener noreferrer">View Projects on GitHub</a>
                <a href='https://github.com/DahamDev' target="_blank" rel="noopener noreferrer" >Check more projects</a>
              </div>
            </div>
            <div className='projectContainer'>
            {
              projectData.map(data =>{
                  return(
                    <div key={data.key} className="project">
                    <section className="projectImage">
                      <img src={process.env.PUBLIC_URL+"/projectImages/"+data.image}></img>
                    </section>
                    <section className="projectText">
                      <h2 className="projectTitle">{data.name}</h2>
                      <p className="projectDesc">{data.description}</p>
                      <p className='projectTech'>Technologies used : {data.techStack}</p>
                      <p> Project link - {data.projectLink} </p>
                    </section>
                    <Link to={"/project/"+data.key} className='readMoreLink'><p className="projectReadMore">Read more</p></Link>
                  </div>
                  )
              })
            }
            </div>

        </div>
    </div>
  )
}

export default Projects