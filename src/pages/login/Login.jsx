/* eslint-disable no-unused-vars */
import React from "react";
import "./login.scss";
import { Link } from "react-router-dom";
import {
  AiOutlineFacebook,
  AiOutlineLock,
  AiOutlineGoogle,
  AiOutlineTwitter,
} from "react-icons/ai";
const Home = () => {
  return (
    <div className="login">
      <img className="imgBgOverlay" src="/assets/img8.png" alt="" />
      <div className="blackOverlay">

      </div>
      <Link to='/' className="link">  <h1 className="logo">Nakuipid</h1></Link>

      <div className="lgincontainer">
        <div className="handle">
          <input type="text" placeholder="Email" />
          <span>@</span>
        </div>
        <div className="handle">
          <input type="text" placeholder="Password" />
          <span>
            {" "}
            <AiOutlineLock />{" "}
          </span>
        </div>
        <div className="loginBtncontainer">
          <div className="check">
            <input type="checkbox" name="login" id="login" />
            <span>remember me</span>
          </div>
          <button>Sign In</button>
        </div>
        <div className="options">
          <Link className="link" to="/forgotpasswrod"> Forgot password? </Link>
          <hr /> <Link to="/register"   className="link" > Sign Up </Link>
        </div>
        <p>OR</p>

        <div className="btns">
          <div>
            <AiOutlineFacebook />
          </div>
          <div>
            <AiOutlineGoogle />
          </div>
          <div>
            <AiOutlineTwitter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
