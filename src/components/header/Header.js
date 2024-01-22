import styled from "@emotion/styled";
import React from "react";
// const Wrap = styled.div`
//   width: 1980px;
//   text-align: center;
//   margin: 0 auto;
// `;
const Header = () => {
  const HeaderStyle = styled.div`
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    width: 1300px;
    text-align: center;
    .header-top {
      margin: 30px auto;
      display: flex;
      gap: 130px;
    }
    .header-logo {
      width: 200px;
      height: 40px;
      background-color: #d9d9d9;
    }
    .search-form {
      display: flex;
      width: 640px;
      height: 60px;
      flex-shrink: 0;
      padding-left: 30px;
      padding-right: 10px;
      justify-content: space-between;
      align-items: center;
      border-radius: 80px;
      border: 1px solid #2c39b5;
    }
    .search-word {
      display: flex;
      width: 500px;
      height: 50px;
      flex-direction: column;
      justify-content: center;
      flex-shrink: 0;
      border: none;

      color: rgb(0, 0, 0);
      font-family: Roboto;
      font-size: 30px;
      font-style: normal;
      line-height: 24px; /* 80% */
      letter-spacing: 0.5px;
    }
    .search-bt {
      width: 40px;
      height: 40px;
      border-radius: 100%;
      flex-shrink: 0;
      border: none;
      background-image: url("../images/bt_search.svg");
    }
    .login-state {
      display: flex;
      width: 200px;
      height: 20px;
    }
    .login-state ul {
      width: 100%;
      display: flex;
      justify-content: space-between;
      list-style: none;
    }
    .login-state li a {
      position: relative;
      display: flex;
      align-items: center;
      /* cursor: pointer; */
      text-decoration: none;

      color: #777;
      font-family: Inter;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 16px;
    }
    .header-menu {
      /* margin: 0 auto; */
      /* width: 1300px; */
      display: flex;
      gap: 40px;
    }
    .header-menu ul {
      gap: 40px;
      display: flex;
      list-style: none;
    }
    .header-menu li {
      color: #4b4b4b;
      font-family: Inter;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 16px;
    }
  `;

  const CategoryTab = styled.div`
    width: 150px;
    padding: 20px;
    border: 1px solid #2c39b5;
    display: none;
    .CategoryTabSub {
      margin-bottom: 20px;
      color: #777;
      font-family: Inter;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 16px;
    }
  `;
  return (
    <>
      <HeaderStyle>
        <div className="header-top">
          <div className="header-logo">로고</div>
          <div className="header-search">
            <form className="search-form">
              <input type="text" className="search-word" />
              <input type="button" className="search-bt" />
            </form>
          </div>
          <div className="login-state">
            <ul>
              <li>
                <a href="#">로그인</a>
              </li>
              <li>
                <a href="#">회원가입</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="header-menu">
          <img src="../images/bt_menu.svg" />
          <ul>
            <li>스마트 기기</li>
            <li>PC / 노트북</li>
            <li>영상 / 카메라</li>
            <li>음향</li>
            <li>게임 기기</li>
          </ul>
        </div>
      </HeaderStyle>

      <CategoryTab>
        <div className="CategoryTabSub">플레이스테이션</div>
        <div className="CategoryTabSub">닌텐도</div>
        <div className="CategoryTabSub">Wii</div>
        <div className="CategoryTabSub">XBOX</div>
        <div className="CategoryTabSub">기타</div>
      </CategoryTab>
    </>
  );
};

export default Header;
