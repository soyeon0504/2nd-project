import React from "react";
import Layout from "../../layouts/Layout";
import {
  JoinLastPageStyle,
  LoginBt,
  WelcomeBox,
} from "../../styles/join/JoinLastPageStyle";
import { JoinHeader } from "../../styles/join/JoinFirstPageStyle";

const JoinLastPage = () => {

  return (
    <Layout>
      <JoinLastPageStyle>
        <JoinHeader>
          <p>회원가입</p>
          <img src="/images/join_step3.svg" />
        </JoinHeader>
        <WelcomeBox>
          <h1>000 고객님</h1>
          <img src="/images/welcome.svg" />
          <h2>회원가입을 진심으로 환영합니다!</h2>
        </WelcomeBox>
        <LoginBt>LOGIN</LoginBt>
      </JoinLastPageStyle>
    </Layout>
  );
};

export default JoinLastPage;
