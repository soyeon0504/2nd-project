import React from "react";
import Layout from "../../layouts/Layout";
import styled from "@emotion/styled";
const LoginPage = () => {
  const LoginPageStyle = styled.div`
    width: 1980px;
  `;
  const Logo = styled.div`
    width: 200px;
    height: 40px;
    background-color: #d9d9d9;
    margin-bottom: 40px;
  `;
  const LogoBox = styled.div`
    box-sizing: border-box;
    width: 450px;
    height: 540px;
    border-radius: 10px;
    border: 1px solid #2c39b5;
    padding-left: 30px;
    p {
      margin-top: 50px;
      margin-bottom: 160px;
      color: #000;
      font-family: KyivType Sans;
      font-size: 14px;
      font-style: normal;
      font-weight: 350;
      line-height: normal;
    }
    ul {
      display: flex;
      gap: 20px;
      list-style: none;
      margin-left: 70px;
    }
    li {
      position: relative;
      /* cursor: pointer; */

      color: #000;
      font-family: Inter;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  `;
  const IdBox = styled.input`
    width: 380px;
    height: 50px;
    border-radius: 10px;
    border: 1px solid #2c39b5;

    color: #777;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    margin-bottom: 10px;
  `;
  const PwBox = styled.input`
    width: 380px;
    height: 50px;
    border-radius: 10px;
    border: 1px solid #2c39b5;

    color: #777;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    margin-bottom: 30px;
  `;
  const LoginBt = styled.button`
    width: 380px;
    height: 50px;
    border-radius: 10px;
    background: #2c39b5;

    color: #fff;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  `;
  const DivisionLine = styled.div`
  width: 1px;
  height: 15px;
  background: #2c39b5;
  `
  return (
    //<Layout>
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
    //</Layout>
  );
};

export default LoginPage;
