import "./LoginPage.css";

export function LoginPage() {
  return (
    <div>
      <h2>Welcome</h2>
      <form className="sign-in-form">
        <div className="sign-in-form-personal-info">
          <label htmlFor="user-name">Name: </label>
          <input
            type="text"
            name="user-name"
            id="user-name"
            placeholder="First Name"
          />
          <label htmlFor="user-last-name">Last name:</label>
          <input
            type="text"
            name="user-last-name"
            id="user-last-name"
            placeholder="Last Name"
          />
          <label htmlFor="user-birth-date">Birth Date: </label>

          <input type="date" name="user-birth-date" id="user-birth-date" />
        </div>
        <div className="sign-in-form-loginInfo">
          <label htmlFor="login-name">userName: </label>
          <input
            type="text"
            name="login-name"
            id="login-name"
            placeholder="UserName"
          />
          <label htmlFor="user-email">Email: </label>
          <input
            type="email"
            name="user-email"
            id="user-email"
            placeholder="example@something.com"
          />
          <label htmlFor="user-password">Password:</label>
          <input
            type="password"
            name="user-password"
            id="user-password"
            placeholder="select your password..."
          />
        </div>
        <button type="submit">Sign-In</button>
      </form>
    </div>
  );
}
