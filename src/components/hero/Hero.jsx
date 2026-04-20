import "./Hero.css"
import salat from "../../assets/salat.png"

const Hero = () => {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero__inner">
                    <h1 className="hero__title">Your Food court at home</h1>
                    <div className="hero__holder">
                        <a className="hero__link" href="#">
                            <p className="hero__desc">Delivery <span className="hero__span">Order in</span></p>
                        </a>
                        <a className="hero__link" href="#">
                            <p className="hero__desc">Takeout <span className="hero__span">Grab and go</span></p>
                        </a>
                    </div>
                </div>
                <img className="hero__img" src={salat} width={803} height={706} alt="salat" loading="lazy" />
                <ul className="hero__list">
                    <li className="hero__item">
                        <p className="hero__text1">delivery in all paris in less than 30 minutes</p>
                    </li>
                    <li className="hero__item">
                        <p className="hero__text2">Free delivery from 29 euros</p>
                    </li>
                    <li className="hero__item">
                        <p className="hero__text3">Only fresh and French products</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Hero