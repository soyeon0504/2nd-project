import React, { useEffect, useState } from "react";
import { MyListBottom, MyListDiv, MyListMid, MyListMidImg, MyListMidLast, MyListMidTxt, MyListProfileImg, MyListTop, MyListTopButton, MyStarDiv } from "../../../styles/my/MyList";
import MyMoreButton from "../MyMoreButton";
import { getMyReview } from "../../../api/my/my_api";
import StarRatined from "../StarRatined";
import styled from "@emotion/styled";
import { get } from "react-hook-form";


const MyReviewList = ({ activeBtn }) => {
  const [data, setData] = useState([]);
  const [viewMore, setViewMore] = useState(3);

  const handleLoadMore = () => {
    setViewMore((prevViewMore) => prevViewMore + 3);
  };

  useEffect(()=> {
    const fetchData = async () => {
      try {
        let result;
        if (activeBtn === "내 작성 후기") {
          result = await getMyReview(1);
        } else if (activeBtn === "내 상품 후기") {
          result = await getMyReview(1,1)
        }
        setData(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  },[activeBtn])

  return (
    <MyListDiv>
      <MyListTop>
        { activeBtn === "내 작성 후기" ? <h2>내 작성 후기</h2> : <h2>내 상품 후기</h2>}
        <div>
        </div>
      </MyListTop>
      {data && data.slice(0, viewMore).map((item, index) => (
        <React.Fragment key={index}>
          { activeBtn === "내 작성 후기" ? (
          <MyListMid>
          <MyListMidImg>
            <img src={item.prodPic} alt={item.title} />
          </MyListMidImg>
          <MyListMidTxt>
            <div>
              <h2>{item.title}</h2>
            </div>
            <MyStarDiv>
              <StarRatined totalStars={item.raiting}/>
            </MyStarDiv>
            <div>
              <span>{item.contents}</span>
            </div>
          </MyListMidTxt>
          <MyListMidLast location={"center"} size={"1.2rem"}>
              <p>작성자</p>
              <MyListProfileImg>
                <img src={item.userPic}/>
              </MyListProfileImg>
              <span>{item.nick}</span>
            </MyListMidLast>
        </MyListMid>
         ) : (
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
                <span>{item.contents}</span>
              </div>
            </MyListMidTxt>
            <MyListMidLast>
              <p>더보기</p>
            </MyListMidLast>
          </MyListMid>
         )}
        </React.Fragment> 
      ))}
      <MyListBottom>
        <MyMoreButton handleLoadMore={handleLoadMore} display={"flex"} marginleft={"0px"}/>
      </MyListBottom>
    </MyListDiv>
  );
};

export default MyReviewList;
