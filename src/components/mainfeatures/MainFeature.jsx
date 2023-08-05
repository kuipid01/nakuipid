/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import "./mainfeat.scss";
import { BiSolidHandDown } from "react-icons/bi";

const MainFeature = () => {
  return (
    <div className="thecontiner">
      <h1 className="title">Featured Designers</h1>
    <div className="MainFeatureContainer">
   
      <div className="box box1">
        <img
          src="https://i.pinimg.com/236x/2a/18/db/2a18dbbde8e63eeeb2bde79e210fd779.jpg"
          alt=""
        />
        <div className="textContainer">
          <div className="inner">
            <h1>Stiches by Nori</h1> <BiSolidHandDown />
          </div>
          <div className="profile">
            <img
              src="https://i.pinimg.com/564x/f1/a8/dc/f1a8dc394c1c18c78f4b40906c5a1838.jpg"
              alt=""
            />
            <h1>Neemah</h1>
          </div>
        </div>
      </div>
      <div className="box box2">
        <img
          src="https://i.pinimg.com/236x/3d/89/a2/3d89a2d16e8090459f8d5254eb4a048c.jpg"
          alt=""
        />
        <div className="textContainer">
          <div className="inner">
            <h1>Kuipid Designs</h1> <BiSolidHandDown />
          </div>
          <div className="profile">
            <img
              src="https://i.pinimg.com/236x/20/cc/19/20cc197308c9652be27f2a6a5df1a8b0.jpg"
              alt=""
            />
            <h1>Kuipid</h1>
          </div>
        </div>
      </div>
      <div className="box box3">
        <img
          src="https://i.pinimg.com/236x/12/17/10/121710ee8cabf07ab525249e493a678b.jpg"
          alt=""
        />
         <div className="textContainer">
          <div className="inner">
            <h1>Nara Shoes </h1> <BiSolidHandDown />
          </div>
          <div className="profile">
            <img
              src="https://i.pinimg.com/736x/20/cc/19/20cc197308c9652be27f2a6a5df1a8b0.jpg"
              alt=""
            />
            <h1>John Nara</h1>
          </div>
        </div>
      </div>
      <div className="box box4">
        <img
          src="https://i.pinimg.com/236x/8b/22/b7/8b22b7b0b2535d3efbf35fdaa7c44649.jpg"
          alt=""
        />
         <div className="textContainer">
          <div className="inner">
            <h1>Bespoke suits</h1> <BiSolidHandDown />
          </div>
          <div className="profile">
            <img
              src="https://i.pinimg.com/236x/86/c6/c1/86c6c1e1f0a8ced479d1c138bc12549c.jpg"
              alt=""
            />
            <h1>Aba wears</h1>
          </div>
        </div>
      </div>

  
    </div>
    </div>
  );
};

export default MainFeature;
