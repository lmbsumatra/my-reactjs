import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="text-light bg-dark mt-5" id="footer-section">
    <div className="container-fluid py-3">
        <div className="row">

            {/* <!-- About --> */}
            <div className="col-md-6 py-2">
                <div>
                    <h3>PARISUKAT</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed itaque sunt nihil delectus accusantium quaerat quibusdam molestias facere soluta? Officia.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed itaque sunt nihil delectus accusantium quaerat quibusdam molestias facere soluta? Officia.</p>
                    <p>&copy; Copyright 2023</p>
                </div>
                
            </div>

            {/* <!-- Menu --> */}
            <div className="col-md-2 py-2">
                <div className="row">
                    <h3>Menu</h3>
                    <a href="/#discover-section" className="bg-secondary rounded text-light text-decoration-none p-2 my-1 w-75 mx-auto text-center">Discover</a>
                    <a href="/#about-us-section" className="bg-secondary rounded text-light text-decoration-none p-2 my-1 w-75 mx-auto text-center">About us</a>
                    <a href="/#join-us-section" className="bg-secondary rounded text-light text-decoration-none p-2 my-1 w-75 mx-auto text-center">Join us</a>
                    <a href="/log-in" className="bg-secondary rounded text-light text-decoration-none p-2 my-1 w-75 mx-auto text-center">Log in</a>
                </div>
            </div>

            {/* <!-- Contact --> */}
            <div className="col-md-4 py-2">
                <h3>Reach out on us.</h3>
                <div className="d-flex justify-content-between">
                    <a href="#"><i className="fab fa-facebook-f fs-1 p-3"></i></a>
                    <a href="#"><i className="fab fa-twitter fs-1 p-3"></i></a>
                    <a href="#"><i className="fab fa-instagram fs-1 p-3"></i></a>
                    <a href="#"><i className="fab fa-pinterest fs-1 p-3"></i></a>
                </div>
                
                
            </div>
        </div>
    </div>
    </footer>
    );
};

export default Footer