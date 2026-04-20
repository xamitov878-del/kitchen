import "./Footer.css"
import logo from "../../assets/logoWhite.svg"
import AppleLogo from "../../assets/appleLog.svg"
import PlayLogo from "../../assets/playLogo.svg"
import instegram from "../../assets/instegram.svg"
import twitter from "../../assets/twitter.svg"
import facebook from "../../assets/facebbok.svg"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <div className="footer__inner">
                        <img src={logo} width={184} height={24} alt="logo" />
                        <span className="footer__span"></span>
                        <div>
                            <img className="footer__img2" src={AppleLogo} alt="apple logo" />
                            <img src={PlayLogo} alt="play logo" />
                        </div>
                    </div>
                    <ul className="footer__list">
                        <li className="footer__item">
                            <h2 className="footer__title">About us</h2>
                            <p className="footer__text">Concept</p>
                            <p className="footer__text">Franchise</p>
                            <p className="footer__text">Business</p>
                            <p className="footer__text">Restaurant signup</p>
                            <p className="footer__text">For Investors</p>
                        </li>
                        <li className="footer__item">
                            <h2 className="footer__title">Get help</h2>
                            <p className="footer__text">Read FAQs</p>
                            <p className="footer__text">Restaurants</p>
                            <p className="footer__text">Specialities</p>
                            <p className="footer__text">Sign up to deliver</p>
                            <p className="footer__text">
                                <select className="footer__text">
                                    <option value="uzb">Uzbek</option>
                                    <option value="rus">Русский</option>
                                    <option value="eng">English</option>
                                </select>
                            </p>
                        </li>
                        <li className="footer__item">
                            <h2 className="footer__title">Contact us</h2>
                            <p className="footer__text">Yellow kitchen Paris 11</p>
                            <p className="footer__text">69 avenue de la Republique 75011 Paris</p>
                            <p className="footer__text">0800 111 126</p>
                            <p className="footer__text">contact@yellowkitchens.com</p>
                        </li>
                    </ul>
                </div>
                <div className="footer__rov">
                    <div className="footer__box">
                        <a href="#"><img src={instegram} width={24} height={24} alt="instegram" /></a>
                        <a href="#"><img src={twitter} width={24} height={24} alt="twiiter" /></a>
                        <a href="#"><img src={facebook} width={24} height={24} alt="facebook" /></a>
                    </div>
                    <ul className="footer__list2">
                        <li className="footer__item2">Privacy Policy</li>
                        <li className="footer__item2">Terms</li>
                        <li className="footer__item2">© 2020 Yellow kitchen</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer