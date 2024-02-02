import React, { useEffect, useState } from "react";
import Layout from "../../layouts/Layout";
import DaumPostcode from "react-daum-postcode";
import {
  BtSection,
  CancelBt,
  ConfirmBt,
  ImageInputBt,
  InputValid,
  JoinAddressInput,
  JoinBox,
  JoinElement,
  JoinElementInput,
  JoinElementInputBox,
  JoinElementTxt,
  JoinPageStyle,
  SaveBt,
  ShowPasswordBt,
  ShowPasswordImg,
} from "../../styles/join/JoinPageStyle";
import { JoinHeader } from "../../styles/join/JoinFirstPageStyle";
import { useNavigate } from "react-router-dom";
import { Modal } from "../../components/address/Address";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import JoinPopUp, {
  ModalBackground,
} from "../../components/joinpopup/JoinPopUp";
import {
  idOverlapPost,
  joinPost,
  nickOverlapPost,
} from "../../api/join/join_api";

const JoinPage = () => {
  // 중복확인(닉네임)
  const [nickOverlapConfirm, setNickOverlapConfirm] = useState(false);
  const [nickOverlapFail, setNickOverlapFail] = useState(false);
  const [nickConfirmModal, setNickConfirmModal] = useState(false);
  const [nickFailModal, setNickFailModal] = useState(false);

  const NickOverlap = () => {
    const obj = {
      div: 1,
      uid: "userId123",
      nick: nickname,
    };
    nickOverlapPost(obj, nickPostSuccess, nickPostFail);
  };
  const NickOverlapBt = e => {
    e.preventDefault();
    NickOverlap();
  };
  const nickPostSuccess = () => {
    setNickOverlapConfirm(true);
    setNickConfirmModal(true);
  };
  const closeNickConfirmModal = () => {
    setNickConfirmModal(false);
  };
  const nickPostFail = () => {
    setNickOverlapFail(true);
    setNickFailModal(true);
  };
  const closeNickFailModal = () => {
    setNickFailModal(false);
  };

  // 중복확인(아이디)
  const [idOverlapConfirm, setIdOverlapConfirm] = useState(false);
  const [idOverlapFail, setIdOverlapFail] = useState(false);
  const [idConfirmModal, setIdConfirmModal] = useState(false);
  const [idFailModal, setIdFailModal] = useState(false);
  const IdOverlap = () => {
    const obj = {
      div: 2,
      uid: userId,
      nick: "nickname",
    };
    idOverlapPost(obj, idPostSuccess, idPostFail);
  };
  const IdOverlapBt = e => {
    e.preventDefault();
    IdOverlap();
  };
  const idPostSuccess = () => {
    setIdOverlapConfirm(true);
    setIdConfirmModal(true);
  };
  const closeIdConfirmModal = () => {
    setIdConfirmModal(false);
  };
  const idPostFail = () => {
    setIdOverlapFail(true);
    setIdFailModal(true);
  };
  const closeIdFailModal = () => {
    setIdFailModal(false);
  };

  // 데이터 연동(회원가입)
  const JoinAction = () => {
    const obj = {
      addr: address,
      restAddr: restAddress,
      uid: userId,
      upw: password,
      nick: nickname,
      pic: photo,
      phone: phoneNumber,
      email: email,
    };
    joinPost(obj, postSuccess, postFail);
  };

  const postSuccess = () => {
    alert("회원가입 성공");
  };
  const postFail = () => {
    alert("서버 불안정");
  };

  // 이미지 업로드
  const [uploadImg, setUploadImg] = useState(
    `${process.env.PUBLIC_URL}/images/join/join_img.svg`,
  );
  const [uploadImgFile, setUploadImgFile] = useState(null);

  const handleChangeFileOne = e => {
    const file = e.target.files[0];
    if (file) {
      // 미리보기
      const tempUrl = URL.createObjectURL(file);
      setUploadImg(tempUrl); // 미리보기 끝
      // FB 파일을 보관
      setUploadImgFile(file); // 파일 1개 추가 끝
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
  const [addrModal, setAddrModal] = useState(false);

  const handleSelectAddress = data => {
    const selectedAddress = data.address;
    setAddress(selectedAddress);
    setAddrModal(false);
    console.log(address);
  };
  const handleClickButton = () => {
    setAddrModal(true);
  };
  const handleCloseModal = () => {
    setAddrModal(false);
  };

  // 양식 검증(yup)
  const phoneRegExp = /^(\d{3})-(\d{4})-(\d{4})$/;
  const validationSchema = yup.object().shape({
    nickname: yup
      .string()
      .max(20, "20자까지만 입력하세요 ")
      .required("닉네임은 필수 입력 사항입니다."),
    userId: yup
      .string()
      .min(8, "8자 이상 입력하세요.")
      .max(15, "15자까지만 입력하세요 ")
      .required("아이디는 필수 입력 사항입니다."),
    password: yup
      .string()
      .required("비밀번호는 필수 입력 사항입니다.")
      .min(8, "8자 이상 입력하세요.")
      .max(20, "20자까지만 입력하세요 "),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다.")
      .required("비밀번호 확인은 필수 입력 사항입니다."),
    phoneNumber: yup
      .string()
      .matches(phoneRegExp, "전화번호가 올바르지 않습니다.")
      .required("휴대폰 번호는 필수 입력 사항입니다."),
    email: yup
      .string()
      .email("이메일 형식이 올바르지 않습니다.")
      .required("이메일은 필수 입력 사항입니다.")
      .max(30, "30자까지만 입력하세요 "),
  });

  const { register, handleSubmit, formState, watch } = useForm({
    resolver: yupResolver(validationSchema),
    mode: "onChange",
  });
  const [photo, setPhoto] = useState("");
  const nickname = watch("nickname");
  const userId = watch("userId");
  const password = watch("password");
  const phoneNumber = watch("phoneNumber");
  const [address, setAddress] = useState("");
  const [restAddress, setRestAddress] = useState("");
  const email = watch("email");

  // 확인 버튼 선택시 실행
  const handleSubmitJoin = data => {
    console.log("최종 데이터 : ", data);
  };

  const handleChangeAddress = e => {
    setAddress(e.target.value);
  };
  const handleChangeRestAddress = e => {
    setRestAddress(e.target.value);
  };

  const [catchErr, setCatchErr] = useState(false);
  const handleConfirm = e => {
    e.preventDefault();
    if (uploadImgFile === null || address === "" || !formState.isValid) {
      setCatchErr(true);
    } else {
      navigate(`/join/3`);
    }
  };

  // 휴대폰 번호 확인 버튼
  const [showPhoneModal, setShowPhoneModal] = useState(false);
  const phoneNumberConfirm = () => {
    setShowPhoneModal(true);
  };
  const closePhoneModal = () => {
    setShowPhoneModal(false);
  };

  // 취소 & 저장 버튼
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate(`/login`);
  };
  const JoinSave = e => {
    e.preventDefault();
    JoinAction();
    // navigate(`/join/3`);
  };
  const handleNotValid = e => {
    setCatchErr(true);
  };

  return (
    <Layout>
      {nickConfirmModal && (
        <>
          <JoinPopUp
            txt="사용 가능한 닉네임입니다."
            onConfirm={closeNickConfirmModal}
          />
          <ModalBackground></ModalBackground>
        </>
      )}
      {nickFailModal && (
        <>
          <JoinPopUp
            txt="이미 존재하는 닉네임입니다."
            onConfirm={closeNickFailModal}
          />
          <ModalBackground></ModalBackground>
        </>
      )}

      {idConfirmModal && (
        <>
          <JoinPopUp
            txt="사용 가능한 아이디입니다."
            onConfirm={closeIdConfirmModal}
          />
          <ModalBackground></ModalBackground>
        </>
      )}
      {idFailModal && (
        <>
          <JoinPopUp
            txt="이미 존재하는 아이디입니다."
            onConfirm={closeIdFailModal}
          />
          <ModalBackground></ModalBackground>
        </>
      )}

      {showPhoneModal && (
        <>
          {formState.errors.phoneNumber || phoneNumber === "" ? (
            <JoinPopUp
              txt="휴대폰 인증에 실패하셨습니다."
              onConfirm={closePhoneModal}
            />
          ) : (
            <JoinPopUp
              txt="휴대폰 인증이 완료되었습니다."
              onConfirm={closePhoneModal}
            />
          )}
          <ModalBackground></ModalBackground>
        </>
      )}

      {addrModal && (
        <Modal handleClose={handleCloseModal}>
          <DaumPostcode onComplete={handleSelectAddress} autoClose={false} />
        </Modal>
      )}

      <JoinPageStyle>
        <JoinHeader>
          <p>회원가입</p>
          <img src="/images/join/join_step2.svg" />
        </JoinHeader>
        <JoinBox onSubmit={handleSubmit(handleSubmitJoin)}>
          <JoinElement>
            <JoinElementTxt>
              <p>사진</p>
              <span>*</span>
            </JoinElementTxt>
            <JoinElementInputBox>
              <JoinElementInput>
                <label htmlFor="img">
                  <ImageInputBt
                    type="button"
                    onClick={() => {
                      document.getElementById("img").click();
                    }}
                  >
                    <img src={uploadImg} alt="" />
                  </ImageInputBt>
                </label>
                <input
                  type="file"
                  {...register("photo")}
                  accept="image/*"
                  onClick={() => {
                    document.getElementById("img").click();
                  }}
                  onChange={event => {
                    handleChangeFileOne(event, "before");
                  }}
                  id="img"
                  style={{ display: "none" }}
                />
              </JoinElementInput>{" "}
              {uploadImgFile === null && catchErr ? (
                <InputValid>사진을 선택해주세요.</InputValid>
              ) : (
                ""
              )}
            </JoinElementInputBox>
          </JoinElement>

          <JoinElement>
            <JoinElementTxt>
              <p>닉네임</p>
              <span>*</span>
            </JoinElementTxt>
            <JoinElementInputBox>
              <JoinElementInput width="440px">
                <input
                  type="text"
                  maxLength={20}
                  placeholder="20자 이내"
                  name="nickname"
                  {...register("nickname")}
                />
                <ConfirmBt onClick={NickOverlapBt} type="button">
                  중복 확인
                </ConfirmBt>
              </JoinElementInput>
              {catchErr && formState.errors.nickname && (
                <InputValid>{formState.errors.nickname?.message}</InputValid>
              )}
              {catchErr &&
                !nickOverlapConfirm &&
                !formState.errors.nickname && (
                  <InputValid>닉네임 중복 확인을 해주세요.</InputValid>
                )}
            </JoinElementInputBox>
          </JoinElement>

          <JoinElement>
            <JoinElementTxt>
              <p>아이디</p>
              <span>*</span>
            </JoinElementTxt>
            <JoinElementInputBox>
              <JoinElementInput width="440px">
                <input
                  type="text"
                  minLength={8}
                  maxLength={15}
                  placeholder="8~15자 이내"
                  name="userId"
                  {...register("userId")}
                />
                <ConfirmBt onClick={IdOverlapBt} type="button">
                  중복 확인
                </ConfirmBt>
              </JoinElementInput>
              <InputValid>{formState.errors.userId?.message}</InputValid>
              {catchErr && !idOverlapConfirm && !formState.errors.userId && (
                <InputValid>아이디 중복 확인을 해주세요.</InputValid>
              )}
            </JoinElementInputBox>
          </JoinElement>

          <JoinElement>
            <JoinElementTxt>
              <p>비밀번호</p>
              <span>*</span>
            </JoinElementTxt>
            <JoinElementInputBox>
              <JoinElementInput>
                <input
                  type={showPassword ? "text" : "password"}
                  minLength={8}
                  maxLength={20}
                  placeholder="특수문자 포함 8~20자 이내"
                  name="password"
                  {...register("password")}
                />
                <ShowPasswordBt type="button" onClick={handleTogglePassword}>
                  {showPassword ? (
                    <ShowPasswordImg src="/images/join/eye_open.png" />
                  ) : (
                    <ShowPasswordImg src="/images/join/eye_close.png" />
                  )}
                </ShowPasswordBt>
              </JoinElementInput>
              <InputValid>{formState.errors.password?.message}</InputValid>
            </JoinElementInputBox>
          </JoinElement>

          <JoinElement>
            <JoinElementTxt>
              <p>비밀번호 확인</p>
              <span>*</span>
            </JoinElementTxt>
            <JoinElementInputBox>
              <JoinElementInput>
                <input
                  type={showPasswordConfirm ? "text" : "password"}
                  minLength={8}
                  maxLength={20}
                  placeholder="비밀번호 확인"
                  name="confirmPassword"
                  {...register("confirmPassword")}
                />
                <ShowPasswordBt
                  type="button"
                  onClick={handleTogglePasswordConfirm}
                >
                  {showPasswordConfirm ? (
                    <ShowPasswordImg src="/images/join/eye_open.png" />
                  ) : (
                    <ShowPasswordImg src="/images/join/eye_close.png" />
                  )}
                </ShowPasswordBt>
              </JoinElementInput>
              <InputValid>
                {formState.errors.confirmPassword?.message}
              </InputValid>
            </JoinElementInputBox>
          </JoinElement>

          <JoinElement>
            <JoinElementTxt>
              <p>휴대폰 번호</p>
              <span>*</span>
            </JoinElementTxt>
            <JoinElementInputBox>
              <JoinElementInput width="440px">
                <input
                  type="text"
                  placeholder="예) 010-0000-0000"
                  name="phoneNumber"
                  {...register("phoneNumber")}
                />
                <ConfirmBt onClick={phoneNumberConfirm} type="button">
                  휴대폰 인증
                </ConfirmBt>
              </JoinElementInput>
              <InputValid>{formState.errors.phoneNumber?.message}</InputValid>
            </JoinElementInputBox>
          </JoinElement>

          <JoinElement>
            <JoinElementTxt>
              <p>주소</p>
              <span>*</span>
            </JoinElementTxt>
            <JoinElementInputBox>
              <JoinAddressInput>
                <input
                  type="text"
                  value={address}
                  placeholder="주소를 검색해주세요."
                  onClick={handleClickButton}
                  readOnly
                  name="address"
                  onChange={handleChangeAddress}
                />
                {catchErr && address === "" && (
                  <InputValid>주소를 검색해주세요.</InputValid>
                )}
                <input
                  type="text"
                  value={restAddress}
                  placeholder="상세 주소를 입력해주세요."
                  name="restAddress"
                  onChange={handleChangeRestAddress}
                />
                {catchErr && restAddress === "" && (
                  <InputValid>상세 주소를 입력해주세요.</InputValid>
                )}
              </JoinAddressInput>
            </JoinElementInputBox>
          </JoinElement>

          <JoinElement>
            <JoinElementTxt>
              <p>이메일</p>
              <span>*</span>
            </JoinElementTxt>
            <JoinElementInputBox>
              <JoinElementInput>
                <input
                  type="email"
                  maxLength={30}
                  placeholder="예) a123@naver.com"
                  name="email"
                  {...register("email")}
                />
              </JoinElementInput>
              {catchErr && formState.errors.email && (
                <InputValid>{formState.errors.email?.message}</InputValid>
              )}
            </JoinElementInputBox>
          </JoinElement>
          
          <BtSection mgtop="90px" mgbtm="0px">
            <CancelBt onClick={handleCancel}>취소</CancelBt>
            {formState.isValid &&
            uploadImgFile !== null &&
            address &&
            restAddress &&
            nickOverlapConfirm &&
            idOverlapConfirm ? (
              <SaveBt onClick={JoinSave} type="button">
                저장
              </SaveBt>
            ) : (
              <SaveBt onClick={handleNotValid}>저장</SaveBt>
            )}
          </BtSection>
        </JoinBox>
      </JoinPageStyle>
    </Layout>
  );
};
export default JoinPage;
