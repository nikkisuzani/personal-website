import './App.css';
import React from 'react';
import { rgb } from 'chalk';

const App = () => {
  
  return(
    <div>
          <div className="nav-bar">
             <a href = "#about-me"> about </a>
            <a href = "#my-current-projects"> projects </a>
            <a href = "#my-future-plans"> plans </a>
          </div>
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
            <div className = "about-me"> about me! <hr></hr> </div>
            <p className = "bodytext"> I'm currently a freshman at UC Berkeley studying Computer Science and Statistics. I like taking pictures of my life (@nikki_at_cal), drinking tea, and having vaguely philosophical conversations with my friends at 11 p.m.</p>
            <div className = "my-current-projects"> my current projects! <hr></hr> </div>
            <p className = "bodytext"> I'm a software developer at both <span style={{color: 'rgb(63, 112, 218)'}}>Codebase</span> and <span style={{color: 'rgb(67, 133, 220)'}}>Blueprint</span>! At Codebase, I'm creating a website and backend matching algorithms for The Berkeley Project, a nonprofit that matches Berkeley students to volunteer opportunities. At Blueprint, I'm creating a mobile application for Friends of Alemany Farms, a nonprofit that provides food security and education to San Francisco residents. In my free time, I'm working on learning Python data visualizations and creating data journalism side projects :) </p>
          </div>
          </div>
  );
}
export default App;
