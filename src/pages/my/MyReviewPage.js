import React, { useEffect, useState } from "react";
import Layout from "../../layouts/Layout";
import MyCategory from "../../components/my/MyCategory";
import Mytitle from "../../components/my/Mytitle";
import styled from "@emotion/styled";
import MyReviewBtn from "../../components/my/review/MyReviewBtn";
import MyReviewList from "../../components/my/review/MyReviewList";



const AllWidth = styled.div`
  width: 1260px;
  margin: 0 auto;
`;

const Flex = styled.div`
  display: flex;
  > div:nth-of-type(2) {
    width: 1020px;
    margin-left: 105px;
    display: flex;
    flex-direction: column;
    gap: 3.3rem;
  }
`;

const MyReviewPage = () => {
  const [activeBtn, setActiveBtn] = useState("내 작성 후기");
  const [selectedItem, setSelectedItem] = useState("내 작성 후기");
  const myCate = [
    {
      title: "대여 리스트",
      name: "rental",
      list: ["대여중", "대여 완료"],
    },
    {
      title: "관심 상품",
      name: "interest",
      list: ["관심 목록"],
    },
    {
      title: "후기 관리",
      name: "review",
      list: ["내 작성 후기", "내 상품 후기"],
    },
    {
      title: "내 정보",
      name: "info",
      list: ["회원정보 수정", "회원탈퇴"],
    },
  ];


  useEffect(() => {
  }, [selectedItem]);

  const handleSubItemClick = (subItem) => {
    setSelectedItem(subItem);
    setActiveBtn(subItem === "내 작성 후기");
  }

  return (
    <Layout>
      <AllWidth>
        <div>
          <Mytitle />
        </div>
        <Flex>
          <MyCategory myCate={myCate} selectedItem={selectedItem} setSelectedItem={setSelectedItem} onSubItemClick={handleSubItemClick}/>
          <div>
            <MyReviewBtn 
            activeBtn={activeBtn} 
            setActiveBtn={setActiveBtn} 
            onButtonClick={handleSubItemClick} />
            <MyReviewList activeBtn={activeBtn} setActiveBtn={setActiveBtn} onButtonClick={handleSubItemClick}/>
          </div>
        </Flex>
      </AllWidth>
    </Layout>
  );
};

export default MyReviewPage;
