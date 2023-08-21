import React, { useState } from 'react';
import "./DashBoard.css";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { AiOutlineEnvironment, AiOutlineSearch } from "react-icons/ai";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; // Import carousel styles
import 'slick-carousel/slick/slick-theme.css';


import CreateBubble from "./CreateBubble"; // Import the CustomModal component
import 'bootstrap/dist/css/bootstrap.min.css';

function DashBoard() {

  const images = [
    1, 2, 3, 4, 5, 6, 7, 8
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };


  return (
    <div>
      <Navbar />

      <div className="dashboard">
        <div className="dashboard-title">
          Find Your Bubble
        </div>

        <div className="searchbar">
          <AiOutlineEnvironment style={{ paddingInline: "10px" }} />
          <input
            type="text"
            className="search-inputs"
            style={{ borderInline: '1px solid black' }}
            placeholder="Location"
          />


          <input
            type="text"
            className="search-inputs"
            placeholder="Country"
          />

          <AiOutlineSearch style={{ paddingInline: "10px" }} />
        </div>


        <button className="create-button" onClick={handleOpenModal}>
          Create your bubble
        </button>

        <Slider {...settings} className="section-content" style={{ backgroundColor: "#D3B99F", minHeight: "500px", display: "flex", alignItems: "center", justifyContent: "space-around", paddingBlock: "20px" }}>
          {images.map((image, index) => (
            <div key={index} style={{display: "flex", alignItems: "center", justifyContent: "space-around" }}>
              <BubbleCard />
            </div>
          ))}
        </Slider>



        <div className="manual"></div>
      </div>

      <CreateBubble showModal={showModal} handleClose={handleCloseModal} />

      <Footer />

    </div>
  );
}

export default DashBoard;

function BubbleCard() {
  return (
    <div className="bubble-cards">


      <div>
        <h1>Name of the bubble</h1>
        {/* <h1>Interests:</h1>
        <ul>
          <li>Gym</li><li>Music</li><li>Cooking</li><li>Reading</li>
        </ul> */}
      </div>
      {/* <div style={{ display:"flex",fontSize: "25px", marginBottom: "20px", alignItems: 'center', justifyContent: 'center' }}>“Absolutely the best service I've ever used!
        It's incredibly user-friendly and impressively fast.
        The overall user experience is nothing short of fantastic”</div> */}
    </div>
  )
}