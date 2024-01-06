import React from 'react';

import './introduction.css';
import backgroundGif from '../../assets/196ad9d3122098b297d7b99ce9ff209f.gif'

function Introduction() {
  return (
    <section className="intro-page">
        <div className="main-text">
            <h1>Jason Setyadi</h1>
            <h2>Welcome to my <span className='portfolio-text'>portfolio.</span></h2>
        </div>
        <img  className="background-gif" src={backgroundGif} alt="Animated GIF" />
    </section>
  );
}

export default Introduction;
