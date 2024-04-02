import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
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

  const handleImageClick = (imageSrc) => {
    setClickedImage(imageSrc);
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
            src="https://swiperjs.com/demos/images/nature-1.jpg"
            onClick={() =>
              handleImageClick("https://swiperjs.com/demos/images/nature-1.jpg")
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-2.jpg"
            onClick={() =>
              handleImageClick("https://swiperjs.com/demos/images/nature-2.jpg")
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-4.jpg"
            onClick={() =>
              handleImageClick("https://swiperjs.com/demos/images/nature-4.jpg")
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-3.jpg"
            onClick={() =>
              handleImageClick("https://swiperjs.com/demos/images/nature-3.jpg")
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-5.jpg"
            onClick={() =>
              handleImageClick("https://swiperjs.com/demos/images/nature-5.jpg")
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-6.jpg"
            onClick={() =>
              handleImageClick("https://swiperjs.com/demos/images/nature-6.jpg")
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-7.jpg"
            onClick={() =>
              handleImageClick("https://swiperjs.com/demos/images/nature-7.jpg")
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-8.jpg"
            onClick={() =>
              handleImageClick("https://swiperjs.com/demos/images/nature-8.jpg")
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-9.jpg"
            onClick={() =>
              handleImageClick("https://swiperjs.com/demos/images/nature-9.jpg")
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
