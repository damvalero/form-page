import React from "react";
import "./Banner.css";

const Banner = (props) => {
  console.log("que es el props", props.info);
  const dataBannerImgOne = "snubesImg1"
  return (
    <>
      <div className="banner">
        <img
          className={
            props.info.id === dataBannerImgOne ? "banner-img1" : "banner-img2"
          }
          src={props.info.img}
          alt={props.info.alt}
        />
      </div>
    </>
  );
};

export default Banner;
