import './Header.css'
import logo from '../../assets/logo.svg'



const Header = () => {
    const menu = () => {
        const menuWrapper = document.querySelector(".menu__wrapper")
        menuWrapper.classList.toggle("block")
    }
    return (
        <header className='header'>
            <div className='container'>
                <div className='header__wrapper'>
                    <a href="#"><img src={logo} width={184} height={24} alt="logo" /></a>
                    <div className='header__inner'>
                        <button className="header__btn1"></button>
                        <button className="header__btn2"></button>
                        <button className="header__btn3" aria-label='Menu' onClick={menu}>
                            <span className='header__span'></span>
                            <span className='header__span'></span>
                            <span className='header__span'></span>
                        </button>
                    </div>
                </div>
            </div>
            <div className='menu__box'>
            <div className='menu__wrapper'>
                <div className='menu__inner'>
                    <span className='menu__span'>0800 111 126</span>
                    <p className='menu__desc'>8:00 - 22:00</p>
                </div>
                <ul className='menu__list'>
                    <li className="menu__item">Delivery info</li>
                    <li className="menu__item">About us</li>
                    <li className="menu__item">Restaurants</li>
                    <li className="menu__item">Specialities</li>
                </ul>
                <select className='menu__select'>
                    <option value="uzb">English</option>
                    <option value="eng">Русский</option>
                    <option value="rus">Uzbek</option>
                </select>
            </div>
            </div>
        </header>
    )
}

export default Header