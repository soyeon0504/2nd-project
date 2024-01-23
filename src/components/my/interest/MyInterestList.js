import React from "react";
import { MyListBottom, MyListDiv, MyListMid, MyListMidImg, MyListMidLast, MyListMidTxt, MyListTop, MyListTopButton } from "../../../styles/my/MyList";


const MyInterestList = () => {

  const mylistmid = [
    {
      pic: "/images/kong.jpg",
      title: "갤럭시 워치 4 골프 에디션 4 - 44mm 블루투스 (블랙 에디션)",
      price: "260,000 원",
      rentalDuration: "대여 기간 : 2024-01-11 ~ 2024-01-31 (21일)",
      contents:
        "친절하게 구매 물품 확인해 주셨습니다. 안전하게 포장하여 당일 배송해 주셨습니다. 신뢰할 수 있는 판매자입니다...",
      deposit: "대구광역시 달서구 대곡동",
      rentalStartDate: "2024-01-05"
    },
    {
      pic: "/images/kong.jpg",
      title: "다른 상품 제목",
      price: "200,000 원",
      rentalDuration: "대여 기간 : 2024-02-01 ~ 2024-02-15 (15일)",
      contents: "다른 사용자의 후기 및 내용",
      deposit: "다른 지역의 예치 장소",
      rentalStartDate: "2024-01-13"
    },
    {
      pic: "/images/kong.jpg",
      title: "또 다른 상품 제목",
      price: "450,000 원",
      rentalDuration: "대여 기간 : 2024-02-16 ~ 2024-02-28 (13일)",
      contents: "다른 사용자의 후기 및 내용",
      deposit: "다른 지역의 예치 장소",
      rentalStartDate: "2024-01-24"
    },
  ];

  return (
    <MyListDiv>
      <MyListTop>
        <h2>관심 목록</h2>
        <div>
        </div>
      </MyListTop>
      {mylistmid.map((item, index) => (
        <React.Fragment key={index}>
          <MyListMid>
          <MyListMidImg>
            <img src={item.pic} alt={item.title} />
          </MyListMidImg>
          <MyListMidTxt>
            <div>
              <h2>{item.title}</h2>
            </div>
            <div>
              <p>{item.price}</p>
            </div>
            <div>
              <span>{item.deposit}</span>
            </div>
          </MyListMidTxt>
          <MyListMidLast>
            <button>
              <img src="/images/main/heart_hover.svg"/>
            </button>
          </MyListMidLast>
        </MyListMid>
        </React.Fragment> 
      ))}
      <MyListBottom>
        <button>MORE</button>
      </MyListBottom>
    </MyListDiv>
  );
};

export default MyInterestList;
