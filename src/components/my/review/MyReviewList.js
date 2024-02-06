import React, { useEffect, useState } from "react";
import {
  MyListBottom,
  MyListDiv,
  MyListMid,
  MyListMidImg,
  MyListMidLast,
  MyListMidTxt,
  MyListProfileImg,
  MyListTop,
  MyListTopButton,
  MyProfileDiv,
  MyStarDiv,
} from "../../../styles/my/MyList";
import MyMoreButton from "../MyMoreButton";
import { getMyReview, getProdReview } from "../../../api/my/my_api";
import StarRatined from "../StarRatined";
import styled from "@emotion/styled";
import { get } from "react-hook-form";
import { Link } from "react-router-dom";

const MyReviewList = ({ activeBtn }) => {
  const [data, setData] = useState([]);
  const [viewMore, setViewMore] = useState(3);

  const handleLoadMore = () => {
    setViewMore(prevViewMore => prevViewMore + 3);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        let result;
        if (activeBtn === "내 작성 후기") {
          result = await getMyReview(1);
        } else if (activeBtn === "내 상품 후기") {
          result = await getProdReview();
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
        {activeBtn === "내 작성 후기" ? (
          <h2>내 작성 후기</h2>
        ) : (
          <h2>내 상품 후기</h2>
        )}
        <div></div>
      </MyListTop>
      {data &&
        data.slice(0, viewMore).map((item, index) => (
          <React.Fragment key={index}>
            {activeBtn === "내 작성 후기" && item.icategory ? (
              <Link
                to={`/details/${item.icategory.mainCategory}/${item.icategory.subCategory}/${item.iproduct}`}
              >
                <MyListMid>
                  <MyListMidImg>
                    <img src={`/pic/${item.prodPic}`} alt={item.title} />
                  </MyListMidImg>
                  <MyListMidTxt>
                    <div>
                      <h2>{item.title}</h2>
                    </div>
                    <MyStarDiv>
                      <StarRatined totalStars={item.raiting} />
                    </MyStarDiv>
                    <div>
                      <span>{item.contents}</span>
                    </div>
                  </MyListMidTxt>
                  <MyListMidLast location={"center"} size={"1.2rem"}>
                    <p>작성자</p>
                    <MyListProfileImg>
                      <img src={`/pic/${item.loginedUserPic}`} />
                    </MyListProfileImg>
                    <span>{item.nick}</span>
                  </MyListMidLast>
                </MyListMid>
              </Link>
            ) : (
              <Link
                to={`/details/${item.imainCategory}/${item.isubCategory}/${item.iproduct}`}
              >
                <MyListMid>
                  <MyProfileDiv>
                    <p>작성자</p>
                    <MyListProfileImg>
                      <img src={`/pic/${item.userProfPic}`} />
                    </MyListProfileImg>
                    <span>{item.nick}</span>
                  </MyProfileDiv>
                  <MyListMidTxt>
                    <MyStarDiv>
                      <StarRatined totalStars={item.rating} />
                    </MyStarDiv>
                    <div>
                      <span>{item.contents}</span>
                    </div>
                  </MyListMidTxt>
                  <MyListMidLast>
                    <Link to={"/"}>
                      <p>내 상품 바로가기</p>
                    </Link>
                  </MyListMidLast>
                </MyListMid>
              </Link>
            )}
          </React.Fragment>
        ))}
      <MyListBottom>
        <MyMoreButton
          handleLoadMore={handleLoadMore}
          display={"flex"}
          marginleft={"0px"}
        />
      </MyListBottom>
    </MyListDiv>
  );
};

export default MyReviewList;
