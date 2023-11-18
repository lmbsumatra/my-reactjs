import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import LoginBanner from "./components/images/log-in.jpg";
import React, { useState } from "react";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userDict] = useState([
    { username: "missy01", password: "password", email: "example@example.com" },
    { username: "shan01", password: "password01", email: "shan@example.com" },
  ]);

  // Log in email validation
  const validateLogEmail = () => {
    // Validate email address
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      // Update state to hide the validation message
      // (assuming you have a state variable for emailNotValidMsg)
      setEmailNotValidMsg("");
    } else {
      setEmailNotValidMsg("Email should be valid");
    }

    // Validate if email exists
    const emailExists = userDict.some((user) => user.email === email);
    setEmailNotExistMsg(emailExists ? "" : "Email is not registered");
  };

  // Log in email to user's password validation
  const login = () => {
    const user = userDict.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      setAcctDoNotExistMsg("");
      alert("Welcome, " + user.username + "!");
    } else {
      setAcctDoNotExistMsg("Your email or password is incorrect. Try again.");
    }
  };

  // State variables for error messages
  const [emailNotValidMsg, setEmailNotValidMsg] = useState("");
  const [emailNotExistMsg, setEmailNotExistMsg] = useState("");
  const [acctDoNotExistMsg, setAcctDoNotExistMsg] = useState("");

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

              <div class="mb-3">
                <p style={{ color: "red" }}>{acctDoNotExistMsg}</p>
                <label for="inputLogEmail" class="form-label">
                  Email address
                </label>
                <input
                  className="form-control"
                  type="email"
                  value={email}
                  onInput={(e) => setEmail(e.target.value)}
                  onBlur={validateLogEmail}
                  id="inputLogEmail"
                  placeholder="Email address"
                />
                <p style={{ color: "red" }}>{emailNotValidMsg}</p>
                <p style={{ color: "red" }}>{emailNotExistMsg}</p>
              </div>

              <div class="mb-3">
                <label for="inputLogPassword" class="form-label">
                  Password
                </label>
                <input
                className="form-control"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="inputLogPassword"
                  placeholder="Password"
                />
              </div>

              <br />

              <button className="btn btn-primary" onClick={login}>Log in</button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default LogIn;
