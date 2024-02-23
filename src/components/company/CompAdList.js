import React, { useEffect, useState } from "react";
import {
    CompManagementBt,
  CompManagementBtHover,
  MyListBottom,
  MyListDiv,
  MyListMid,
  MyListMidEnd,
  MyListMidImg,
  MyListMidLast,
  MyListMidTxt,
  MyListTop,
} from "../../styles/my/MyList";
import { getMyRental } from "../../api/my/my_api";
import { Link } from "react-router-dom";
import MyMoreButton from "../my/MyMoreButton";

const CompAdList = ({ activeBtn }) => {
  const [data, setData] = useState([]);
  const [viewMore, setViewMore] = useState(3);

  const handleLoadMore = () => {
    setViewMore(prevViewMore => prevViewMore + 3);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        let result;
        if (activeBtn === "진행 광고 조회") {
          result = await getMyRental(1, 1);
        } else if (activeBtn === "종료 광고 조회") {
          result = await getMyRental(1, 1);
        } 
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
        {activeBtn === "진행 광고 조회" ? <h2>진행 광고</h2> : <h2>종료 광고</h2>}
      </MyListTop>
      {data &&
        data.slice(0, viewMore).map((item, index) => (
          <React.Fragment key={index}>
            {activeBtn === "진행 광고 조회" ? (
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
                    <div>
                        <CompManagementBtHover>광고 철회</CompManagementBtHover>
                    </div>
                  </MyListMidLast>
                </MyListMid>
            ) : (
                <MyListMid>
                  <Link to={`/details/${item.icategory.mainCategory}/${item.icategory.subCategory}/${item.iproduct}`}>
                    <MyListMidEnd />
                    <h2>종 료 광 고</h2>
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
                  </Link>
                  <MyListMidLast >
                      <div>
                        <CompManagementBt>광고 등록</CompManagementBt>
                      </div>
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

export default CompAdList;
