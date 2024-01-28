import './App.css';
import Navbar from "./components/navbar"
import Introduction from './components/introduction/introduction';
import About from './components/about/about';
import Skills from './components/skills/skills';
import Project from './components/projects/project';

import { motion } from "framer-motion";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {

  const imageAnimate={
      offscreen:{x:-100, opacity:0},
      onscreen:{
      x:0,
      opacity:1,
      rotate:[0,10,0],
      transition: {type:"spring",
      bounce:0.4,
      duration:1}
    }
  }

  return (
    <div>
      <Navbar sticky="top"></Navbar>
          <Introduction></Introduction>
            <motion.div
              initial={"offscreen"}
              whileInView={"onscreen"}
              viewport={{once:false, amount:0.5}}
              transition={{staggerChildren:0.5}}         
              variants={imageAnimate}>
                <About></About>
            </motion.div>
            <motion.div
              initial={"offscreen"}
              whileInView={"onscreen"}
              viewport={{once:false, amount:0.5}}
              transition={{staggerChildren:0.5}}         
              variants={imageAnimate}>
              <Skills></Skills>
            </motion.div>
            <motion.div
              initial={"offscreen"}
              whileInView={"onscreen"}
              viewport={{once:false, amount:0.2}}
              transition={{staggerChildren:0.5}}         
              variants={imageAnimate}>
              <Project></Project>
            </motion.div>

    </div>
  );
}

export default App;
