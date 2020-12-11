import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import contact from '../img/contact.jpg';

const Contact = (props)=>{
    return(
        <section className = "container ">
            <div className="sectionTitleBox contact"style ={{backgroundImage:`url(${contact})`}}>
                <div className="sectionBg">
                    <h2 className = "sectionTitle">Contact</h2>
                </div>
            </div>
            <div className="inner">
            <h3 className = "subTitle">contact<span></span></h3>
                <ul className="snsList navLIst">
                    <li className="snsItem  navItem">
                        <a href="https://twitter.com/t_takutooo" className="navLink"><FontAwesomeIcon icon={['fab', "twitter" ]} className = "fa-3x fa-fw"/>Twitter</a>
                    </li>
                    <li className="snsItem navItem">
                        <a href="https://github.com/aku424" className="navLink"><FontAwesomeIcon icon={['fab', "github" ]} className = "fa-3x fa-fw"/>GitHub</a>
                    </li>
                    <li className="snsItem navItem">
                        <a href="mailto:aku424tt@gmail.com" className="navLink"><FontAwesomeIcon icon={['far', "envelope" ]} className = "fa-3x fa-fw"/>E-mail</a>
                    </li>
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
                    <Link className="nexPage" to="/">Back to top<span></span></Link>
                </div>
            </div>
        </section>
    )
}


export default Contact;