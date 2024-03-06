import React from "react";
import {
  ButtonWrap,
  Call,
  Chat,
  FreeBoard,
  Like,
  Profile,
  SideBarWrap,
  Wrap,
  Write,
} from "./sideBarStyle";
import { Link } from "react-router-dom";

export const SideBar = ({ setSelectedItem, setActiveBtn }) => {
  const handleLinkClick = subItem => {
    if (setSelectedItem && setActiveBtn) {
      setSelectedItem(subItem);
      setActiveBtn(subItem);
    }
    sessionStorage.setItem("selectedItem", subItem);
  };

  return (
    <Wrap>
      <SideBarWrap>
        <ButtonWrap>
          <Link to="/write">
            <div>
              <Write></Write>
              <p>등록</p>
            </div>
          </Link>
          <Link to="/">
            <div>
              <Chat></Chat>
              <p>채팅</p>
            </div>
          </Link>
          <Link to="/free">
            <div>
              <FreeBoard></FreeBoard>
              <p>게시판</p>
            </div>
          </Link>
          <Link
            to="/my"
            onClick={() => {
              handleLinkClick("대여중");
            }}
          >
            <div>
              <Profile></Profile>
              <p>MY</p>
            </div>
          </Link>
          <Link to="/customer">
            <div>
              <Call></Call>
              <p>고객센터</p>
            </div>
          </Link>
        </ButtonWrap>
      </SideBarWrap>
    </Wrap>
  );
};
