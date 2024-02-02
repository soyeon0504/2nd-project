import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Layout from "../../layouts/Layout";
import { login, loginPostAsync } from "../../slices/loginSlice";
import {
  DivisionLine,
  IdBox,
  LoginBox,
  LoginBt,
  LoginPageStyle,
  Logo,
  PwBox,
} from "../../styles/login/LoginPageStyle";
import useCustomLogin from "../../hooks/useCustomLogin";
import JoinPopUp, {
  ModalBackground,
} from "../../components/joinpopup/JoinPopUp";
import IdFind from "../../components/login/IdFind";
import { useNavigate } from "react-router-dom";
import PwFind from "../../components/login/PwFind";

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
  const { doLogin, isLogin, moveToPath } = useCustomLogin();

  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
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
    // alert("이메일 및 비밀번호 확인하세요.");
    setShowModal(true);
  };

  const errorFn = result => {
    console.log("서버 에러", result);
    // openModal("비밀번호 에러", "비밀번호를 확인해주세요.", closeModal);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  // 아이디 찾기 버튼 클릭
  const [idFindModal, setIdFindModal] = useState(false);
  const handleIdFind = () => {
    setIdFindModal(true);
  };
  const closeIdFindModal = () => {
    setIdFindModal(false);
  };
  // const ConfirmIdFindModal = _userNum => {
  //   console.log("확인", _userNum)
  // }

  // 비밀번호 변경 버튼 클릭
  const [pwFindModal, setPwFindModal] = useState(false);
  const handlePwFind = () => {
    setPwFindModal(true);
  };
  const closePwFindModal = () => {
    setPwFindModal(false);
  };

  // 회원가입 페이지 이동
  const navigate = useNavigate();
  const handleJoin = () => {
    navigate(`/join/1`);
  };

  return (
    <Layout>
      <LoginPageStyle>
        <Logo>로고</Logo>
        <LoginBox>
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
          {showModal && (
            <>
              <JoinPopUp
                txt="아이디 또는 비밀번호를 확인해주세요."
                onConfirm={closeModal}
              />
              <ModalBackground></ModalBackground>
            </>
          )}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "50px",
              paddingRight: "30px",
            }}
          >
            <li onClick={handleIdFind}>아이디 찾기</li>
            {idFindModal && (
              <>
                <IdFind closeModal={closeIdFindModal} />
                <ModalBackground></ModalBackground>
              </>
            )}
            <DivisionLine></DivisionLine>
            {/* <li onClick={handlePwFind}>비밀번호 변경</li>
            {pwFindModal && (
              <>
                <PwFind closeModal={closePwFindModal} />
                <div
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "rgba(0, 0, 0, 0.5)",
                zIndex: 999,
              }}
            ></div>
              </>
            )}
            <DivisionLine></DivisionLine> */}
            <li onClick={handleJoin}>회원가입</li>
          </div>
        </LoginBox>
      </LoginPageStyle>
    </Layout>
  );
};

export default LoginPage;
