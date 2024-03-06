import React, { useEffect, useState } from 'react'
import Layout from '../../layouts/Layout';
import styled from '@emotion/styled'
import { SideBar } from '../../components/SideBar'
import Mytitle from '../../components/my/Mytitle';
import CustomerCategory from '../../components/customer/CustomCategory';
import { useLocation, useNavigate } from 'react-router';
import { CustomerFAQPage } from './CustomerFAQPage';
import CustomerPrePage from './CustomerPrePage';


const AllWidth = styled.div`
  width: 1260px;
  margin: 0 auto;
`;

const Flex = styled.div`
  display: flex;
  margin-bottom: 9rem;
  > div:nth-of-type(2) {
    width: 1260px;
    margin-left: 105px;
    display: flex;
    flex-direction: column;
    gap: 3.3rem;
  }
`;


const CustomerServicePage = () => {
  const [activeBtn, setActiveBtn] = useState("대여 FAQ");
  const [selectedState, setSelectedState] = useState("대여 FAQ");
  const custCate = [
    {
      title: "대여 안내",
      name: "",
      list: ["대여 FAQ", "공지사항", "1:1 문의하기"],
    },
  ];

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // localStorage에서 selectedState 값을 가져와 초기화
    const storedItem = sessionStorage.getItem('selectedState');
    if (storedItem && storedItem !== selectedState) {
      setSelectedState(storedItem);
      setActiveBtn(storedItem);
    } else {
      // localStorage에 값이 없을 때 초기값 설정
      const params = new URLSearchParams(location.search);
      const item = params.get('item') || selectedState;
      setSelectedState(item);
      setActiveBtn(item);
    }
  }, [location.search, selectedState]);

  const handleSubItemClick = (subItem) => {
    setSelectedState(subItem);
    setActiveBtn(subItem);
    navigate(`.`, { state: { selectedState: subItem } });
    // localStorage에 selectedState 값을 저장
    sessionStorage.setItem('selectedState', subItem);
  };

  return (
    <Layout>
      <SideBar />
        <AllWidth>
            <div>
                <Mytitle title={"자주 묻는 질문 FAQ"} />
            </div>
            <Flex>
              <div>
              {activeBtn === "대여 FAQ" && <CustomerFAQPage activeBtn={activeBtn} setActiveBtn={setActiveBtn} handleSubItemClick={handleSubItemClick} />}
              {activeBtn === "공지사항" || activeBtn === "1:1 문의하기" ? 
              ( <CustomerPrePage activeBtn={activeBtn} setActiveBtn={setActiveBtn} handleSubItemClick={handleSubItemClick} /> ) : null}
              </div>
            </Flex>
        </AllWidth>
  </Layout>
  )
}

export default CustomerServicePage