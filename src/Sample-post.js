import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import img1 from "./components/images/1.jpg";

function SamplePost() {
  return (
    <>
      <Header />
      <section class="container my-5">
        <a href="/">
          <button type="button" class="btn btn-outline-secondary my-3">
            <i class="fa-solid fa-angle-left"></i> Back to home
          </button>
        </a>

        <div class="container col-lg-10">
          <div class="rounded row" style={{backgroundColor: "rgb(255, 255, 255)"}}>
            <div class="col-md-6 g-0">
              <img
                src={img1}
                class="img-fluid object-fit-cover h-100 rounded"
                alt="Post image 1"
              />
            </div>

            <div class="col-md-6 mx-auto my-3">
              <div class="d-flex justify-content-between">
                <h5 class="">Owen Blue</h5>
                <div>
                  <i class="fa-regular fa-star fs-5 mx-1"></i>
                  <i class="fa-regular fa-comment fs-5 mx-1"></i>
                  <i class="fa-regular fa-bookmark fs-5 mx-1"></i>
                </div>
              </div>
              <hr />

              <div class="mx-3">
                <small class="text-black-50">Title</small>
                <h4>Golden Hour Magic</h4>

                <small class="text-black-50">Description</small>
                <p>
                  The enchanting glow of the golden hour bathes everything in a
                  warm, dreamy light. It's the perfect time to capture the
                  world's beauty. This shot was taken during a serene evening by
                  the beach. The way the sunlight dances on the waves is simply
                  mesmerizing.
                </p>

                <small class="text-black-50">Location</small>
                <p>Some City, Some Country</p>

                <small class="text-black-50">Tags</small>
                <p>
                  #Photography #GoldenHour #NaturePhotography #Sunset
                  #BeachPhotography #Landscape #PhotographyCommunity
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default SamplePost;
