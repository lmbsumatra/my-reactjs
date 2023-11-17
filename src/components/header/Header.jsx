import React from 'react';

const Header = () => {
    return (
        <header>
        {/* <!-- Navigation bar --> */}
        <div class="navbar navbar-expand-md py-3 text-light bg-dark navbar-dark">
            <div class="container-fluid">
                {/* <!-- Website name / logo --> */}
                <div class="col-lg-6">
                    <a href="/" class="navbar-brand fs-2 fw-bold">Parisukat</a>
                </div>
                
                <button class="navbar-toggler" type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarNav">
                    <span class="navbar-toggler-icon"></span>
                </button>
                
                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <a href="/#discover-section" class="nav-link mx-auto py-2">Discover</a>
                    <a href="/#about-us-section" class="nav-link mx-auto py-2">About</a>
                    <a href="/#join-us-section" class="nav-link mx-auto py-2">Join</a>
                    <button type="button" class="btn btn-primary py-2"><a href="/log-in" class="nav-link mx-auto">Log in</a></button>
                </div>
            </div>
        </div>
        </header>
    );
};

export default Header