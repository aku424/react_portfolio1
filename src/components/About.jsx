import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import about from '../img/about.jpg';
import prof from '../img/prof.jpeg';
import js from '../img/js.png';
import html from '../img/html.png';
import ruby from '../img/ruby.png';
import wp from '../img/wp.png';
///関数の定義
const About = (props)=>{
    return(
        // aboutページ
        <section className = "container">
            <div className="sectionTitleBox about" style={{backgroundImage:`url(${about})`}}>
                <div className="sectionBg">
                    <h2 className = "sectionTitle">About</h2>
                </div>
            </div>
            <div className="inner">
                <h3 className = "subTitle">profile<span></span></h3>
                <div className="aboutFirst">
                    <div className="aboutFirstPic">
                        <img src={prof} alt="プロフィール画像"/>
                    </div>
                    <dl className="aboutFirstList">
                        <div className="aboutFirstItem">
                            <dt className = "aboutFirstItemTitle">名前：</dt>
                            <dd className = "aboutFirstItemDesc">高島 拓斗</dd>
                        </div>
                        <div className="aboutFirstItem">
                            <dt className = "aboutFirstItemTitle">年齢：</dt>
                            <dd className = "aboutFirstItemDesc">21歳</dd>
                        </div>
                        <div className="aboutFirstItem">
                            <dt className = "aboutFirstItemTitle">出身地：</dt>
                            <dd className = "aboutFirstItemDesc">東京都</dd>
                        </div>
                        <div className="aboutFirstItem">
                            <dt className = "aboutFirstItemTitle">大学：</dt>
                            <dd className = "aboutFirstItemDesc">日本体育大学/体育学部/健康学科</dd>
                        </div>
                        <div className="aboutFirstItem">
                            <dt className = "aboutFirstItemTitle">座右の銘：</dt>
                            <dd className = "aboutFirstItemDesc">できない理由を探すより、<br className= "br"/> できる方法を考えろ</dd>
                        </div>
                    </dl>
                </div>
                <h3 className = "subTitle skillSubTitle">skill <span className="sectionSkillTitle"></span></h3>
                <div className = "aboutSecond">
                    <article className ="skillItem">
                        <div className="skillImg">
                            <img src={js} alt="jsの画像"/>
                        </div>
                        <h3 className = "skillTitle">Javascript</h3>
                        <p className = "skillText">JQueryを使うために学習し、現在はリッチなアニメーションが再現できるように日々学習中です。当サイトもJavascriptのフレームワークである、Reactを使用して作成いたしました。学習に関しましては完全独学です。</p>
                    </article>
                    <article className ="skillItem">
                        <div className="skillImg">
                            <img src={html} alt="HTMLの画像"/>
                        </div>
                        <h3 className = "skillTitle">HTML&CSS</h3>
                        <p className = "skillText">プログラミングを始めた際に最初に取り掛かった言語です。現在はcss設計に関しての学習をしております。学習に関しましては独学とオンラインプログラミングスクール「30DAYSトライアル」で学習しております。</p>
                    </article>
                    <article className ="skillItem">
                        <div className="skillImg">
                        <img src={ruby} alt="Rubyの画像"/>
                        </div>
                        <h3 className = "skillTitle">Ruby</h3>
                        <p className = "skillText">webアプリケーションを作成したいと考え、学習いたしました。また、プログラミングスクール「WEB CAMP」でメンターもしております。学習に関しましては独学とメンターでの実務経験から学びました。</p>
                    </article>
                    <article className ="skillItem">
                        <div className="skillImg">
                        <img src={wp} alt="wordpressの画像"/>
                        </div>
                        <h3 className = "skillTitle">wordpress</h3>
                        <p className = "skillText">wordpressの独自テーマを作成した経験があります。簡単なwebサイトで貼りますがコーポレートサイトの作成予定があります。学習に関しましては独学と「30DAYS トライアル」で学習しております。</p>
                    </article>
                </div>
                <div className = "nexPageBox">
                    <Link className="nexPage" to="/works/">Next page is works<span></span></Link>
                </div>
            </div>
        </section>
    )
}


export default About;