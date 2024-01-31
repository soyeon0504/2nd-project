import React, { useEffect, useState } from 'react'
import Layout from '../../layouts/Layout';
import { SideBar } from '../../components/SideBar';
import Mytitle from '../../components/my/Mytitle';
import { useForm } from 'react-hook-form';
import MyDatePicker from './MyDatePicker';
import { BtSection, CancelBt, SaveBt } from '../../styles/join/JoinPageStyle';
import { Modal } from '../../components/address/Address';
import DaumPostcode from 'react-daum-postcode';
import Calendar from '../../components/details/Calendar';
import { AllWidth, BtWrap, BtnColor, BtnColorSub, ListDiv, PriceDiv, ProductImgBt, ProductImgMap, ProductImgMapBt } from '../../styles/productsStyle';

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
    const [btData, setBtData] = useState([])

    useEffect(() => {
        setBtData(btListPk[selectCate])
    }, [selectCate]);

    // 이미지 업로드
  const [imageBefore, setImageBefore] = useState([])
  const [uploadImgBefore, setUploadImgBefore] = useState(`${process.env.PUBLIC_URL}/images/join/join_img.svg`);
  const [fileCount, setFileCount] = useState(0);
  const [uploadImgBeforeFile, setUploadImgBeforeFile] = useState(null);
  const handleChangeFileOne = e => {
    const file = e.target.files[0];
    if (file&& imageBefore.length < 10) {
      // 미리보기
      const tempUrl = URL.createObjectURL(file);
      // setUploadImgBefore(tempUrl);
      // FB 파일을 보관
      setUploadImgBeforeFile(file); // 파일 1개 추가 끝
      setImageBefore((prevImages) => [...prevImages, tempUrl]);
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

    const handleTextareaChange = (event) => {
        const value = event.target.value;
        setTextareaValue(value);
    };

      // 확인 버튼 선택시 실행
    const handleSubmitMy = data => {
        console.log(data);
    };

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
                    <label htmlFor="product">
                        <p>상품명</p> <p>*</p>
                    </label>
                    <div>
                        <input
                            type="text"
                            id="product"
                            placeholder="상품을 입력해주세요"
                        />
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
                            onChange={handleTextareaChange}
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
                            <input
                                type="number"
                                placeholder="숫자만 입력"
                            />
                            <span>원</span>
                           </div>
                            <p>제품의 가격을 입력해주세요</p>
                        </div>
                        <div>
                        <div>
                            <input
                                type="number"
                                placeholder="숫자만 입력"
                            />
                            <span>%</span>
                           </div>
                            <p>50 ~ 100% 보증금</p>
                        </div>
                        <div>
                        <div>
                            <input
                                type="number"
                                placeholder="숫자만 입력"
                            />
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
                            className='showSpinner'
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
                        <Calendar marginBottom={"0"}/>
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
                            id='adress'
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
            <CancelBt type="button">
                취소
            </CancelBt>
            <SaveBt type="button">
                저장
            </SaveBt>
        </BtSection>
    </AllWidth>
    </Layout>
  )
}

export default Write