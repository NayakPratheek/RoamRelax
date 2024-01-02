
import '../CSS/Navbar.css'
import logo from '../images/logo.png'
import { Link, useNavigate } from "react-router-dom"
import Login from '../JS/Login.js'
function Navbar() {
    const navigate = useNavigate();
    function handleClick() {
        navigate("/login")
    }
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
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/services">Offers</Link></li>
                        <li><Link to="/">Contact</Link></li>
                    </ul>
                </div>
                <div class="log">
                    <button onClick={handleClick}>Login/Sign Up</button>
                </div>
            </div>
        </>
    )
}

export default Navbar;