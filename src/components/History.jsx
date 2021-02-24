import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import history from '../img/history.jpg';
const History = (props)=>{
    return(
        <section className = "container history">
            <div className="sectionTitleBox" style ={{backgroundImage:`url(${history})`}}>
                <div className="sectionBg">
                    <h2 className = "sectionTitle">History</h2>
                </div>
            </div>
            <div className = "inner">
                <h3 className = "subTitle">history<span></span></h3>
                <div className="historyBox">
                    <span className = "historyArrow"></span>
                    <dl className="historyList">
                        <div className="historyItem">
                            <span className = "historyMark">●</span>
                            <dt className = "historyDate">2017年 3月</dt>
                            <dd className = "historyText">高等学校卒業</dd>
                        </div>
                        <div className="historyItem">
                            <span className = "historyMark">●</span>
                            <dt className = "historyDate">2017年 4月</dt>
                            <dd className = "historyText">予備校に通い、浪人生活開始</dd>
                        </div>
                        <div className="historyItem">
                            <span className = "historyMark">●</span>
                            <dt className = "historyDate">2018年 4月</dt>
                            <dd className = "historyText">日本体育大学に入学</dd>
                        </div>
                        <div className="historyItem">
                            <span className = "historyMark">●</span>
                            <dt className = "historyDate">2019年 12月</dt>
                            <dd className = "historyText">プログラミング学習開始</dd>
                        </div>
                        <div className="historyItem">
                            <span className = "historyMark">●</span>
                            <dt className = "historyDate">2020年 4月</dt>
                            <dd className = "historyText">プログラミングスクール「WEB CAMP」でメンターとしてインターンが決まり、研修開始</dd>
                        </div>
                        <div className="historyItem">
                            <span className = "historyMark">●</span>
                            <dt className = "historyDate">2020年 7月</dt>
                            <dd className = "historyText">メンター研修終了、本格的にメンターとしての活動開始</dd>
                        </div>
                        <div className="historyItem">
                            <span className = "historyMark">●</span>
                            <dt className = "historyDate">2020年 10月</dt>
                            <dd className = "historyText">オンラインプログラミングスクール「30DAYS トライアル」で学習開始</dd>
                        </div>
                        <div className="historyItem">
                            <span className = "historyMark">●</span>
                            <dt className = "historyDate">2020年 12月</dt>
                            <dd className = "historyText">Javascript、Reactの学習、当サイト作成開始</dd>
                        </div>
                        <div className="historyItem">
                            <span className = "historyMark arrow"></span>
                            <dt className = "historyDate">2020年 現在</dt>
                            <dd className = "historyText">Javascript、Reactの学習に専念</dd>
                        </div>
                    </dl>
                </div>
                
                <div className = "nexPageBox">
                    <Link className="nexPage" to="/contact/">Next page is contact<span></span></Link>
                </div>
            </div>
        </section>
    )
}


export default History;