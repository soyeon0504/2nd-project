import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { SideBar } from "../../components/SideBar";
import { MoreWrap } from "../../styles/main/mainMoreStyle";
import { Pagination } from "antd";
import Layout from "../../layouts/Layout";
import { getMoreProduct } from "../../api/main/mainMore_api";
import Like from "../../components/details/Like";

const region = [
  {
    title: "서울특별시",
    list: [
      "종로구",
      "중구",
      "용산구",
      "성동구",
      "광진구",
      "동대문구",
      "중랑구",
      "성북구",
      "강북구",
      "도봉구",
      "노원구",
      "은평구",
      "서대문구",
      "마포구",
      "양천구",
      "강서구",
      "구로구",
      "금천구",
      "영등포구",
      "동작구",
      "관악구",
      "서초구",
      "강남구",
      "송파구",
      "강동구",
    ],
  },
  {
    title: "부산광역시",
    list: [
      "중구",
      "서구",
      "동구",
      "영도구",
      "부산진구",
      "동래구",
      "남구",
      "북구",
      "해운대구",
      "사하구",
      "금정구",
      "강서구",
      "연제구",
      "수영구",
      "사상구",
      "기장군",
    ],
  },
  {
    title: "대구광역시",
    list: [
      "중구",
      "동구",
      "서구",
      "남구",
      "북구",
      "수성구",
      "달서구",
      "달성군",
    ],
  },
  {
    title: "인천광역시",
    list: [
      "중구",
      "동구",
      "미추홀구",
      "연수구",
      "남동구",
      "부평구",
      "계양구",
      "서구",
    ],
  },
  {
    title: "광주광역시",
    list: ["동구", "서구", "남구", "북구", "광산구"],
  },
  {
    title: "대전광역시",
    list: ["동구", "중구", "서구", "유성구", "대덕구"],
  },
  {
    title: "울산광역시",
    list: ["중구", "남구", "동구", "북구"],
  },
];

const MainMoreSearchPage = () => {
  console.log("검색어로 진입");
  const location = useLocation();
  //   console.log(location);
  const { state } = location;
  //   console.log("state : ", state.result);

  const navigate = useNavigate(); // useNavigate 훅을 사용하여 navigate 함수 가져오기
  // 중분류 값
  const [id, setId] = useState(0);
  // 페이지 번호
  const [pageNum, setPageNum] = useState(0);
  // 페이지넘버(페이지네이션)
  const [current, setCurrent] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  // 화면 출력 데이터
  const [datas, setDatas] = useState(state.result);
  // 지역 선택 관리
  const [regionNum, setRegionListNum] = useState(0);

  // 02-01 소연
  useEffect(() => {
    // if(params.id){
    //   fetchData(params.id)
    // }
    const fetchData = async () => {
      try {
        // const res = await getMoreProduct(parseMainCategory, id, pageNum); // API 호출
        // // console.log(pageNum);
        // // setMoreProductData(res); // 데이터 설정
        // console.log(res);
        // // 반드시 API 확인 필요
        // if (res) {
        //   setDatas(res);
        // } else {
        //   // 샘플진행
        //   setDatas(initData);
        // }
      } catch (error) {
        // console.log(error);
      }
    };
    // console.log(datas);
    fetchData();
  }, [id, pageNum]);

  const handleRegionChange = e => {
    const regionIndex = region.findIndex(item => item.title === e.target.value);
    setRegionListNum(regionIndex);
  };

  const handlePageChange = _tempPage => {
    // 페이지 변경 시 주소값을 업데이트하고 해당 페이지로 이동
    // navigate(`/more/${id}/${params.id}?page=${params.pageNum}`);
    // 페이지 번호 업데이트
    // setPageNum(page);
    // 페이지 번호 업데이트
    setPageNum(_tempPage);
    // navigate(`/more/${_tempPage}/${parseMainCategory}/${id}`);
  };

  //추후 초기 값 세팅 필요
  useEffect(() => {}, []);

  return (
    <Layout>
      <SideBar />
      <MoreWrap>
        <div className="header-wrap">
          <div className="header-cate-wrap">
            <div>{state.title}</div>
            <div>{datas.length}개</div>
          </div>
          <div>
            <div className="bt-wrap">
              <div>
                <button>최신순</button>
                <img src="/images/main/line.svg" />
                <button>조회순</button>
              </div>
            </div>
            <div className="region-wrap">
              <select onChange={handleRegionChange}>
                {region.map((item, index) => {
                  return (
                    <option key={`regionTitle${index}`}>{item.title}</option>
                  );
                })}
              </select>
              <select>
                {region[regionNum].list.map((item, index) => {
                  return <option key={`regionList${index}`}>{item}</option>;
                })}
              </select>
            </div>
          </div>
        </div>
        <div className="main-wrap">
          {datas &&
            datas.map((item, index) => (
              <div className="item-wrap" key={`MainMore-item-${index}`}>
                <img src={`/pic/${item.prodMainPic}`} alt="" />
                <div className="like">
                  <Like productId={item.iproduct} />
                </div>
                <div className="desc-wrap">
                  <span className="desc-title">{item.title}</span>
                  <hr></hr>
                  <div className="desc-price">
                    {item.price.toLocaleString()}
                  </div>
                  <div className="desc-addr">{item.addr}</div>
                  <div className="view">조회수{item.view}</div>
                </div>
              </div>
            ))}
        </div>
        <div className="pagination">
          <Pagination
            current={current}
            onChange={handlePageChange}
            total={datas.length}
            pageSize={pageSize}
          />
        </div>
      </MoreWrap>
    </Layout>
  );
};

export default MainMoreSearchPage;
