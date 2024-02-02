import React, { useEffect, useState } from "react";
import Layout from "../../layouts/Layout";
import { SideBar } from "../../components/SideBar";
import Mytitle from "../../components/my/Mytitle";
import { useForm } from "react-hook-form";
import MyDatePicker from "./MyDatePicker";
import { BtSection, CancelBt, SaveBt } from "../../styles/join/JoinPageStyle";
import { Modal } from "../../components/address/Address";
import DaumPostcode from "react-daum-postcode";
import Calendar from "../../components/details/Calendar";
import {
  AllWidth,
  BtWrap,
  BtnColor,
  BtnColorSub,
  ListDiv,
  PriceDiv,
  ProductImgBt,
  ProductImgMap,
  ProductImgMapBt,
} from "../../styles/productsStyle";
import * as yup from "yup";

//서버에서 돌려주는 값
const initMoreData = {
  mainPic: "", //메인 사진
  pics: [""], //서브 사진
  dto: {
    title: "", //재목(50자 한정)
    contents: "", // 내용 (1500자 제한)
    addr: "", //주소
    restAddr: "", // 나머지 주소
    price: 0, //가격
    rentalPrice: 0, //임대 가격
    depositPer: 0, //보증금 비율
    buyDate: "2024-01-31", //구매날짜
    rentalStartDate: "2024-01-31", //임대시작
    rentalEndDate: "2024-01-31", // 임대 종료
    icategory: {
      //카테고리숫자
      mainCategory: 0, //메인카테고리
      subCategory: 1, //하위 카테고리
    },
    inventory: 1, // 재고
  },
};
const handilClickAction = {};

const btlist = [
  ["스마트워치", "태블릿", "갤럭시", "아이폰"],
  ["노트북", "PC", "마우스", "키보드"],
  ["빔프로젝터", "셋톱박스", "카메라", "캠코더", "DSLR"],
  ["스피커", "이어폰", "헤드폰", "마이크"],
  ["플레이스테이션", "닌텐도", "Wii", "XBOX", "기타"],
];

const Write = () => {
  const [btListPk, setBtListPk] = useState(btlist);
  const [selectCate, setSelectCate] = useState(0);
  const [changebtn, setChangeBtn] = useState([0, 1, 2, 3, 4]);
  const [btData, setBtData] = useState([]);

  //엑시오스연동
  const [mainPic, setMainpic] = useState("");
  const [pics, setPics] = useState([]);
  const [dto, setDto] = useState();

  useEffect(() => {
    setBtData(btListPk[selectCate]);
  }, [selectCate]);

  // 이미지 업로드
  const [imageBefore, setImageBefore] = useState([]);
  const [uploadImgBefore, setUploadImgBefore] = useState(
    `${process.env.PUBLIC_URL}/images/join/join_img.svg`,
  );
  const [fileCount, setFileCount] = useState(0);
  const [uploadImgBeforeFile, setUploadImgBeforeFile] = useState(null);
  const handleChangeFileOne = e => {
    const file = e.target.files[0];
    if (file && imageBefore.length < 10) {
      // 미리보기
      const tempUrl = URL.createObjectURL(file);
      setUploadImgBefore(tempUrl);
      // FB 파일을 보관
      setUploadImgBeforeFile(file); // 파일 1개 추가 끝
      setImageBefore(prevImages => [...prevImages, tempUrl]);
      setFileCount(prev => prev + 1); // 파일 추가 되었어요.
    }
  };

  useEffect(() => {
    console.log(imageBefore);
  }, [imageBefore]);

  //버튼 클릭시 함수 호출
  const handleButtonClick = num => {
    // 상태 업데이트
    setSelectCate(num);
    // 주메뉴가 눌려지면 항상 서브메뉴들은 초기화 한다.
    setChangeBtn(null);
  };
  const handleChangeBtn = item => {
    setChangeBtn(item);
  };

  // 1. useForm 을 활용
  // register 는 폼의 name 값 셋팅 및 읽기기능
  // handleSubmit 은 폼의 상태 변화 및 완료시 실행이 됩니다.
  const { register, handleSubmit } = useForm({
    mode: "onChange",
  });

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

  // textare 길이
  const [textareaValue, setTextareaValue] = useState("");
  const [textareaValues, setTextareaValues] = useState("");

  const handleTextareaChange = event => {
    const value = event.target.value;
    setTextareaValue(value);
  };

  // 확인 버튼 선택시 실행
  const handleSubmitMy = data => {
    console.log(data);
  };
  // 범위 선정
  const [value, setValue] = useState(50); //초기값
  // 글자수제한
  const [inputValue, setInputValue] = useState("");

  const handleChange = e => {
    // parseInt(파싱인트) = 문자열 정수 변환
    let inputValue = parseInt(e.target.value, 10);
    // 범위 제한
    if (!isNaN(inputValue) && inputValue >= 50 && inputValue <= 100) {
      inputValue = Math.round(inputValue / 10) * 10; //10 배수 증가
      setValue(inputValue);
    }
  };
  const handleDecrease = () => {
    setValue(prevValue => (prevValue > 50 ? prevValue - 10 : prevValue));
  };
  const handleIncrease = () => {
    setValue(prevValue => (prevValue < 100 ? prevValue + 10 : prevValue));
  };
  const handleInputChange = event => {
    // 최대 50글자까지만 입력을 허용
    const newValue = event.target.value.slice(0, 50);
    setInputValue(newValue);
  };
  const handleInputChangs = event => {
    // 최대 50글자까지만 입력을 허용
    const newValue = event.target.value.slice(0, 50);
    setTextareaValues(newValue);
  };

  const handleInputAction = event => {
    // 최대 1500글자까지만 입력을 허용
    const newValue = event.target.value.slice(0, 1500);
    setInputValue(newValue);
  };
  // const validationSchema = yup.object().shape({
  //   // photo: yup
  //   //   .string()
  //   //   .required("사진을 선택해주세요."),
  //   title: yup
  //     .string()
  //     .max(50, "50자까지만 입력하세요 ")
  //     .required("닉네임은 필수 입력 사항입니다."),
  //   userId: yup
  //     .string()
  //     .max(15, "15자까지만 입력하세요 ")
  //     .required("아이디는 필수 입력 사항입니다."),
  //   password: yup
  //     .string()
  //     .required("비밀번호는 필수 입력 사항입니다.")
  //     .min(8, "8자 이상 입력하세요.")
  //     .max(15, "15자까지만 입력하세요 "),
  //   confirmPassword: yup
  //     .string()
  //     .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다.")
  //     .required("비밀번호 확인은 필수 입력 사항입니다."),

  //   email: yup
  //     .string()
  //     .email("이메일 형식이 올바르지 않습니다.")
  //     .required("이메일은 필수 입력 사항입니다."),
  // });

  return (
    <Layout>
      <SideBar />
      <AllWidth>
        <div>
          <Mytitle title={"기본 정보"} />
        </div>
        <div>
          <form onSubmit={handleSubmit(handleSubmitMy)}>
            <ListDiv>
              <label htmlFor="img">
                <p>사진</p> <p>*</p> <span>({imageBefore.length}/10)</span>
              </label>
              <div>
                <ProductImgBt
                  type="button"
                  onClick={() => {
                    document.getElementById("img").click();
                  }}
                >
                  <img src={uploadImgBefore} alt="" />
                </ProductImgBt>
                <input
                  type="file"
                  accept="image/png, image/gif, image/jpeg"
                  onClick={() => {
                    document.getElementById("img").click();
                  }}
                  onChange={event => {
                    handleChangeFileOne(event, "before");
                  }}
                  id="img"
                  style={{ display: "none" }}
                />
              </div>
              <ProductImgMap>
                {imageBefore.map((item, index) => (
                  <div key={index}>
                    <img src={item} alt="" />
                  </div>
                ))}
              </ProductImgMap>
            </ListDiv>
            <ListDiv>
              <div>
                <label htmlFor="product">
                  <p>상품명</p> <p>*</p>
                </label>
              </div>
              <div>
                <input
                  type="text"
                  value={textareaValues}
                  onChange={handleInputChangs}
                  maxLength={50}
                  id="product"
                  placeholder="상품을 입력해주세요"
             
                />

                <h2>({textareaValues.length}/50)</h2>
              </div>
            </ListDiv>
            <ListDiv>
              <label>
                <p>카테고리</p> <p>*</p>
              </label>
              <div>
                <BtWrap>
                  <ul>
                    <li>
                      <BtnColor
                        type="button"
                        clickbtn={selectCate === 0}
                        onClick={() => {
                          handleButtonClick(0);
                        }}
                      >
                        스마트기기
                      </BtnColor>
                    </li>
                    <li>
                      <BtnColor
                        type="button"
                        clickbtn={selectCate === 1}
                        onClick={() => {
                          handleButtonClick(1);
                        }}
                      >
                        pc/노트북
                      </BtnColor>
                    </li>
                    <li>
                      <BtnColor
                        type="button"
                        clickbtn={selectCate === 2}
                        onClick={() => {
                          handleButtonClick(2);
                          // handleChangeBtn(2);
                        }}
                      >
                        영상카메라
                      </BtnColor>
                    </li>
                    <li>
                      <BtnColor
                        type="button"
                        clickbtn={selectCate === 3}
                        onClick={() => {
                          handleButtonClick(3);
                          // handleChangeBtn(3);
                        }}
                      >
                        음향
                      </BtnColor>
                    </li>
                    <li>
                      <BtnColor
                        type="button"
                        clickbtn={selectCate === 4}
                        onClick={() => {
                          handleButtonClick(4);
                          // handleChangeBtn(4);
                        }}
                      >
                        게임 기기
                      </BtnColor>
                    </li>
                  </ul>
                </BtWrap>
                <BtWrap>
                  <ul>
                    {btData.map((item, index) => (
                      <li key={index}>
                        <BtnColorSub
                          type="button"
                          clickbtn={changebtn === item}
                          onClick={() => {
                            handleChangeBtn(item);
                          }}
                        >
                          {item}
                        </BtnColorSub>
                      </li>
                    ))}
                  </ul>
                </BtWrap>
              </div>
            </ListDiv>
            <ListDiv>
              <label htmlFor="price">
                <p>대여가격</p> <p>*</p>
              </label>
              <div>
                <input
                  type="number"
                  id="price"
                  placeholder="₩ 대여 가격을 입력해주세요"
                />
              </div>
            </ListDiv>
            <ListDiv direction={"column"}>
              <label htmlFor="detail">
                <p>상품내용</p> <p>*</p>
              </label>
              <div>
                <textarea
                  id="detail"
                  placeholder="구매시기, 브랜드/모델명, 제품의 상태 (사용감,하자 유무) 등을 입력해 주세요."
                  value={textareaValue}
                  onChange={e => {
                    handleTextareaChange(e);
                    handleInputAction(e);
                  }}
                />
                <h2>({textareaValue.length}/1500)</h2>
              </div>
            </ListDiv>
            <ListDiv>
              <label>
                <p>가격</p> <p>*</p>
              </label>
              <PriceDiv>
                <div>
                  <div>
                    <input type="number" placeholder="숫자만 입력" />
                    <span>원</span>
                  </div>
                  <p>제품의 가격을 입력해주세요</p>
                </div>
                <div>
                  <div>
                    <input
                      type="number"
                      value={value}
                      onChange={handleChange}
                      min="50"
                      max="100"
                      step="10"
                      placeholder="숫자만 입력"
                    />
                    <button onClick={handleIncrease}>증가</button>
                    <button onClick={handleDecrease}>감소</button>
                    <span>%</span>
                  </div>
                  <p>50 ~ 100% 보증금</p>
                </div>
                <div>
                  <div>
                    <input type="number" placeholder="숫자만 입력" />
                    <span>원</span>
                  </div>
                  <p>1일 대여가격</p>
                </div>
              </PriceDiv>
            </ListDiv>
            <ListDiv>
              <label htmlFor="quantity">
                <p>소유수량</p> <p>*</p>
              </label>
              <div>
                <input
                  className="showSpinner"
                  type="number"
                  id="quantity"
                  placeholder="숫자만 입력"
                />
              </div>
            </ListDiv>
            <ListDiv>
              <label htmlFor="dateInput">
                <p>제품 구매일</p> <p>*</p>
              </label>
              <div>
                <MyDatePicker />
              </div>
            </ListDiv>
            <ListDiv>
              <label htmlFor="rentalday">
                <p>거래 가능 날짜</p> <p>*</p>
              </label>
              <div>
                <Calendar marginBottom={"0"} />
              </div>
            </ListDiv>
            <ListDiv direction={"column"}>
              <label htmlFor="adress">
                <p>주소</p> <p>*</p>
              </label>
              <div>
                <input
                  type="text"
                  {...register("address")}
                  value={calendarLocation}
                  placeholder="주소 검색을 해주세요."
                  onClick={handleClickButton}
                  id="adress"
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
              </div>
            </ListDiv>
          </form>
        </div>
        <BtSection>
          <CancelBt type="button">취소</CancelBt>
          <SaveBt type="button">저장</SaveBt>
        </BtSection>
      </AllWidth>
    </Layout>
  );
};

export default Write;
