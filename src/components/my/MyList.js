import React, { useEffect, useState } from "react";
import {
  MyListBottom,
  MyListDiv,
  MyListMid,
  MyListMidEnd,
  MyListMidImg,
  MyListMidLast,
  MyListMidTxt,
  MyListTop,
  MyListTopButton,
} from "../../styles/my/MyList";
import MyMoreButton from "./MyMoreButton";
import { getMyRental } from "../../api/my/my_api";

const MyList = ({ activeBtn }) => {
  const [activeButton, setActiveButton] = useState(true);
  const [data, setData] = useState([]);

  const handleButtonClick = buttonType => {
    setActiveButton(buttonType);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result =
          activeBtn === "대여중"
            ? await getMyRental(1, 1, setData)
            : await getMyRental(1, 2, setData);
        setData(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [activeBtn]);

  return (
    <MyListDiv>
      <MyListTop>
        { activeBtn === "대여중" ? <h2>대여중</h2> : <h2>대여완료</h2>}
        <div>
          <MyListTopButton
           selected={activeButton}
            onClick={() => handleButtonClick(true)}
          >
            구매
          </MyListTopButton>
          <MyListTopButton
            selected={!activeButton}
            onClick={() => handleButtonClick(false)}
          >
            판매
          </MyListTopButton>
        </div>
      </MyListTop>
      {data.map((item, index) => (
        <React.Fragment key={index}>
          { activeBtn === "대여중" ? (
          <MyListMid>
          <MyListMidImg>
            <img src={item.productStoredPic} alt={item.title} />
          </MyListMidImg>
          <MyListMidTxt>
            <div>
              <h2>{item.title}</h2>
            </div>
            <div>
              <p>{item.price}</p>
            </div>
            <div>
              <span>대여기간 : {item.rentalDuration}</span>
            </div>
          </MyListMidTxt>
          <MyListMidLast>
            <p>더보기</p>
          </MyListMidLast>
        </MyListMid>
         ) : (
          <MyListMidEnd>
            <h2>반 납 완 료</h2>
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
                <span>{item.rentalDuration}</span>
              </div>
            </MyListMidTxt>
            <MyListMidLast>
              <p>더보기</p>
            </MyListMidLast>
          </MyListMidEnd>
         )}
        </React.Fragment> 
      ))}
      <MyListBottom>
        <MyMoreButton />
      </MyListBottom>
    </MyListDiv>
  );
};

export default MyList;
