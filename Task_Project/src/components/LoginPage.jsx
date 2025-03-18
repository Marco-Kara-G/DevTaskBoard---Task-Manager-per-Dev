import { useState } from "react";
import "./LoginPage.css";

export function LoginPage() {
  const [userInfo, setUserInfo] = useState(null);

  const handleInfoChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((eprev) => ({ ...eprev, [name]: value }));
  };

  const addUser = async (e) => {
    e.preventDefault();
    console.log(userInfo);

    try {
      const response = await fetch("http://localhost:5000/user", {
        method: "POST",
        body: JSON.stringify(userInfo),
        headers: { "content-type": "application/json" },
      });
      if (!response.ok) {
        console.error("error is occured response:", response.ok);
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
      <form className="sign-in-form" onSubmit={addUser}>
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
        </div>

        <button type="submit">Sign-In</button>
      </form>
    </div>
  );
}
