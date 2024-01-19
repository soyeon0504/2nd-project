import React from "react";
import Layout from "../../layouts/Layout";
import { DivisionLine, IdBox, LoginBt, LoginPageStyle, Logo, LogoBox, PwBox } from "../../styles/login/LoginPageStyle";
const LoginPage = () => {

  return (
    <Layout>
      <LoginPageStyle>
        <Logo>로고</Logo>
        <LogoBox>
          <p>
            000 에 오신 것을 환영합니다!
            <br />
            로그인 하시면 더욱 다양한 상품들을 대여할 수 있습니다.
          </p>
          <IdBox type="text" maxLength={15} placeholder="아이디 또는 이메일" />
          <PwBox type="text" maxLength={20} placeholder="비밀번호" />
          <LoginBt>LOGIN</LoginBt>
          <ul>
            <li>아이디 찾기</li>
            <DivisionLine></DivisionLine>
            <li>회원가입</li>
          </ul>
        </LogoBox>
      </LoginPageStyle>
    </Layout>
  );
};

export default LoginPage;
