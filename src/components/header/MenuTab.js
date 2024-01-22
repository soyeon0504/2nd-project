import styled from '@emotion/styled';
import React from 'react'

const MenuTab = () => {
    const MenuTab = styled.div`
    width: 540px;
    height: 310px;
    border: 1px solid #2c39b5;
    display: none;
    .main-menu {
      list-style: none;
    }
    .main-menu li {
      display: flex;
      margin-bottom: 20px;
    }
    .main-menu-li {
      width: 130px;
      height: 34px;
      background: #f2f2ff;

      color: #4b4b4b;
      font-family: Inter;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 16px;
      text-align: center;
    }
    .sub-menu {
      display: flex;
      list-style: none;
      gap: 20px;
    }
    .sub-menu li {
      color: #777;
      font-family: Inter;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 16px;
    }
  `;
  return (
    <MenuTab>
        <ul className="main-menu">
          <li>
            <div className="main-menu-li">스마트 기기</div>
            <ul className="sub-menu">
              <li>스마트 워치</li>
              <li>태블릿</li>
              <li>갤럭시</li>
              <li>아이폰</li>
            </ul>
          </li>
          <li>
            <div className="main-menu-li">PC / 노트북</div>
            <ul className="sub-menu">
              <li>노트북</li>
              <li>PC</li>
              <li>마우스</li>
              <li>키보드</li>
            </ul>
          </li>
          <li>
            <div className="main-menu-li">영상 / 카메라</div>
            <ul className="sub-menu">
              <li>빔프로젝터</li>
              <li>셋톱박스</li>
              <li>카메라</li>
              <li>캠코더</li>
              <li>DSLR</li>
            </ul>
          </li>
          <li>
            <div className="main-menu-li">음향</div>
            <ul className="sub-menu">
              <li>스피커</li>
              <li>이어폰</li>
              <li>헤드폰</li>
              <li>마이크</li>
            </ul>
          </li>
          <li>
            <div className="main-menu-li">게임 기기</div>
            <ul className="sub-menu">
              <li>플레이스테이션</li>
              <li>닌텐도</li>
              <li>Wii</li>
              <li>XBOX</li>
              <li>기타</li>
            </ul>
          </li>
        </ul>
      </MenuTab>
  )
}

export default MenuTab