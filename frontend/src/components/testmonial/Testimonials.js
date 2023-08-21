import React from 'react';
import Avatar from "../../assets/images/avatar.png";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Testimonial.css'; // Create this CSS file for custom styling

import Slider from 'react-slick';

const sliderSettings = {
  dots: true, // Show navigation dots
  infinite: true, // Loop the carousel
  speed: 500, // Transition speed in milliseconds
  slidesToShow: 1, // Number of slides to show at a time
  slidesToScroll: 1, // Number of slides to scroll per change
  // You can add more settings as needed
};

const TestimonialCarousel = () => {
  const testimonials = [
    <TestimonialCard key={1} />,
    <TestimonialCard key={2} />,
    <TestimonialCard key={3} />,
    <TestimonialCard key={4} />,
    // ... Add more TestimonialCards as needed
  ];

  return (
    <div className="carousel-container">
      <Slider {...sliderSettings}>
        {testimonials}
      </Slider>
    </div>
  );
};



function TestimonialCard() {
    return (
        <div style={{ textAlign: "center", width:"450px", border:"solid", padding:"10px", borderRadius:"5%" }}>
            
            <div style={{ fontSize: "25px", marginBottom:"20px" }}>“Absolutely the best service I've ever used!
             It's incredibly user-friendly and impressively fast.
              The overall user experience is nothing short of fantastic”</div>

            <div style={{display:"flex", justifyContent:"space-between"}}>
                <div>Rating....</div>
                <img src={Avatar} style={{ height: "50px", width: "50px" }}></img>
            </div>
        </div>
    )
}

export default TestimonialCarousel;

