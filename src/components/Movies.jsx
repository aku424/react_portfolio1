import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
//ReactPlayerのimport
import ReactPlayer from 'react-player'
import Movie from '../img/movies.jpg';

<div className = "nexPageBox">
    <Link className="nexPage" to="/contact/">Next page is contact<span></span></Link>
</div>

const Movies = ()=>{
    return(
        <>  
            <section className = "container works">
                <div className="sectionTitleBox movies" style = {{backgroundImage:`url(${Movie})`}}>
                    <div className="nexPageBox">
                        <h2 className = "sectionTitle">movies</h2>
                    </div>
                </div>
                    <div className="inner">
                        <Router>
                        {/* 挿入されるコンポーネント */}
                            <Route path="/movies/lp1" exact component={LP1} />
                            <Route path="/movies/lp2" exact component={LP2} />
                            <Route path="/movies/wp" exact component={WP} />
                            <Route path="/movies/ruby" exact component={Ruby} />
                        </Router>
                        <div className = "nexPageBox">
                            <Link to="/works/" className="nexPage">Back to works<span></span></Link>
                        </div>
                    </div>
            </section>
        </>
    )
}
const LP1 = ()=>{
    const lp1 = "https://youtu.be/xQ0oW44Atgg";
    return(
        <>
            <h3 className = "subTitle">アクセサリーサイトのLP<span></span></h3>
            <div className="nexPageBox linkBox">
                <a href="https://aku424.github.io/sobolon/" className="nexPage">サイトリンクはこちら<span></span></a>
            </div>
            <div className="moviesBox">
                <ReactPlayer url = {lp1} playing alt = "アクセサリーLPサイトの動画"/> 
            </div>
        </>
    )
}
const LP2 = ()=>{
    const lp2 = "https://youtu.be/weHEMpvg07k";
    return(
        <>
            <h3 className = "subTitle">LPサイト<span></span></h3>
            <div className="nexPageBox linkBox">
                <a href="https://aku424.github.io/middle1/" className="nexPage">サイトリンクはこちら<span></span></a>
            </div>
            <div className="moviesBox">
                <ReactPlayer url = {lp2} playing alt = "LPサイトの動画"/> 
            </div>
        </>
    )
}
const WP = ()=>{
    const wp = "https://youtu.be/sWqP11t5lAc";
    return(
        <>
            <h3 className = "subTitle">wordpress独自テーマ１<span></span></h3>
            <div className="moviesBox">
                <ReactPlayer url = {wp} playing alt = "wordpress独自テーマの動画"/> 
            </div>
        </>
    )
}
const Ruby = ()=>{
    const ruby = "https://youtu.be/VnViIwsyYyI";
    return(
        <>
            <h3 className = "subTitle">簡単なSNSアプリ<span></span></h3>
            <div className="moviesBox">
                <ReactPlayer url = {ruby} playing alt = "簡単なSNSアプリの動画"/> 
            </div>
        </>
    )
}
        export default Movies;