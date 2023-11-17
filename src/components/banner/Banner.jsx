import React from 'react';
import BannerImg from "./../images/banner.jpg";

const Banner = () => {
    return (
        <div class="container-fluid g-0 position-relative text-light text-center" style={{height: "90vh"}}>
          {/* <!-- Background image / banner --> */}
          <img src={BannerImg} alt="Hero section banner" class="img-fluid object-fit-cover h-100 w-100" />
          
          <div class="position-absolute top-50 start-50 translate-middle">
              <h1 class="display-2 fw-bold my-3">
                  Join Challenges
              </h1>
              <p class="fs-4">Popular: Food, Travel, Nature, Technology</p>
              <form class="form d-flex bg-white rounded-pill my-1">
                <input class="border-0 rounded-pill w-100 p-3" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn" type="submit">
                  <i class="fas fa-search px-3"></i>
                </button>
              </form>
          </div>
      </div> 
    );
};

export default Banner