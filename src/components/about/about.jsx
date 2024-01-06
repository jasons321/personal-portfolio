import React from 'react';

import './about.css';
import { motion } from "framer-motion"


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

        </div>
    </section>
  );
}

export default About;
