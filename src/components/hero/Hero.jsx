import React from 'react';
import { motion } from 'framer-motion';
import MyPDF from '../../assets/CV.pdf';
import './Hero.css';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="hero">
      <div className="hero__inner">
        <motion.p
          className="hero__greeting"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          Hello, I&apos;m
        </motion.p>

        <motion.h1
          className="hero__name"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
        >
          Jason Setyadi.
        </motion.h1>

        <motion.p
          className="hero__subtitle"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
        >
          Interested in software engineering, automation, and building things that matter.
        </motion.p>

        <motion.div
          className="hero__actions"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.3}
        >
          <button className="btn btn--primary" onClick={scrollToProjects}>
            View Work
          </button>
          <a className="btn btn--outline" href={MyPDF} download="Jason_Setyadi_CV.pdf">
            Download CV
          </a>
        </motion.div>
      </div>
    </section>
  );
}
