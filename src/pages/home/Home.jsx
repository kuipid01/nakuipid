/* eslint-disable no-unused-vars */
import React from "react";
import "./home.scss";
import Navbar from "../../components/Navbar/Navbar";
import Feature from "../../components/featured/feature";
import MainFeature from "../../components/mainfeatures/MainFeature";
import Categoriestag from "../../components/categoriesTag/categoriestag";
import MainCat from "../../components/maincategories/MainCat";
import Footer from "../../components/footer/Footer";
const Home = () => {
  return (
    <div className="main">

    
    <div className="homeContainer">
      <Navbar />
      <img className="imgBgOverlay" src="/assets/img5.png" alt="" />
      <div className="imgOverlay"></div>
      <div className="textContainer">
        <div className="text">
        <p>Get our personalise designed wears</p>
        <h1> Wear Nakuipid</h1>
        <button>Start Shopping</button>
        </div>
       <div className="img">
        <img src="/assets/img8.png" alt="" />
       </div>
      </div>
      <div className="chngeImgcontainer">
        <div className="active one">  <img src="/assets/img6.png" alt="" /> </div>
        <div  className=" two">  <img src="/assets/img3.png" alt="" /> </div>
      </div>
    </div>
    <MainCat />
    <MainFeature />
    <Feature />
    <br />
    <br />
    <br />
    <br />
    <br />
    <Categoriestag title={'Cheap Products'}/>
    <br />
    <br />
    <br />
    <br />
    <br />
    <Categoriestag title={'Top Deals'}/>
    <br />
    <br />
    <br />
    <br />
    <br />
    <Categoriestag title={'Men Products'}/>
    <br />
    <br />
    <br />
  
    <Footer />
    </div>
  );
};

export default Home;
