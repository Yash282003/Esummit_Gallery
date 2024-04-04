import React, { useRef, useState } from "react";
import { useWindowSize } from "./useWindowSize";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import img1 from './assets/img1.JPG'
import img2 from './assets/img2.JPG'
import img3 from './assets/img3.JPG'
import img4 from './assets/img4.JPG'
import img5 from './assets/img5.JPG'
import img6 from './assets/img6.JPG'
import img7 from './assets/img7.JPG'
import img8 from './assets/img8.JPG'
import img9 from './assets/img9.JPG'
import Modal from "react-bootstrap/Modal";
import { IoMdArrowBack } from "react-icons/io";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./slider.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

export default function Slider() {
  const [clickedImage, setClickedImage] = useState(null);
  const { width } = useWindowSize(); // Get window width using custom hook

  const handleImageClick = (imageSrc) => {
    if (width >= 600) {
      setClickedImage(imageSrc);
    }
  };

  const handleCloseModal = () => {
    setClickedImage(null);
  };
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src={img1}
            onClick={() =>
              handleImageClick(img1)
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img2}
            onClick={() =>
              handleImageClick(img2)
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img3}
            onClick={() =>
              handleImageClick(img3)
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img4}
            onClick={() =>
              handleImageClick(img4)
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img5}
            onClick={() =>
              handleImageClick(img5)
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img6}
            onClick={() =>
              handleImageClick(img6)
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img7}
            onClick={() =>
              handleImageClick(img7)
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img8}
            onClick={() =>
              handleImageClick(img8)
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img9}
            onClick={() =>
              handleImageClick(img9)
            }
          />
        </SwiperSlide>
      </Swiper>
      {clickedImage && (
        <Modal
        show={clickedImage !== null}
        onHide={handleCloseModal}
        dialogClassName="modal-rectangular"
      >
        {/* <Modal.Header closeButton>
          
        </Modal.Header> */}
        <Modal.Body className="modal-body">
          <img src={clickedImage} alt="Enlarged" className="modal-image" />
        </Modal.Body>
      </Modal>
      
      )}
    </>
  );
}
