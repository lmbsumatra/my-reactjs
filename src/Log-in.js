import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import LoginBanner from "./components/images/log-in.jpg";
import React, { useState, useEffect } from "react";

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [emailNotValid, setEmailNotValidMsg] = useState('');
  const [emailNotExist, setEmailNotExistMsg] = useState('');
  const [emailIsRequired, setEmailIsRequiredMsg] = useState('');
  const [emailTrigger, setEmailTrigger] = useState(false);

  const [password, setPassword] = useState('');
  const [passwordIsRequired, setPasswordIsRequiredMsg] = useState('');
  const [passwordTrigger, setPasswordTrigger] = useState(false);

  const [userDict] = useState([
    { username: "missy01", password: "password", email: "example@example.com" },
    { username: "shan01", password: "password01", email: "shan@example.com" },
  ]);

  const [acctDoNotExist, setAcctDoNotExistMsg] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
  };
  
  // log in email validation
  useEffect(() => {
    if (emailTrigger) {
      validateLogEmail();
    }
  }, [email], [emailTrigger])

  const validateLogEmail = () => {
    // should be filled out
    if (email == '') {
      setEmailIsRequiredMsg("Email is required.");
    } else {
      setEmailIsRequiredMsg('');
    }

    // should have email formatting
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailNotValidMsg('');
    } else {
      setEmailNotValidMsg("Email should be valid");
    }

    // check email existance
    for (let i = 0; i < userDict.length; i++) {
      const user = userDict[i];
      if (user.email == email) {
          setEmailNotExistMsg('');
      }
      else {
        setEmailNotExistMsg('Email is not registered');
      }
    }
  };

  // log in password validation
  useEffect(() => {
    if (passwordTrigger) {
      validateLogPassword();
    }
  }, [password], [passwordTrigger])

  const validateLogPassword = () => {
    // should be filled out
    if (password == '') {
      setPasswordIsRequiredMsg("Email is required.");
    } else {
      setPasswordIsRequiredMsg('');
    }
  }

  // log in, email to user's password validation
  const Login = () => {
    for (let i = 0; i < userDict.length; i++) {
      const user = userDict[i];
      if ((user.email == email) && (user.password == password)) {
          setAcctDoNotExistMsg('');
          alert("Welcome, " + user.username + "!");
          window.location.href = '/sample-post';
      }
      else {
          setAcctDoNotExistMsg("Your email or password is incorrect. Try again.");
      }
  }
  };

  return (
    <>
      <Header />
      <section class="container my-5">
        <h4 class="text-uppercase text-black-50">Log in</h4>

        <div class="container col-lg-10">
          <div
            class="rounded row"
            style={{ backgroundColor: "rgb(255, 255, 255)" }}
          >
            {/* <!-- Left side --> */}
            <div class="col-md-6 g-0">
              <img
                src={LoginBanner}
                class="img-fluid object-fit-cover h-100 rounded"
                alt="Log in image banner."
              />
            </div>

            {/* <!-- Right side --> */}
            <div class="col-md-6 mx-auto my-3">
              <p>
                Welcome back to Parisukat! We're thrilled to have you here
                again.
              </p>
              <form onSubmit={onSubmit}>
                <div class="mb-3">
                  <p style={{ color: "red"}}>{acctDoNotExist}</p>
                  
                  <label for="inputLogEmail" class="form-label">
                    Email address
                  </label>
                  <input
                    className="form-control"
                    type="email"
                    id="inputLogEmail"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => {setEmail(e.target.value); setEmailTrigger(true);}}
                  />

                  <p style={{ color: "red" }}>{emailIsRequired}</p>
                  <p style={{ color: "red" }}>{emailNotExist}</p>
                  <p style={{ color: "red" }}>{emailNotValid}</p>
                </div>

                <div class="mb-3">
                  <label for="inputLogPassword" class="form-label">
                    Password
                  </label>
                  <input
                    className="form-control"
                    type="password"
                    id="inputLogPassword"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => {setPassword(e.target.value); setPasswordTrigger(true);}}
                  />

                  <p style={{ color: "red" }}>{passwordIsRequired}</p>
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
                    Save information to automatically log in.
                  </div>
                </div>

                <br />

                <button className="btn btn-primary" onClick={Login}>
                  Log in
                </button>

                <div class="my-3">
                  <a href="#">Forgot your password?</a>
                  <br />
                  <a href="/sign-up">Doesn't have an account?</a>
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

export default LogIn;
