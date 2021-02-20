import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
//画像のimport
import works from '../img/works.jpg';
import LP1 from '../img/LP1.png';
import LP2 from '../img/LP2.png';
import WP from '../img/WPSite.png';
import Ruby from '../img/RubyApp.png';
import Mahabharata from '../img/mahabharata.png';
import ReactSite from '../img/react.png';
///リンク


const Works = (props)=>{
    // const test = "https://www.youtube.com/watch?v=lVJLNsLNnWs";
    return(
        <section className = "container works">
            <div className="sectionTitleBox" style = {{backgroundImage:`url(${works})`}}>
                <div className="sectionBg">
                    <h2 className = "sectionTitle">Works</h2>
                </div>
            </div>
            <div className="inner">
                <h3 className = "subTitle">works<span></span></h3>
                <p className="workSubText">※コンテンツをクリックしていただけると動画ページに移動します。<br/>
                ※音声はありません。</p>
                <div className = "worksLIst">
                    <Link to ="/movies/mahabharata/" className = "workItemLink">
                        <article className="workItem">
                            <div className="workItemImg">
                                <img src={Mahabharata} alt=""/>
                            </div>
                            <h3 className = "workItemTitle">舞台イベント【マハーバーラタ】のイベントサイト</h3>
                            <p className="workItemLanguage">使用言語：HTML&CSS、Javascript(JQuery)、PHP、wordpress</p>
                            <p className="workItemText">デザインカンプからのコーディングをしました。実案件の制作物を模写コーディングしました。1から独自のテーマを作りました。</p>
                        </article>
                    </Link>
                    <Link to ="/movies/lp1/" className = "workItemLink">
                        <article className="workItem">
                            <div className="workItemImg">
                                <img src={LP1} alt=""/>
                            </div>
                            <h3 className = "workItemTitle">アクセサリーサイトのLP</h3>
                            <p className="workItemLanguage">使用言語：HTML&CSS、Javascript(JQuery)</p>
                            <p className="workItemText">学習の1つとしてデザインカンプからのコーディングをいたしました。コンタクトフォームはGoogle Formsを使用しました。</p>
                        </article>
                    </Link>
                    <Link to = "/movies/lp2/" className = "workItemLink">
                        <article className="workItem">
                            <div className="workItemImg">
                                <img src={LP2} alt=""/>
                            </div>
                            <h3 className = "workItemTitle">LPサイト</h3>
                            <p className="workItemLanguage">使用言語：HTML&CSS、Javascript(JQuery)</p>
                            <p className="workItemText">架空の店舗をデザインから自分で考えコーディングいたしました。</p>
                        </article>
                    </Link>
                    <Link to = "/movies/wp" className = "workItemLink">
                        <article className="workItem">
                            <div className="workItemImg">
                            <img src={WP} alt=""/>
                            </div>
                            <h3 className = "workItemTitle">wordpress独自テーマ１</h3>
                            <p className="workItemLanguage">使用言語：HTML&CSS、Javascript(JQuery)、PHP、wordpress</p>
                            <p className="workItemText">練習の1つとして作成いたしました。</p>
                        </article>
                    </Link>
                    {/* <a className = "workItemLink" href="#">
                        <article className="workItem">
                            <div className="workItemImg">
                            <img src={} alt=""/>
                            </div>
                            <h3 className = "workItemTitle">wordpress独自テーマ2</h3>
                            <p className="workItemLanguage">使用言語：</p>
                            <p className="workItemText">デザインカンプからのコーディングを行い、wordpressに落とし込むような流れを理解できました。</p>
                        </article>
                    </a> */}
                    <Link to = "/" className = "workItemLink">
                        <article className="workItem">
                            <div className="workItemImg">
                            <img src={ReactSite} alt=""/>
                            </div>
                            <h3 className = "workItemTitle">Reactでのポートフォリオサイト</h3>
                            <p className="workItemLanguage">使用言語：Javascript、React、HTML&CSS</p>
                            <p className="workItemText">Reactを学習しつつ作成いたしました。Reactの考え方や基本的な使い方の理解につながりました。</p>
                        </article>
                    </Link>
                    <Link to = "/movies/ruby" className = "workItemLink">
                        <article className="workItem">
                            <div className="workItemImg">
                            <img src={Ruby} alt=""/>
                            </div>
                            <h3 className = "workItemTitle">簡単なSNSアプリ</h3>
                            <p className="workItemLanguage">使用言語：Ruby、Ruby on Rails、HTML&CSS</p>
                            <p className="workItemText">こちらも練習の1つとして作成いたしました。CRUDの基本的な機能にコメントといいね機能を付けました。</p>
                        </article>
                    </Link>
                </div>
                <div className = "nexPageBox">
                    <Link to="/history/" className="nexPage">Next page is history<span></span></Link>
                </div>
            </div>
        </section>
    )
}


export default Works;