import "./Restaurant.css"
import burger from '../../assets/burger.png'
import lama from '../../assets/lagmon.png'
import salat from '../../assets/miniSalat.png'
import kartoshka from '../../assets/kartoshka.png'

const Restaurant = () => {
  return (
    <section className="restaurant">
        <div className="container">
            <div className="restaurant__inner">
                <h2 className="restaurant__title">Restaurants</h2>
                <button className="restaurant__btn">show all</button>
            </div>
            <ul className="restaurant__list">
                <li>
                    <img src={burger} width={296} height={296} alt="burger photo" />
                </li>
                <li>
                    <img src={lama} width={296} height={296} alt="lama photo" />
                </li>
                <li>
                    <img src={salat} width={296} height={296} alt="salat photo" />
                </li>
                <li>
                    <img src={kartoshka} width={296} height={296} alt="kartoshka photo" />
                </li>
            </ul>
        </div>
    </section>
  )
}

export default Restaurant