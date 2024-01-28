import React, { useState, useEffect } from "react";
import {
  CategoryTab,
  CategoryTabSub,
  HeaderLogo,
  HeaderMenu,
  HeaderStyle,
  HeaderTop,
  LoginState,
  MainMenu,
  MainMenuLi,
  MenuTab,
  SearchBt,
  SearchForm,
  SearchWord,
  SubMenu,
} from "../../styles/header/HeaderStyle";
import { DivisionLine } from "../../styles/login/LoginPageStyle";
import { useNavigate } from "react-router-dom";

const Header = () => {
  // 페이지 이동
  const navigate = useNavigate();
  const handleLogo = () => {
    navigate(`/`);
  };
  const handleLogin = () => {
    navigate(`/login`);
  };
  const handleJoin = () => {
    navigate(`/join/1`);
  };

  // 메뉴 click시 메뉴창 나오기
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  // 카테고리 hover시 메뉴창 나오기
  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryHover = category => {
    setActiveCategory(category);
  };

  const handleCategoryLeave = () => {
    setActiveCategory(null);
  };

  return (
    <div style={{ width: "1300px", margin: `0 auto` }}>
      <HeaderStyle>
        <HeaderTop>
          <HeaderLogo onClick={handleLogo}>로고</HeaderLogo>
          <div className="header-search">
            <SearchForm>
              <SearchWord type="text" />
              <SearchBt type="button" />
            </SearchForm>
          </div>
          <LoginState>
            <button onClick={handleLogin}>로그인</button>
            <DivisionLine></DivisionLine>
            <button onClick={handleJoin}>회원가입</button>
          </LoginState>
        </HeaderTop>
        <HeaderMenu>
          {menuVisible === true ? (
            <img src="/images/header/bt_cancel.svg" onClick={toggleMenu} />
          ) : (
            <img src="/images/header/bt_menu.svg" onClick={toggleMenu} />
          )}
          {/* <img src="/images/header/bt_menu.svg" onClick={toggleMenu} /> */}
          <ul>
            <li
              onMouseEnter={() => handleCategoryHover("스마트 기기")}
              onMouseLeave={handleCategoryLeave}
              style={{
                background:
                  activeCategory === "스마트 기기" ? "#ddd" : "transparent",
              }}
            >
              스마트 기기
            </li>
            <li>PC / 노트북</li>
            <li>영상 / 카메라</li>
            <li>음향</li>
            <li>게임 기기</li>
          </ul>
        </HeaderMenu>
      </HeaderStyle>

      {menuVisible && (
        <MenuTab>
          <MainMenu>
            <li>
              <MainMenuLi>스마트 기기</MainMenuLi>
              <SubMenu>
                <li>스마트 워치</li>
                <li>태블릿</li>
                <li>갤럭시</li>
                <li>아이폰</li>
              </SubMenu>
            </li>
            <li>
              <MainMenuLi>PC / 노트북</MainMenuLi>
              <SubMenu>
                <li>노트북</li>
                <li>PC</li>
                <li>마우스</li>
                <li>키보드</li>
              </SubMenu>
            </li>
            <li>
              <MainMenuLi>영상 / 카메라</MainMenuLi>
              <SubMenu>
                <li>빔프로젝터</li>
                <li>셋톱박스</li>
                <li>카메라</li>
                <li>캠코더</li>
                <li>DSLR</li>
              </SubMenu>
            </li>
            <li>
              <MainMenuLi>음향</MainMenuLi>
              <SubMenu>
                <li>스피커</li>
                <li>이어폰</li>
                <li>헤드폰</li>
                <li>마이크</li>
              </SubMenu>
            </li>
            <li>
              <MainMenuLi>게임 기기</MainMenuLi>
              <SubMenu>
                <li>플레이스테이션</li>
                <li>닌텐도</li>
                <li>Wii</li>
                <li>XBOX</li>
                <li>기타</li>
              </SubMenu>
            </li>
          </MainMenu>
        </MenuTab>
      )}

      {activeCategory && (
        <CategoryTab onMouseLeave={handleCategoryLeave}>
          <CategoryTabSub>플레이스테이션</CategoryTabSub>
          <CategoryTabSub>닌텐도</CategoryTabSub>
          <CategoryTabSub>Wii</CategoryTabSub>
          <CategoryTabSub>XBOX</CategoryTabSub>
          <CategoryTabSub>기타</CategoryTabSub>
        </CategoryTab>
      )}
    </div>
  );
};

export default Header;
