import React, { useEffect, useState } from "react";
import {
  MyListBottom,
  MyListDiv,
  MyListMid,
  MyListMidEnd,
  MyListMidImg,
  MyListMidLast,
  MyListMidTxt,
  MyListProfileImg,
  MyListTop,
  MyListTopButton,
  MyManagementBt,
  MyManagementBtHover,
  MyReservationBtDiv,
} from "../../../styles/my/MyList";
import { Link } from "react-router-dom";
import MyMoreButton from "../MyMoreButton";
import { getMyRental } from "../../../api/my/my_api";

const MyReservationList = ({ activeBtn }) => {
  const [activeButton, setActiveButton] = useState(true);
  const [data, setData] = useState([]);
  const [viewMore, setViewMore] = useState(3);

  const handleButtonClick = buttonType => {
    setActiveButton(buttonType);
  };

  const handleLoadMore = () => {
    setViewMore(prevViewMore => prevViewMore + 3);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        let result;
        if (activeBtn === "예약 내역" && activeButton === true) {
          result = await getMyRental(1, 1);
        } else if (activeBtn === "예약 내역" && activeButton === false) {
          result = await getMyRental(1, 2);
        } 
        setData(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [activeButton, activeBtn]);

  return (
    <MyListDiv>
      <MyListTop>
        <h2>예약 내역</h2>
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
      {data &&
        data.slice(0, viewMore).map((item, index) => (
          <React.Fragment key={index}>
            {activeBtn === "예약 내역" && (
                <MyListMid>
                  <Link to={`/details/${item.icategory.mainCategory}/${item.icategory.subCategory}/${item.iproduct}`}>
                    <MyListMidImg>
                      <img
                        src={`/pic/${item.productStoredPic}`}
                        alt={item.title}
                      />
                    </MyListMidImg>
                    <MyListMidTxt>
                      <div>
                        <h2>{item.title}</h2>
                      </div>
                      <div>
                        <p>{item.price} 원</p>
                      </div>
                      <div>
                        <span>
                          대여기간 : {item.rentalStartDate} ~ {item.rentalEndDate}{" "}
                          ({item.rentalDuration}일)
                        </span>
                      </div>
                    </MyListMidTxt>
                  </Link>
                  <MyListMidLast size={"1.2rem"}>
                    <p>{item.rentalStartDate}</p>
                    <MyReservationBtDiv>
                        <MyManagementBt>취소</MyManagementBt>
                        <MyManagementBtHover>결제</MyManagementBtHover>
                    </MyReservationBtDiv>
                  </MyListMidLast>
                </MyListMid>
            )}
          </React.Fragment>
        ))}

      <MyListBottom>
        <MyMoreButton handleLoadMore={handleLoadMore} />
      </MyListBottom>
    </MyListDiv>
  );
};

export default MyReservationList;

