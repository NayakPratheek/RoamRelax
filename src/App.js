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
import Mangalore from './components/JS/Mangalore.jsx';
import Udupi from './components/JS/Udupi.jsx';
import Mumbai from './components/JS/Mumbai.jsx';
import Bangalore from './components/JS/Bangalore.jsx';
import Confirm from './components/JS/Confirm.jsx';
import Services from './components/JS/Services.jsx';

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
                <Route path='/mumbai' element={<Mumbai />} />
                <Route path='/mangalore' element={<Mangalore />} />
                <Route path='/udupi' element={<Udupi />} />
                <Route path='/bangalore' element={<Bangalore />} />
                <Route path='/confirm' element={<Confirm />} />
                <Route path='services' element={<Services />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
