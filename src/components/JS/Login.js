import { useEffect, useState } from 'react';
import '../CSS/Login.css'
import Signup from '../JS/Signup.js'
import { Routes, Route, useNavigate } from 'react-router-dom';
import 'boxicons/css/boxicons.min.css';


const FETCH_BASE_URL = process.env.REACT_APP_FETCH_BASE_URL;
function Login() {
    const userInfo = useState({
        name: "",

    })
    async function handleSubmit() {
        const userLogged = await fetch(FETCH_BASE_URL + "/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({

            }),

        })
    }

    const navigate = useNavigate();
    function signUp() {
        navigate('/signup')
    }


    // useEffect(() => {
    //     console.log("hii");
    // }, []);
    return (
        <>
            <div className='root'>
                <div class="wrapper">
                    <form action="">
                        <h1>Login</h1>
                        <div class="input-box">
                            <input type="text" placeholder="Username" required />
                            <i className='bx bxs-user'></i>
                        </div>
                        <div class="input-box">
                            <input type="password" placeholder="Password" required />
                            <i class="bx bxs-lock-alt"></i>
                        </div>
                        <div class="input-box">
                            <input type="password" placeholder="Re-enter Password" required />
                            <i class="bx bxs-lock-alt"></i>
                        </div>
                        <div class="remember-forgot">
                            <label><input type="checkbox" />Remeber me</label>
                            <a href="#">Forgot Password?</a>
                        </div>
                        <button type="submit" class="btn" onSubmit={handleSubmit}>Login</button>
                        <div class="register">
                            <p>
                                Don't have an account?
                                <button className="sign-butt" onClick={() => signUp('signup')}>Signup</button>
                            </p>
                        </div>
                    </form>
                    <Routes>
                        <Route path='/signup' element={<Signup />}></Route>
                    </Routes>
                </div>
            </div>

        </>
    );
}

export default Login;