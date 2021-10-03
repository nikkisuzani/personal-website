import './App.css';
import React from 'react';
import { rgb } from 'chalk';

const App = () => {
  
  return(
    <div>
          <div className="nav-bar">
             <a href="#about-me"> about </a>
            <a href="#my-current-projects"> projects </a>
            <a href="#my-future-plans"> plans </a>
          </div>
          <div id = "main">
            <div id = "main2">
          <div className="one">
            <p className = "name"> hi, i'm nikki! </p>
            <div className = "ellipse"> </div>
            <div className = "box-container"> 
            <a href="https://www.instagram.com/nikkisuzani/">
            <div className="box1"> 
          </div>
            </a>
            <a href ="https://www.facebook.com/nikki.suzani.9/">
            <div className="box2"/> 
            </a>
            <a href = "https://www.linkedin.com/in/nikkisuzani/">
            <div className = "box3"/>
            </a>
            </div>
          </div>
          <div className="all-text">
            <div id = "about-me" className="about-me"> about me! <hr></hr> </div>
            <p className = "bodytext"> I'm currently a freshman at UC Berkeley studying Computer Science and Statistics. I like taking pictures of my life (@nikki_at_cal), drinking tea, and having vaguely philosophical conversations with my friends at 11 p.m.</p>
            <div className = "my-current-projects" id="my-current-projects"> my current projects! <hr></hr> </div>
            <p className = "bodytext"> I'm a software developer at both <span style={{color: 'rgb(63, 112, 218)'}}>Codebase</span> and <span style={{color: 'rgb(67, 133, 220)'}}>Blueprint</span>! At <span style={{color: 'rgb(63, 112, 218)'}}>Codebase</span>, I'm creating a website and backend matching algorithms for <span style={{color: 'rgb(125, 198, 206)'}}>The Berkeley Project</span>, a nonprofit that matches Berkeley students to volunteer opportunities. At <span style={{color: 'rgb(67, 133, 220)'}}>Blueprint</span>, I'm creating a mobile application for <span style={{color: 'rgb(167, 54, 106)'}}>Friends of Alemany Farms</span>, a nonprofit that provides food security and education to San Francisco residents. In my free time, I'm working on learning <span style={{color: 'rgb(74, 120, 164)'}}>Python</span> data visualizations and creating data journalism side projects :) </p>
            <div className = "my-future-plans" id="my-future-plans"> my future plans! <hr></hr> </div>
            <p className = "bodytext"> I'm really interested in finding new ways to use technology to help people, whether that's exploring bioinformatics, working on putting tech into the healthcare sector, data journalism, or just working for a company with community-focused values :) If any of that is important to you, feel free to reach out so we can talk about navigating the CS landscape with social good in mind! </p>
          </div>
          </div>
          <div className="sidebar"> 
            <div className = "sidebar-text"> My life in photos!
            </div> 
              <div className="newbox-container">
                {}
                <div className="newbox1"></div> 
                <div className="newbox2"></div>
                <div className="newbox3"></div>
              </div> 
              <div className="newbox-container"> 
                <div className="newbox4"></div> 
                <div className="newbox5"></div>
                <div className="newbox6"></div>
              </div> 
              <div className="newbox-container"> 
                <div className="newbox7"></div> 
                <div className="newbox8"></div>
                <div className="newbox9"></div>
              </div> 
            </div>
            </div>
          </div>
  );
}
export default App;
