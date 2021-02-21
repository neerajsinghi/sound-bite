import React from 'react';
import '../css/Footer.css'
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <div className="footer">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-4 col-sm-1">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to='/home'>Home</Link></li>
                            <li><Link to='/aboutus'>About Us</Link></li>
                            <li><Link to='/contactus'>Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="col-4  col-sm-2">
                        <h5>Products</h5>
                        <ul className="list-unstyled">
                            <li><Link to='/loudspeaker'>Loudspeakers</Link></li>
                            <li><Link to='/loudSpeakerSystem'>LoudSpeaker System</Link></li>
                            <li><Link to='/microphones'>Microphones</Link></li>
                            <li><Link to='/audioCables'>Audio Cables</Link></li>
                        </ul>
                    </div>
                    <div className="col-4  col-sm-2">
                        <ul className="list-unstyled">
                            <br />
                            <li><Link to='/powerAmplifiers'>Power Amplifiers</Link></li>
                            <li><Link to='/crossoverNetwork'>Crossover Network</Link></li>
                            <li><Link to='/crossoverDriver'>Crossover Driver</Link></li>
                            <li><Link to='/snakeCables'>Snake Cable</Link></li>
                        </ul>
                    </div>
                    <div className="col-4  col-sm-2">
                        <ul className="list-unstyled">
                            <br />
                            <li><Link to='/digitalCableM'>Digital Cable (Microphones)</Link></li>
                            <li><Link to='/digitalCableSL'>Digital Cable (Speaker Light)</Link></li>
                        </ul>
                    </div>
                    <div className="col-7 col-sm-3">
                        <h5>Our Address</h5>
                        <address>
                            1693/33, Seth Faqir Chand Market,<br />
                            Bhagirath Place, Delhi-110006<br />
		                    India<br />
                            <i className="fa fa-phone fa-lg"></i>: 011-4986 8550<br />
                            <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:purchase.shreeventures@gmail.com">
                                purchase.shreeventures@gmail.com</a><br />
                            <a href="https://maps.google.com?q=28.658152,77.234757" target="blank">View on map</a>
                        </address>
                    </div>

                </div>
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <p>© Copyright 2021 SoundBite</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;