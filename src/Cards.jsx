import React from "react";
import Image1 from "./Images/google.png";
import Image2 from "./Images/fb.png";
import Image3 from "./Images/amazon.svg";

const Cards = () => {
  return (
    <>
      <div className="cards ">
        <div>
          <h2 className="h1">GOOGL</h2>
          <img className="card_logo" src={Image1} alt="google-logo" />
          <h1 className="price">1515 USD</h1>
        </div>
      </div>
      <div className="card_2 ">
        <div>
          <h2 className="h1">FB</h2>
          <img className="card_logo" src={Image2} alt="FB" />
          <h1 className="price">1515 USD</h1>
        </div>
      </div>
      <div className="card_3 ">
        <div>
          <h2 className="h1">AMZN</h2>
          <img className="card_logo" src={Image3} alt="amazn" />
          <h1 className="price">1515 USD</h1>
        </div>
      </div>
    </>
  );
};

export default Cards;
