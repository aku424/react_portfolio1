import './css/App.css';
import './css/style.css';
import './css/reset.css';
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Top from './components/Top';
import Game from './components/Game';
import About from './components/About';
import Works from './components/Works';
import Movies from './components/Movies';
import History from './components/History';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollTop';

// font awesome
import { library } from '@fortawesome/fontawesome-svg-core'; //fontawesomeのコアファイル
import { fab } from '@fortawesome/free-brands-svg-icons'; //fontawesomeのbrandアイコンのインポート
import { fas } from '@fortawesome/free-solid-svg-icons'; //fontawesomeのsolidアイコンのインポート
import { far } from '@fortawesome/free-regular-svg-icons'; //fontawesomeのregularアイコンのインポート

library.add(fab, fas, far); //他のコンポーネントから簡単に呼び出せるようにするための記述


const App = (props)=>{
    return(
        <>
            <Router>
                <ScrollToTop>
                    <Header/>
                    {/* 挿入されるコンポーネント */}
                    <main>
                        <Route path="/" exact component={Top} />
                        <Route path="/Game/" exact component={Game} />
                        <Route path="/about/" exact component={About} />
                        <Route path="/works/" exact component={Works} />
                        <Route path="/movies/:id" exact component={Movies} />
                        <Route path="/History/" exact component={History} />
                        <Route path="/Contact/" exact component={Contact} />
                        <Footer/>
                    </main>
                </ScrollToTop>
            </Router>
        </>
    )
}

export default App;
