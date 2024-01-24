import styled from "@emotion/styled";
import React from "react";

const MyCateDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.3rem;
  width: 135px;
  height: 482px;
`;

const MyCateUl = styled.ul`
  display: block;
  height: 104px;
  border-radius: 3px;
  p {
    color: #000;
    font-size: 1.8rem;
    line-height: 2.2;
    background-color: #f2f2ff;
    padding-left: 1.8rem;
  }
`;

const MyCateLi = styled.li`
  color: ${props => (props.selected ? "#2C39B5" : "#777")};
  font-weight: ${props => (props.selected ? "500" : "400")};
  font-size: 1.6rem;
  line-height: 1.9;
  padding-left: 1.8rem;
  cursor: pointer;
`;

const MyCategory = ({selectedItem, myCate, onSubItemClick}) => {

  return (
    <MyCateDiv>
      {myCate.map(item => (
        <MyCateUl key={item.title}>
          <p>{item.title}</p>
          {item.list.map(subItem => (
            <MyCateLi
              key={subItem}
              selected={selectedItem === subItem}
              onClick={() => {
                onSubItemClick(subItem);
              }}
            >
              {subItem}
            </MyCateLi>
          ))}
        </MyCateUl>
      ))}
    </MyCateDiv>
  );
};

export default MyCategory;
