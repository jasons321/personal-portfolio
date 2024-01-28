import { useState } from 'react';
import './navbar.css';
import { motion} from "framer-motion"
import React from "react";

const tabs = [
    {
        name: 'Home',
        route: '#Introduction'
    }, 
    {
        name: 'About',
        route: '#About'
    }, 
    {
        name: 'Skills',
        route: '#Skills'
    },
    {
        name: 'Projects',
        route: '#Project'
    }
]

function Navbar() {

    const [activeTab, setActiveTab] = useState(tabs[0].name)

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    const [isActive, setIsActive] = React.useState(false);
    const [completed, setCompleted] = React.useState(true);

    const toggleMenu = () => {
        setIsActive(!isActive);
        console.log(completed)
        setCompleted(!completed);
    };
    
    const variants={
        open: {opacity: 1},
        closed: { opacity: 0 }
      }
    return (

        <div className="nav-container">
            <motion.nav 
            className="navbar" 
            variants={variants}
            animate={completed ? "open" : "closed"}>     
                <div className="menu">
                    <ul> 
                        {tabs.map((tab) => (
                            <motion.li 
                                key={tab.name}
                                whileHover={{
                                    scale: 1.05,
                                }}
                                className={`tab ${activeTab === tab.name ? 'active' : ''}`}
                                onClick={()=>handleTabClick(tab.name)}>
                                <a href={tab.route}>{tab.name}</a>
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </motion.nav>
            <motion.div 
            className="menu-icon"
            onClick={() => toggleMenu()}
            animate={{
                rotate: isActive ? 90 : 0
            }}>
   
                <i  className='gg-menu'></i>          
            </motion.div>
        </div>

    );
}

export default Navbar;
