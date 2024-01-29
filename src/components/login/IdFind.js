import React from "react";
import { IdBox, LoginBox, Logo } from "../../styles/login/LoginPageStyle";
import { BtSection, CancelBt, SaveBt } from "../../styles/join/JoinPageStyle";
import styled from "@emotion/styled";

const IdFind = ({ closeModal, onConfirm }) => {
  const IdFindStyle = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;

    width: 500px;
    height: 460px;
    background: #fff;
    padding-top: 20px;
  `;
  return (
    <IdFindStyle>
      <Logo>로고</Logo>
      <LoginBox height={"340px"} mgbtm={"50px"}>
        <p>
          아이디를 잊으셨나요? <br />
          휴대폰 번호를 입력해 주세요.
        </p>
        <IdBox type="text" placeholder="휴대폰 번호" />
        <BtSection width={"380px"}>
          <CancelBt onClick={closeModal}>취소</CancelBt>
          <SaveBt onClick={onConfirm}>확인</SaveBt>
        </BtSection>
      </LoginBox>
    </IdFindStyle>
  );
};

export default IdFind;
