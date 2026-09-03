import React from 'react';

import './introduction.css';
import backgroundGif from '../../assets/196ad9d3122098b297d7b99ce9ff209f.gif'
import { motion, useScroll, useTransform } from "framer-motion"

function Introduction() {
  const {scrollYProgress} = useScroll();
  var xname = useTransform(scrollYProgress, [0, 1], [0, -800]);
  var xwelcome = useTransform(scrollYProgress, [0, 1], [0, 1200]);

  return (
    <section className="intro-page" id="Introduction">
        <div className="main-text">
            <motion.h1 style={{x: xname}} >Hello, I'm <span class="coloured-text ">Jason</span>.</motion.h1>
            <motion.h2 style={{x: xwelcome}}>ACSE @ Imperial</motion.h2>
        </div>
    </section>
  );
}

export default Introduction;
