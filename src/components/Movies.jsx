import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
//ReactPlayerのimport
import ReactPlayer from 'react-player'
import Movie from '../img/movies.jpg';



const Movies = ()=>{
    return(
        <>  
            <section className = "container works">
                <div className="sectionTitleBox movies" style = {{backgroundImage:`url(${Movie})`}}>
                    <div className="sectionBg">
                        <h2 className = "sectionTitle">movies</h2>
                    </div>
                </div>
                    <div className="inner">
                        <Router>
                        {/* 挿入されるコンポーネント */}
                            <Route path="/movies/mahabharata" exact component={Mahabharata} />
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
const Mahabharata = ()=>{
    const mahabharata = "https://www.youtube.com/watch?v=4Ps1PQLC34k&feature=youtu.be";
    return(
        <>
            <h3 className = "subTitle">舞台イベント【マハーバーラタ】のイベントサイト<span></span></h3>
            <div className="passBox">
                <p className="passBox__txt">以下のIDとpasswordをご利用ください。</p>
                <p className="passBox__txt passBox--info">ID：user</p>
                <p className="passBox__txt passBox--info">password：password</p>
            </div>

            <div className="nexPageBox linkBox">
                <a href="http://taaatooo.xsrv.jp/mahabharata/" className="nexPage">サイトリンクはこちら<span></span></a>
            </div>
            <div className="moviesBox">
                <ReactPlayer url = {mahabharata} playing alt = "舞台イベント【マハーバーラタ】のイベントサイト"/> 
            </div>
        </>
    )
}
export default Movies;