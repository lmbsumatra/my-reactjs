import React from "react";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import SignupBanner from "./components/images/sign-up.jpg";
const SignUp = () => {
  return (
    <>
      <Header />
      <section class="container my-5">
        <h4 class="text-uppercase text-black-50">Sign up</h4>

        <div class="container col-lg-10">
          <div
            class="rounded row"
            style={{ backgroundColor: "rgb(255, 255, 255)" }}
          >
            {/* <!-- Left side --> */}
            <div class="col-md-6 g-0">
              <img
                src={SignupBanner}
                class="img-fluid object-fit-cover h-100 rounded"
                alt="Sign up image banner."
              />
            </div>

            {/* <!-- Right side --> */}
            <div class="col-md-6 mx-auto my-3">
              <form class="p-1" onsubmit="signup(); return false;">
                <p>
                  Joining our photography community is a breeze! Here, you'll
                  unlock a vibrant world of visual storytelling and connect with
                  kindred spirits who are as passionate as you are about
                  capturing those precious moments.
                </p>

                <div class="mb-3">
                  <label for="nameInput" class="form-label">
                    Full name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="nameInput"
                    required
                  />
                </div>

                <div class="mb-3">
                  <label for="emailInput" class="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="emailInput"
                    oninput="validateEmail()"
                    required
                  />
                  <div id="emailValidation">
                    <p id="uniqueEmail" class="d-none form-text">
                      Email already used.
                    </p>
                    <p id="emailValid" class="d-none form-text">
                      Email should be valid.
                    </p>
                  </div>
                </div>

                <div class="mb-3">
                  <label for="usernameInput" class="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="usernameInput"
                    oninput="validateUN()"
                    required
                  />
                  <div id="usernameValidation">
                    <p id="unLength" class="d-none form-text">
                      Username characters should only count between 3 and 15.
                    </p>
                    <p id="unUnique" class="d-none form-text">
                      Username already exist.
                    </p>
                  </div>
                </div>

                <div class="mb-3">
                  <label for="passwordInput" class="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="passwordInput"
                    oninput="validatePW()"
                    required
                  />
                  <div id="passwordValidation">
                    <p id="pwLength" class="d-none form-text">
                      Password characters should only count between 8 and 20.
                    </p>
                  </div>
                </div>

                <div class="mb-3">
                  <label for="passwordConfirm" class="form-label">
                    {" "}
                    Confirm password
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="passwordConfirm"
                    oninput="validatePWConfirm()"
                    required
                  />
                  <div id="passwordConfirmation">
                    <p id="pwConfirm" class="d-none form-text">
                      It should match the password you first entered.
                    </p>
                  </div>
                </div>

                <div class="mb-3 form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="checkBox"
                    required
                  />
                  <label class="form-check-label" for="checkBox">
                    Remember
                  </label>
                  <div class="form-text">
                    Check if you agree to our terms and policy.
                  </div>
                </div>

                <button type="submit" class="btn btn-primary">
                  Sign up
                </button>

                <div class="my-3">
                  <a href="/log-in">Already have an account?</a>
                </div>

                <div class="text-center">
                  <br />
                  <p>or</p>
                  <a href="">
                    <i class="fa-brands fa-google fs-1 p-3"></i>
                  </a>
                  <a href="">
                    <i class="fa-brands fa-yahoo fs-1 p-3"></i>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SignUp;
