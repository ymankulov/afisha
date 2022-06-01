import React from 'react';
import "../scss/Footer.scss"
import Logo from '../assets/AFISHA.KG (1).png'

const Footer = () => {
    return (
        <footer id="footer">
            <div className="container">
                <div className="footer__text">
                    <div className="footer__icon">
                        <a href="">
                            <img src={Logo} alt="" className="footer__text--icons" style={{
                                width:"17%",
                            }}/>
                        </a>
                    </div>
                    <div className="footer__text--ate">

                        <div className="footer__text--ash">
                            <a href="#" className="footer__text--texts">О нас</a>
                            <a href="# " className="footer__text--texts">О компании</a>
                            <a href="#" className="footer__text--texts">Контакты</a>
                            <a href="#" className="footer__text--texts">Публичная оферта</a>
                        </div>
                        <div className="footer__text--ash1">
                            <a href="#" className="footer__text--texts">Мы в соцетиях</a>
                            <a href="#" className="footer__text--texts">Instagram</a>
                            <a href="#" className="footer__text--texts">twitter</a>
                            <a href="#" className="footer__text--texts">facebook</a>
                        </div>
                        <div className="footer__text--tel">
                            <a href="tel:+996 (501) 806 535" className="footer__text--texts">+996 (501) 806 535</a>
                            <a href="tel:+996 (555) 422 604" className="footer__text--texts">+996 (555) 422 604</a>
                            <a href="tel:+996 (776) 934 534 " className="footer__text--texts">+996 (776) 934 534 </a>
                            <a href="tel:@afisha.kg " className="footer__text--texts">@afisha.kg </a>
                        </div>
                    </div>


                </div>
            </div>

        </footer>
    );
};

export default Footer;