import React from 'react';
import Game from './Game';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import top from '../img/top.jpeg';

const Top = (props)=>{
    return(
        <section className="container">
            <div className="sectionTitleBox top" style={{backgroundImage:`url(${top})`}}>
                <div className="sectionTitleInner sectionTitleInnerTop">
                    <div className="sectionBg bgTop">
                        <div className = "bgTopInner">
                            <h2 className = "sectionTopTitle">Welcome to my portfolio site</h2>
                            <p className = "sectionTopText">初めまして。ご覧いただきありがとうございます。<br/> 
                            当webサイトは私の自己紹介を主に取り扱っております。<br/>
                            ご興味ありましたら、引き続きよろしくお願いします。</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="inner">
                <p className = "topGameText">よろしければ以下のゲームをお試しください。</p>
                <Game/>
                <div className = "nexPageBox">
                    <Link className="nexPage" to="/about/">Next page is about<span></span></Link>
                </div>
            </div>
        </section>
    )
}


export default Top;