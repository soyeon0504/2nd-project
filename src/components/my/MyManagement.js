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
} from "../../styles/my/MyList";
import ReviewForm from "../details/ReviewForm";
import MyMoreButton from "./MyMoreButton";
import { getMyBuySell, getMyRental } from "../../api/my/my_api";
import { Link, useParams } from "react-router-dom";
import { deleteProduct } from "../../api/details/details_api";

const MyManagement = ({ activeBtn }) => {
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

  const handleDeleteProduct = async (iproduct) => {
    const confirmDelete = window.confirm("삭제 하시겠습니까?");
    if (confirmDelete) {
      try {
        await deleteProduct(iproduct);
        console.log("Product deleted successfully");
      } catch (error) {
        console.error("Error deleting product:", error);
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getMyRental(1, 1);
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
        <h2>등록 상품 관리</h2>
      </MyListTop>
      {data &&
        data.slice(0, viewMore).map((item, index) => (
          <React.Fragment key={index}>
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
                  <MyListMidLast direction={"row"}>
                    <MyManagementBt>수정</MyManagementBt>
                    <MyManagementBtHover onClick={() => handleDeleteProduct(item.iproduct)}>삭제</MyManagementBtHover>
                  </MyListMidLast>
                </MyListMid>
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

export default MyManagement;
