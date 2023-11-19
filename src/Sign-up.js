import React, { useState, useEffect } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import signUpBanner from "./components/images/sign-up.jpg";

const Signup = () => {
  const [fullName, setFullName] = useState('');
  const [fullNameIsRequired, setfullNameIsRequiredMsg] = useState('');

  const onSubmit = (e) => {
    e.preventDefault(); 
  };


  useEffect(() => {
    validateFullName();
  }, [fullName]);

  const validateFullName = () => {
    if (fullName == '') {
      setfullNameIsRequiredMsg('Fullname is required.');
    }
    else {
      setfullNameIsRequiredMsg('');
    }
  }

  return (
    <>
      <Header />
      <section className="container my-5">
        <h4 className="text-uppercase text-black-50">Sign up</h4>

        <div className="container col-lg-10">
          <div
            className="rounded row"
            style={{ backgroundColor: "rgb(255, 255, 255)" }}
          >
            <div className="col-md-6 g-0">
              <img
                src={signUpBanner}
                className="img-fluid object-fit-cover h-100 rounded"
                alt="Sign up image banner."
              />
            </div>

            <div className="col-md-6 mx-auto my-3">
              <form className="p-1" onSubmit={onSubmit}>
                <p>
                  Joining our photography community is a breeze! Here, you'll
                  unlock a vibrant world of visual storytelling and connect with
                  kindred spirits who are as passionate as you are about
                  capturing those precious moments.
                </p>

                <div className="mb-3">
                  <label for="nameInput" className="form-label">
                    Full name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nameInput"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />

                  <p style={{color: "red"}}>{fullNameIsRequired}</p>
                </div>

                <div className="mb-3">
                  <label for="emailInput" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="emailInput"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <p style={{color: "red"}}>{emailIsRequired}</p>
                  <p style={{color: "red"}}>{emailIs}</p>
                </div>

                <div className="mb-3">
                  <label for="usernameInput" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="usernameInput"
                    oninput="validateUN()"
                    required
                  />
                  <div id="usernameValidation">
                    <p id="unLength" className="d-none form-text">
                      Username characters should only count between 3 and 15.
                    </p>
                    <p id="unUnique" className="d-none form-text">
                      Username already exist.
                    </p>
                  </div>
                </div>

                <div className="mb-3">
                  <label for="passwordInput" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="passwordInput"
                    oninput="validatePW()"
                    required
                  />
                  <div id="passwordValidation">
                    <p id="pwLength" className="d-none form-text">
                      Password characters should only count between 8 and 20.
                    </p>
                  </div>
                </div>

                <div className="mb-3">
                  <label for="passwordConfirm" className="form-label">
                    {" "}
                    Confirm password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="passwordConfirm"
                    oninput="validatePWConfirm()"
                    required
                  />
                  <div id="passwordConfirmation">
                    <p id="pwConfirm" className="d-none form-text">
                      It should match the password you first entered.
                    </p>
                  </div>
                </div>

                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="checkBox"
                    required
                  />
                  <label className="form-check-label" for="checkBox">
                    Remember
                  </label>
                  <div className="form-text">
                    Check if you agree to our terms and policy.
                  </div>
                </div>

                <button type="submit" className="btn btn-primary">
                  Sign up
                </button>

                <div className="my-3">
                  <a href="/log-in">Already have an account?</a>
                </div>

                <div className="text-center">
                  <br />
                  <p>or</p>
                  <a href="">
                    <i className="fa-brands fa-google fs-1 p-3"></i>
                  </a>
                  <a href="">
                    <i className="fa-brands fa-yahoo fs-1 p-3"></i>
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
}

export default Signup;
