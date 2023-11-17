import React from 'react';

const AboutUs = () => {
    return (
        <section class="m-5" id="about-us-section">
    <h4 class="text-uppercase text-black-50">About us</h4>
    <div class="container">
      <div>
        <h1 class="mt-5">
            Capturing Moments, Connecting Lives
        </h1>
      <br/>
        <p>
            Welcome to our photography social media site, where the world comes into focus through the lens of your creativity. We've created a vibrant online community dedicated to the art of photography, where shutterbugs and enthusiasts from across the globe gather to share their visual stories. Whether you're a seasoned photographer or just starting out, our platform offers a space to connect, inspire, and showcase your work. 
            <br/> <br/> Share your breathtaking landscapes, captivating portraits, and mesmerizing moments with fellow photography lovers, and explore a world of images that speak a universal language. Join us on this visual journey, and let's capture and share the beauty of life together.
        </p>
      </div>

      <div class="row">

        <div class="mt-3 col-lg-4 col-md-8 mx-auto">
          <div class="card py-3">
          <div class="fs-1 text-center"><i class="fa-regular fa-lightbulb"></i></div>
            <div class="card-body">
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>

        <div class="mt-3 col-lg-4 col-md-8 mx-auto">
          <div class="card py-3">
          <div class="fs-1 text-center"><i class="fa-solid fa-camera"></i></div>
            <div class="card-body">
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>

        <div class="mt-3 col-lg-4 col-md-8 mx-auto">
          <div class="card py-3">
          <div class="fs-1 text-center"><i class="fa-sharp fa-solid fa-circle-user"></i></div>
            <div class="card-body">
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
    );
};

export default AboutUs