import React from 'react';
import BannerImg from "./../images/join-us.jpg";

const JoinUs = () => {
    return (
        <section class="m-5" id="join-us-section">
        <h4 class="text-uppercase text-black-50">Join us</h4>
    
        <div class="container w-100 border rounded my-5">
          <div class="rounded row" style={{backgroundColor: "rgb(255, 255, 255)"}}>
    
              {/* <!-- Left side --> */}
              <div class="col-md-6 g-0">
                  <img src={BannerImg} class="img-fluid object-fit-cover h-100 rounded" alt="Log in image banner." />
              </div>
    
              {/* <!-- Right side --> */}
              <div class="col-md-6 m-auto">
                  <form class="p-5 ">
                      <p>
                        Are you passionate about photography and eager to connect with a thriving community of fellow enthusiasts, professionals, and artists? <br/> <br/> Join <strong>Parisukat</strong> today and unlock a world of visual storytelling!
                      </p>
    
                      <button type="submit" class="btn btn-primary rounded-pill px-5 py-2"><a href="/sign-up" class="nav-link mx-auto">Join us</a></button>
                  </form>
              </div>
          </div>
        </div>
    
      </section>
    );
};

export default JoinUs