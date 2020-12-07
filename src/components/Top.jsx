import React from 'react';
import Game from './Game';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


const Top = (props)=>{
    return(
        <section className="top container">
            <div className="sectionTitleBox sectionTitleBpxTop">
                <div className="sectionTitleInner sectionTitleInnerTop">
                    <h2>Welcome to my portfolio site</h2>
                    <p>初めまして。ご覧いただきありがとうございます。<br/> 
                    当webサイトは私の自己紹介を主に取り扱っております。<br/>
                    ご興味ありましたら、引き続きよろしくお願いします。</p>
                </div>
            </div>
            <p>よければ以下のゲームを試して目てください。</p>
            <Game/>
            <div className = "nexPageBox">
                <Link className="nexPage" to="/about/">about</Link>
            </div>
        </section>
    )
}


export default Top;