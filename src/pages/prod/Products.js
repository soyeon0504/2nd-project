import { DatePicker } from "antd";
import React, { useEffect, useState } from "react";

const initState = [
  ["스마트워치", "태블릿", "갤럭시", "아이폰"],
  ["노트북", "PC", "마우스", "키보드"],
  ["빔프로젝터", "셋톱박스", "카메라", "캠코더", "DSLR"],
  ["스피커", "이어폰", "헤드폰", "마이크"],
  ["플레이스테이션", "닌텐도", "Wii", "XBOX", "기타"],
];
const Products = () => {
  //리스트 아이탬 state
  const [listItems, setListItems] = useState(initState);
  const [selectCate, setSelectCate] = useState(0);
  const [goods, setGoods] = useState([]);

  const [startDate, setStartDate] = useState(new Date());
  //이미지 파일이 담을 state
  const [image, setImage] = useState(null);

  useEffect(() => {
    // console.log(1);
    // goods 라는 배열에 내용을 넣는다.
    // goods 배열은 초기 데이터(listIems) 배열에서 [인덱스] 를 활용해서
    // 업데이트 했다.
    // selectCate 의 값이 바뀌면 goods 업데이트 됩니다.
    setGoods(listItems[selectCate]);
  }, [selectCate]);

  //버튼 클릭시 함수 호출
  const handleButtonClick = num => {
    // const newIem = `아이템 ${listItems.length + 1}`;
    // const newList = [...listItems, newIem];
    // 상태 업데이트
    setSelectCate(num);
  };
  return (
    <div>
      <form>
        <label htmlFor="picture">
          <p>사진</p> <p>*</p> <p>0/10</p>
        </label>
        <input type="file" accept="jpg,svg" name="picture" id="picture" />
        {image && (
          <img src={image} alt="Preview" style={{ maxWidth: "100%" }} />
        )}
        <ladel htmlFor="jepum">
          <p>상품명</p> <p>*</p>
        </ladel>
        <input
          type="text"
          name="jepum"
          id="jepum"
          placeholder="상품을 입력해주세요"
        />
        <div>
          <button type="button" onClick={() => handleButtonClick(0)}>
            스마트기기
          </button>
          <button type="button" onClick={() => handleButtonClick(1)}>
            pc/노트북
          </button>
          <button type="button" onClick={() => handleButtonClick(2)}>
            영상카메라
          </button>
          <button type="button" onClick={() => handleButtonClick(3)}>
            음향
          </button>
          <button type="button" onClick={() => handleButtonClick(4)}>
            게임 기기
          </button>
        </div>
        <div>
          <ul>
            {goods.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <label htmlFor="price">
          <p>대여가격</p>
          <p>*</p>
        </label>
        <input
          type="text"
          placeholder="₩ 대여 가격"
          name="price"
          id="price"
        ></input>
        <p>상품내용</p>
        <p>*</p>
        <input
          type="text"
          placeholder="구매시기,브랜드/모델명,제품의 상태(사용감,하자유무를)등 입력 해주세요"
        ></input>
        <ladel htmlFor="amount">
          <p>보증금</p>
          <p>*</p>
        </ladel>
        <input
          type="text"
          placeholder="원금의 30~50% / 원금을 적으면 금액선정이 자동으로 됩니다. "
          name="amount"
          id="amount"
        />
        <ladel htmlFor="days">
          <p>제품구매일</p>
          <p>*</p>
        </ladel>
        {/* <input
          type="date"
          placeholder="제품 구매년도를 입력해주세요.   예) 2017년 12월 / 2015년 6월 19일"
          name="days"
          id="days"
        /> */}
        <DatePicker
          dateFormat="yyyy/MM/dd"
          selected={startDate}
          onChange={date => setStartDate(date)}
        />
        <ladel htmlFor="address">
          <p>거래가능주소</p>
          <p>*</p>
        </ladel>
        <input
          type="text"
          placeholder="거래 가능 주소를 입력해주세요.   예) 대구광역시 달서구 월성동"
          name="address"
          id="addtess"
        />
      </form>
    </div>
  );
};

export default Products;
