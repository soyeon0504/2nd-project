import React, { useState } from "react";
import Layout from "../../layouts/Layout";
import MyCategory from "../../components/my/MyCategory";
import Mytitle from "../../components/my/Mytitle";
import styled from "@emotion/styled";
const AllWidth = styled.div`
  width: 1300px;
  margin: 0 auto;
`;

const MyPage = () => {
  return (
    <Layout>
      <AllWidth>
        <div>
          <div>형작업</div>
          <Mytitle />
        </div>
        <div>
          <div>
            <MyCategory />
          </div>
          <div>내용</div>
        </div>
      </AllWidth>
    </Layout>
  );
};

export default MyPage;
