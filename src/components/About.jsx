import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


const About = (props)=>{
    return(
        <section>
        <h1>about</h1>
        <div className = "nexPageBox">
            <Link className="nexPage" to="/history/">History</Link>
        </div>
    </section>
    )
}


export default About;