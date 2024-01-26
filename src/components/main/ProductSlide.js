import React, { useRef, useState } from "react";
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import MoreButton from "./MoreButton";
import { BtSlideNext, BtSlidePrev, SlideBtWrap } from "./SlideButton";
import { BtWrap } from "../../pages/main/mainStyle";



const ProductSlide = ({btList, data, title, desc, swiperId}) => {
   // 초기값 세팅
   const [focus, setFocus] = useState(0);

   const handleClickLike = {}

   const swiperRefs = useRef(
    [useRef(1), 
      useRef(2), 
      useRef(3),
      useRef(4)
    ]
    );


  return (
    <div>
        <div className="section-1">
            <div className="title">{title}</div>
            <div className="desc">{desc}</div>
            <BtWrap>
              {btList.map((item, index) => {
                return <button 
                key={`camera${index}`} 
                className={focus === index ? "focus" : ""} 
                onClick={() => {setFocus(index)}}>{item}
                </button>
              })}
            </BtWrap>
            <Swiper
            slidesPerView={4}
            spaceBetween={20}
            slidesPerGroup={4}
            navigation={{
              nextEl: ".slide-next-bt-1",
              prevEl: ".slide-prev-bt-1",
            }}
            onSwiper={(swiper) => {
              swiperRefs.current = swiper;
            }}
            className="mySwiper"
            modules={[Navigation]}>
            {data.map((item, index) => { 
              return (
              <SwiperSlide key={`cameraSlide${index}`}> 
              <div className="like">
                <button onClick={() => handleClickLike()}>
                  <img src="../images/main/like.svg"/>
                </button>
              </div>
              <img src={item.image} alt="" />
              
              <div className="desc-wrap">
                <span className="desc-title">{item.title}</span>
                <hr></hr>
                <div className="desc-price">{item.price}</div>
                <div className="desc-ad">{item.address}</div>
                <div className="view">조회수{item.view}</div>
              </div>
            </SwiperSlide>
              )
            })}
            </Swiper>
            <SlideBtWrap>
              <BtSlidePrev className="slide-prev-bt-1 c-slide-prev" onClick={() => {
                swiperRefs.current[(swiperId)];
              }}>
                <img src="../images/main/prev.svg" alt="" />
              </BtSlidePrev>
              <BtSlideNext className="slide-next-bt-1 c-slide-next" onClick={() => {
                swiperRefs.current[(swiperId)];
              }}>
                <img src="../images/main/next.svg" alt="" />
              </BtSlideNext>
            </SlideBtWrap>

            <div>
              <MoreButton />
            </div>
        </div>
    </div>
  )
}

export default ProductSlide