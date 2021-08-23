import { useState, useEffect } from "react";
import "./PhoneSlide.scss";

export default function PhoneSlide() {
  var imgs = [
    "https://www.instagram.com/static/images/homepage/screenshot1.jpg/d6bf0c928b5a.jpg",
    "https://www.instagram.com/static/images/homepage/screenshot2.jpg/6f03eb85463c.jpg",
    "https://www.instagram.com/static/images/homepage/screenshot3.jpg/f0c687aa6ec2.jpg",
    "https://www.instagram.com/static/images/homepage/screenshot4.jpg/842fe5699220.jpg",
  ];
  const [slideIndex, setSlideIndex] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setSlideIndex((s) => (s + 1) % 4);
    }, 3000);
  }, []);
  return (
    <div className="phoneImage">
      <img
        src="https://www.instagram.com/static/images/homepage/home-phones.png/43cc71bb1b43.png"
        alt="phoneInstagram"
      />
      <div className="phoneImgSlide">
        <img src={imgs[slideIndex]} alt="instagram screens" />
      </div>
    </div>
  );
};

