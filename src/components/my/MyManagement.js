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
import { getProd, getProd2 } from "../../api/my/my_api";
import { deleteProduct } from "../../api/details/details_api";
import { useSelector } from "react-redux";

const MyManagement = ({ activeBtn }) => {
  const [activeButton, setActiveButton] = useState(true);
  const [data, setData] = useState([]);
  const [viewMore, setViewMore] = useState(1);

  const iuser = useSelector((state) => state.loginSlice.iuser);


  const handleDeleteProduct = async (iproduct) => {
    const confirmDelete = window.confirm("삭제 하시겠습니까?");
    if (confirmDelete) {
      try {
        await deleteProduct(iproduct);
        const updatedResult = await getProd(iuser, viewMore);
        setData(updatedResult.vo);
      } catch (error) {
        console.error("Error deleting product:", error);
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        let result;
        if (activeBtn === "등록 상품 관리") {
          result = await getProd(iuser, viewMore);
        } 
        setData(result.vo);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, [activeButton, activeBtn]);

  const handleLoadMore = async () => {
    try {
      let result;
      if (activeBtn === "등록 상품 관리") {
        result = await getProd(iuser,viewMore + 1);
      } 
      setData(prevData => [...prevData, ...result.vo]);
      setViewMore(prevViewMore => prevViewMore + 1);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <MyListDiv>
      <MyListTop>
        {activeBtn === "등록 상품 관리" && <h2>등록 상품 관리</h2>}
      </MyListTop>
      {data &&
        data.map((item, index) => (
          <React.Fragment key={index}>
             {activeBtn === "등록 상품 관리" && (
              <MyListMid>
                    <MyListMidImg>
                      <img
                        src={`/pic/${item.prodMainPic}`}
                        alt={item.title}
                      />
                    </MyListMidImg>
                    <MyListMidTxt>
                      <div>
                        <h2>{item.tilte}</h2>
                      </div>
                      <div>
                        <p>{item.price} 원</p>
                      </div>
                      <div>
                        <span>
                          {item.contents}
                        </span>
                      </div>
                    </MyListMidTxt>
                  <MyListMidLast>
                    <p>{item.updatedAt}</p>
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
