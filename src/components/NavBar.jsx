import CartWidget from './CartWidget.jsx'
import logo from '../assets/logo.png'

const NavBar = () => {
    return (
        <div className="header">
            <a className="logo" href="index.html">
                <img src={logo} alt=""/>
            </a>
            <nav>
                <ul>
                    <li><a href="index.html">Mac</a></li>
                    <li><a href="index.html">iPad</a></li>
                    <li><a href="index.html">iPhone</a></li>
                    <li><a href="index.html">Watch</a></li>
                    <li><a href="index.html">Vision</a></li>
                    <li><a href="index.html">Airpods</a></li>
                    <li><a href="index.html">TV & Home</a></li>
                    <li><a href="index.html">Entertainment</a></li>
                    <li><a href="index.html">Accessories</a></li>
                </ul>
            </nav>
            <CartWidget/>
        </div>
    )
}

export default NavBar