import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/JS/Home.js';
import Navbar from './components/JS/Navbar.js';
import Pool from './components/JS/Pool.js';
import Hotels from './components/JS/Hotels.js';
import Add from './components/JS/Add.js';
import Footer from './components/JS/Footer.js';
import Login from './components/JS/Login.js';
import Signup from './components/JS/Signup.js';

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/pool' element={<Pool />} />
                <Route path='/hotels' element={<Hotels />} />
                <Route path='/add' element={<Add />} />
            </Routes>

        </BrowserRouter>
    );
}

export default App;
