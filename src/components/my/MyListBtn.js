import styled from "@emotion/styled";
import React, { useState } from "react";

const MyListBtnDiv = styled.div`
  height: 42px;
  border-top: 1px solid #f2f2ff;
  border-bottom: 1px solid #f2f2ff;
  padding: 4px 10px 4px 0;
  display: flex;
  justify-content: flex-end;
  gap: 1.2rem;
`;

const MyListButton = styled.button`
  border-radius: 5px;
  background: ${props => (props.active ? "#2C39B5" : "#fff")};
  color: ${props => (props.active ? "#fff" : "#777")};
  width: ${props => (props.width ? props.width : "65px")};
  height: 32px;
  text-align: center;
  border: 0;
  cursor: pointer;
`;

const MyListBtn = ({ activeBtn, setActiveBtn }) => {
  const handleButtonClick = buttonType => {
    setActiveBtn(buttonType);
  };

  return (
    <MyListBtnDiv>
      <MyListButton active={activeBtn} onClick={() => handleButtonClick(true)}>
        대여중
      </MyListButton>
      <MyListButton
        active={!activeBtn}
        onClick={() => handleButtonClick(false)}
        width={"80px"}
      >
        대여완료
      </MyListButton>
    </MyListBtnDiv>
  );
};

export default MyListBtn;
