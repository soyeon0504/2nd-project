import React, { useEffect, useState } from "react";
import "swiper/css";
import { SideBar } from "../../components/SideBar";
import ProductSlide from "../../components/main/ProductSlide";
import Layout from "../../layouts/Layout";
import { MainWrap } from "../../styles/main/mainStyle";
import { getProduct } from "../../api/main/main_api";

const initData = [
  // {
  //   image: "../images/main/camera.jpeg",
  //   title: "인스탁스 미니12 폴라로이드 즉석 카메라",
  //   price: "150,000 원",
  //   address: "대구광역시 달서구 상인동",
  //   view: 10,
  // },
  // {
  //   image: "../images/main/camera.jpeg",
  //   title: "인스탁스 미니12 폴라로이드 즉석 카메라",
  //   price: "150,000 원",
  //   address: "대구광역시 달서구 상인동",
  //   view: 10,
  // },
  // {
  //   image: "../images/main/camera.jpeg",
  //   title: "인스탁스 미니12 폴라로이드 즉석 카메라",
  //   price: "150,000 원",
  //   address: "대구광역시 달서구 상인동",
  //   view: 10,
  // },
  // {
  //   image: "../images/main/camera.jpeg",
  //   title: "인스탁스 미니12 폴라로이드 즉석 카메라",
  //   price: "150,000 원",
  //   address: "대구광역시 달서구 상인동",
  //   view: 10,
  // },
  // {
  //   image: "../images/main/camera.jpeg",
  //   title: "인스탁스 미니12 폴라로이드 즉석 카메라",
  //   price: "150,000 원",
  //   address: "대구광역시 달서구 상인동",
  //   view: 10,
  // },
  // {
  //   image: "../images/main/camera.jpeg",
  //   title: "인스탁스 미니12 폴라로이드 즉석 카메라",
  //   price: "150,000 원",
  //   address: "대구광역시 달서구 상인동",
  //   view: 10,
  // },
  // {
  //   image: "../images/main/camera.jpeg",
  //   title: "인스탁스 미니12 폴라로이드 즉석 카메라",
  //   price: "150,000 원",
  //   address: "대구광역시 달서구 상인동",
  //   view: 10,
  // },
];

const btList = [
  ["빔프로젝터", "셋톱박스", "카메라", "캠코더", "DSLR"],
  ["스마트 워치", "태블릿", "갤럭시", "아이폰"],
  ["플레이스테이션", "닌텐도", "Wii", "XBOX", "기타"],
  ["노트북", "PC", "마우스", "키보드"],
];

const sectionTitle = [
  {
    title: "영상 / 카메라",
    desc: "여러분의 순간을 놀라운 품질로 기록하고 공유하세요",
  },
  {
    title: "스마트 기기",
    desc: "편리함과 혁신이 만나 일상을 더욱 특별하게 만듭니다",
  },
  {
    title: "게임 기기",
    desc: "현존하는 최고의 게임 기기로 새로운 세계를 탐험하세요",
  },
  {
    title: "PC / 노트북",
    desc: "편리함과 혁신이 만나 일상을 더욱 특별하게 만듭니다",
  },
];

const MainPage = () => {
  const [product, setProduct] = useState(null);


  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await getProduct();
  //       setProduct(res.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchData();
  // }, []);


  return (
    <>
      <Layout>
        <SideBar />
        <MainWrap>
          {btList.map((item, index) => {
            return (
              <ProductSlide
                swiperId={index}
                key={`product${index}`}
                btList={item}
                data={initData}
                title={sectionTitle[index].title}
                desc={sectionTitle[index].desc}
              />
            );
          })}
        </MainWrap>
      </Layout>
    </>
  );
};

export default MainPage;
