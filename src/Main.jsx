import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Top from './components/Top';
import Game from './components/Game';
import About from './components/About';
import Works from './components/Works';
import History from './components/History';
import Contact from './components/Contact';

const App = (props)=>{
    return(
        <>
        <Header/>
        <Router>
            {/* 挿入されるコンポーネント */}
            <Route path="/" exact component={Top} />
            <Route path="/Game/" exact component={Game} />
            <Route path="/about/" exact component={About} />
            <Route path="/works/" exact component={Works} />
            <Route path="/History/" exact component={History} />
            <Route path="/Contact/" exact component={Contact} />

        </Router>
        </>
    )
}

export default App;