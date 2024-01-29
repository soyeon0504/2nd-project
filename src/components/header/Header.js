import React, { useState, useEffect, useRef } from "react";
import {
  // CategoryTab,
  // CategoryTabSub,
  HeaderLogo,
  HeaderMainMenu,
  HeaderMenu,
  HeaderStyle,
  HeaderTop,
  LoginState,
  SearchBt,
  SearchForm,
  SearchWord,
} from "../../styles/header/HeaderStyle";
import { DivisionLine } from "../../styles/login/LoginPageStyle";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../slices/loginSlice";
import useCustomLogin from "../../hooks/useCustomLogin";
import MenuTab, { menuCate } from "./MenuTab";

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
  const handleMy = () => {
    navigate(`/my`);
  };

  // 스크롤 시 그림자 생성
  const [scrollPosition, setScrollPosition] = useState(0);

  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
    return () => {
      window.removeEventListener("scroll", updateScroll);
    };
  }, []);

  // 메뉴 click시 메뉴창 나오기
  const [menuVisible, setMenuVisible] = useState(false);
  const inSection = useRef();
  const toggleMenu = () => {
    setMenuVisible(prev => !prev);
  };

  useEffect(() => {
    const clickOutside = e => {
      if (menuVisible && !inSection.current.contains(e.target)) {
        setMenuVisible(false);
      }
    };
    document.addEventListener("mousedown", clickOutside);

    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  }, [menuVisible]);

  // 카테고리 hover시 메뉴창 나오기
  const [activeTitle, setActiveTitle] = useState("");
  const handleTitleClick = title => {
    setActiveTitle(title); // 선택된 title을 상태에 저장
  };

  const [activeCategory, setActiveCategory] = useState(null);
  const handleCategoryHover = category => {
    setActiveCategory(category); // 마우스가 hover되었음을 상태에 저장
  };
  const handleCategoryLeave = () => {
    setActiveCategory(null); // 마우스가 hover되지 않았음을 상태에 저장
  };

  // 로그인 & 로그아웃
  const loginState = useSelector(state => state.loginSlice);
  console.log(loginState);
  const { moveToPath, isLogin, doLogout } = useCustomLogin();

  const dispatch = useDispatch();
  const handleLogout = () => {
    doLogout();
    moveToPath("/");
  };

  return (
    <div style={{ width: "1300px", margin: `0 auto` }}>
      <HeaderStyle
        style={
          { height: "150px", boxShadow : scrollPosition < 100 ? `none`:`0 2px 4px #777777`}
        }
      >
        <HeaderTop>
          <HeaderLogo onClick={handleLogo}>로고</HeaderLogo>
          <div className="header-search">
            <SearchForm>
              <SearchWord type="text" />
              <SearchBt type="button" />
            </SearchForm>
          </div>
          {isLogin ? (
            <LoginState>
              <button onClick={handleLogout}>로그아웃</button>
              <DivisionLine></DivisionLine>
              <button onClick={handleMy}>마이페이지</button>
            </LoginState>
          ) : (
            <LoginState>
              <button onClick={handleLogin}>로그인</button>
              <DivisionLine></DivisionLine>
              <button onClick={handleJoin}>회원가입</button>
            </LoginState>
          )}
        </HeaderTop>
        <HeaderMenu>
          <HeaderMainMenu ref={inSection}>
            {menuVisible === true ? (
              <img src="/images/header/bt_cancel.svg" onClick={toggleMenu} />
            ) : (
              <img src="/images/header/bt_menu.svg" onClick={toggleMenu} />
            )}
            {menuVisible && <MenuTab></MenuTab>}
          </HeaderMainMenu>

          <div style={{ display: "flex", gap: "5px" }}>
            {menuCate.map(item => (
              <li
                key={item.title}
                onClick={() => handleTitleClick(item.title)}
                onMouseEnter={() => handleCategoryHover(item.title)}
                onMouseLeave={() => handleCategoryLeave(item.title)}
                className={
                  activeTitle === item.title || activeCategory === item.title
                    ? "active"
                    : ""
                }
                style={{ width: "120px" }}
              >
                <div
                  style={{
                    height: "30px",
                    width: "85px",
                    margin: "0 auto 5px",
                    background:
                      activeTitle === item.title ||
                      activeCategory === item.title
                        ? "#ddd"
                        : "transparent",
                  }}
                >
                  {item.title}
                </div>
                {(activeTitle === item.title ||
                  activeCategory === item.title) && (
                  <ul
                    style={{
                      display: "block",
                      border: "1px solid #2c39b5",
                      width: "120px",
                      paddingTop: "20px",
                      background: "#fff"
                    }}
                  >
                    {item.list.map(listItem => (
                      <li key={listItem} style={{marginBottom:"20px", color: "#777"}}>{listItem}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <div></div>
          </div>

          {/* <ul>
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
          </ul> */}
        </HeaderMenu>
      </HeaderStyle>

      {/* {menuVisible && <MenuTab></MenuTab>} */}

      {/* {activeCategory && (
        <CategoryTab onMouseLeave={handleCategoryLeave}>
          <CategoryTabSub>플레이스테이션</CategoryTabSub>
          <CategoryTabSub>닌텐도</CategoryTabSub>
          <CategoryTabSub>Wii</CategoryTabSub>
          <CategoryTabSub>XBOX</CategoryTabSub>
          <CategoryTabSub>기타</CategoryTabSub>
        </CategoryTab>
      )} */}
    </div>
  );
};

export default Header;
