import React from "react";
import {Container} from "react-bootstrap";

import {Swiper, SwiperSlide} from "swiper/react";

// import required modules
import {Navigation} from "swiper";

export default function CollectionCOmponent() {
  return (
    <Container className="my-5">
      <h2 className="my-5">Collection Areas</h2>
      <div className="swiperContainer">
        <Swiper
          className="sliderContainer"
          slidesPerView={4}
          spaceBetween={30}
          slidesPerGroup={3}
          loopFillGroupWithBlank={true}
          navigation={true}
          loop={true}
          modules={[Navigation]}>
          <SwiperSlide>
            <a href="/">
              <p className="text-light pt-3">Sub-Saharan African Art</p>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="/">
              <p className="text-light pt-3">The American Wing</p>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="/">
              <p className="text-light pt-3">Ancient Near East Art</p>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="/">
              <p className="text-light pt-3">Arms and Armor</p>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="/">
              <p className="text-light pt-3">Ancient American Art</p>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="/">
              <p className="text-light pt-3">Asian Art</p>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="/">
              <p className="text-light pt-3">The Costume Institute</p>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="/">
              <p className="text-light pt-3">Drawings and Prints</p>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="/">
              <p className="text-light pt-3">Drawings and Prints</p>
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
    </Container>
  );
}
