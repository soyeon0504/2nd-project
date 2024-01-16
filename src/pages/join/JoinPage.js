import React from "react";
import Layout from "../../layouts/Layout";
import styled from "@emotion/styled";

const JoinPage = () => {
  const JoinPageStyle = styled.div`
    width: 1980px;
  `;
  const JoinHeader = styled.div`
    margin-top: 70px;
    p {
      color: #000;
      font-family: Inter;
      font-size: 23px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;

      margin-bottom: 60px;
    }
    img {
      width: 550px;
      height: 63px;
      margin-bottom: 70px;
    }
  `;
  const JoinBox = styled.div`
    width: 980px;
    height: 700px;
    border-radius: 10px;
    border: 1px solid #2c39b5;
  `;
  return (
    //<Layout>
    <JoinPageStyle>
      <JoinHeader>
        <p>회원가입</p>
        <img src="../images/join_step2.svg" />
      </JoinHeader>
      <JoinBox>
        <input type="" />
      </JoinBox>
    </JoinPageStyle>
    //</Layout>
  );
};

export default JoinPage;
