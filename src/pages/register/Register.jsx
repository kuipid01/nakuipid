/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./reg.scss";
import { Link } from "react-router-dom";
import {
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAgreed, setTermsAgreed] = useState(false);
const [inputLabel, setInputLabel] = useState(false)
  const handleSignUp = () => {
    // Handle sign-up logic here
    console.log("Sign up with:", email, password);
  };
  const handleLabel =  () => {
setInputLabel(true)
  }

  return (
    <div className="registerContainer">
      <img src="/assets/registerBg.jpg" alt="" />
      <div className="overlay"></div>
      <div className="leftContainer">
        <Link to='/' className="link">  <h1 className="logo">Nakuipid</h1></Link>
      
        <div className="text">
          <h3>
            Don&lsquo;t have an <br /> account?
          </h3>
          <p>Register to access all our features in just two steps</p>
          <div className="icons">
            <AiOutlineFacebook />
            <AiOutlineTwitter />
            <AiFillInstagram />
          </div>
        </div>
      </div>

      <div className="rightContainer">
        <div className="blur"></div>
        <div className="registration-page">
          <h1 className="registration-title">Sign Up</h1>
          <form className="registration-form">
          <div className="form-group">
      <label className={`placeholder ${email ? 'active' : ''}`}> Email: </label>
      <input
        type="email"
        className="input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
            <div className="form-group">
              <label className={`placeholder ${password ? 'active' : ''}`}>Password:</label>
              <input
                type="password"
                className="input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className={`placeholder ${confirmPassword ? 'active' : ''}`}>Confirm Password:</label>
              <input
                type="password"
                className="input"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className="form-group-left">
            <input
                  type="checkbox"
                  className="checkbox"
                  checked={termsAgreed}
                  onChange={() => setTermsAgreed(!termsAgreed)}
                />
              <label className="placeholder">
              I agree to the terms and conditions
              </label>
              
              
            </div>
            <p  className="login-link">
            Already have an account? <Link className="link" to="/login">Log in</Link>
          </p>
            <button
              type="button"
              className="sign-up-button"
              onClick={handleSignUp}
              disabled={!termsAgreed || password !== confirmPassword}
            >
              Sign Up
            </button>

          </form>
       
        </div>
      </div>
    </div>
  );
};

export default Register;
