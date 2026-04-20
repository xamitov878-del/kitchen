import "./Specialities.css"
import bagel from "../../assets/ponchik.svg"
import burger from "../../assets/burger.svg"
import chicken from "../../assets/chicken.svg"
import fish from "../../assets/fish.svg"
import fishchips from "../../assets/fishnchips.svg"
import vegan from "../../assets/vegan.svg"
import pizza from "../../assets/pizza.svg"
import raviolli from "../../assets/raviolli.svg"
import Usp from "../../assets/USP.svg"
import Map from "../../assets/Map.svg"
import oshxona from "../../assets/kuxnya.svg"
import ikktaOdam from "../../assets/iktaOdam.svg"
import oshpaz from "../../assets/oshpaz.jpg"
import salatlar from "../../assets/salatlar.jpg"


const Specialities = () => {
  return (
    <section>
        <div className="container">
            <div className="Specialities__inner">
                <h2 className="Specialities__title">Specialities</h2>
                <button className="Specialities__btn">show all</button>
            </div>
            <ul className="Specialities__list">
                <li className="Specialities__item">
                    <img src={bagel} alt="bagel" />
                    <span className="Specialities__span">Bagel</span>
                </li>
                <li className="Specialities__item">
                    <img src={burger} alt="burger" />
                    <span className="Specialities__span">Burger</span>
                </li>
                <li className="Specialities__item">
                    <img src={chicken} alt="chicken" />
                    <span className="Specialities__span">Chicken</span>
                </li>
                <li className="Specialities__item">
                    <img src={fish} alt="fish" />
                    <span className="Specialities__span">Fish</span>
                </li>
                <li className="Specialities__item">
                    <img src={fishchips} alt="fish and chips" />
                    <span className="Specialities__span">Fish’Chips</span>
                </li>
                <li className="Specialities__item">
                    <img src={vegan} alt="vegan" />
                    <span className="Specialities__span">Salads</span>
                </li>
                <li className="Specialities__item">
                    <img src={pizza} alt="pizza" />
                    <span className="Specialities__span">Pizza</span>
                </li>
                <li className="Specialities__item">
                    <img src={raviolli} alt="raviolli" />
                    <span className="Specialities__span">Pasta</span>
                </li>
            </ul>
            <img className="Specialities__img" width={1440} height={284} src={Usp} alt="USP" />
            <img className="Specialities__img2" width={1280} height={600} src={Map} alt="map" />
            <p className="Specialities__text">#YellowKitchens <span className="Specialities__span2">in instagram</span></p>
            <ul className="Specialities__list">
                <li><img width={296} height={299} src={oshxona} alt="oshxona" /></li>
                <li><img width={296} height={299} src={ikktaOdam} alt="odamlar" /></li>
                <li><img width={296} height={299} src={oshpaz} alt="oshpaz" /></li>
                <li><img width={296} height={299} src={salatlar} alt="salatlar" /></li>
            </ul>
        </div>
    </section>
  )
}

export default Specialities