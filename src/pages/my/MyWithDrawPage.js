import React from 'react'
import { JoinHeader } from '../../styles/join/JoinFirstPageStyle'
import { IdBox, LoginBox, PwBox } from '../../styles/login/LoginPageStyle'
import { BtSection, CancelBt, SaveBt } from '../../styles/join/JoinPageStyle'

const MyWithDrawPage = () => {
  return (
    <>
        <JoinHeader mgtop={"0"} mgbtm={"0"}>
          <p>회원탈퇴</p>
        </JoinHeader>
        <LoginBox mgbtm={"80px"}>
          <p>
          ※ 탈퇴한 아이디로는 다시 가입할 수 없습니다.
          <br />
            ※ 탈퇴한 뒤에는 아이디 및 데이터를 복구할 수 없으니 
            <br />
            신중히 진행하세요.
          </p>
          <IdBox type="text" maxLength={15} placeholder="아이디 또는 이메일" />
          <IdBox type="text" maxLength={20} placeholder="비밀번호" />
          <PwBox type="text" maxLength={14} placeholder="휴대폰 번호" />
            <BtSection mgtop={"40px"} mgbtm={"20px"} width={"380px"}>
                <CancelBt>취소</CancelBt>
                <SaveBt>탈퇴</SaveBt>
            </BtSection>
        </LoginBox>
    </>
  )
}

export default MyWithDrawPage