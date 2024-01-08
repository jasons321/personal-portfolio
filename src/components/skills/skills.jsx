import React from 'react';

import './skills.css';


function Skills() {
  return (
    <section className="skills-page">
      <h1 className="skills-title">
        Skills
      </h1>
      <div className="skills-box">
          <p className="skills-paragraph">
            I have a varying level of familiarity with a multitude of programming languages, utilising them to 
            solve problems of different nature. I am most comfortable with <span className="proglang">Java</span> as well as 
            <span className="proglang"> JavaScript</span> and possess a solid understanding of 
            <span className="proglang"> Object-oriented programming</span>. I  have also done projects 
            with <span className="proglang">Python</span>,<span className="proglang"> C++</span>, and 
            <span className="proglang"> C</span>.
          </p>
          <div className="skills-collection">
            <div className="skills-card">
              <h2>Languages</h2>
            </div>
            <div className="skills-card">
              <h2>Frameworks</h2>
            </div>
            <div className="skills-card">
              <h2>Others</h2>
            </div>
          </div>
      </div>
    </section>
  );
}

export default Skills;
