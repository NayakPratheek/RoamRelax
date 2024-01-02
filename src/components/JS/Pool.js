import "../CSS/Pool.css"
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Confirm from '../JS/Confirm.jsx'

function Pool() {
    const navigate = useNavigate();

    function redirectToPage(page) {
        navigate(`/confirm`);
    }
    return (
        <>
            <div class="hotels" id="services">
                <div class="headline">
                    <h2>Take a dip at these top-rated hotels</h2>
                </div>
                <div class="cards">
                    <div class="card">
                        <div class="card-content">
                            <img src="https://cf.bstatic.com/xdata/images/hotel/270x200/315001454.webp?k=2033555b2b95285e0c5400e320844ef8907193d021f14b59e965262259eabaa4&o="
                                alt="" />
                            <div class="hotel-name">VAMA Retreats</div>
                            <div class="location"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                viewBox="0 0 24 24" class="pointer-events-none max-h-full max-w-full">
                                <path
                                    d="M18 8.23a6 6 0 00-11.9 0A6.49 6.49 0 006 9a5.79 5.79 0 00.38 2.09l4.75 9.4a1 1 0 001.74 0l4.75-9.4A5.79 5.79 0 0018 9a6.49 6.49 0 000-.77zM12 13a4 4 0 114-4 4 4 0 01-4 4z"
                                    fill="currentColor"></path>
                            </svg>Bangalore</div>
                            <div class="extra">
                                <li class="AmenitiesSection_item__sB19R"><span
                                    class="leading-none inline-flex Icon_m__3y0iQ transform AmenitiesSection_icon__WSUCZ"
                                    aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        viewBox="0 0 24 24" class="pointer-events-none max-h-full max-w-full">
                                        <g fill="currentColor">
                                            <path
                                                d="M15 14a2 2 0 00-2 2 1 1 0 01-2 0 2 2 0 00-4 0 .5.5 0 001 0 1 1 0 012 0 2 2 0 004 0 1 1 0 012 0 .5.5 0 001 0 2 2 0 00-2-2zM10.5 18.5a.5.5 0 00-.5.5 1 1 0 01-2 0 2 2 0 00-4 0 .5.5 0 001 0 1 1 0 012 0 2 2 0 004 0 .5.5 0 00-.5-.5zM13.5 18.5a.5.5 0 01.5.5 1 1 0 002 0 2 2 0 014 0 .5.5 0 01-1 0 1 1 0 00-2 0 2 2 0 01-4 0 .5.5 0 01.5-.5zM16.5 2A1.5 1.5 0 0015 3.5V7H8V3.5a.5.5 0 011 0v1a.5.5 0 001 0v-1a1.5 1.5 0 00-3 0v9a.5.5 0 001 0V11h7v1.5a.5.5 0 001 0v-9a.5.5 0 011 0v1a.5.5 0 001 0v-1A1.5 1.5 0 0016.5 2zM8 10V8h7v2z">
                                            </path>
                                        </g>
                                    </svg></span><span>Pool</span></li>
                                <li class="AmenitiesSection_item__sB19R"><span
                                    class="leading-none inline-flex Icon_m__3y0iQ transform AmenitiesSection_icon__WSUCZ"
                                    aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        viewBox="0 0 24 24" class="pointer-events-none max-h-full max-w-full">
                                        <g fill="currentColor">
                                            <path
                                                d="M12 6.6c1.43 1.87 3 4.33 3 5.4a3 3 0 01-6 0c0-1.07 1.57-3.53 3-5.4M12 5s-4 4.79-4 7a4 4 0 008 0c0-2.21-4-7-4-7z">
                                            </path>
                                            <path
                                                d="M17 12.53a5.23 5.23 0 01-.21 1C19.43 14.12 21 15.18 21 16c0 1.22-3.51 3-9 3s-9-1.78-9-3c0-.82 1.57-1.88 4.26-2.5a5.23 5.23 0 01-.21-1c-3 .69-5 2-5 3.47 0 2.21 4.48 4 10 4s10-1.79 10-4C22 14.51 20 13.22 17 12.53z">
                                            </path>
                                            <path
                                                d="M17.83 16c-.67.42-2.69 1-5.83 1s-5.16-.58-5.83-1a6.79 6.79 0 012.12-.68 5.1 5.1 0 01-.63-.89C6 14.8 5 15.36 5 16c0 1.1 3.13 2 7 2s7-.9 7-2c0-.64-1-1.2-2.66-1.57a5.1 5.1 0 01-.63.89 6.79 6.79 0 012.12.68z">
                                            </path>
                                        </g>
                                    </svg></span><span>Spa</span></li>
                            </div>
                            <button className="button" onClick={() => redirectToPage('confirm')}>Book Now</button>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-content">
                            <img src="https://cf.bstatic.com/xdata/images/hotel/270x200/57246692.webp?k=dfb9e10d6f288e01b7ecb293e0b5d0d2b2d34afb01ef1efd2406d875d5f1e2b2&o="
                                alt="" />
                            <div class="hotel-name">Royal Orchid</div>
                            <div class="location"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                viewBox="0 0 24 24" class="pointer-events-none max-h-full max-w-full">
                                <path
                                    d="M18 8.23a6 6 0 00-11.9 0A6.49 6.49 0 006 9a5.79 5.79 0 00.38 2.09l4.75 9.4a1 1 0 001.74 0l4.75-9.4A5.79 5.79 0 0018 9a6.49 6.49 0 000-.77zM12 13a4 4 0 114-4 4 4 0 01-4 4z"
                                    fill="currentColor"></path>
                            </svg>Bangalore</div>
                            <div class="extra">
                                <li class="AmenitiesSection_item__sB19R"><span
                                    class="leading-none inline-flex Icon_m__3y0iQ transform AmenitiesSection_icon__WSUCZ"
                                    aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        viewBox="0 0 24 24" class="pointer-events-none max-h-full max-w-full">
                                        <g fill="currentColor">
                                            <path
                                                d="M15 14a2 2 0 00-2 2 1 1 0 01-2 0 2 2 0 00-4 0 .5.5 0 001 0 1 1 0 012 0 2 2 0 004 0 1 1 0 012 0 .5.5 0 001 0 2 2 0 00-2-2zM10.5 18.5a.5.5 0 00-.5.5 1 1 0 01-2 0 2 2 0 00-4 0 .5.5 0 001 0 1 1 0 012 0 2 2 0 004 0 .5.5 0 00-.5-.5zM13.5 18.5a.5.5 0 01.5.5 1 1 0 002 0 2 2 0 014 0 .5.5 0 01-1 0 1 1 0 00-2 0 2 2 0 01-4 0 .5.5 0 01.5-.5zM16.5 2A1.5 1.5 0 0015 3.5V7H8V3.5a.5.5 0 011 0v1a.5.5 0 001 0v-1a1.5 1.5 0 00-3 0v9a.5.5 0 001 0V11h7v1.5a.5.5 0 001 0v-9a.5.5 0 011 0v1a.5.5 0 001 0v-1A1.5 1.5 0 0016.5 2zM8 10V8h7v2z">
                                            </path>
                                        </g>
                                    </svg></span><span>Pool</span></li>
                                <li class="AmenitiesSection_item__sB19R"><span
                                    class="leading-none inline-flex Icon_m__3y0iQ transform AmenitiesSection_icon__WSUCZ"
                                    aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        viewBox="0 0 24 24" class="pointer-events-none max-h-full max-w-full">
                                        <g fill="currentColor">
                                            <path
                                                d="M12 6.6c1.43 1.87 3 4.33 3 5.4a3 3 0 01-6 0c0-1.07 1.57-3.53 3-5.4M12 5s-4 4.79-4 7a4 4 0 008 0c0-2.21-4-7-4-7z">
                                            </path>
                                            <path
                                                d="M17 12.53a5.23 5.23 0 01-.21 1C19.43 14.12 21 15.18 21 16c0 1.22-3.51 3-9 3s-9-1.78-9-3c0-.82 1.57-1.88 4.26-2.5a5.23 5.23 0 01-.21-1c-3 .69-5 2-5 3.47 0 2.21 4.48 4 10 4s10-1.79 10-4C22 14.51 20 13.22 17 12.53z">
                                            </path>
                                            <path
                                                d="M17.83 16c-.67.42-2.69 1-5.83 1s-5.16-.58-5.83-1a6.79 6.79 0 012.12-.68 5.1 5.1 0 01-.63-.89C6 14.8 5 15.36 5 16c0 1.1 3.13 2 7 2s7-.9 7-2c0-.64-1-1.2-2.66-1.57a5.1 5.1 0 01-.63.89 6.79 6.79 0 012.12.68z">
                                            </path>
                                        </g>
                                    </svg></span><span>Spa</span></li>
                            </div>
                            <button className="button" onClick={() => redirectToPage('confirm')}>Book Now</button>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-content">
                            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/506337650.webp?k=178642c7bb3e3b10b5254f9882da91d1831f99b2852a5c21bcf0e19cf0503c32&o="
                                alt="" />
                            <div class="hotel-name">Seascape</div>
                            <div class="location"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                viewBox="0 0 24 24" class="pointer-events-none max-h-full max-w-full">
                                <path
                                    d="M18 8.23a6 6 0 00-11.9 0A6.49 6.49 0 006 9a5.79 5.79 0 00.38 2.09l4.75 9.4a1 1 0 001.74 0l4.75-9.4A5.79 5.79 0 0018 9a6.49 6.49 0 000-.77zM12 13a4 4 0 114-4 4 4 0 01-4 4z"
                                    fill="currentColor"></path>
                            </svg>Mangalore</div>
                            <div class="extra">
                                <li class="AmenitiesSection_item__sB19R"><span
                                    class="leading-none inline-flex Icon_m__3y0iQ transform AmenitiesSection_icon__WSUCZ"
                                    aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        viewBox="0 0 24 24" class="pointer-events-none max-h-full max-w-full">
                                        <g fill="currentColor">
                                            <path
                                                d="M15 14a2 2 0 00-2 2 1 1 0 01-2 0 2 2 0 00-4 0 .5.5 0 001 0 1 1 0 012 0 2 2 0 004 0 1 1 0 012 0 .5.5 0 001 0 2 2 0 00-2-2zM10.5 18.5a.5.5 0 00-.5.5 1 1 0 01-2 0 2 2 0 00-4 0 .5.5 0 001 0 1 1 0 012 0 2 2 0 004 0 .5.5 0 00-.5-.5zM13.5 18.5a.5.5 0 01.5.5 1 1 0 002 0 2 2 0 014 0 .5.5 0 01-1 0 1 1 0 00-2 0 2 2 0 01-4 0 .5.5 0 01.5-.5zM16.5 2A1.5 1.5 0 0015 3.5V7H8V3.5a.5.5 0 011 0v1a.5.5 0 001 0v-1a1.5 1.5 0 00-3 0v9a.5.5 0 001 0V11h7v1.5a.5.5 0 001 0v-9a.5.5 0 011 0v1a.5.5 0 001 0v-1A1.5 1.5 0 0016.5 2zM8 10V8h7v2z">
                                            </path>
                                        </g>
                                    </svg></span><span>Pool</span></li>
                            </div>
                            <button className="button" onClick={() => redirectToPage('confirm')}>Book Now</button>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-content">
                            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/425356222.webp?k=3dd05126e0250c1cb9527a2617ad3accd4caa5a1b5bacc9540d21ba61b696cd8&o="
                                alt="" />
                            <div class="hotel-name">Reunion Ocean Royal</div>
                            <div class="location"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                viewBox="0 0 24 24" class="pointer-events-none max-h-full max-w-full">
                                <path
                                    d="M18 8.23a6 6 0 00-11.9 0A6.49 6.49 0 006 9a5.79 5.79 0 00.38 2.09l4.75 9.4a1 1 0 001.74 0l4.75-9.4A5.79 5.79 0 0018 9a6.49 6.49 0 000-.77zM12 13a4 4 0 114-4 4 4 0 01-4 4z"
                                    fill="currentColor"></path>
                            </svg>Udupi</div>
                            <div class="extra">
                                <li class="AmenitiesSection_item__sB19R"><span
                                    class="leading-none inline-flex Icon_m__3y0iQ transform AmenitiesSection_icon__WSUCZ"
                                    aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        viewBox="0 0 24 24" class="pointer-events-none max-h-full max-w-full">
                                        <g fill="currentColor">
                                            <path
                                                d="M15 14a2 2 0 00-2 2 1 1 0 01-2 0 2 2 0 00-4 0 .5.5 0 001 0 1 1 0 012 0 2 2 0 004 0 1 1 0 012 0 .5.5 0 001 0 2 2 0 00-2-2zM10.5 18.5a.5.5 0 00-.5.5 1 1 0 01-2 0 2 2 0 00-4 0 .5.5 0 001 0 1 1 0 012 0 2 2 0 004 0 .5.5 0 00-.5-.5zM13.5 18.5a.5.5 0 01.5.5 1 1 0 002 0 2 2 0 014 0 .5.5 0 01-1 0 1 1 0 00-2 0 2 2 0 01-4 0 .5.5 0 01.5-.5zM16.5 2A1.5 1.5 0 0015 3.5V7H8V3.5a.5.5 0 011 0v1a.5.5 0 001 0v-1a1.5 1.5 0 00-3 0v9a.5.5 0 001 0V11h7v1.5a.5.5 0 001 0v-9a.5.5 0 011 0v1a.5.5 0 001 0v-1A1.5 1.5 0 0016.5 2zM8 10V8h7v2z">
                                            </path>
                                        </g>
                                    </svg></span><span>Pool</span></li>
                            </div>
                            <button className="button" onClick={() => redirectToPage('confirm')}>Book Now</button>
                        </div>
                    </div>
                    <Routes>
                        <Route path='/confirm' element={<Confirm />} />
                    </Routes>
                </div>
            </div>
        </>
    );
}

export default Pool;