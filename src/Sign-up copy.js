import React, {useState, useEffect} from "react";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import SignupBanner from "./components/images/sign-up.jpg";


const SignUp = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');

    const userDict = [
      { username: 'missy01', password: 'password', email: 'example@example.com' },
      { username: 'shan01', password: 'password01', email: 'shan@example.com' },
    ];
    

    useEffect(() => {
      const isUnUnique = async () => {
        const isUnique = await simulateAsyncCheck(username);
        const isLength = await isLengthy(username);
  
        if (isUnique && isLength) {
          setUnNotUniqueMsg('');
          setUnLengthMsg('');
        } else {
          if (!isUnique) {
            setUnNotUniqueMsg('Username was already used.');
          } else {
            setUnNotUniqueMsg('');
          }
  
          if (!isLength) {
            setUnLengthMsg('Username should be between 3 and 15 characters.');
          } else {
            setUnLengthMsg('');
          }
        }
      };
  
      const simulateAsyncCheck = async (username) => {
        if (userDict.some((user) => user.username === username)) {
          return false;
        } else {
          return true;
        }
      };
  
      const isLengthy = async (username) => {
        if (username.length >= 3 && username.length <= 15) {
          return true;
        } else {
          return false;
        }
      };
  
      isUnUnique();
    }, [username]);

    const isEmailValid = () => {
        console.log(email);
        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setEmailNotValidMsg("");
        } else {
            setEmailNotValidMsg("Email should be valid");
        }

        if (email != "") {
            setEmailIsRequiredMsg("");
        } else {
            setEmailIsRequiredMsg("Email should not be empty.");
        }
    };

    const [emailNotValid, setEmailNotValidMsg] = useState('');
    const [emailIsRequired, setEmailIsRequiredMsg] = useState('');
    const [unNotUniqueMsg, setUnNotUniqueMsg] = useState('');
    const [unNotValid, setUnNotValidMsg] = useState('');
    const [unLengthMsg, setUnLengthMsg] = useState('');

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
                src={SignupBanner}
                className="img-fluid object-fit-cover h-100 rounded"
                alt="Sign up image banner."
              />
            </div>

            <div className="col-md-6 mx-auto my-3">
              <form className="p-1">
                <p>
                  Joining our photography community is a breeze! Here, you'll
                  unlock a vibrant world of visual storytelling and connect with
                  kindred spirits who are as passionate as you are about
                  capturing those precious moments.
                </p>

                <div className="mb-3">
                  <label htmlFor="nameInput" className="form-label">
                    Full name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nameInput"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="InputSignupEmail" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    value={email}
                    className="form-control"
                    onChange={(e) => setEmail(e.target.value.trim())}
                    onInput={isEmailValid}
                    id="InputSignupEmail"
                  />
                  
                    <p style={{ color: "red"}}>
                      {emailNotValid}
                    </p>
                    <p style={{ color: "red"}}>
                      {emailIsRequired}
                    </p>
                </div>

                 <div className="mb-3">
                  <label htmlFor="InputSignupUN" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    value={username}
                    className="form-control"
                    onChange={(e) => setUsername(e.target.value)}
                    id="InputSignupUN"
                  />
                    <p style={{ color: "red" }}> {unNotValid} </p>
                    <p style={{ color: 'red' }}>{unNotUniqueMsg} </p>
                </div>

                <div className="mb-3">
                  <label htmlFor="passwordInput" className="form-label">
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
                  <label htmlFor="passwordConfirm" className="form-label">
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
                  <label className="form-check-label" htmlFor="checkBox">
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

export default SignUp;
