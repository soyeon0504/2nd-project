import React, { useEffect, useState } from 'react'
import DaumPostcode from "react-daum-postcode";
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
  SaveBt,
} from "../../styles/join/JoinPageStyle";
import { JoinHeader } from "../../styles/join/JoinFirstPageStyle";
import { useNavigate } from 'react-router';
import { Modal } from '../../components/address/Address';
import { getMyUer } from '../../api/my/my_api';

const MyInfoPage = () => {
  const [data, setData] = useState([]);

  useEffect(()=> {

  },[])

 // 이미지 업로드
 const [uploadImgBefore, setUploadImgBefore] = useState(
  `${process.env.PUBLIC_URL}/images/join/join_img.svg`,
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

// 비밀번호 보이기/감추기
const [showPassword, setShowPassword] = useState(false);
const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

const handleTogglePassword = () => {
  setShowPassword(prev => !prev);
};
const handleTogglePasswordConfirm = () => {
  setShowPasswordConfirm(prev => !prev);
};

// 주소 검색 모달창
const [calendarLocation, setCalendarLocation] = useState("");
const [modalOpen, setModalOpen] = useState(false);

const handleSelectAddress = data => {
  const { address } = data;
  // setFormData(prev => ({ ...prev, address })); // 주소를 직접 formData에 설정
  setCalendarLocation(address);
  setModalOpen(false);
};
const handleClickButton = () => {
  setModalOpen(true);
};
const handleCloseModal = () => {
  setModalOpen(false);
};


// 취소 & 저장 버튼
const navigate = useNavigate();
const handleCancel = () => {
};
const handleConfirm = () => {
};

  return (
    <>
        <JoinHeader mgtop={"0"} mgbtm={"0"}>
          <p>회원정보 수정</p>
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
              <input
                type="text"
                placeholder="15자 이내"
              />
              <ConfirmBt>중복 확인</ConfirmBt>
            </JoinElementInput>
          </JoinElement>
          <JoinElement>
            <JoinElementTxt>
              <p>아이디</p>
              <span>*</span>
            </JoinElementTxt>
            <JoinElementInput>
              <div
              ></div>
            </JoinElementInput>
          </JoinElement>
          <JoinElement>
            <JoinElementTxt>
              <p>비밀번호</p>
              <span>*</span>
            </JoinElementTxt>
            <JoinElementInput>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="특수문자 포함 8~15자 이내"
              />
              <button
                type="button"
                style={{
                  background: "transparent",
                  border: `none`,
                  width: `0px`,
                  height: `0px`,
                }}
                onClick={handleTogglePassword}
              >
                {showPassword ? (
                  <img
                    src="/images/join/eye_open.png"
                    style={{
                      width: `20px`,
                      height: `20px`,
                      border: `none`,
                      transform: "translate(-150%, 40%)",
                    }}
                  />
                ) : (
                  <img
                    src="/images/join/eye_close.png"
                    style={{
                      width: `20px`,
                      height: `20px`,
                      border: `none`,
                      transform: "translate(-150%, 40%)",
                    }}
                  />
                )}
              </button>
            </JoinElementInput>
          </JoinElement>
          <JoinElement>
            <JoinElementTxt>
              <p>비밀번호 확인</p>
              <span>*</span>
            </JoinElementTxt>
            <JoinElementInput>
              <input
                type={showPasswordConfirm ? "text" : "password"}
                placeholder="비밀번호 확인"
              />
              <button
                type="button"
                style={{
                  background: "transparent",
                  border: `none`,
                  width: `0px`,
                  height: `0px`,
                }}
                onClick={handleTogglePasswordConfirm}
              >
                {showPasswordConfirm ? (
                  <img
                    src="/images/join/eye_open.png"
                    style={{
                      width: `20px`,
                      height: `20px`,
                      border: `none`,
                      transform: "translate(-150%, 40%)",
                    }}
                  />
                ) : (
                  <img
                    src="/images/join/eye_close.png"
                    style={{
                      width: `20px`,
                      height: `20px`,
                      border: `none`,
                      transform: "translate(-150%, 40%)",
                    }}
                  />
                )}
              </button>
            </JoinElementInput>
          </JoinElement>
          <div style={{ color: "red", fontSize: "13px" }}>
          </div>
          <JoinElement>
            <JoinElementTxt>
              <p>휴대폰 번호</p>
              <span>*</span>
            </JoinElementTxt>
            <JoinElementInput width="440px">
              <input
                type="text"
                placeholder="예) 010-0000-0000"
              />
            </JoinElementInput>
          </JoinElement>
          <JoinElement>
            <JoinElementTxt>
              <p>주소</p>
              <span>*</span>
            </JoinElementTxt>
            <JoinAddressInput>
              <ConfirmBt onClick={handleClickButton}>주소 검색</ConfirmBt>
              <input
                type="text"
                value={calendarLocation}
                placeholder="주소 검색을 해주세요."
                // onClick={handleClickButton}
                readOnly
              />
              <input placeholder="상세 주소를 입력해주세요." />

              {modalOpen && (
                <Modal handleClose={handleCloseModal}>
                  <DaumPostcode
                    onComplete={handleSelectAddress}
                    autoClose={false}
                  />
                </Modal>
              )}
            </JoinAddressInput>
          </JoinElement>
          <div style={{ color: "red", fontSize: "13px" }}>
          </div>
          <JoinElement>
            <JoinElementTxt>
              <p>이메일</p>
              <span>*</span>
            </JoinElementTxt>
            <JoinElementInput>
              <div
              ></div>
            </JoinElementInput>
          </JoinElement>
        </JoinBox>
        <BtSection>
          <CancelBt onClick={handleCancel}>취소</CancelBt>
          <SaveBt onClick={handleConfirm}>저장</SaveBt>
        </BtSection>
    </>
  )
}

export default MyInfoPage