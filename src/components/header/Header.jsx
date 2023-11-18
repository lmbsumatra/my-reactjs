import React from 'react';

const Header = () => {
    return (
        <header>
        {/* <!-- Navigation bar --> */}
        <div className="navbar navbar-expand-md py-3 text-light bg-dark navbar-dark">
            <div className="container-fluid">
                {/* <!-- Website name / logo --> */}
                <div className="col-lg-6">
                    <a href="/" className="navbar-brand fs-2 fw-bold">Parisukat</a>
                </div>
                
                <button className="navbar-toggler" type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <a href="/#discover-section" className="nav-link mx-auto py-2">Discover</a>
                    <a href="/#about-us-section" className="nav-link mx-auto py-2">About</a>
                    <a href="/#join-us-section" className="nav-link mx-auto py-2">Join</a>
                    <button type="button" className="btn btn-primary py-2"><a href="/log-in" className="nav-link mx-auto">Log in</a></button>
                </div>
            </div>
        </div>
        </header>
    );
};

export default Header