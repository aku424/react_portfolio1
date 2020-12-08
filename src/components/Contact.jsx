import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = (props)=>{
    return(
        <section className = "container contact">
            <div className="sectionTitleBox">
                <h2 className = "sectionTitle">Contact</h2>
            </div>
            <div className="inner">
                <ul className="contactSnsList">
                    <a href="https://twitter.com/t_takutooo" className="snsLink">
                        <li className="snsItem"><FontAwesomeIcon icon={['fab', "twitter" ]} className = "fa-3x fa-fw"/>Twitter</li>
                    </a>
                    <a href="https://github.com/aku424" className="snsLink">
                        <li className="snsItem"><FontAwesomeIcon icon={['fab', "github" ]} className = "fa-3x fa-fw"/>GitHub</li>
                    </a>
                    <a href="mailto:aku424tt@gmail.com" className="snsLink">
                        <li className="snsItem"><FontAwesomeIcon icon={['far', "envelope" ]} className = "fa-3x fa-fw"/>E-mail</li>
                    </a>
                </ul>
                {/* 以下は余裕かあれば作成する 
                <form action="">
                    <dl>
                        <dt>
                            <label htmlFor="">お名前</label>
                        </dt>
                        <dd>
                            <input type="text"/>
                        </dd>
                        <dt>
                            <label htmlFor="">メールアドレス</label>
                        </dt>
                        <dd>
                            <input type="email"/>
                        </dd>
                        <dt>
                        <label htmlFor="">お問い合わせ内容</label>
                        </dt>
                        <dd>
                            <textarea name="" id="" cols="30" rows="10"></textarea>
                        </dd>
                        <dt>
                            <label htmlFor="">プライバシーポリシーに同意します。</label>
                        </dt>
                        <dd>
                            <input type="checkbox"/>
                        </dd>
                        <button type="submit">送信</button>
                    </dl>
                </form> */}
                <div className = "nexPageBox">
                    <Link className="nexPage" to="/">Top</Link>
                </div>
            </div>
        </section>
    )
}


export default Contact;