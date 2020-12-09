import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Top from './Top';
// import Game from './Game';
// import About from './About';
// import Works from './Works';
// import History from './History';

const Header = (props)=>{
    return(
        <>
            <header className="header">
                <div className="headerInner">
                    <Link to="/"><h1 className = "headerTitle">takashima takuto</h1></Link>
                    <nav className="headerNav">
                        <ul className="navLIst">
                            {/* <Router> */}
                                <li className="navItem"><Link className="navLink" to="/"><FontAwesomeIcon icon={['fas', "home" ]} className = "fa-2x fa-fw"/>top</Link></li>
                                <li className="navItem"><Link className="navLink" to="/game"><FontAwesomeIcon icon={['fas', 'minus-circle']} className = "fa-2x fa-fw" />game</Link></li>
                                <li className="navItem"><Link className="navLink" to="/about/"><FontAwesomeIcon icon={['far', "address-card"]} className = "fa-2x fa-fw" />about</Link></li>
                                <li className="navItem"><Link className="navLink" to="/works/"><FontAwesomeIcon icon={['fas', "laptop"]} className = "fa-2x fa-fw" />works</Link></li>
                                <li className="navItem"><Link className="navLink" to="/history/"><FontAwesomeIcon icon={['fas', "book"]} className = "fa-2x fa-fw" />History</Link></li>
                                <li className="navItem"><Link className="navLink" to="/contact/"><FontAwesomeIcon icon={['fas', "mobile-alt"]} className = "fa-2x fa-fw" />contact</Link></li>
                            {/* </Router> */}
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}
export default Header;