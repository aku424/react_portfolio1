import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const History = (props)=>{
    return(
        <section>
        <h1>History</h1>
        <div className = "nexPageBox">
            <Link className="nexPage" to="/contact/">Contact</Link>
        </div>
    </section>
    )
}


export default History;