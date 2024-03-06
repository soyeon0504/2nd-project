import React, { useState } from "react";
import styled from "@emotion/styled";
import { IdBox, LoginBox, Logo, LogoZone } from "../../styles/login/LoginPageStyle";
import { BtSection, CancelBt, SaveBt } from "../../styles/join/JoinPageStyle";

const VerificationStyle = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;

  width: 500px;
  height: 560px;
  background: #fff;
  padding-top: 20px;
  border-radius: 10px;
`;

const VerificationModal = ({ closeModal, onConfirm }) => {
  const [userData, setUserData] = useState({
    userName: "",
    userNum: "",
    userBirth: "",
  });

  const handleChange = (fieldName, value) => {
    let sanitizedValue;
  
    if (fieldName === "userNum" || fieldName === "userBirth") {
      const numRegex = /^[0-9]*$/;
      if (!numRegex.test(value)) {
        return;
      }
      sanitizedValue = value;
    } else {
      const regex = /^[가-힣]*[ㄱ-ㅎㅏ-ㅣ]*$/;
      if (!regex.test(value)) {
        return;
      }
      sanitizedValue = value;
    }
  
    setUserData(prevState => ({
      ...prevState,
      [fieldName]: sanitizedValue,
    }));
  };


  return (
    <VerificationStyle>
      <LogoZone>
        <Logo src="/images/logo.svg" style={{ marginBottom: "20px" }} />
      </LogoZone>
      <LoginBox height={"340px"} mgbtm={"50px"}>
        <p>
            본인인증을 위해 <br />
            정보 입력을 해주세요.
        </p>
        <IdBox
          type="text"
          placeholder="이름 예) 홍길동"
          value={userData.userName}
          onChange={(e) => handleChange("userName", e.target.value)}
        />
        <IdBox
          type="text"
          placeholder="휴대폰 번호 예) 01000000000"
          value={userData.userNum}
          onChange={(e) => handleChange("userNum", e.target.value)}
        />
        <IdBox
          type="number"
          placeholder="생일 예) 20240301"
          value={userData.userBirth}
          onChange={(e) => handleChange("userBirth", e.target.value)}
        />

        <BtSection width={"380px"}>
          <CancelBt onClick={closeModal}>닫기</CancelBt>
          <SaveBt onClick={() => onConfirm(userData)}>확인</SaveBt>
        </BtSection>
      </LoginBox>
    </VerificationStyle>
  );
};

export default VerificationModal;
