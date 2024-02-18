import React, { useState, useEffect, useRef } from "react";
import {
  CategoryTab,
  HeaderLogo,
  HeaderMainMenu,
  HeaderMenu,
  HeaderStyle,
  HeaderTop,
  LoginState,
  MainCate,
  MainCateTitle,
  SearchBt,
  SearchDivisionLine,
  SearchForm,
  SearchWord,
  SubCate,
} from "../../styles/header/HeaderStyle";
import { DivisionLine } from "../../styles/login/LoginPageStyle";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../slices/loginSlice";
import useCustomLogin from "../../hooks/useCustomLogin";
import MenuTab, { mainCate, subCate } from "./MenuTab";
import { searchGet } from "../../api/header/header_api";

const Header = ({ searchName, pageNum }) => {
  // 검색 데이터 연동
  const [search, setSearch] = useState("");
  const searchWordRef = useRef(null);
  const searchBtRef = useRef(null);
  const handleKeyDown = e => {
    // 키 다운 이벤트 처리 함수
    if (e.key === "Enter") {
      e.preventDefault();
      searchBtRef.current.click(); // SearchBt 클릭 이벤트 호출
    }
  };
  const handleChangeSearch = e => {
    setSearch(e.target.value);
  };
  const onClickSearch = e => {
    e.preventDefault();
    console.log("검색실행", search);
    sessionStorage.setItem("searchValue", search);
    const sendData = {
      search: search,
      pageNum: 1,
    };
    searchGet({ sendData, successFn, failFn, errFn });
    // navigate(`/more/${searchName}/${pageNum}`)
  };
  const successFn = result => {
    console.log("검색 성공", result);
    const searchValue = sessionStorage.getItem("searchValue");

    const url = `/search?search=${search}`;
    navigate(url, { state: { result, searchValue } });
    window.location.reload();
  };

  const failFn = result => {
    console.log("검색 오류", result);
  };

  const errFn = result => {
    console.log("검색 서버에러", result);
  };

  // URL에서 검색어 매개변수 추출
  const [searchWord, setSearchWord] = useState("");
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const searchParam = searchParams.get("search");
    setSearchWord(searchParam);
  }, [location]);

  // search에서 카테고리 선택
  const [searchMainCate, setSearchMainCate] = useState(false);
  const toggleMainCate = () => {
    setSearchMainCate(prev => !prev);
  };
  const [searchSubCate, setSearchSubCate] = useState(false);
  const toggleSubCate = () => {
    setSearchSubCate(prev => !prev);
  };

  const [selectedSubCate, setSelectedSubCate] = useState([
    { id: 0, title: "전체" },
  ]);
  const [selectedValue, setSelectedValue] = useState('');
  const handleMainCategoryChange = event => {
    const selectedOption = mainCate.find(item => item.id === parseInt(event.target.value));
    setSelectedValue(selectedOption ? selectedOption.title : '');
    const selectedMainCategoryId = parseInt(event.target.value);
    const selectedMainCategory = mainCate.find(
      item => item.id === selectedMainCategoryId,
    );

    if (selectedMainCategory) {
      const selectedSubCategoryId = selectedMainCategoryId;
      const selectedSubCategory = subCate[selectedSubCategoryId];

      setSelectedSubCate(selectedSubCategory);
    }
  };

  const [selectedSubValue, setSelectedSubValue] = useState('');
  const handleSubCategoryChange = (event) => {
    const selectedOption = selectedSubCate.find((item) => item.title === event.target.value);
    setSelectedSubValue(selectedOption ? selectedOption.title : '');
  };

  // 페이지 이동
  const navigate = useNavigate();
  const handleLogo = () => {
    navigate(`/`);
  };
  const handleLogin = () => {
    navigate(`/login`);
  };
  const handleJoin = () => {
    navigate(`/join/select`);
  };
  const handleMy = subItem => {
    sessionStorage.setItem("selectedItem", subItem);
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
  const inSectionMenu = useRef();
  const toggleMenu = () => {
    setMenuVisible(prev => !prev);
  };

  useEffect(() => {
    const clickMenuOutside = e => {
      if (menuVisible && !inSectionMenu.current.contains(e.target)) {
        setMenuVisible(false);
      }
    };
    document.addEventListener("mousedown", clickMenuOutside);

    return () => {
      document.removeEventListener("mousedown", clickMenuOutside);
    };
  }, [menuVisible]);

  // 카테고리 hover시 메뉴창 나오기
  const [activeCategory, setActiveCategory] = useState(null);
  const handleCategoryHover = category => {
    setActiveCategory(category); // 마우스가 hover되었음을 상태에 저장
  };
  const handleCategoryLeave = () => {
    setActiveCategory(null); // 마우스가 hover되지 않았음을 상태에 저장
  };

  // 서브카테 hover시 색상 변경
  const [activeSubCate, setActiveSubCate] = useState(null);
  const handleSubCateHover = category => {
    setActiveSubCate(category);
  };
  const handleSubCateLeave = () => {
    setActiveSubCate(null);
  };

  // 로그인 & 로그아웃
  const loginState = useSelector(state => state.loginSlice);
  // console.log(loginState);
  const { moveToPath, isLogin, doLogout } = useCustomLogin();

  const dispatch = useDispatch();
  const handleLogout = () => {
    doLogout();
    moveToPath("/");
  };

  return (
    <HeaderStyle
      style={
        scrollPosition < 30
          ? { boxShadow: `none` }
          : { boxShadow: `0px 2px 5px 0px rgba(0, 0, 0, 0.25)` }
      }
    >
      <HeaderTop>
        <HeaderLogo src="/images/logo.svg" onClick={handleLogo} />
        <div className="header-search">
          <SearchForm>
            <SearchWord
              ref={searchWordRef}
              onChange={e => handleChangeSearch(e)}
              onKeyDown={handleKeyDown}
              type="text"
              placeholder={"검색어를 입력해주세요."}
              min={2}
              value={search}
            />
            <SearchDivisionLine></SearchDivisionLine>
            <div>
              <b>메인카테고리</b>
              <br />
              <span onClick={toggleMainCate}>{selectedValue ? selectedValue : '메인카테고리 선택'}</span>
            </div>
            {searchMainCate && (
              <select onChange={handleMainCategoryChange}>
                {mainCate.map(item => {
                  return (
                    <option key={item.id} value={item.id}>
                      {item.title}
                    </option>
                  );
                })}
              </select>
            )}
            <SearchDivisionLine></SearchDivisionLine>
            <div>
              <b>상세카테고리</b>
              <br />
              <span onClick={toggleSubCate}>{selectedSubValue ? selectedSubValue : '상세카테고리 선택'}</span>
            </div>
            {searchSubCate && (
              <select onChange={handleSubCategoryChange}>
                {selectedSubCate.map(listItem => {
                  return <option key={listItem.id}>{listItem.title}</option>;
                })}
              </select>
            )}

            <SearchBt
              ref={searchBtRef}
              onClick={e => onClickSearch(e)}
              type="button"
            />
          </SearchForm>
        </div>
        {isLogin ? (
          <LoginState>
            <button onClick={handleLogout}>로그아웃</button>
            <DivisionLine></DivisionLine>
            <Link
              to="/my"
              onClick={() => {
                handleMy("대여중");
              }}
            >
              <button>마이페이지</button>
            </Link>
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
        <HeaderMainMenu ref={inSectionMenu}>
          {menuVisible === true ? (
            <img src="/images/header/bt_cancel.svg" onClick={toggleMenu} />
          ) : (
            <img src="/images/header/bt_menu.svg" onClick={toggleMenu} />
          )}
          {menuVisible && <MenuTab></MenuTab>}
        </HeaderMainMenu>

        <CategoryTab>
          {mainCate
            .filter(item => item.id !== 0)
            .map(item => (
              <MainCate
                key={item.title}
                onMouseEnter={() => handleCategoryHover(item.title)}
                onMouseLeave={() => handleCategoryLeave(item.title)}
                className={activeCategory === item.title ? "active" : ""}
              >
                <MainCateTitle
                  style={
                    activeCategory === item.title
                      ? {
                          color: "#2C39B5",
                          fontWeight: "500",
                          fontSize: "13px",
                        }
                      : { color: "#777" }
                  }
                >
                  {item.title}
                </MainCateTitle>
                {activeCategory === item.title && (
                  <SubCate>
                    {subCate[item.id]
                      .filter(listItem => listItem.id !== 0)
                      .map(listItem => (
                        <li
                          key={listItem.id}
                          title={listItem.title}
                          onClick={() => {
                            // navigate(`/more/1/${item.id}/${listItem.id}`, {
                            navigate(
                              `/more?mc=${item.id}&sc=${listItem.id}&page=1`,
                              {
                                state: { title: listItem.title },
                              },
                            );
                            window.location.reload(); // 페이지 이동 후 화면 갱신
                          }}
                          onMouseEnter={() =>
                            handleSubCateHover(listItem.title)
                          }
                          onMouseLeave={handleSubCateLeave}
                          style={
                            activeSubCate === listItem.title
                              ? {
                                  color: "#2C39B5",
                                  fontWeight: "500",
                                  background: "#F2F2FF",
                                }
                              : {}
                          }
                        >
                          {listItem.title}
                        </li>
                      ))}
                  </SubCate>
                )}
              </MainCate>
            ))}
          <div></div>
        </CategoryTab>
      </HeaderMenu>
    </HeaderStyle>
  );
};

export default Header;
