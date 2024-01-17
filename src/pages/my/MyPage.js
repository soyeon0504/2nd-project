import React from "react";
import Layout from "../../layouts/Layout";
import MyCategory from "../../components/my/MyCategory";
import Mytitle from "../../components/my/Mytitle";
import styled from "@emotion/styled";
import MyRentalList from "./MyRentalList";

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

const MyPage = () => {
  return (
    <Layout>
      <AllWidth>
        <div>
          <div>형작업</div>
          <Mytitle />
        </div>
        <Flex>
          <MyCategory />
          <MyRentalList />
        </Flex>
      </AllWidth>
    </Layout>
  );
};

export default MyPage;
