import React, { useRef, useState } from "react";
import Layout from "../../layouts/Layout";
import styled from "@emotion/styled";
import {
  BtSection,
  CancelBt,
  ConfirmBt,
  ImageInputBt,
  JoinAddressInput,
  JoinBox,
  JoinElement,
  JoinElementInput,
  JoinElementTxt,
  JoinPageStyle,
  SaveBt,
} from "../../styles/join/JoinPageStyle";
import { JoinHeader } from "../../styles/join/JoinFirstPageStyle";

const JoinPage = () => {
  const [uploadImgBefore, setUploadImgBefore] = useState(
    `${process.env.PUBLIC_URL}/images/join_img.svg`,
  );
  const [fileCount, setFileCount] = useState(0);
  const [uploadImgBeforeFile, setUploadImgBeforeFile] = useState(null);
  const handleChangeFileOne = e => {
    const file = e.target.files[0];
    if (file) {
      // 미리보기
      const tempUrl = URL.createObjectURL(file);
      setUploadImgBefore(tempUrl); // 미리보기 끝
      // FB 파일을 보관
      setUploadImgBeforeFile(file); // 파일 1개 추가 끝
      setFileCount(prev => prev + 1); // 파일 추가 되었어요.
    }
  };

  return (
    <Layout>
      <JoinPageStyle>
        <JoinHeader>
          <p>회원가입</p>
          <img src="../images/join_step2.svg" />
        </JoinHeader>
        <JoinBox>
          <JoinElement>
            <JoinElementTxt>
              <p>사진</p>
              <span>*</span>
            </JoinElementTxt>
            <JoinElementInput>
              <label htmlFor="input-file-before">
                <ImageInputBt
                  type="button"
                  onClick={() => {
                    document.getElementById("input-file-before").click();
                  }}
                >
                  <img src={uploadImgBefore} alt="" />
                </ImageInputBt>
              </label>
              <input
                type="file"
                accept="image/png, image/gif, image/jpeg"
                onClick={() => {
                  document.getElementById("input-file-before").click();
                }}
                onChange={event => {
                  handleChangeFileOne(event, "before");
                }}
                id="input-file-before"
                style={{ display: "none" }}
              />
            </JoinElementInput>
          </JoinElement>
          <JoinElement>
            <JoinElementTxt>
              <p>닉네임</p>
              <span>*</span>
            </JoinElementTxt>
            <JoinElementInput width="440px">
              <input type="text" placeholder="15자 이내" />
              <ConfirmBt>중복 확인</ConfirmBt>
            </JoinElementInput>
          </JoinElement>
          <JoinElement>
            <JoinElementTxt>
              <p>아이디</p>
              <span>*</span>
            </JoinElementTxt>
            <JoinElementInput width="440px">
              <input type="text" placeholder="15자 이내" />
              <ConfirmBt>중복 확인</ConfirmBt>
            </JoinElementInput>
          </JoinElement>
          <JoinElement>
            <JoinElementTxt>
              <p>비밀번호</p>
              <span>*</span>
            </JoinElementTxt>
            <JoinElementInput>
              <input type="text" placeholder="특수문자 포함 8~15자 이내" />
            </JoinElementInput>
          </JoinElement>
          <JoinElement>
            <JoinElementTxt>
              <p>비밀번호 확인</p>
              <span>*</span>
            </JoinElementTxt>
            <JoinElementInput>
              <input type="text" placeholder="비밀번호 확인" />
            </JoinElementInput>
          </JoinElement>
          <JoinElement>
            <JoinElementTxt>
              <p>휴대폰 번호</p>
              <span>*</span>
            </JoinElementTxt>
            <JoinElementInput width="440px">
              <input type="text" placeholder="예) 010-0000-0000" />
              <ConfirmBt>휴대폰 인증</ConfirmBt>
            </JoinElementInput>
          </JoinElement>
          <JoinElement>
            <JoinElementTxt>
              <p>주소</p>
              <span>*</span>
            </JoinElementTxt>
            <JoinAddressInput>
              <ConfirmBt>주소 검색</ConfirmBt>
              <input type="text" placeholder="주소 검색을 해주세요." />
            </JoinAddressInput>
          </JoinElement>
          <JoinElement>
            <JoinElementTxt>
              <p>이메일</p>
              <span>*</span>
            </JoinElementTxt>
            <JoinElementInput>
              <input type="text" placeholder="예) a123@naver.com" />
            </JoinElementInput>
          </JoinElement>
        </JoinBox>
        <BtSection>
          <CancelBt>취소</CancelBt>
          <SaveBt>저장</SaveBt>
        </BtSection>
      </JoinPageStyle>
    </Layout>
  );
};

export default JoinPage;
