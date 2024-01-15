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
  color: #777;
  font-size: 1.6rem;
  line-height: 1.9;
  padding-left: 1.8rem;
`;

const MyCategory = () => {
  const myCate = [
    {
      title: "대여 리스트",
      list: ["대여중", "대여 완료"],
    },
    {
      title: "관심 상품",
      list: ["관심 목록"],
    },
    {
      title: "후기 관리",
      list: ["내 작성 후기", "내 상품 후기"],
    },
    {
      title: "내 정보",
      list: ["회원정보 수정", "회원탈퇴"],
    },
  ];

  const handleClickHover = () => {};

  return (
    <MyCateDiv>
      {myCate.map(item => (
        <MyCateUl key={item.title}>
          <p>{item.title}</p>
          {item.list.map(subItem => (
            <MyCateLi
              key={subItem}
              onClick={() => {
                handleClickHover();
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
