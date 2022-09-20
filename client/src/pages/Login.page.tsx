import React from "react";
import Google from "../assets/google.png";
import Facebook from "../assets/facebook.png";
import Github from "../assets/github.png";

const LoginPage = () => {
  return (
    <div className="login">
      <h1 className="loginTitle">Choose login Methods</h1>
      <div className="wrapper">
        <div className="left">
          <div className="loginButton google">
            <img src={Google} alt="google" className="icon" />
            Google
          </div>
          <div className="loginButton facebook">
            <img src={Facebook} alt="facebook" className="icon" />
            Facebook
          </div>
          <div className="loginButton github">
            <img src={Github} alt="github" className="icon" />
            Github
          </div>
        </div>
        <div className="center">
          <div className="line" />
          <div className="or">OR</div>
        </div>
        <div className="right">
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <button className="submit" type="submit">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
