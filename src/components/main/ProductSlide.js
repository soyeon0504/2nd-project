import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { getProduct, getProductDetail } from "../../api/main/main_api"; // API 호출 함수 import
import {
  BtSlideNext,
  BtSlidePrev,
  SlideBtWrap,
} from "../../styles/main/SlideButton";
import { BtWrap } from "../../styles/main/mainStyle";
import Like from "../details/Like";
import MoreButton from "./MoreButton";

const ProductSlide = ({ btList, title, desc, id, data }) => {
  // 게시물 클릭 시 detail 페이지로 이동
  const navigate = useNavigate(`/details/`); // useNavigate 훅을 사용하여 navigate 함수 가져오기
  // 전달 받은 목록데이터
  const [productData, setProductData] = useState(data); // 상품 데이터 상태 추가
  // 활성화된 중분류 카테고리 버튼 번호 관리
  const [focus, setFocus] = useState(0);
  // Swiper
  const swiperRefs = useRef([useRef(1), useRef(2), useRef(3), useRef(4)]);

  // 중분류 메뉴 버튼 클릭시 처리
  const handleClickList = async (mainCategoryId, subCategoryId) => {
    try {
      const res = await getProduct(mainCategoryId, subCategoryId);
      console.log("res : ", res);
      setProductData(res);
    } catch (error) {
      console.log(error);
    }
  };

  // const navigate = useNavigate(`/details/`);
  const handlePageChange = _item => {
    const url = `/details/${id}/${focus + 1}/${_item.iproduct}`;
    console.log("wowo", _item);
    const serverData = {
      mainCategoryId: id,
      subCategoryId: focus + 1,
      iproduct: _item.iproduct,
    };
    console.log(serverData);
    const res = getProductDetail(serverData);
    navigate(url);
    console.log(res);

    // 02-01 소연 팀장 전달
    // const location = useLocation();
    // console.log(location);
    // const { state } = location;
    // console.log(state);
    // 페이지 변경 시 주소값을 업데이트하고 해당 페이지로 이동
    // navigate(`/more/${id}/${params.id}?page=${page}`);
    // 페이지 번호 업데이트
  };

  return (
    <div>
      <div className="section-1">
        <div className="title">{title}</div>
        <div className="desc">{desc}</div>
        <BtWrap>
          {btList.map((item, index) => {
            return (
              <button
                key={`camera${index}`}
                className={focus === index ? "focus" : ""}
                onClick={() => {
                  setFocus(index);
                  handleClickList(id, item.id);
                }}
              >
                {item.title}
              </button>
            );
          })}
        </BtWrap>

        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          slidesPerGroup={4}
          navigation={{
            nextEl: `.slide-next-bt-${id}`,
            prevEl: `.slide-prev-bt-${id}`,
          }}
          onSwiper={swiper => {
            swiperRefs.current = swiper;
          }}
          className="mySwiper"
          modules={[Navigation]}
        >
          {productData &&
            productData.map((item, index) => (
              <SwiperSlide key={`cameraSlide${index}`}>
                <div onClick={() => handlePageChange(item)}>
                  <div className="like">
                    <Like productId={productData.iproduct} />
                  </div>
                  <img src={`/pic/${item.prodMainPic}`} alt="" />
                  <div className="desc-wrap">
                    <span className="desc-title">{item.title}</span>
                    <hr></hr>
                    <div className="desc-price">
                      {item.rentalPrice.toLocaleString()}
                    </div>
                    <div className="desc-ad">{item.addr}</div>
                    <div className="view">조회수{item.view}</div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
        <SlideBtWrap>
          <BtSlidePrev
            className={`slide-prev-bt-${id} c-slide-prev`}
            onClick={() => {
              swiperRefs.current[id];
            }}
          >
            <img src="../images/main/prev.svg" alt="prev" />
          </BtSlidePrev>
          <BtSlideNext
            className={`slide-next-bt-${id} c-slide-next`}
            onClick={() => {
              swiperRefs.current[id];
            }}
          >
            <img src="../images/main/next.svg" alt="next" />
          </BtSlideNext>
        </SlideBtWrap>

        <div>
          <MoreButton
            categoryId={id}
            subCategoryId={focus + 1}
            pageNum={1}
            title={btList[focus].title}
            onClick={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductSlide;
