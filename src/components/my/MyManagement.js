import React, { useEffect, useState } from "react";
import {
  MyListBottom,
  MyListDiv,
  MyListMid,
  MyListMidImg,
  MyListMidLast,
  MyListMidTxt,
  MyListTop,
  MyManagementBt,
  MyManagementBtHover,
  MyReservationBtDiv,
} from "../../styles/my/MyList";
import MyMoreButton from "./MyMoreButton";
import { getMyRental } from "../../api/my/my_api";
import { Link } from "react-router-dom";
import { deleteProduct } from "../../api/details/details_api";

const MyManagement = ({ activeBtn }) => {
  const [activeButton, setActiveButton] = useState(true);
  const [data, setData] = useState([]);
  const [viewMore, setViewMore] = useState(3);

  const handleLoadMore = () => {
    setViewMore(prevViewMore => prevViewMore + 3);
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
        {activeBtn === "등록 상품 관리" && <h2>등록 상품 관리</h2>}
        {activeBtn === "등록 게시글" && <h2>등록 게시글</h2>}
      </MyListTop>
      {data &&
        data.slice(0, viewMore).map((item, index) => (
          <React.Fragment key={index}>
             {activeBtn === "등록 상품 관리" ? (
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
                  <MyListMidLast>
                    <p>{item.rentalStartDate}</p>
                    <MyReservationBtDiv>
                      <MyManagementBt>수정</MyManagementBt>
                      <MyManagementBtHover onClick={() => handleDeleteProduct(item.iproduct)}>삭제</MyManagementBtHover>
                    </MyReservationBtDiv>
                  </MyListMidLast>
                </MyListMid>
             ) : (
              <MyListMid>
                  <Link to={`/details/${item.icategory.mainCategory}/${item.icategory.subCategory}/${item.iproduct}`}>
                    <MyListMidImg>
                      <img
                        src={`/pic/${item.productStoredPic}`}
                        alt={item.title}
                      />
                    </MyListMidImg>
                    <MyListMidTxt height={"2rem"}>
                      <div>
                        <h2>{item.title}</h2>
                      </div>
                      <div>
                        <dt>
                          유리 깨끗하고 테두리는 생활기스 있지만 상태좋습니다
                          사진으로 잘 보일 겁니다.
                          확인해보세요.유리 깨끗하고 테두리는 생활기스 있지만 상태좋습니다
                          사진으로 잘 보일 겁니다.
                          확인해보세요 제발 유리 깨끗하고 테두리는 생활기스 있지만 상태좋습니다
                          사진으로 잘 보일 겁니다.
                          확인해보세요 제발
                        </dt>
                      </div>
                    </MyListMidTxt>
                  </Link>
                  <MyListMidLast>
                    <p>{item.rentalStartDate}</p>
                    <MyReservationBtDiv>
                      <MyManagementBt>수정</MyManagementBt>
                      <MyManagementBtHover onClick={() => handleDeleteProduct(item.iproduct)}>삭제</MyManagementBtHover>
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

export default MyManagement;
