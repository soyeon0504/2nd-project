import React, { useState } from "react";
import { SideBar } from "../../components/SideBar";
import Mytitle from "../../components/my/Mytitle";
import { ListDiv, ProductImgBt, Resets } from "../../styles/productsStyle";
import { Loader } from "react-kakao-maps-sdk";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// 초기값
const initState = {
  mainPic: "",
  pics: [],
  title: "", //재목(50자 한정)
  contents: "", // 내용 (1500자 제한)
  // addr: "", //주소
  // restAddr: "", // 나머지 주소
  price: "", //가격
  rentalPrice: "", //임대 가격
  depositPer: "50", //보증금 비율

  buyDate: "", //구매날짜
  rentalStartDate: "", //임대시작
  rentalEndDate: "", // 임대 종료
  icategory: {
    //카테고리숫자
    mainCategory: "1", //메인카테고리
    subCategory: "1", //하위 카테고리
  },

  inventory: 1, // 재고
};
// 검증 코드 yup
const validationSchema = yup.object({
  title: yup
    .string("내용을 입력하세요.")
    .min(2, "2자 이상 입력하세요")
    .max(50, "50자까지만 입력하세요 ")
    .required("제목은 필수 입력 사항입니다."),
  contents: yup
    .string("내용을 입력하세요.")
    .min(2, "2자 이상 입력하세요")
    .max(1500, "1500자까지만 입력하세요 ")
    .required("내용은 필수 입력 사항입니다."),
  price: yup
    .string("내용을 입력하세요.")
    .min(3, "100원 이상 입력하세요")
    .required("가격은 필수 입력 사항입니다."),
  depositPer: yup
    .string("50% 이상 최대 100% 입력하세요.")
    .required("보증금은 필수 입력 사항입니다."),
  rentalPrice: yup
    .string("내용을 입력하세요.")
    .min(3, "100원 이상 입력하세요")
    // .max(10, "21억까지만 입력하세요 ")
    .required("하루대여 가격은 필수 입력 사항입니다."),
  inventory: yup
    .string("내용을 입력하세요.")
    .min(1, "1개 이상 입력하세요")
    .required("소유 수량은 필수 입력 사항입니다."),
  buyDate: yup
    .string("내용을 입력하세요.")
    .required("제품 구매일은 필수 입력 사항입니다."),
  rentalStartDate: yup
    .string("내용을 입력하세요.")
    .required("거래 시작 날짜는 필수 입력 사항입니다."),
  rentalEndDate: yup
    .string("내용을 입력하세요.")
    .required(" / 거래 종료 날짜는 필수 입력 사항입니다."),
  // addr: yup
  //   .string("내용 입력하세요.")
  //   .min(2, "주소를 입력하세요")
  //   .required(" 거래 주소는 필수 입력 사항입니다."),
  // restAddr: yup
  //   .string("내용을 입력하세요.")
  //   .max(50, "50자까지만 입력하세요 ")
  //   .required(" 상세 주소는 필수 입력 사항입니다."),
  mainPic: yup
    .string("제품사진을 선택해주세요.")
    .required("제품사진은 최소 1개이상 필수 입력 사항입니다."),
});

const EnterpriseWrite = () => {
  // 이미지 모음
  const [fileCount, setFileCount] = useState(0);
  const [imageBefore, setImageBefore] = useState([]);
  const [uploadImgBeforeFile, setUploadImgBeforeFile] = useState(null);
  // 이미지 선택하라는 아이콘 이미지 나오기
  const [uploadImgBefore, setUploadImgBefore] = useState(
    `${process.env.PUBLIC_URL}/images/join/join_img.svg`,
  );
  const handleChangeFileOne = e => {
    const file = e.target.files[0];
    // console.log(file);
    if (file && imageBefore.length < 10) {
      // 미리보기
      const tempUrl = URL.createObjectURL(file);
      // console.log(tempUrl);
      setUploadImgBefore(tempUrl);
      // FB 파일을 보관
      setUploadImgBeforeFile(file); // 파일 1개 추가 끝
      setImageBefore(prevImages => [...prevImages, tempUrl]);
      setFileCount(prev => prev + 1); // 파일 추가 되었어요.
    }
    const { register, handleSubmit, formState, setValue } = useForm({
        defaultValues: initState,
        resolver: yupResolver(validationSchema),
        mode: "onChange",
      })};
  return (
    <div>
      <SideBar />
      <biv>
        {/*입력 기본정보 */}
        <Mytitle title={"입력 기본 정보"} />
      </biv>
      <div>
        <form>
          {/* 싸이드바 */}
          <Resets type="reset">초기화</Resets>
          <ListDiv>
            <loader htmlFor="img">
              <p>사진</p>
              <p>*</p>
              <span>/10</span>
            </loader>
            <div>
              {/* 이미지등록 */}
              <ProductImgBt
                type="button"
                onClick={() => {
                  document.getElementById("img").click();
                }}
              >
                <img src={uploadImgBefore} alt="" />
              </ProductImgBt>
              <div style={{ color: "red" }}>
              {/* {formState.errors.mainPic?.message} */}
              </div>
            </div>
          </ListDiv>
        </form>
      </div>
    </div>
  );
};

export default EnterpriseWrite;
