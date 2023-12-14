
import '../CSS/Navbar.css'
import logo from '../images/logo.png'
import { Link } from "react-router-dom"
function Navbar() {
    return (
        <>
            <div class="navbar">
                <div class="logo">
                    <Link to="/"><img src={logo} alt="Logo" /></Link>
                    <h6><span id="roam">Roam</span><span id="relax"></span>Relax</h6>
                </div>
                <div class="menu">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">About</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/">Offers</Link></li>
                        <li><Link to="/">Contact</Link></li>
                    </ul>
                </div>
                <div class="log">
                    <button><Link to="/login">Login/Sign Up</Link></button>
                </div>
            </div>
        </>
    )
}

export default Navbar;