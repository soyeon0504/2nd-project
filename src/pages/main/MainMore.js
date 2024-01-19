import { Layout } from "antd";
import React from "react";
import { SideBar } from "../../components/SideBar";

const MainMore = () => {
  return (
    <Layout>
      <SideBar />
      <div className="wrap">
        <div className="header-wrap">
          <div>스마트 워치</div>
          <div>몇개</div>
          <div>
            <button>최신순</button>
            <hr></hr>
            <button>조회순</button>
            <div>
              <label></label>
            </div>
          </div>
          <div className="main-wrap">
            <img src="../images/camera.jpeg" alt="" />
              <div className="desc-wrap">
                <span className="desc-title">인스탁스 미니12 폴라로이드 즉석 카메라</span>
                <hr></hr>
                <div className="desc-price">150,000 원</div>
                <div className="desc-ad">대구광역시 달서구 상인동</div>
                <div className="view">조회수 10</div>
              </div>
          </div>
        </div>
        <></>
      </div>
    </Layout>
  );
};

export default MainMore;
