import React, { useEffect, useState } from "react";
import { MyListBottom, MyListDiv, MyListMid, MyListMidImg, MyListMidLast, MyListMidTxt, MyListTop, MyListTopButton } from "../../../styles/my/MyList";
import MyMoreButton from "../MyMoreButton";
import { getMyInterest } from "../../../api/my/my_api";
import { Link } from "react-router-dom";
import {getFav} from "../../../api/details/details_api"


const MyInterestList = () => {
  const [data, setData] = useState([]);
  const [viewMore, setViewMore] = useState(3);
  const [showModal, setShowModal] = useState(false);

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

  const handleFavoriteClick = async (iproduct) => {
    try {
      const favResult = await getFav(iproduct);

      const updatedResult = await getMyInterest(1);
      setData(updatedResult);

    } catch (error) {
      console.error("Error favoriting:", error);
    }
  };

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
              <Link to={`/details/${item.icategory.mainCategory}/${item.icategory.subCategory}/${item.iproduct}`}>
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
              </Link>
              <MyListMidLast>
                <button onClick={() => handleFavoriteClick(item.iproduct)}>
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
