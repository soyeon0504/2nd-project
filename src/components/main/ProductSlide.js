import React, { useRef, useState } from "react";
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import MoreButton from "./MoreButton";
import { BtSlideNext, BtSlidePrev, SlideBtWrap } from "../../styles/main/SlideButton"
import { BtWrap } from "../../styles/main/mainStyle";



const ProductSlide = ({btList, data, title, desc, swiperId}) => {

  const productData = [
    {
      "iuser": 7,
      "nick": "감자7",
      "userPic": "user\\7\\cfbf8730-7ce0-40bb-9a80-4e8987fe8866.jpg",
      "iauth": 1,
      "iproduct": 25,
      "title": "갤럭시워치6 47mm 로렉스 커스텀 대여합니다",
      "prodMainPic": "prod\\25\\c5162906-2cb1-4a6c-a738-f675b20a67a4.jpg",
      "price": 500000,
      "rentalPrice": 20000,
      "deposit": 400000,
      "rentalStartDate": "2024-01-18",
      "rentalEndDate": "2024-06-18",
      "addr": "대구 달서구 와룡로22길 32 와룡로22길 32",
      "prodLike": 4,
      "istatus": 0,
      "isLiked": 1,
      "view": 0
    },
    {
      "iuser": 1,
      "nick": "바보현빈",
      "userPic": "user\\1\\5dd05f9e-12f3-42ae-a53f-727f9c76d40f.jpg",
      "iauth": 1,
      "iproduct": 11,
      "title": "2번갤럭시S24플러스 빌려가세요",
      "prodMainPic": "prod\\11\\297ff48c-4c7f-4efa-a1a8-8c6c67909c46.jpg",
      "price": 1500000,
      "rentalPrice": 50000,
      "deposit": 1200000,
      "rentalStartDate": "2024-01-18",
      "rentalEndDate": "2024-03-18",
      "addr": "대구 달서구 와룡로22길 32 와룡로22길 32",
      "prodLike": 5,
      "istatus": 0,
      "isLiked": 0,
      "view": 2
    },
    {
      "iuser": 1,
      "nick": "바보현빈",
      "userPic": "user\\1\\5dd05f9e-12f3-42ae-a53f-727f9c76d40f.jpg",
      "iauth": 1,
      "iproduct": 10,
      "title": "1번갤럭시S24울트라 빌려가세요",
      "prodMainPic": "prod\\10\\1cf0e47e-d5e8-4402-af6f-528ff4845be5.jpg",
      "price": 1500000,
      "rentalPrice": 50000,
      "deposit": 1200000,
      "rentalStartDate": "2024-01-18",
      "rentalEndDate": "2024-03-18",
      "addr": "대구 달서구 와룡로22길 32 와룡로22길 32",
      "prodLike": 4,
      "istatus": 0,
      "isLiked": 0,
      "view": 1
    }
  ]
   // 초기값 세팅
   const [focus, setFocus] = useState(0);

   const handleClickLike = {}

   const swiperRefs = useRef(
    [
      useRef(1), 
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
              nextEl: `.slide-next-bt-${swiperId}`,
              prevEl: `.slide-prev-bt-${swiperId}`,
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
                  <img src="../images/main/like.svg" />
                </button>
              </div>
              <img src={item.image} alt="" />
              
              <div className="desc-wrap">
                <span className="desc-title">{productData.title}</span>
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
              <BtSlidePrev className={`slide-prev-bt-${swiperId} c-slide-prev`} onClick={() => {
                swiperRefs.current[(swiperId)];
              }}>
                <img src="../images/main/prev.svg" alt="" />
              </BtSlidePrev>
              <BtSlideNext className={`slide-next-bt-${swiperId} c-slide-next`} onClick={() => {
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