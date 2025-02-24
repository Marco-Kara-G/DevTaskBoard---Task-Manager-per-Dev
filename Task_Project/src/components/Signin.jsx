export function SignIn() {
  return (
    <>
      <div className="registration-container">
        <h1>Welcome!</h1>
        <form className="registration-form">
          <label htmlFor="sign_username">Username: </label>
          <input type="text" name="sign_username" id="sign_username" />
          <label htmlFor="sign_email">Email: </label>
          <input type="email" name="sign_email" id="sign_email" />
          <label htmlFor="sign_password">Password: </label>
          <input type="password" name="sign_password" id="sign_password" />

          <button type="submit">SignIn</button>
        </form>
      </div>
    </>
  );
}
