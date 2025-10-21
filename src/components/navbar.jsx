import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import PropTypes from 'prop-types';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { useState } from 'react';
import './navbar.css';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

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
  },
  {
      name: 'Education',
      route: '#Education'
  }
]


function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: props.window ? window() : undefined,
  });

  return children
    ? React.cloneElement(children, {
        elevation: trigger ? 24 : 0,
      })
    : null;
}

ElevationScroll.propTypes = {
  children: PropTypes.element,
};

function Navbar(props) {

    const [activeTab, setActiveTab] = useState(tabs[0].name)

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    const [anchorElNav, setAnchorElNav] = React.useState(null);

    return (
      <React.Fragment>
        <ElevationScroll {...props}>
          <AppBar  sx={{ bgcolor: 'rgba(99,109,108,0.5);', backdropFilter: 'blur(10px)'}}>
            <Toolbar>
              <ul> 
                {tabs.map((tab) => (
                    <li 
                        key={tab.name}
                        whileHover={{
                            scale: 1.05,
                        }}
                        className={`tab ${activeTab === tab.name ? 'active' : ''}`}>
                        <a href={tab.route}>{tab.name}</a>
                    </li>
                ))}
              </ul>
            </Toolbar>
          </AppBar>
        </ElevationScroll>
        <Toolbar />
      </React.Fragment>
    );
}

export default Navbar;
