import { useState } from 'react';
import './navbar.css';
import { motion } from "framer-motion"

const tabs = [
    {
        name: 'Home'
    }, 
    {
        name: 'About'
    }, 
    {
        name: 'Skills'
    },
    {
        name: 'Projects'
    },
    {
        name: 'Education'
    }
]

function Navbar() {

    const [activeTab, setActiveTab] = useState(tabs[0].name)

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
      };

    return (
        <nav className="navbar">
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
                            {tab.name}
                        </motion.li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
