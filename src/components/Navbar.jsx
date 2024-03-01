import logo_black from '../assets/LogoBlack.png';
import logo_gold from '../assets/LogoGold.png';

const Navbar = () => {

    return (
        <div className="navbar-container">
            <div className="logo-container">
                <img src={logo_gold} alt="logo gold" />
            </div>
            <div className="navlinks-container">
                <a href="">HOME</a>
                <a href="">PROGRAMS</a>
                <a href="">TESTIMONIALS</a>
                <a href="">CONTACT</a>
            </div>
            <div className="booking-container">
            <a className="book-button" href="https://www.vagaro.com/projectmovementstudio/services" target='_blank'>GET STARTED</a>
            </div>
        </div>
    )
}

export default Navbar