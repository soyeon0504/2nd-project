import React, { useEffect, useState } from 'react'
import Layout from "../../layouts/Layout";
import MyCategory from "../../components/my/MyCategory";
import Mytitle from "../../components/my/Mytitle";
import styled from '@emotion/styled';
import CompCashPage from './CompCashPage';
import { useLocation, useNavigate } from 'react-router-dom';
import { SideBar } from '../../components/SideBar';
import CompReviewPage from './CompReviewPage';
import CompAdPage from './CompAdPage';
import CompInfoPage from './CompInfoPage';
import CompWithDrawPage from './CompWithDrawPage';
import CompManagementPage from './CompManageementPage';

const AllWidth = styled.div`
  width: 1260px;
  margin: 0 auto;
`;

const Flex = styled.div`
  display: flex;
  margin-bottom: 9rem;
  > div:nth-of-type(2) {
    width: 1020px;
    margin-left: 105px;
    display: flex;
    flex-direction: column;
    gap: 3.3rem;
  }
`;

const CompanyPage = () => {
  const [activeBtn, setActiveBtn] = useState("등록 상품 관리");
  const [selectedItem, setSelectedItem] = useState("등록 상품 관리");
  const myCate = [
    {
      title: "등록 리스트",
      name: ["compmanagement"],
      list: ["등록 상품 관리"]
    },
    {
      title: "캐시 충전",
      name: ["recharge","usage"],
      list: ["충전 내역","사용 내역"],
    },
    {
      title: "후기 관리",
      name: ["corpreview"],
      list: ["상품 후기"],
    },
    {
      title: "광고 조회",
      name: ["goingad","completead"],
      list: ["진행 광고 조회", "종료 광고 조회"],
    },
    {
        title: "기업 정보",
        name: ["corpinfo","corpwithdraw"],
        list: ["기업정보 수정", "기업탈퇴"],
      },
  ];

  const location = useLocation();
  const navigate = useNavigate();

 useEffect(() => {
    const storedItem = sessionStorage.getItem('selectedItem');
    if (storedItem && storedItem !== selectedItem) {
      setSelectedItem(storedItem);
      setActiveBtn(storedItem);
    } else {
      const params = new URLSearchParams(location.search);
      const item = params.get('item') || selectedItem;
      setSelectedItem(item);
      setActiveBtn(item);
    }
  }, [location.search, selectedItem]);

  const handleSubItemClick = (subItem) => {
    setSelectedItem(subItem);
    setActiveBtn(subItem);
    const selectedCategory = myCate.find(category => category.list.includes(subItem));

    if (selectedCategory) {
      const selectedName = selectedCategory.name.find(name => {
        return (
          (name === 'compmanagement' && subItem === '등록 상품 관리') ||
          (name === 'recharge' && subItem === '충전 내역') ||
          (name === 'usage' && subItem === '사용 내역') ||
          (name === 'corpreview' && subItem === '상품 후기') ||
          (name === 'goingad' && subItem === '진행 광고 조회') ||
          (name === 'completead' && subItem === '완료 광고 조회') ||
          (name === 'corpinfo' && subItem === '기업정보 수정') ||
          (name === 'corpwithdraw' && subItem === '기업탈퇴')
        );
      });
  
      if (selectedName) {
        navigate(`/company?${selectedName}`, { state: { selectedItem: subItem } });
        sessionStorage.setItem('selectedItem', subItem);
      }
    }
  };

  return (
    <Layout>
    <SideBar />
    <AllWidth>
      <div>
        <Mytitle title={"기업 페이지"}/>
      </div>
      <Flex>
        <MyCategory myCate={myCate} selectedItem={selectedItem} onSubItemClick={handleSubItemClick}/>
        <div>
        {activeBtn === "등록 상품 관리" && ( <CompManagementPage /> )}
        {activeBtn === "충전 내역" || activeBtn === "사용 내역" ?  
            ( <CompCashPage activeBtn={activeBtn} setActiveBtn={setActiveBtn} handleSubItemClick={handleSubItemClick} /> ) : null}
        {activeBtn === "상품 후기" && ( <CompReviewPage /> )}
        {activeBtn === "진행 광고 조회" || activeBtn === "완료 광고 조회" ? 
            ( <CompAdPage activeBtn={activeBtn} setActiveBtn={setActiveBtn} handleSubItemClick={handleSubItemClick} /> ) : null}
        {activeBtn === "기업정보 수정" && ( <CompInfoPage /> )}
        {activeBtn === "기업탈퇴" && ( <CompWithDrawPage /> )}
        </div>
      </Flex>
    </AllWidth>
  </Layout>
  )
}

export default CompanyPage