import '../CSS/Signup.css'
import { Routes, Route, useNavigate } from 'react-router-dom';
import 'boxicons/css/boxicons.min.css';
import Login from '../JS/Login.js';

function Signup() {
    const navigate = useNavigate();
    function logIn() {
        navigate('/login')
    }
    return (
        <>
            <div className='root1'>
                <div class="container">
                    <form class="signup-form" action="/login.html" method="POST">
                        <h2>Sign Up</h2>
                        <div class="form-group">
                            <input type="text" id="name" name="name" placeholder="Name" required />
                        </div>
                        <div class="form-group">
                            <input type="email" id="email" name="email" placeholder="Email" required />
                        </div>
                        <div class="form-group">
                            <input type="tel" id="phone" name="phone" placeholder="Phone" required />
                        </div>
                        <div class="form-group">
                            <input type="password" id="password" name="password" placeholder="Password" required />
                        </div>
                        <div class="form-group">
                            <button type="submit" id="submit">Sign Up</button>
                        </div>
                    </form>
                    <div class="register">
                        <p>
                            Already have an account?
                            <button className="logbutt" onClick={() => logIn('login')}>Login</button>
                        </p>
                    </div>
                    <Routes>
                        <Route path='/login' element={<Login />}></Route>
                    </Routes>
                </div>
            </div>

        </>
    );
}

export default Signup;