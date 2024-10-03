import React from "react";
import "./Project.css";

const Project = () => {
  return (
    <section className="project" id='project'>
      <p className="title2">Explore My</p>
      <h1 className="title">Projects</h1>

      <div className="project-container">
        <div className="about-container">
          <div className="detail-container">
            <div className="article-container">
              <img src="images/pexels-josh-hild-1270765-2448749.jpg" alt="" className="project-img" />
            </div>
            <h2 className="proj-name">Weather App</h2>
            <div className="button_container">
              <button className="btn1">Github</button>
       
            </div>
          </div>
          <div className="detail-container">
            <div className="article-container">
              <img src="images/pexels-mutecevvil-19915766.jpg" alt="" className="project-img" />
            </div>
            <h2 className="proj-name">Taskify</h2>
            <div className="button_container">
              <button className="btn1">Github</button>
        
            </div>
          </div>
          <div className="detail-container">
            <div className="article-container">
              <img src="images/pexels-sami-aksu-48867324-10126380.jpg" alt="" className="project-img" />
            </div>
            <h2 className="proj-name">Round Table</h2>
            <div className="button_container">
              <button className="btn1">Github</button>
          
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
