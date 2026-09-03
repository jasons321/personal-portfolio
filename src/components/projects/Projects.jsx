import React, { useState } from 'react';
import { motion } from 'framer-motion';
import jsonData from '../../assets/projects.json';
import './Projects.css';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.07 },
  }),
};

function ProjectCard({ project, index }) {
  return (
    <motion.article
      className="project-card"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      custom={index}
    >
      <div className="project-card__image-wrap">
        <img
          src={require(`../../assets/${project.imageLink}`)}
          alt={project.name}
          className="project-card__image"
        />
      </div>
      <div className="project-card__body">
        <div className="project-card__tags">
          {project.tags.map((tag) => (
            <span key={tag} className="project-card__tag">{tag}</span>
          ))}
        </div>
        <h3 className="project-card__title">{project.name}</h3>
        <p className="project-card__desc">{project.description}</p>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card__link"
          >
            View on GitHub →
          </a>
        )}
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section className="section projects" id="projects">
      <div className="section__inner">
        <motion.div
          className="section__header"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={0}
        >
          <p className="section__label">What I've built</p>
          <h2 className="section__title">Projects</h2>
          <div className="section__divider" />
        </motion.div>

        <div className="projects__grid">
          {jsonData.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
