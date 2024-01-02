import React from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Mumbai from '../JS/Mumbai.jsx';
import Mangalore from '../JS/Mangalore.jsx';
import Bangalore from '../JS/Bangalore.jsx';
import Udupi from '../JS/Udupi.jsx';
import '../CSS/Hotels.css';


function Hotels() {
    const navigate = useNavigate();

    function redirectToPage(page) {
        navigate(`/mumbai`);
    }
    function redirectToPage1(page) {
        navigate(`/mangalore`);
    }
    function redirectToPage2(page) {
        navigate(`/bangalore`);
    }
    function redirectToPage3(page) {
        navigate(`/udupi`);
    }

    return (
        <>
            <div class="hotels1">
                <div class="headline">
                    <h2>Popular searches</h2>
                </div>
                <div class="cards">
                    <div class="card">
                        <div class="card-content">
                            <img src="https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_258,q_auto,w_258/categoryimages/64/98/64981_v33.jpeg"
                                alt="" />
                            <span>
                                <div class="hotel-name">Mumbai</div>
                            </span>
                            <div class="location"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                viewBox="0 0 24 24" class="pointer-events-none max-h-full max-w-full">
                                <path
                                    d="M18 8.23a6 6 0 00-11.9 0A6.49 6.49 0 006 9a5.79 5.79 0 00.38 2.09l4.75 9.4a1 1 0 001.74 0l4.75-9.4A5.79 5.79 0 0018 9a6.49 6.49 0 000-.77zM12 13a4 4 0 114-4 4 4 0 01-4 4z"
                                    fill="currentColor"></path>
                            </svg>India</div>
                            <div class="extra">
                                <div class="hot">
                                    <h4>5038 Hotels</h4>
                                </div>
                            </div>
                            <div class="extra">
                                <div class="avg">
                                    <span id="avg">
                                        <h4>Avg. Rs.3853</h4>
                                    </span>
                                </div>
                            </div>
                            <button className="button" onClick={() => redirectToPage('mumbai')}>View More</button>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-content">
                            <img src="https://ashwinishenoy.com/wp-content/uploads/2022/03/EOkux2BUUAAYdgc.jpg" alt="" />
                            <span>
                                <div class="hotel-name">Mangalore</div>
                            </span>
                            <div class="location"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                viewBox="0 0 24 24" class="pointer-events-none max-h-full max-w-full">
                                <path
                                    d="M18 8.23a6 6 0 00-11.9 0A6.49 6.49 0 006 9a5.79 5.79 0 00.38 2.09l4.75 9.4a1 1 0 001.74 0l4.75-9.4A5.79 5.79 0 0018 9a6.49 6.49 0 000-.77zM12 13a4 4 0 114-4 4 4 0 01-4 4z"
                                    fill="currentColor"></path>
                            </svg>India</div>
                            <div class="extra">
                                <div class="hot">
                                    <h4>1146 Hotels</h4>
                                </div>
                            </div>
                            <div class="extra">
                                <div class="avg">
                                    <span id="avg">
                                        <h4>Avg. Rs.3667</h4>
                                    </span>
                                </div>
                            </div>
                            <button className="button" onClick={() => redirectToPage1('mangalore')}>View More</button>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-content">
                            <img src="https://static.toiimg.com/photo/54559212.cms" alt="" />
                            <span>
                                <div class="hotel-name">Bangalore</div>
                            </span>
                            <div class="location"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                viewBox="0 0 24 24" class="pointer-events-none max-h-full max-w-full">
                                <path
                                    d="M18 8.23a6 6 0 00-11.9 0A6.49 6.49 0 006 9a5.79 5.79 0 00.38 2.09l4.75 9.4a1 1 0 001.74 0l4.75-9.4A5.79 5.79 0 0018 9a6.49 6.49 0 000-.77zM12 13a4 4 0 114-4 4 4 0 01-4 4z"
                                    fill="currentColor"></path>
                            </svg>India</div>
                            <div class="extra">
                                <div class="hot">
                                    <h4>4989 Hotels</h4>
                                </div>
                            </div>
                            <div class="extra">
                                <div class="avg">
                                    <span id="avg">
                                        <h4>Avg. Rs.4038</h4>
                                    </span>
                                </div>
                            </div>
                            <button className="button" onClick={() => redirectToPage2('bangalore')}>View More</button>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-content">
                            <img src="https://twinsontoes.com/wp-content/uploads/kaup-lighthouse-585x329.jpg?v=1691502949"
                                alt="" />
                            <span>
                                <div class="hotel-name">Udupi</div>
                            </span>
                            <div class="location"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                viewBox="0 0 24 24" class="pointer-events-none max-h-full max-w-full">
                                <path
                                    d="M18 8.23a6 6 0 00-11.9 0A6.49 6.49 0 006 9a5.79 5.79 0 00.38 2.09l4.75 9.4a1 1 0 001.74 0l4.75-9.4A5.79 5.79 0 0018 9a6.49 6.49 0 000-.77zM12 13a4 4 0 114-4 4 4 0 01-4 4z"
                                    fill="currentColor"></path>
                            </svg>India</div>
                            <div class="extra">
                                <div class="hot">
                                    <h4>978 Hotels</h4>
                                </div>
                            </div>
                            <div class="extra">
                                <div class="avg">
                                    <span id="avg">
                                        <h4>Avg. Rs.2054</h4>
                                    </span>
                                </div>
                            </div>
                            <button className="button" onClick={() => redirectToPage3('udupi')}>View More</button>
                        </div>
                    </div>
                    <Routes>
                        <Route path='/mumbai' element={<Mumbai />} />
                        <Route path='/mangalore' element={<Mangalore />} />
                        <Route path='/bangalore' element={<Bangalore />} />
                        <Route path='/udupi' element={<Udupi />} />
                    </Routes>
                </div>
            </div>

        </>
    );
}
export default Hotels;