import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


const Contact = (props)=>{
    return(
        <section>
        <h1>Contact</h1>
        <div className = "nexPageBox">
            <Link className="nexPage" to="/">Top</Link>
        </div>
    </section>
    )
}


export default Contact;