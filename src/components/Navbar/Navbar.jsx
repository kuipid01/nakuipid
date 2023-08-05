/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./nav.scss";
import {
  AiOutlinePhone,
  AiOutlineMenu,
  AiOutlineSearch,
  AiFillContainer,
  AiOutlineDown,
  AiOutlineClose
} from "react-icons/ai";
import { BsHandbag } from "react-icons/bs";
import { useTransition, animated, config } from 'react-spring';
import 'animate.css/animate.min.css'
const Navbar = () => {
    const [navmobileOpen, setNavmobileOpen] = useState(false);

    const toggleComponent = () => {
      setNavmobileOpen(prevState => !prevState);
    };
  
    const transitions = useTransition(navmobileOpen, {
      from: { opacity: 0, transform: 'translateY(-20px)' },
      enter: { opacity: 1, transform: 'translateY(0)' },
      leave: { opacity: 0, transform: 'translateY(-20px)' },
      config: config.slow,
    });
  return (
    <div className="navContainer">
      <h1 className="logo">NaKuipid</h1>

      <ul className="navlist">
        <li>SHOP</li>
        <li>MY ACCOUNT</li>
        <li>BEST DEAL</li>
        <li>WISHLIST</li>
        <li>BLOG</li>
        <li>LOG IN</li>
        <li className="phone">
          {" "}
          <AiOutlinePhone /> 09157016669
        </li>
      </ul>
      <div className="loginContainer">
        <div className="language">
          <div className="naira">
            <span>Naira</span> <AiOutlineDown className="icon" />
          </div>
          <div className="naira">
            <span>English</span> <AiOutlineDown className="icon" />
          </div>
        </div>
        <div className="search">
          <AiOutlineSearch className="searchIcon" />

          <div className="cart">
            <span>3</span>
            <BsHandbag className="shopIcon" />
          </div>
        </div>
      </div>

      <div className="menu">
        {
            navmobileOpen ?  <AiOutlineClose  onClick={() =>  setNavmobileOpen(false)} /> :  <AiOutlineMenu onClick={() =>  setNavmobileOpen(true)} />
        }
      
      </div>

      {/* navmobile */}
      {transitions(
        (styles, item) =>
          item && (
            <animated.div className="navmobile" style={styles}>
              <ul className="navlist">
                <li>SHOP</li>
                <li>MY ACCOUNT</li>
                <li>BEST DEAL</li>
                <li>WISHLIST</li>
                <li>BLOG</li>
                <li>LOG IN</li>
                <li className="phone">
                  <AiOutlinePhone /> 09157016669
                </li>
              </ul>
              <div className="loginContainer">
                <div className="language">
                  <div className="naira">
                    <span>Naira</span> <AiOutlineDown className="icon" />
                  </div>
                  <div className="naira">
                    <span>English</span> <AiOutlineDown className="icon" />
                  </div>
                </div>
                <div className="search">
                  <AiOutlineSearch className="searchIcon" />

                  <div className="cart">
                    <span>3</span>
                    <BsHandbag className="shopIcon" />
                  </div>
                </div>
              </div>
            </animated.div>
          )
      )}

      {/* end navmobile */}
    </div>
  );
};

export default Navbar;
