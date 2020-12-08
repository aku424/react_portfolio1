import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


const Works = (props)=>{
    return(
        <section className = "container works">
            <div className="sectionTitleBox">
                <h2 className = "sectionTitle">Works</h2>
            </div>
            <div className="inner">
                <div className = "worksLIst">
                    <a className = "workItemLink" href="#">
                        <article className="workItem">
                            <div className="workItemImg">

                            </div>
                            <h3 className = "workItemTitle">アクセサリーサイトのLP</h3>
                            <p className="workItemText">学習の1つとしてデザインカンプからのコーディングをいたしました。コンタクトフォームはGoogle Formsを使用しました。</p>
                        </article>
                    </a>
                    <a className = "workItemLink" href="#">
                        <article className="workItem">
                            <div className="workItemImg">

                            </div>
                            <h3 className = "workItemTitle">カフェのLPサイト</h3>
                            <p className="workItemText">架空の店舗をデザインから自分で考えコーディングいたしました。</p>
                        </article>
                    </a>
                    <a className = "workItemLink" href="#">
                        <article className="workItem">
                            <div className="workItemImg">

                            </div>
                            <h3 className = "workItemTitle">wordpress独自テーマ１</h3>
                            <p className="workItemText">練習の1つとして作成いたしました。</p>
                        </article>
                    </a>
                    <a className = "workItemLink" href="#">
                        <article className="workItem">
                            <div className="workItemImg">

                            </div>
                            <h3 className = "workItemTitle">wordpress独自テーマ2</h3>
                            <p className="workItemText">デザインカンプからのコーディングを行い、wordpressに落とし込むような流れを理解できました。</p>
                        </article>
                    </a>
                    <a className = "workItemLink" href="">
                        <article className="workItem">
                            <div className="workItemImg">

                            </div>
                            <h3 className = "workItemTitle">Reactでのポートフォリオサイト（当サイト）</h3>
                            <p className="workItemText">Reactを学習しつ作成いたしました。Reactの考え方や基本的使い方の理解につながりました。</p>
                        </article>
                    </a>
                    <a className = "workItemLink" href="#">
                        <article className="workItem">
                            <div className="workItemImg">

                            </div>
                            <h3 className = "workItemTitle">Ruby on Railsの簡単なアプリ</h3>
                            <p className="workItemText">こちらも練習の1つとして作成いたしました。CRUDの基本的な機能にコメントといいね機能を付けました。</p>
                        </article>
                    </a>
                </div>
                <div className = "nexPageBox">
                    <Link className="nexPage" to="/history/">History</Link>
                </div>
            </div>
        </section>
    )
}


export default Works;