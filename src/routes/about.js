import React from "react";
import "./about.css";

function About(props){
    console.log(props);
    return (
        <div className="about__container">
            <span>Created By Josuncom</span><br/>
            <span>Age : 24</span><br/>
            <span>KonKuk Univ, Major in Smart ICT Convergence</span><br/>
            <a href="https://velog.io/@josuncom">
             <span>Link to Dev. Blog</span>
             </a>
        </div>
    );
}

export default About;