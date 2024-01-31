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

const ProductSlide = ({ btList, title, desc, id }) => {
  const [productData, setProductData] = useState([]); // 상품 데이터 상태 추가

  useEffect(() => {
    // 컴포넌트가 마운트될 때 API 호출하여 상품 데이터 가져오기
    const fetchData = async () => {
      try {
        const res = await getProduct(id); // API 호출
        console.log(res);
        setProductData(res); // 데이터 설정
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
                  btList;
                }}
              >
                {item.title}
              </button>
            );
          })}
        </BtWrap>
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          slidesPerGroup={4}
          navigation={{
            nextEl: `.slide-next-bt-${id}`,
            prevEl: `.slide-prev-bt-${id}`,
          }}
          onSwiper={swiper => {
            swiperRefs.current = swiper;
          }}
          className="mySwiper"
          modules={[Navigation]}
        >
          {productData &&
            productData.map((item, index) => (
              <SwiperSlide key={`cameraSlide${index}`}>
                <div className="like">
                  <button onClick={() => handleClickLike()}>
                    <img src="/images/main/like.svg" alt="like" />
                  </button>
                </div>
                <img src={`/pic/${item.prodMainPic}`} alt="" />

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
            className={`slide-prev-bt-${id} c-slide-prev`}
            onClick={() => {
              swiperRefs.current[id];
            }}
          >
            <img src="../images/main/prev.svg" alt="prev" />
          </BtSlidePrev>
          <BtSlideNext
            className={`slide-next-bt-${id} c-slide-next`}
            onClick={() => {
              swiperRefs.current[id];
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
