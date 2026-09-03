import React from 'react';
import { motion } from 'framer-motion';
import MyPDF from '../../assets/CV.pdf';
import './about.css';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="section__inner">
        <motion.div
          className="section__header"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="section__label">Who I am</p>
          <h2 className="section__title">About</h2>
          <div className="section__divider" />
        </motion.div>

        <motion.div
          className="about__body"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="about__text">
            <p>
              My name is Jason Setyadi, and I am currently studying MSc ACSE at Imperial College London. I have a strong passion for software engineering, automation, and building impactful solutions.
            </p>
            <p>
              During my industrial placement year at Cantarus, I worked as a .NET Developer,
              building experience with C#, JavaScript, and various content management systems.
              More recently, I worked as a Quality Engineer at Ligentia, writing automated tests
              with Playwright and C#.
            </p>
            <p>
              Outside of work, I serve as Treasurer of the University of Leeds Chess Society
              and International Secretary of the Hiking Society. When I&apos;m not coding or
              organising hikes, I&apos;m reading or working through chess puzzles.
            </p>
            <a className="btn btn--outline about__resume-btn" href={MyPDF} download="Jason_Setyadi_CV.pdf">
              Download Resume ↓
            </a>
          </div>

          <div className="about__meta">
            <div className="about__detail">
              <span className="about__detail-label">Based in</span>
              <span className="about__detail-value">London, UK</span>
            </div>
            <div className="about__detail">
              <span className="about__detail-label">Studying at</span>
              <span className="about__detail-value">Imperial College London</span>
            </div>
            <div className="about__detail">
              <span className="about__detail-label">Degree</span>
              <span className="about__detail-value">MSc Applied Computational Science & Engineering</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
