import React from 'react';
import '../CSS/Footer.css'



function Footer() {
    return (
        <>

            <footer class="footer">
                <div class="footer-container">
                    <div class="footer-row">
                        <div class="footer-col">
                            <ul>
                                <li><a href="#">Company</a></li>
                                <li><a href="#">Jobs</a></li>
                                <li><a href="#">Press</a></li>
                                <li><a href="#">Investors relation</a></li>
                            </ul>
                        </div>

                        <div class="footer-col">
                            <ul>
                                <li><a href="#">Mobile apps</a></li>
                                <li><a href="#">RoamRelax Business Studio</a></li>
                                <li><a href="#">Installations</a></li>
                                <li><a href="#">Testing</a></li>
                            </ul>
                        </div>
                        <div class="footer-col">
                            <ul>
                                <li><a href="#">Terms & Conditions</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Download Brochures</a></li>
                                <li><a href="#">Check Prices</a></li>
                                <li><a href="#">Legal iinformation</a></li>
                            </ul>
                        </div>
                        <div class="footer-col">
                            <h4>Follow us</h4>
                            <div class="social-links">
                                <a href="#"><i class="fab fa-facebook-f"></i></a>
                                <a href="#"><i class="fab fa-twitter"></i></a>
                                <a href="#"><i class="fab fa-instagram"></i></a>
                                <p>
                                    RoamRelax
                                    <br />
                                    #1243, Shri Hari complex, Mallikatte, Mangalore, Karnataka
                                    <br />
                                    +91-124-4987 400
                                    <br />
                                    www.roamrelax.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;