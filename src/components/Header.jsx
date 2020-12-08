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
            <header className="header inner">
                <Link to="/"><h1 className = "headerTitle">takashima takuto</h1></Link>
                <nav className="headerNav">
                    <ul className="headerNavLIst">
                        {/* <Router> */}
                            <li className="headerNavItem"><Link className="headerNavLink" to="/"><FontAwesomeIcon icon={['fas', "home" ]} className = "fa-2x fa-fw"/>top</Link></li>
                            <li className="headerNavItem"><Link className="headerNavLink" to="/game"><FontAwesomeIcon icon={['fas', 'minus-circle']} className = "fa-2x fa-fw" />game</Link></li>
                            <li className="headerNavItem"><Link className="headerNavLink" to="/about/"><FontAwesomeIcon icon={['far', "address-card"]} className = "fa-2x fa-fw" />about</Link></li>
                            <li className="headerNavItem"><Link className="headerNavLink" to="/works/"><FontAwesomeIcon icon={['fas', "laptop"]} className = "fa-2x fa-fw" />works</Link></li>
                            <li className="headerNavItem"><Link className="headerNavLink" to="/history/"><FontAwesomeIcon icon={['fas', "book"]} className = "fa-2x fa-fw" />History</Link></li>
                            <li className="headerNavItem"><Link className="headerNavLink" to="/contact/"><FontAwesomeIcon icon={['fas', "mobile-alt"]} className = "fa-2x fa-fw" />contact</Link></li>
                        {/* </Router> */}
                    </ul>
                </nav>
            </header>
        </>
    )
}
export default Header;