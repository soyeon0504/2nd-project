import styled from '@emotion/styled';
import React from 'react';
import { SideBar } from '../../components/SideBar';
import Mytitle from '../../components/my/Mytitle';
import Layout from '../../layouts/Layout';
import { CustomerFAQPage } from './CustomerFAQPage';


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

  return (
    <Layout>
      <SideBar />
        <AllWidth>
            <div>
                <Mytitle title={"자주 묻는 질문 FAQ"} />
            </div>
            <Flex>
              <div>
                <CustomerFAQPage />
              </div>
            </Flex>
        </AllWidth>
  </Layout>
  )
}

export default CustomerServicePage