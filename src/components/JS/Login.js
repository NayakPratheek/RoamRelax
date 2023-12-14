import { useEffect, useState } from 'react';
import '../CSS/Login.css'
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
    // useEffect(() => {
    //     console.log("hii");
    // }, []);
    return (
        <>
            <div class="home">
                <a href="index.html">Home &#x2192;</a>
            </div>
            <div class="wrapper">
                <form action="">
                    <h1>Login</h1>
                    <div class="input-box">
                        <input type="text" placeholder="Username" required />
                        <i class="bx bxs-user"></i>
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
                            <a href="signup.html">Register/ Sign up</a>
                        </p>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Login;