import React, { useEffect, useState } from "react";
import { SideBar } from "../../components/SideBar";
import { MoreWrap } from "./mainMoreStyle";
import { Pagination } from "antd";
import Layout from "../../layouts/Layout";

const initData = [
  {
    image: "../images/main/camera.jpeg",
    title: "인스탁스 미니12 폴라로이드 즉석 카메라",
    price: "150,000 원",
    address: "대구광역시 달서구 상인동",
    view: 10,
  },
  {
    image: "../images/main/camera.jpeg",
    title: "인스탁스 미니12 폴라로이드 즉석 카메라",
    price: "150,000 원",
    address: "대구광역시 달서구 상인동",
    view: 10,
  },
  {
    image: "../images/main/camera.jpeg",
    title: "인스탁스 미니12 폴라로이드 즉석 카메라",
    price: "150,000 원",
    address: "대구광역시 달서구 상인동",
    view: 10,
  },
  {
    image: "../images/main/camera.jpeg",
    title: "인스탁스 미니12 폴라로이드 즉석 카메라",
    price: "150,000 원",
    address: "대구광역시 달서구 상인동",
    view: 10,
  },
  {
    image: "../images/main/camera.jpeg",
    title: "인스탁스 미니12 폴라로이드 즉석 카메라",
    price: "150,000 원",
    address: "대구광역시 달서구 상인동",
    view: 10,
  },
  {
    image: "../images/main/camera.jpeg",
    title: "인스탁스 미니12 폴라로이드 즉석 카메라",
    price: "150,000 원",
    address: "대구광역시 달서구 상인동",
    view: 10,
  },
  {
    image: "../images/main/camera.jpeg",
    title: "인스탁스 미니12 폴라로이드 즉석 카메라",
    price: "150,000 원",
    address: "대구광역시 달서구 상인동",
    view: 10,
  },
  {
    image: "../images/main/camera.jpeg",
    title: "인스탁스 미니12 폴라로이드 즉석 카메라",
    price: "150,000 원",
    address: "대구광역시 달서구 상인동",
    view: 10,
  },
  {
    image: "../images/main/camera.jpeg",
    title: "인스탁스 미니12 폴라로이드 즉석 카메라",
    price: "150,000 원",
    address: "대구광역시 달서구 상인동",
    view: 10,
  },
  {
    image: "../images/main/camera.jpeg",
    title: "인스탁스 미니12 폴라로이드 즉석 카메라",
    price: "150,000 원",
    address: "대구광역시 달서구 상인동",
    view: 10,
  },
  {
    image: "../images/main/camera.jpeg",
    title: "인스탁스 미니12 폴라로이드 즉석 카메라",
    price: "150,000 원",
    address: "대구광역시 달서구 상인동",
    view: 10,
  },
  {
    image: "../images/main/camera.jpeg",
    title: "인스탁스 미니12 폴라로이드 즉석 카메라",
    price: "150,000 원",
    address: "대구광역시 달서구 상인동",
    view: 10,
  },
  {
    image: "../images/main/camera.jpeg",
    title: "인스탁스 미니12 폴라로이드 즉석 카메라",
    price: "150,000 원",
    address: "대구광역시 달서구 상인동",
    view: 10,
  },
  {
    image: "../images/main/camera.jpeg",
    title: "인스탁스 미니12 폴라로이드 즉석 카메라",
    price: "150,000 원",
    address: "대구광역시 달서구 상인동",
    view: 10,
  },
  {
    image: "../images/main/camera.jpeg",
    title: "인스탁스 미니12 폴라로이드 즉석 카메라",
    price: "150,000 원",
    address: "대구광역시 달서구 상인동",
    view: 10,
  },
  {
    image: "../images/main/camera.jpeg",
    title: "인스탁스 미니12 폴라로이드 즉석 카메라",
    price: "150,000 원",
    address: "대구광역시 달서구 상인동",
    view: 10,
  },
];

const MainMorePage = () => {
  // 페이지넘버(페이지네이션)
  const [current, setCurrent] = useState(3);

  const [data, setData] = useState([])

  const onChange = page => {
    setCurrent(page);
    // page 값에 따라 데이터 요청 
    // const res = await ...
    // 응답값 data 에 세팅해주기
    // setData(res)
  };


  

  //추후 초기 값 세팅 필요
  useEffect(()=> {

  },[])

  return (
    <Layout>
      <SideBar />
      <MoreWrap>
        <div className="header-wrap">
          <div className="header-cate-wrap">
            <div>스마트 워치</div>
            <div>몇개</div>
          </div>
          <div>
            <div className="bt-wrap">
              <div>
                <button>최신순</button>
                <img src="../images/main/line.svg" />
                <button>조회순</button>
              </div>
            </div>
            <div className="area-wrap">
                <select>
                  <option>서울특별시</option>
                  <option>부산광역시</option>
                  <option>대구광역시</option>
                  <option>인천광역시</option>
                  <option>광주광역시</option>
                  <option>대전광역시</option>
                  <option>울산광역시</option>
                </select>
                <select>
                  <option>수성구</option>
                  <option>중구</option>
                  <option>북구</option>
                  <option>서구</option>
                  <option>달서구</option>
                </select>
              </div>
          </div>
        </div>
        <div className="main-wrap">
          {initData.map((item, index) => {
            return (
              <div className="item-wrap" key={`MainMore-item-${index}`}>
                <img src={item.image} alt="" />
                <div className="like">
                  <button>
                    <img src="../images/main/like.svg" />
                  </button>
                </div>
                <div className="desc-wrap">
                  <span className="desc-title">{item.title}</span>
                  <hr></hr>
                  <div className="desc-price">{item.price}</div>
                  <div className="desc-ad">{item.address}</div>
                  <div className="view">조회수{item.view}</div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="pagination">
          <Pagination current={current} onChange={onChange} total={100} />
        </div>
      </MoreWrap>
    </Layout>
  );
};

export default MainMorePage;