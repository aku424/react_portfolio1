import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


const About = (props)=>{
    return(
        // aboutページ
        <section className = "container about">
            <div className="sectionTitleBox">
                <h2 className = "sectionTitle">About</h2>
            </div>
            <div className="inner">
                <div className="aboutFirst">
                    <div className="aboutFirstPic">
                        <img src="" alt=""/>
                    </div>
                    <dl className="aboutFirstList">
                        <dt className = "aboutFirstListTitle">名前：</dt>
                        <dd className = "aboutFirstLIstDesc">高島 拓斗</dd>
                        <dt className = "aboutFirstListTitle">年齢：</dt>
                        <dd className = "aboutFirstLIstDesc">21歳</dd>
                        <dt className = "aboutFirstListTitle">出身地：</dt>
                        <dd className = "aboutFirstLIstDesc">東京都</dd>
                        <dt className = "aboutFirstListTitle">大学：</dt>
                        <dd className = "aboutFirstLIstDesc">日本体育大学/体育学部/健康学科</dd>
                        <dt className = "aboutFirstListTitle">座右の銘：</dt>
                        <dd className = "aboutFirstLIstDesc">できない理由を探すより、できる方法を考えろ</dd>
                    </dl>
                </div>
                <div className = "aboutSecond">
                    <article className ="skillItem">
                        <div className="skillImg">

                        </div>
                        <h3 className = "skillTitle">Javascript</h3>
                        <p className = "skillText">JQueryを使うために学習し、現在はリッチなアニメーションが再現できるように日々学習中です。当サイトもJavascriptのフレームワークである、Reactを使用して作成いたしました。学習に関しましては完全独学です。</p>
                    </article>
                    <article className ="skillItem">
                        <div className="skillImg">

                        </div>
                        <h3 className = "skillTitle">HTML&CSS</h3>
                        <p className = "skillText">プログラミングを始めた際に最初に取り掛かった言語です。現在はcss設計に関しての学習をしております。学習に関しましては独学とオンラインプログラミングスクール「30DAYS トライアル」で学習しております。</p>
                    </article>
                    <article className ="skillItem">
                        <div className="skillImg">

                        </div>
                        <h3 className = "skillTitle">wordpress</h3>
                        <p className = "skillText">wordpressの独自テーマを作成した経験があります。簡単なwebサイトで貼りますがコーポレートサイトの作成予定があります。学習に関しましては独学と「30DAYS トライアル」で学習しております。</p>
                    </article>
                    <article className ="skillItem">
                        <div className="skillImg">

                        </div>
                        <h3 className = "skillTitle">Ruby</h3>
                        <p className = "skillText">webアプリケーションを作成したいと考え、学習いたしました。また、プログラミングスクール「WEB CAMP」でメンターもしております。学習に関しましては独学とメンターでの実務経験から学びました。</p>
                    </article>
                </div>
                <div className = "nexPageBox">
                    <Link className="nexPage" to="/works/">Works</Link>
                </div>
            </div>
        </section>
    )
}


export default About;