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
} from "../../styles/my/MyList";
import ReviewForm from "../details/ReviewForm";
import MyMoreButton from "./MyMoreButton";
import { getMyBuySell, getMyRental } from "../../api/my/my_api";
import { Link } from "react-router-dom";

const MyList = ({ activeBtn }) => {
  const [activeButton, setActiveButton] = useState(true);
  const [data, setData] = useState([]);
  const [viewMore, setViewMore] = useState(3);
  const [isReviewFormOpen, setIsReviewFormOpen] = useState(false);
  const [selectedPaymentId, setSelectedPaymentId] = useState(null);

  const handleButtonClick = buttonType => {
    setActiveButton(buttonType);
  };

  const handleLoadMore = () => {
    setViewMore(prevViewMore => prevViewMore + 3);
  };

  const openReviewForm = paymentId => {
    setSelectedPaymentId(paymentId);
    setIsReviewFormOpen(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        let result;
        if (activeBtn === "대여중" && activeButton === true) {
          result = await getMyRental(1, 1);
        } else if (activeBtn === "대여중" && activeButton === false) {
          result = await getMyRental(1, 2);
        } else if (activeBtn === "대여 완료" && activeButton === true) {
          result = await getMyRental(1, 1);
          result = result.filter(item => item.istatus === 1);
        } else if (activeBtn === "대여 완료" && activeButton === false) {
          result = await getMyRental(1, 2);
          result = result.filter(item => item.istatus === 1);
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
        {activeBtn === "대여중" ? <h2>대여중</h2> : <h2>대여완료</h2>}
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
            {activeBtn === "대여중" ? (
              <Link
                to={`/details/${item.icategory.mainCategory}/${item.icategory.subCategory}/${item.iproduct}`}
              >
                <MyListMid>
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
                  <MyListMidLast>
                    <button onClick={() => openReviewForm(item.ipayment)}>
                      리뷰 등록
                    </button>
                  </MyListMidLast>
                </MyListMid>
              </Link>
            ) : (
              <Link
                to={`/details/${item.icategory.mainCategory}/${item.icategory.subCategory}/${item.iproduct}`}
              >
                <MyListMid>
                  <MyListMidEnd />
                  <h2>반 납 완 료</h2>
                  <MyListMidImg>
                    <img
                      src={`/pic/${item.productStoredPic}`}
                      alt={item.ipayment}
                    />
                  </MyListMidImg>
                  <MyListMidTxt>
                    <div>
                      <h2>{item.title}</h2>
                    </div>
                    <div>
                      <p>{item.price} 원 </p>
                    </div>
                    <div>
                      <span>
                        대여기간 : {item.rentalStartDate} ~ {item.rentalEndDate}{" "}
                        ({item.rentalDuration}일)
                      </span>
                    </div>
                  </MyListMidTxt>
                  <MyListMidLast location={"center"} size={"1.2rem"}>
                    <p>거래자</p>
                    <MyListProfileImg>
                      <img src={`/pic/${item.userStoredPic}`} />
                    </MyListProfileImg>
                    <span>{item.targetNick}</span>
                  </MyListMidLast>
                </MyListMid>
              </Link>
            )}
          </React.Fragment>
        ))}

      <MyListBottom>
        <MyMoreButton handleLoadMore={handleLoadMore} />
      </MyListBottom>
      {isReviewFormOpen && (
        <ReviewForm
          isOpen={isReviewFormOpen}
          onRequestClose={() => setIsReviewFormOpen(false)}
          ipayment={selectedPaymentId}
        />
      )}
    </MyListDiv>
  );
};

export default MyList;
