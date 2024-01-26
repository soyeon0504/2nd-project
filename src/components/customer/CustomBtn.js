import styled from "@emotion/styled";
import React from "react";

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

const CustomBtn = ({ activeBtn, setActiveBtn, onButtonClick}) => {
  const handleButtonClick = subItem => {
    setActiveBtn(subItem);
    onButtonClick(subItem); 
  };

  return (
    <MyListBtnDiv>
      <MyListButton active={activeBtn === "대여 FAQ"} 
      width={"80px"}
      onClick={() => handleButtonClick("대여 FAQ")}>
        대여 FAQ
      </MyListButton>
      <MyListButton
        active={activeBtn === "공지사항"}
        width={"70px"}
        onClick={() => handleButtonClick("공지사항")}
      >
        공지사항
      </MyListButton>
      <MyListButton
      active={activeBtn === "1:1 문의하기"}
      width={"100px"}
      onClick={() => handleButtonClick("1:1 문의하기")}>
        1:1 문의하기
      </MyListButton>
    </MyListBtnDiv>
  );
};

export default CustomBtn;
