import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Layout from "../../layouts/Layout";
import { login, loginPostAsync } from "../../slices/loginSlice";
import {
  DivisionLine,
  IdBox,
  LoginBt,
  LoginPageStyle,
  Logo,
  LogoBox,
  PwBox,
} from "../../styles/login/LoginPageStyle";
import useCustomLogin from "../../hooks/useCustomLogin";

const initState = {
  uid: "",
  upw: "",
};

const LoginPage = () => {
  const [loginParam, setLoginParam] = useState(initState);

  const handleChange = e => {
    loginParam[e.target.name] = e.target.value;
    setLoginParam({ ...loginParam });
  };

  // 커스터훅 사용하기
  const { doLogin, moveToPath } = useCustomLogin();

  const dispatch = useDispatch();

  const handleClick = () => {
    // dispatch(login(loginParam));
    // dispatch(loginPostAsync({ loginParam, successFn, failFn, errorFn }));
    doLogin({ loginParam, successFn, failFn, errorFn });
  };
  const successFn = result => {
    console.log("성공", result);
    moveToPath("/");
  };

  const failFn = result => {
    console.log("실패", result);
    alert("이메일 및 비밀번호 확인하세요.");
  };

  const errorFn = result => {
    console.log("서버 에러", result);
    // openModal("비밀번호 에러", "비밀번호를 확인해주세요.", closeModal);
  };

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
          <IdBox
            type="text"
            maxLength={15}
            placeholder="아이디"
            name="uid"
            value={loginParam.uid}
            onChange={e => handleChange(e)}
          />
          <PwBox
            type="password"
            maxLength={20}
            placeholder="비밀번호"
            name="upw"
            value={loginParam.upw}
            onChange={e => handleChange(e)}
          />
          <LoginBt onClick={handleClick}>LOGIN</LoginBt>
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
