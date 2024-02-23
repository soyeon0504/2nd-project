import styled from "@emotion/styled";
import React from "react";
import { Common } from "../../styles/CommonStyles";

const MyListBtnDiv = styled.div`
  height: 42px;
  border-top: 1px solid ${Common.color.p500};
  border-bottom: 1px solid ${Common.color.p500};
  padding: 4px 10px 4px 0;
  display: flex;
  justify-content: flex-end;
  gap: 1.2rem;
`;

const MyListButton = styled.button`
  border-radius: 5px;
  background: ${props => (props.active ? Common.color.primary : Common.color.p600)};
  color: ${props => (props.active ? Common.color.p600 : Common.color.p300)};
  width: ${props => (props.width ? props.width : "65px")};
  height: 32px;
  text-align: center;
  border: 0;
  cursor: pointer;
`;

const CompListBtn = ({ activeBtn, setActiveBtn, onButtonClick}) => {
  const handleButtonClick = subItem => {
    setActiveBtn(subItem);
    onButtonClick(subItem); 
  };

  return (
    <MyListBtnDiv>
      <MyListButton active={activeBtn === "진행 광고 조회"} 
      onClick={() => handleButtonClick("진행 광고 조회")}
      width={"80px"}>
        진행 광고
      </MyListButton>
      <MyListButton
        active={activeBtn === "종료 광고 조회"}
        onClick={() => handleButtonClick("종료 광고 조회")}
        width={"80px"}
      >
        종료 광고
      </MyListButton>
    </MyListBtnDiv>
  );
};

export default CompListBtn;
