import React from 'react';
import '../CSS/Home.css'
import Typed from 'typed.js';
import { Link } from 'react-router-dom';
import Navbar from '../JS/Navbar.js';
import Pool from '../JS/Pool.js';
import Hotels from '../JS/Hotels.js';
import Add from '../JS/Add.js';
import Footer from '../JS/Footer.js';
import Login from '../JS/Login.js';
import Signup from '../JS/Signup.js';
function Home() {
    const el = React.useRef(null);
    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Landmark', 'Destination', 'Hotel'],
            typeSpeed: 70,
            backSpeed: 70,
            loop: true,
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);
    const e2 = React.useRef(null);
    React.useEffect(() => {
        const typed = new Typed(e2.current, {
            strings: ['<i>Discover the best TIME to book your next stay</i>', '<i>Discover the best PLACE to book your next stay</i>', '<i>Discover the best HOTEL to book your next stay</i>'],
            typeSpeed: 50,
            backSpeed: 20,
            loop: true,
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);
    return (
        <>

            <div class="loc">
                <div class="search">
                    <div class="dest">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15" height="15" viewBox="0 0 50 50">
                            <path
                                d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z">
                            </path>
                        </svg>
                        <label for="landmark">
                            <span ref={el} /></label><br />
                        <input type="text" placeholder="Where to?" />
                    </div>
                    <div class="inout">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15" height="15"
                            viewBox="0 0 50 50">
                            <path
                                d="M113.854 22.323h-9.667v-2.677a7.25 7.25 0 0 0-14.5 0v2.677H38.313v-2.677a7.25 7.25 0 0 0-14.5 0v2.677h-9.667a1.75 1.75 0 0 0-1.75 1.75v89.781a1.751 1.751 0 0 0 1.75 1.75h99.708a1.751 1.751 0 0 0 1.75-1.75V24.073a1.75 1.75 0 0 0-1.75-1.75zm-20.667-2.677a3.75 3.75 0 0 1 7.5 0V28.5a3.75 3.75 0 0 1-7.5 0zm-65.874 0a3.75 3.75 0 0 1 7.5 0V28.5a3.75 3.75 0 0 1-7.5 0zm-3.5 6.177V28.5a7.25 7.25 0 0 0 14.5 0v-2.677h51.374V28.5a7.25 7.25 0 0 0 14.5 0v-2.677h7.913V44.2H15.9V25.823zM15.9 112.1V47.7h96.2v64.4z" />
                            <path
                                d="M40.2 56h-8.721a1.749 1.749 0 0 0-1.75 1.75v8.719a1.749 1.749 0 0 0 1.75 1.75H40.2a1.749 1.749 0 0 0 1.75-1.75V57.75A1.749 1.749 0 0 0 40.2 56zm-1.75 8.719h-5.221V59.5h5.218zM58.972 56h-8.719a1.75 1.75 0 0 0-1.75 1.75v8.719a1.75 1.75 0 0 0 1.75 1.75h8.719a1.75 1.75 0 0 0 1.75-1.75V57.75a1.75 1.75 0 0 0-1.75-1.75zm-1.75 8.719H52V59.5h5.219zM77.747 56h-8.719a1.75 1.75 0 0 0-1.75 1.75v8.719a1.75 1.75 0 0 0 1.75 1.75h8.719a1.749 1.749 0 0 0 1.75-1.75V57.75a1.749 1.749 0 0 0-1.75-1.75zM76 64.719h-5.222V59.5H76zM96.521 56H87.8a1.749 1.749 0 0 0-1.75 1.75v8.719a1.749 1.749 0 0 0 1.75 1.75h8.718a1.749 1.749 0 0 0 1.75-1.75V57.75A1.749 1.749 0 0 0 96.521 56zm-1.75 8.719h-5.218V59.5h5.218zM40.2 74h-8.721a1.749 1.749 0 0 0-1.75 1.75v8.719a1.749 1.749 0 0 0 1.75 1.75H40.2a1.749 1.749 0 0 0 1.75-1.75V75.75A1.749 1.749 0 0 0 40.2 74zm-1.75 8.719h-5.221V77.5h5.218zM58.972 74h-8.719a1.75 1.75 0 0 0-1.75 1.75v8.719a1.75 1.75 0 0 0 1.75 1.75h8.719a1.75 1.75 0 0 0 1.75-1.75V75.75a1.75 1.75 0 0 0-1.75-1.75zm-1.75 8.719H52V77.5h5.219zM77.747 74h-8.719a1.75 1.75 0 0 0-1.75 1.75v8.719a1.75 1.75 0 0 0 1.75 1.75h8.719a1.749 1.749 0 0 0 1.75-1.75V75.75a1.749 1.749 0 0 0-1.75-1.75zM76 82.719h-5.222V77.5H76zM96.521 74H87.8a1.749 1.749 0 0 0-1.75 1.75v8.719a1.749 1.749 0 0 0 1.75 1.75h8.718a1.749 1.749 0 0 0 1.75-1.75V75.75A1.749 1.749 0 0 0 96.521 74zm-1.75 8.719h-5.218V77.5h5.218zM40.2 92h-8.721a1.749 1.749 0 0 0-1.75 1.75v8.719a1.749 1.749 0 0 0 1.75 1.75H40.2a1.749 1.749 0 0 0 1.75-1.75V93.75A1.749 1.749 0 0 0 40.2 92zm-1.75 8.719h-5.221V95.5h5.218zM58.972 92h-8.719a1.75 1.75 0 0 0-1.75 1.75v8.719a1.75 1.75 0 0 0 1.75 1.75h8.719a1.75 1.75 0 0 0 1.75-1.75V93.75a1.75 1.75 0 0 0-1.75-1.75zm-1.75 8.719H52V95.5h5.219zM77.747 92h-8.719a1.75 1.75 0 0 0-1.75 1.75v8.719a1.75 1.75 0 0 0 1.75 1.75h8.719a1.749 1.749 0 0 0 1.75-1.75V93.75a1.749 1.749 0 0 0-1.75-1.75zM76 100.719h-5.222V95.5H76zM96.521 92H87.8a1.749 1.749 0 0 0-1.75 1.75v8.719a1.749 1.749 0 0 0 1.75 1.75h8.718a1.749 1.749 0 0 0 1.75-1.75V93.75A1.749 1.749 0 0 0 96.521 92zm-1.75 8.719h-5.218V95.5h5.218z" />
                        </svg>
                        <label for="checkIn">Check-in</label><br />
                        <input type="date" />
                    </div>
                    <div class="inout">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15" height="15"
                            viewBox="0 0 50 50">
                            <path
                                d="M113.854 22.323h-9.667v-2.677a7.25 7.25 0 0 0-14.5 0v2.677H38.313v-2.677a7.25 7.25 0 0 0-14.5 0v2.677h-9.667a1.75 1.75 0 0 0-1.75 1.75v89.781a1.751 1.751 0 0 0 1.75 1.75h99.708a1.751 1.751 0 0 0 1.75-1.75V24.073a1.75 1.75 0 0 0-1.75-1.75zm-20.667-2.677a3.75 3.75 0 0 1 7.5 0V28.5a3.75 3.75 0 0 1-7.5 0zm-65.874 0a3.75 3.75 0 0 1 7.5 0V28.5a3.75 3.75 0 0 1-7.5 0zm-3.5 6.177V28.5a7.25 7.25 0 0 0 14.5 0v-2.677h51.374V28.5a7.25 7.25 0 0 0 14.5 0v-2.677h7.913V44.2H15.9V25.823zM15.9 112.1V47.7h96.2v64.4z" />
                            <path
                                d="M40.2 56h-8.721a1.749 1.749 0 0 0-1.75 1.75v8.719a1.749 1.749 0 0 0 1.75 1.75H40.2a1.749 1.749 0 0 0 1.75-1.75V57.75A1.749 1.749 0 0 0 40.2 56zm-1.75 8.719h-5.221V59.5h5.218zM58.972 56h-8.719a1.75 1.75 0 0 0-1.75 1.75v8.719a1.75 1.75 0 0 0 1.75 1.75h8.719a1.75 1.75 0 0 0 1.75-1.75V57.75a1.75 1.75 0 0 0-1.75-1.75zm-1.75 8.719H52V59.5h5.219zM77.747 56h-8.719a1.75 1.75 0 0 0-1.75 1.75v8.719a1.75 1.75 0 0 0 1.75 1.75h8.719a1.749 1.749 0 0 0 1.75-1.75V57.75a1.749 1.749 0 0 0-1.75-1.75zM76 64.719h-5.222V59.5H76zM96.521 56H87.8a1.749 1.749 0 0 0-1.75 1.75v8.719a1.749 1.749 0 0 0 1.75 1.75h8.718a1.749 1.749 0 0 0 1.75-1.75V57.75A1.749 1.749 0 0 0 96.521 56zm-1.75 8.719h-5.218V59.5h5.218zM40.2 74h-8.721a1.749 1.749 0 0 0-1.75 1.75v8.719a1.749 1.749 0 0 0 1.75 1.75H40.2a1.749 1.749 0 0 0 1.75-1.75V75.75A1.749 1.749 0 0 0 40.2 74zm-1.75 8.719h-5.221V77.5h5.218zM58.972 74h-8.719a1.75 1.75 0 0 0-1.75 1.75v8.719a1.75 1.75 0 0 0 1.75 1.75h8.719a1.75 1.75 0 0 0 1.75-1.75V75.75a1.75 1.75 0 0 0-1.75-1.75zm-1.75 8.719H52V77.5h5.219zM77.747 74h-8.719a1.75 1.75 0 0 0-1.75 1.75v8.719a1.75 1.75 0 0 0 1.75 1.75h8.719a1.749 1.749 0 0 0 1.75-1.75V75.75a1.749 1.749 0 0 0-1.75-1.75zM76 82.719h-5.222V77.5H76zM96.521 74H87.8a1.749 1.749 0 0 0-1.75 1.75v8.719a1.749 1.749 0 0 0 1.75 1.75h8.718a1.749 1.749 0 0 0 1.75-1.75V75.75A1.749 1.749 0 0 0 96.521 74zm-1.75 8.719h-5.218V77.5h5.218zM40.2 92h-8.721a1.749 1.749 0 0 0-1.75 1.75v8.719a1.749 1.749 0 0 0 1.75 1.75H40.2a1.749 1.749 0 0 0 1.75-1.75V93.75A1.749 1.749 0 0 0 40.2 92zm-1.75 8.719h-5.221V95.5h5.218zM58.972 92h-8.719a1.75 1.75 0 0 0-1.75 1.75v8.719a1.75 1.75 0 0 0 1.75 1.75h8.719a1.75 1.75 0 0 0 1.75-1.75V93.75a1.75 1.75 0 0 0-1.75-1.75zm-1.75 8.719H52V95.5h5.219zM77.747 92h-8.719a1.75 1.75 0 0 0-1.75 1.75v8.719a1.75 1.75 0 0 0 1.75 1.75h8.719a1.749 1.749 0 0 0 1.75-1.75V93.75a1.749 1.749 0 0 0-1.75-1.75zM76 100.719h-5.222V95.5H76zM96.521 92H87.8a1.749 1.749 0 0 0-1.75 1.75v8.719a1.749 1.749 0 0 0 1.75 1.75h8.718a1.749 1.749 0 0 0 1.75-1.75V93.75A1.749 1.749 0 0 0 96.521 92zm-1.75 8.719h-5.218V95.5h5.218z" />
                        </svg>
                        <label for="checkIn">Check-out</label><br />
                        <input type="date" />
                    </div>
                    <div class="srch">
                        <button><Link to="#">Search</Link></button>
                    </div>
                </div>
            </div>

            <Add />



            <div class="adds">
                <img src="https://i.pinimg.com/564x/6c/88/6a/6c886a58955b62b80b29d29a69432904.jpg" alt='hi' />
                <h3><span ref={e2} /></h3>
            </div>
            <Pool />
            <Hotels />
            <div class="add">
                <div class="addLogo">
                    <Link to="https://www.oyorooms.com/">
                        <img src="https://imgcy.trivago.com/image/upload/hardcodedimages/mpm-localised-logos-dark/2452.png" alt='hi' /></Link>
                </div>
                <div class="addLogo">
                    <Link to="https://in.hotels.com/?locale=en_IN&pos=HCOM_IN&siteid=300000036">
                        <img src="https://imgcy.trivago.com/image/upload/hardcodedimages/mpm-localised-logos-dark/3340.png" alt='hi' /></Link>
                </div>
                <div class="addLogo">
                    <Link
                        href="https://www.booking.com/country/in.en.html?aid=1610687;label=in-HvtKIh8HYqxrATaP24vtSgS630406954077:pl:ta:p1:p2:ac:ap:neg:fi:tiaud-1110454565467:kwd-303403359744:lp9299398:li:dec:dm:ppccp=UmFuZG9tSVYkc2RlIyh9YfpWGnRw6lOGgfEoJVv7zYo;ws=&gad_source=1&gclid=CjwKCAiApaarBhB7EiwAYiMwqjqRX8bXKra-JdA23kShybgHRb3UryNpbVl-E8GAIQZtjhIT_thFTxoC6JUQAvD_BwE">
                        <img src="https://imgcy.trivago.com/image/upload/hardcodedimages/mpm-localised-logos-dark/626.png" alt='hi' /></Link>
                </div>
                <div class="addLogo">
                    <Link
                        href="https://www.makemytrip.com/flights/?gclid=CjwKCAiApaarBhB7EiwAYiMwqh6TxA72ys01GX75l69Cz_wW1Aps27dNUjhryKi2bvLVQ7efkuKePRoCyRgQAvD_BwE&cmp=SEM|D|DF|G|Brand|Brand-BrandExact_DT|B_M_Makemytrip_Search_Exact|RSA|673383350836&s_kwcid=AL!1631!3!673383350836!e!!g!!mmt&ef_id=CjwKCAiApaarBhB7EiwAYiMwqh6TxA72ys01GX75l69Cz_wW1Aps27dNUjhryKi2bvLVQ7efkuKePRoCyRgQAvD_BwE:G:s&gad_source=1">
                        <img src="https://imgcy.trivago.com/image/upload/hardcodedimages/mpm-localised-logos-dark/2192.png" alt='hi' />
                    </Link>
                </div>
                <div class="addLogo">
                    <Link to="https://uk.trip.com/?locale=en-gb">
                        <img src="https://imgcy.trivago.com/image/upload/hardcodedimages/mpm-localised-logos-dark/634.png" alt='hi' />
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    );
}


export default Home;