import React, { useRef } from "react";
import Layout from "../../layouts/Layout";
import styled from "@emotion/styled";

const JoinPage = () => {
  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    // 파일 입력(input type="file") 클릭
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = event => {
    // 선택된 파일 처리 로직을 여기에 추가
    const selectedFile = event.target.files[0];
    console.log("Selected file:", selectedFile);
  };

  const JoinPageStyle = styled.div`
    width: 1300px;
    text-align: center;
    margin: 0 auto;
    /* background: skyblue; */
  `;
  const JoinHeader = styled.div`
    margin-top: 70px;
    p {
      color: #000;
      /* font-family: Inter; */
      font-size: 23px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;

      margin-bottom: 60px;
    }
    img {
      width: 550px;
      height: 63px;
      margin-bottom: 70px;
    }
  `;
  const JoinBox = styled.div`
    width: 980px;
    height: 700px;
    border-radius: 10px;
    border: 1px solid #2c39b5;
    margin: 0 auto;
    padding: 60px 90px 0 90px;
  `;
  const JoinElement = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  `;
  const JoinElementTxt = styled.div`
    display: flex;
    p {
      color: #000;

      /* font-family: Inter; */
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    span {
      color: #ff0303;

      /* font-family: Inter; */
      font-size: 13px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  `;
  const JoinElementInput = styled.div`
    display: flex;
    justify-content: space-between;
    /* gap: 40px; */
    width: 600px;
    background: pink;
    input {
      border-radius: 5px;
      border: 1px solid #2c39b5;
    }
    input[type="file"] {
      width: 180px;
      height: 180px;
    }
    input[type="image"] {
      width: 180px;
      height: 180px;
    }
    input[type="text"] {
      width: ${props => (props.width ? props.width : "600px")};
      height: 36px;
      padding-left: 15px;

      color: #777;
      /* font-family: Inter; */
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    button {
      width: 105px;
      height: 36px;
      border-radius: 5px;
      border: 1px solid #2c39b5;
      background: #fff;

      color: #777;
      /* font-family: Inter; */
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  `;
  const BtSection = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;

    margin-top: 60px;
    margin-bottom: 90px;
  `;
  const CancelBt = styled.button`
    width: 150px;
    height: 50px;
    border-radius: 10px;
    background: #f2f2ff;
    border: none;

    color: #2c39b5;
    /* font-family: Inter; */
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  `;
  const LoginBt = styled.button`
    width: 150px;
    height: 50px;
    border-radius: 10px;
    background: #2c39b5;
    border: none;

    color: #fff;
    /* font-family: Inter; */
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  `;
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
              <input
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleFileChange}
                ref={fileInputRef}
              />
              <input
                type="image"
                src="../images/join_img.svg"
                alt="Upload Image"
                onClick={handleImageClick}
              />
            </JoinElementInput>
          </JoinElement>
          <JoinElement>
            <JoinElementTxt>
              <p>닉네임</p>
              <span>*</span>
            </JoinElementTxt>
            <JoinElementInput width="440px">
              <input type="text" />
              <button>중복 확인</button>
            </JoinElementInput>
          </JoinElement>
          <JoinElement>
            <JoinElementTxt>
              <p>아이디</p>
              <span>*</span>
            </JoinElementTxt>
            <JoinElementInput width="440px">
              <input type="text" />
              <button>중복 확인</button>
            </JoinElementInput>
          </JoinElement>
          <JoinElement>
            <JoinElementTxt>
              <p>비밀번호</p>
              <span>*</span>
            </JoinElementTxt>
            <JoinElementInput>
              <input type="text" />
            </JoinElementInput>
          </JoinElement>
          <JoinElement>
            <JoinElementTxt>
              <p>비밀번호 확인</p>
              <span>*</span>
            </JoinElementTxt>
            <JoinElementInput>
              <input type="text" />
            </JoinElementInput>
          </JoinElement>
          <JoinElement>
            <JoinElementTxt>
              <p>휴대폰 번호</p>
              <span>*</span>
            </JoinElementTxt>
            <JoinElementInput width="440px">
              <input type="text" />
              <button>휴대폰 인증</button>
            </JoinElementInput>
          </JoinElement>
          <JoinElement>
            <JoinElementTxt>
              <p>주소</p>
              <span>*</span>
            </JoinElementTxt>
            <JoinElementInput>
              <button>주소 검색</button>
              <input type="text" />
            </JoinElementInput>
          </JoinElement>
          <JoinElement>
            <JoinElementTxt>
              <p>이메일</p>
              <span>*</span>
            </JoinElementTxt>
            <JoinElementInput>
              <input type="text" />
            </JoinElementInput>
          </JoinElement>
        </JoinBox>
        <BtSection>
          <CancelBt>취소</CancelBt>
          <LoginBt>저장</LoginBt>
        </BtSection>
      </JoinPageStyle>
    </Layout>
  );
};

export default JoinPage;
