import React, { useRef, useState, useEffect } from "react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import MoreButton from "./MoreButton";
import {
  BtSlideNext,
  BtSlidePrev,
  SlideBtWrap,
} from "../../styles/main/SlideButton";
import { BtWrap } from "../../styles/main/mainStyle";
import { getProduct } from "../../api/main/main_api"; // API 호출 함수 import

const ProductSlide = ({ btList, title, desc, swiperId }) => {
  const [productData, setProductData] = useState([]); // 상품 데이터 상태 추가

  useEffect(() => {
    // 컴포넌트가 마운트될 때 API 호출하여 상품 데이터 가져오기
    const fetchData = async () => {
      try {
        const res = await getProduct(); // API 호출
        setProductData(res.data); // 데이터 설정
      } catch (error) {
        console.log(error);
      }
    };

    fetchData(); // 함수 호출
  }, []);

  // 초기값 세팅
  const [focus, setFocus] = useState(0);

  const handleClickLike = {};

  const swiperRefs = useRef([useRef(1), useRef(2), useRef(3), useRef(4)]);

  return (
    <div>
      <div className="section-1">
        <div className="title">{title}</div>
        <div className="desc">{desc}</div>
        <BtWrap>
          {btList.map((item, index) => {
            return (
              <button
                key={`camera${index}`}
                className={focus === index ? "focus" : ""}
                onClick={() => {
                  setFocus(index);
                }}
              >
                {item}
              </button>
            );
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
          onSwiper={swiper => {
            swiperRefs.current = swiper;
          }}
          className="mySwiper"
          modules={[Navigation]}
        >
          {productData.map((item, index) => (
            <SwiperSlide key={`cameraSlide${index}`}>
              <div className="like">
                <button onClick={() => handleClickLike()}>
                  <img src="../images/main/like.svg" alt="like" />
                </button>
              </div>
              <img src={item.prodMainPic} alt="" />

              <div className="desc-wrap">
                <span className="desc-title">{item.title}</span>
                <hr></hr>
                <div className="desc-price">{item.price}</div>
                <div className="desc-ad">{item.addr}</div>
                <div className="view">조회수{item.view}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <SlideBtWrap>
          <BtSlidePrev
            className={`slide-prev-bt-${swiperId} c-slide-prev`}
            onClick={() => {
              swiperRefs.current[swiperId];
            }}
          >
            <img src="../images/main/prev.svg" alt="prev" />
          </BtSlidePrev>
          <BtSlideNext
            className={`slide-next-bt-${swiperId} c-slide-next`}
            onClick={() => {
              swiperRefs.current[swiperId];
            }}
          >
            <img src="../images/main/next.svg" alt="next" />
          </BtSlideNext>
        </SlideBtWrap>

        <div>
          <MoreButton />
        </div>
      </div>
    </div>
  );
};

export default ProductSlide;
