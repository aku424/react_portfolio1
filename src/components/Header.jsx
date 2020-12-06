import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Top from './Top';
import Game from './Game';
import About from './About';
import Works from './Works';
import History from './History';

const Header = (props)=>{
    return(
        <header>
            <nav>
                <ul>
                    <Router>
                        {/*  */}
                        <Route path="/" exact component={Top} />
                        <Route path="/Game/" exact component={Game} />
                        <Route path="/about/" exact component={About} />
                        <Route path="/works/" exact component={Works} />
                        <Route path="/History/" exact component={History} />
                    
                    <li><Link to="/">top</Link></li>
                    <li><Link to="/game">game</Link></li>
                    <li><Link to="/about/">about</Link></li>
                    <li><Link to="/works/">works</Link></li>
                    <li><Link to="/history/">History</Link></li>
                    </Router>
                </ul>
            </nav>
        </header>
    )
}


export default Header;