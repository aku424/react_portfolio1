import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


const Works = (props)=>{
    return(
        <section>
            <h1>Works</h1>
            <div className = "nexPageBox">
                <Link className="nexPage" to="/works/">Works</Link>
            </div>
        </section>
    )
}


export default Works;