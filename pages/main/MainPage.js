import React, { useState } from "react";
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Layout from "../../layouts/Layout";
import { BtWrap, MainWrap, MoreBt } from "./mainStyle";
import 'swiper/css';
import MoreButton from "./MoreButton";


const initData = [{
  image: "../images/camera.jpeg",
  title: "인스탁스 미니12 폴라로이드 즉석 카메라",
  price: "150,000 원",
  address:"대구광역시 달서구 상인동",
  view: 10
},
{
  image: "../images/camera.jpeg",
  title: "인스탁스 미니12 폴라로이드 즉석 카메라",
  price: "150,000 원",
  address:"대구광역시 달서구 상인동",
  view: 10
},
{
  image: "../images/camera.jpeg",
  title: "인스탁스 미니12 폴라로이드 즉석 카메라",
  price: "150,000 원",
  address:"대구광역시 달서구 상인동",
  view: 10
},
{
  image: "../images/camera.jpeg",
  title: "인스탁스 미니12 폴라로이드 즉석 카메라",
  price: "150,000 원",
  address:"대구광역시 달서구 상인동",
  view: 10
},
{
  image: "../images/camera.jpeg",
  title: "인스탁스 미니12 폴라로이드 즉석 카메라",
  price: "150,000 원",
  address:"대구광역시 달서구 상인동",
  view: 10
},
{
  image: "../images/camera.jpeg",
  title: "인스탁스 미니12 폴라로이드 즉석 카메라",
  price: "150,000 원",
  address:"대구광역시 달서구 상인동",
  view: 10
},
{
  image: "../images/camera.jpeg",
  title: "인스탁스 미니12 폴라로이드 즉석 카메라",
  price: "150,000 원",
  address:"대구광역시 달서구 상인동",
  view: 10
}
]

const btList = ["빔프로젝터", "셋톱박스", "카메라", "캠코더", "DSLR"]
const btMore = ["MORE"]

const MainPage = () => {
  
  // 초기값 세팅
  const [focus,setFocus] = useState(0);

  return (
    <>
    {/* <SideBar/> */}
    <Layout>
      <MainWrap>
        <div className="section-1">
            <div className="title">영상 / 카메라</div>
            <div className="desc">여러분의 순간을 놀라운 품질로 기록하고 공유하세요</div>
            <BtWrap>
              {btList.map((item, index) => {
                return <button key={`camera${index}`} className={focus === index ? "focus" : ""} onClick={() => {setFocus(index)}}>{item}</button>
              })}
            </BtWrap>
            <Swiper
            slidesPerView={4}
            spaceBetween={20}
            slidesPerGroup={4}
            navigation={true}
            className="mySwiper"
            modules={[Navigation]}>
            {initData.map((item, index) => { 
              return (
              <SwiperSlide key={`cameraSlide${index}`}> 
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
            <div>
              <MoreButton/>
            </div>
        </div>
      </MainWrap>
    </Layout>
    </>
  );
};

export default MainPage;
