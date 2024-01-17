import React from "react";
import Layout from "../../layouts/Layout";
import styled from "@emotion/styled";

const JoinLastPage = () => {
  const JoinLastPageStyle = styled.div`
    width: 1300px;
    text-align: center;
    margin: 0 auto;
    /* background: skyblue; */
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
  const WelcomeBox = styled.div`
    width: 980px;
    height: 380px;
    border-radius: 10px;
    border: 1px solid #2c39b5;
    margin: 0 auto;
    h1 {
      color: #000;
      font-family: Inter;
      font-size: 23px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    img {
      display: block;
      margin: 20px auto;
    }
    h2 {
      color: #000;
      text-align: center;
      font-family: Inter;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  `;
  const LoginBt = styled.button`
    width: 240px;
    height: 50px;
    border-radius: 10px;
    background: #2c39b5;
    border: none;

    color: #fff;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 40px;
    margin-bottom: 160px;
  `;
  return (
    <Layout>
    <JoinLastPageStyle>
      <JoinHeader>
        <p>회원가입</p>
        <img src="../images/join_step3.svg" />
      </JoinHeader>
      <WelcomeBox>
        <h1>000 고객님</h1>
        <img src="../images/welcome.svg" />
        <h2>회원가입을 진심으로 환영합니다!</h2>
      </WelcomeBox>
      <LoginBt>LOGIN</LoginBt>
    </JoinLastPageStyle>
    </Layout>
  );
};

export default JoinLastPage;
