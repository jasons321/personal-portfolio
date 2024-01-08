import React from 'react';

import './about.css';
import { motion } from "framer-motion"
import chessPic from '../../assets/Screenshot_2024-01-07_001013-removebg-preview.png'


function About() {

  return (
    <section className="about-page">
        <h1 className="about-title">
          About
          <span className="me-text" >
          Me
          </span>
          <motion.span 
          className="blinking-text" 
          animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}>
            _
          </motion.span>
        </h1>
        <div className="about-text-box">

            <motion.img 
                initial={{
                  transform: "translateY(10px)"
                }}
                animate={{
                  transform: "translateY(-10px)"
                }}
                transition={{
                  repeat:Infinity,
                  duration:1, 
                  ease:"easeInOut",
                  repeatType:"mirror"
                }}
                className="animated-chess" 
                src={chessPic} 
                alt="Animated Chess" />
          <div className="about-text-intro">
            My name is Jason Setyadi, and I am currently a 
            second-year computer science student studying at 
            the University of Leeds. I have a passion for applying 
            computer science and programming concepts to solve problems.
          <motion.button whileHover={{ scale: 1.05}}>
            Download CV
          </motion.button>
          </div>
        </div>
    </section>
  );
}

export default About;
