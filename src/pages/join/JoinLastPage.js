import React from "react";
import Layout from "../../layouts/Layout";
import {
  JoinLastPageStyle,
  LoginBt,
  WelcomeBox,
} from "../../styles/join/JoinLastPageStyle";
import { JoinHeader } from "../../styles/join/JoinFirstPageStyle";
import { useNavigate } from "react-router-dom";

const JoinLastPage = () => {
  const navigate = useNavigate();
  const handleLogin = e => {
    navigate(`/login`);
  };

  return (
    <Layout>
      <JoinLastPageStyle>
        <JoinHeader>
          <p>회원가입</p>
          <img src="/images/join/join_step3.svg" />
        </JoinHeader>
        <WelcomeBox>
          <h1>000 고객님</h1>
          <img src="/images/join/welcome.svg" />
          <h2>회원가입을 진심으로 환영합니다!</h2>
        </WelcomeBox>
        <LoginBt onClick={handleLogin}>LOGIN</LoginBt>
      </JoinLastPageStyle>
    </Layout>
  );
};

export default JoinLastPage;
