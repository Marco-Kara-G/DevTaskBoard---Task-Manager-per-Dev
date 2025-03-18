import { useState } from "react";
import "./LoginPage.css";

export function LoginPage() {
  const [userInfo, setUserInfo] = useState(null);

  const handleInfoChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((eprev) => ({ ...eprev, [name]: value }));
  };
  console.log(userInfo);

  return (
    <div className="main-container">
      <h2>Welcome</h2>
      <form className="sign-in-form">
        <div className="sign-in-form-personal-info">
          <div className="input-row">
            <label htmlFor="user-name">Name: </label>
            <input
              type="text"
              name="name"
              id="user-name"
              placeholder="First Name"
              onChange={handleInfoChange}
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
            />
          </div>
          <div className="input-row">
            <label htmlFor="user-birth-date">Birth Date: </label>
            <input
              type="date"
              name="date_of_birth"
              id="user-birth-date"
              onChange={handleInfoChange}
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
            />
          </div>
        </div>

        <button type="submit">Sign-In</button>
      </form>
    </div>
  );
}
