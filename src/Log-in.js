import React from 'react';
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import LoginBanner from "./components/images/log-in.jpg"
const LogIn = () => {
  return (
      <>
      <Header />
      <section class="container my-5">
        <h4 class="text-uppercase text-black-50">Log in</h4>

        <div class="container col-lg-10">
            <div class="rounded row" style={{backgroundColor: "rgb(255, 255, 255)"}}>
                {/* <!-- Left side --> */}
                <div class="col-md-6 g-0">
                    <img src={LoginBanner} class="img-fluid object-fit-cover h-100 rounded" alt="Log in image banner." />
                </div>

                {/* <!-- Right side --> */}
                <div class="col-md-6 mx-auto my-3">
                    <form class="p-1" onsubmit="login(); return false;">
                        <p>
                            Welcome back to Parisukat! We're thrilled to have you here again.
                        </p>

                        <div class="mb-3">
                            <div id="logValidation">
                                <p id="acctDoNotExist" class="d-none form-text">Your email or password are incorrect. Try again.</p>
                            </div>

                            <label for="inputLogEmail" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="inputLogEmail" oninput="validateLogEmail()" required />
                            <div id="emailLogValidation">
                                <p id="emailNotExist" class="d-none form-text">Email is not registered.</p>
                                <p id="emailNotValid" class="d-none form-text">Email should be valid.</p>
                            </div>
                        </div>

                        <div class="mb-3">
                            <label for="inputLogPassword" class="form-label">Password</label>
                            <input type="password" class="form-control" id="inputLogPassword" required />
                        </div>

                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="checkBox" required />
                            <label class="form-check-label" for="checkBox">Remember</label>
                            <div class="form-text">Save information to automatically log in.</div>
                        </div>

                        <button type="submit" class="btn btn-primary">Log in</button>

                        <div class="my-3">
                            <a href="#">Forgot your password?</a>
                            <br />
                            <a href="/sign-up">Doesn't have an account?</a>
                        </div>
                        
                        
                        <div class="text-center">
                            <br />
                            <p>or</p>
                            <a href=""><i class="fa-brands fa-google fs-1 p-3"></i></a>
                            <a href=""><i class="fa-brands fa-yahoo fs-1 p-3"></i></a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
      <Footer />
      </>
      )
}

export default LogIn