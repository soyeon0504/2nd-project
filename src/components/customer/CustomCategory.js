import styled from "@emotion/styled";
import React from "react";
import { Common } from "../../styles/CommonStyles";

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
    background-color: ${Common.color.p500};
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

const CustomCall = styled.div`
  margin-top: 3rem;
  border-top: 1px solid ${Common.color.primary};
  padding: 1rem;
  p {
    font-size: 1.4rem;
    margin-bottom: 0.4rem;
  }
  h1 {
    font-size: 2rem;
    font-weight: 700;
  }
  span {
    display: block;
    margin-top: 2rem;
    font-size: 1.4rem;
    line-height: 1.4;
  }
`

const CustomerCategory = ({selectedState, custCate, onSubItemClick}) => {

  return (
    <MyCateDiv>
      {custCate.map(item => (
        <MyCateUl key={item.title}>
          <p>{item.title}</p>
          {item.list.map(subItem => (
            <MyCateLi
              key={subItem}
              selected={selectedState === subItem}
              onClick={() => {
                onSubItemClick(subItem);
              }}
            >
              {subItem}
            </MyCateLi>
          ))}
        </MyCateUl>
      ))}
      <CustomCall>
        <p>000 고객센터</p>
        <h1>1803 - 3124</h1>
        <span>
          월 ~ 금요일 <br />
          09:00 ~ 18:00 <br />
          주말, 공휴일 휴무
        </span>
      </CustomCall>
    </MyCateDiv>
  );
};

export default CustomerCategory;
