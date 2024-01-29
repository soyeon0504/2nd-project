import React, { useEffect, useState } from "react";
import { MyListBottom, MyListDiv, MyListMid, MyListMidImg, MyListMidLast, MyListMidTxt, MyListTop, MyListTopButton } from "../../../styles/my/MyList";
import MyMoreButton from "../MyMoreButton";
import { getMyInterest } from "../../../api/my/my_api";


const MyInterestList = () => {
  const [data, setData] = useState([]);
  const [viewMore, setViewMore] = useState(3);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getMyInterest(1);
        setData(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleLoadMore = () => {
    setViewMore((prevViewMore) => prevViewMore + 3);
  };

  return (
    <MyListDiv>
      <MyListTop>
        <h2>관심 목록</h2>
        <div>
        </div>
      </MyListTop>
      {data.map((item, index) => (
        <React.Fragment key={index}>
          <MyListMid>
          <MyListMidImg>
            <img src={`/pic/${item.prodPic}`}alt={item.title} />
          </MyListMidImg>
          <MyListMidTxt>
            <div>
              <h2>{item.title}</h2>
            </div>
            <div>
              <p>{item.price} 원</p>
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
        <MyMoreButton handleLoadMore={handleLoadMore}/>
      </MyListBottom>
    </MyListDiv>
  );
};

export default MyInterestList;
