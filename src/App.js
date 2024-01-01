import Home from './components/JS/Home.js';
import Navbar from './components/JS/Navbar.js';
import Pool from './components/JS/Pool.js'
import Hotels from './components/JS/Hotels.js'
import Add from './components/JS/Add.js'
import Footer from './components/JS/Footer.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/JS/Login.js';
function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route exact path='/' element={<Home />}></Route>
                    <Route exact path='/login' element={<Login />}></Route>
                </Routes>
                <Pool />
                <Hotels />
                <Add />
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default App;
