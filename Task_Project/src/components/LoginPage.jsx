import { useState } from "react";
import "./LoginPage.css";

export function LoginPage() {
  //we set the state for the user information upon sign in attemp
  const [userInfo, setUserInfo] = useState(null);

  //we set user information upon login attemp
  const [userLoginInfo, setuserLoginInfo] = useState(null);
  const [loginStatus, setLoginStatus] = useState(false);

  //we set state of login and sign in for conditional rendering
  const [signIn, setSignIn] = useState(false);
  const [logIn, setLogIn] = useState(true);

  //we use useState to manage variables state and check values from email and passord
  const [passwordCheck, setPasswordCheck] = useState(null);
  const [emailCheck, setEmailCheck] = useState(null);

  const handleInfoChange = (e) => {
    const { name, value } = e.target;

    //i use a check to see id email's value respect the pattern const

    if (name === "email") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setEmailCheck(emailPattern.test(value));
    }

    //as before i use a check to see is password's value respect the pattern const

    if (name === "password") {
      const passwordPattern =
        /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      setPasswordCheck(passwordPattern.test(value));
    }

    setUserInfo((eprev) => ({ ...eprev, [name]: value }));
  };

  const addUser = async (e) => {
    if (!emailCheck) {
      console.error("error in sign in data");

      return;
    }

    if (!passwordCheck) {
      console.error("error in sign in data");

      return;
    }
    console.log(userInfo);

    try {
      const response = await fetch("http://localhost:5000/user/register", {
        method: "POST",
        body: JSON.stringify(userInfo),
        headers: { "content-type": "application/json" },
      });
      if (!response.ok) {
        console.error("error is occured response:", response.ok);
        return;
      }
      const data = await response.json();
      if (data) {
        setuserLoginInfo(null);
        setLoginStatus(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleLoginInfoChange = (e) => {
    const { name, value } = e.target;
    setuserLoginInfo((prev) => ({ ...prev, [name]: value }));
  };
  console.log(userLoginInfo);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    console.log("request lounch, body:", JSON.stringify(userLoginInfo));

    try {
      const response = await fetch(`http://localhost:5000/user/login`, {
        method: "POST",
        bpdy: JSON.stringify(userLoginInfo),
        headers: { "content-type": "application/json" },
      });
      if (!response.ok) {
        console.error("an error is occured", response.ok);
        return;
      }
      const data = await response.json();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="main-container">
      <h2>Welcome</h2>

      <div className="form-container">
        {signIn && (
          <form
            className={`sign-in-form ${signIn ? "" : "hidden"}`}
            onSubmit={addUser}
          >
            <div className="sign-in-form-personal-info">
              <div className="input-row">
                <label htmlFor="user-name">Name: </label>
                <input
                  type="text"
                  name="name"
                  id="user-name"
                  placeholder="First Name"
                  onChange={handleInfoChange}
                  required
                />
              </div>
              <div className="input-row">
                <label htmlFor="user-last-name">Last name:</label>
                <input
                  type="text"
                  name="last_name"
                  id="user-last-name"
                  placeholder="Last Name"
                  onChange={handleInfoChange}
                  required
                />
              </div>
              <div className="input-row">
                <label htmlFor="user-birth-date">Birth Date: </label>
                <input
                  type="date"
                  name="date_of_birth"
                  id="user-birth-date"
                  onChange={handleInfoChange}
                  required
                />
              </div>
            </div>
            <div className="sign-in-form-loginInfo">
              <div className="input-row">
                <label htmlFor="login-name">userName: </label>
                <input
                  type="text"
                  name="username"
                  id="login-name"
                  placeholder="UserName"
                  onChange={handleInfoChange}
                  required
                />
              </div>
              <div className="input-row">
                <label htmlFor="user-email">Email: </label>

                <input
                  type="email"
                  name="email"
                  id="user-email"
                  placeholder="example@something.com"
                  onChange={handleInfoChange}
                  required
                />
              </div>
              <div className="input-row">
                <label htmlFor="user-password">Password:</label>

                <input
                  type="password"
                  name="password"
                  id="user-password"
                  placeholder="select your password..."
                  onChange={handleInfoChange}
                  required
                />
              </div>
              <div className="sign-in-check">
                <ul>
                  <li>
                    {!passwordCheck && (
                      <p>
                        password must capital and lowercase letters numbers and
                        symbols.{" "}
                      </p>
                    )}
                  </li>
                  <li>{!emailCheck && <p>must be a valid email.</p>}</li>
                </ul>
              </div>
            </div>
            <button type="submit">Sign-In</button>{" "}
            <div className="change-log-sign-page">
              {" "}
              <p>
                Already got an Account?{" "}
                <button
                  className="fake-link"
                  onClick={() => {
                    setLogIn(true);
                    setSignIn(false);
                  }}
                >
                  Log In
                </button>
              </p>
            </div>
          </form>
        )}
        {logIn && (
          <form
            onSubmit={handleLoginSubmit}
            className={`log-in-form ${logIn ? "" : "hidden"}`}
          >
            <div className="input-row">
              <label htmlFor="login-name">userName: </label>
              <input
                type="text"
                name="username"
                id="login-name"
                placeholder="UserName"
                onChange={handleLoginInfoChange}
                required
              />
            </div>
            <div className="input-row">
              <label htmlFor="user-email">Email: </label>
              <input
                type="email"
                name="email"
                id="user-email"
                placeholder="example@something.com"
                onChange={handleLoginInfoChange}
                required
              />
            </div>
            <div className="input-row">
              <label htmlFor="user-password">Password:</label>
              <input
                type="password"
                name="password"
                id="user-password"
                placeholder="select your password..."
                onChange={handleLoginInfoChange}
                required
              />
            </div>
            <div className="login-info-check">
              {loginStatus && <p>Login effettuto correttamente</p>}
            </div>
            <button type="submit">Log In</button>
            <div className="change-log-sign-page">
              <p>
                Do not have an Account?{" "}
                <button
                  className="fake-link"
                  onClick={() => {
                    setLogIn(false);
                    setSignIn(true);
                  }}
                >
                  Sign In
                </button>
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
