import React, { useState, useEffect } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import signUpBanner from "./components/images/sign-up.jpg";

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [fullNameIsRequired, setfullNameIsRequiredMsg] = useState("");
  const [fullNameTrigger, setFullNameTrigger] = useState(false);

  const [email, setEmail] = useState("");
  const [emailIsRequired, setEmailIsRequiredMsg] = useState("");
  const [emailIsNotValid, setEmailIsNotValidMsg] = useState("");
  const [emailWhiteSpace, setEmailWhiteSpaceMsg] = useState("");
  const [emailTrigger, setEmailTrigger] = useState(false);

  const [username, setUsername] = useState("");
  const [usernameIsRequired, setUserNameIsRequiredMsg] = useState("");
  const [userNameNotValid, setUserNameNotValidMsg] = useState("");
  const [userNameAlreadyExist, setUserNameAlreadyExistMsg] = useState("");
  const [userNameWhiteSpace, setUserNameWhiteSpaceMsg] = useState("");
  const [userNameTrigger, setUserNameTrigger] = useState(false);
  const [userDict] = useState([
    { username: "missy01", password: "password", email: "example@example.com" },
    { username: "shan01", password: "password01", email: "shan@example.com" },
  ]);

  const [password, setPassword] = useState("");
  const [passwordIsRequired, setPasswordIsRequiredMsg] = useState("");
  const [passwordNotValid, setPasswordNotValidMsg] = useState("");
  const [passwordTrigger, setPasswordTrigger] = useState(false);

  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordIncorrect, setConfirmPasswordIncorrect] = useState("");
  const [confirmPasswordTrigger, setConfirmPasswordTrigger] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
  };

  // validation for fullname
  useEffect(
    () => {
      if (fullNameTrigger) {
        validateFullName();
      }
    },
    [fullName],
    [fullNameTrigger]
  );

  const validateFullName = () => {
    // should be filled out
    if (fullName == "") {
      setfullNameIsRequiredMsg("Fullname is required.");
    } else {
      setfullNameIsRequiredMsg("");
    }
  };

  // validation for email
  useEffect(() => {
    if (emailTrigger) {
      validateEmail();
    }
  }, [email][emailTrigger]);

  const validateEmail = () => {
    // should be filled out
    if (email == "") {
      setEmailIsRequiredMsg("Email is required.");
    } else {
      setEmailIsRequiredMsg("");
    }

    //s should not contain white space
    if (/\s/.test(email)) {
      setEmailWhiteSpaceMsg("Email cannot contain whitespace.");
    } else {
      setEmailWhiteSpaceMsg("");
    }

    // should have email formatting
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailIsNotValidMsg("");
    } else {
      setEmailIsNotValidMsg("Email should be valid.");
    }
  };

  // validation for username
  useEffect(
    () => {
      if (userNameTrigger) {
        validateUserName();
      }
    },
    [username],
    [userNameTrigger]
  );

  const validateUserName = () => {
    // should be filled out
    if (username == "") {
      setUserNameIsRequiredMsg("Username is required.");
    } else {
      setUserNameIsRequiredMsg("");
    }

    if (username.length < 3 || username.length > 15) {
      setUserNameNotValidMsg("Username length should be between 3 and 15.");
    } else {
      setUserNameNotValidMsg("");
    }

    //s should not contain white space
    if (/\s/.test(username)) {
      setUserNameWhiteSpaceMsg("Username cannot contain whitespace.");
    } else {
      setUserNameWhiteSpaceMsg("");
    }

    // should be unique
    for (let i = 0; i < userDict.length; i++) {
      const user = userDict[i];
      if (user.username != username) {
        setUserNameAlreadyExistMsg("");
      } else {
        setUserNameAlreadyExistMsg("Username was already used.");
      }
    }
  };

  // validation for password
  useEffect(() => {
    if (passwordTrigger) {
      validatePassword();
    }
  }, [password]);

  const validatePassword = () => {
    // should be filled out
    if (password == "") {
      setPasswordIsRequiredMsg("Password is required.");
    } else {
      setPasswordIsRequiredMsg("");
    }

    // should count between 8 and 20
    if (password.length < 8 || password.length > 20) {
      setPasswordNotValidMsg(
        "Password characters should only count between 8 and 20."
      );
    } else {
      setPasswordNotValidMsg("");
    }
  };

  // validation for password confirmation
  useEffect(
    () => {
      if (confirmPasswordTrigger) {
        validateConfirmPassword();
      }
    },
    [confirmPassword],
    [confirmPasswordTrigger]
  );

  const validateConfirmPassword = () => {
    // 
    if (confirmPassword === password) {
      setConfirmPasswordIncorrect('');
    }
    else {
      setConfirmPasswordIncorrect('Password do not match.');
    }
  };

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
                    onChange={(e) => {
                      setFullName(e.target.value);
                      setFullNameTrigger(true);
                    }}
                  />

                  <p style={{ color: "red" }}>{fullNameIsRequired}</p>
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
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setEmailTrigger(true);
                    }}
                  />

                  <p style={{ color: "red" }}>{emailIsRequired}</p>
                  <p style={{ color: "red" }}>{emailIsNotValid}</p>
                  <p style={{ color: "red" }}>{emailWhiteSpace}</p>
                </div>

                <div className="mb-3">
                  <label for="usernameInput" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="usernameInput"
                    onChange={(e) => {
                      setUsername(e.target.value);
                      setUserNameTrigger(true);
                    }}
                  />

                  <p style={{ color: "red" }}>{usernameIsRequired}</p>
                  <p style={{ color: "red" }}>{userNameNotValid}</p>
                  <p style={{ color: "red" }}>{userNameAlreadyExist}</p>
                  <p style={{ color: "red" }}>{userNameWhiteSpace}</p>
                </div>

                <div className="mb-3">
                  <label for="passwordInput" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="passwordInput"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setPasswordTrigger(true);
                    }}
                  />

                  <p style={{ color: "red" }}>{passwordIsRequired}</p>
                  <p style={{ color: "red" }}>{passwordNotValid}</p>
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
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                      setConfirmPasswordTrigger(true);
                    }}
                  />

                  <p style={{ color: "red" }}>{confirmPasswordIncorrect}</p>
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
};

export default Signup;
