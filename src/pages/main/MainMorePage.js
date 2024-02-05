import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SideBar } from "../../components/SideBar";
import { MoreWrap } from "../../styles/main/mainMoreStyle";
import { Pagination } from "antd";
import Layout from "../../layouts/Layout";
import { getMoreProduct } from "../../api/main/mainMore_api";
import { getProductDetail } from "../../api/main/main_api";

const region = [
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

const MainMorePage = () => {
  const location = useLocation();
  const { pathname, state } = location;
  const urlParseArr = pathname.split("/");
  const parseMainCategory = parseInt(urlParseArr[3]);
  const parseSubCategory = parseInt(urlParseArr[4]);

  const navigate = useNavigate();

  // 페이지 번호
  const [pageNum, setPageNum] = useState(1);
  const [sortType, setSortType] = useState(0);
  // 전지역 데이터
  const [datas, setDatas] = useState([]);
  // 지역별 시, 구 분류 데이터
  const [filterData, setFilterData] = useState([]);
  // 지역 선택 관리
  const [regionNum, setRegionNum] = useState(0);
  const [districtNum, setDistrictNum] = useState(0);

  const fetchData = async (pageNum, _sortType) => {
    try {
      const res = await getMoreProduct(
        pageNum,
        parseMainCategory,
        parseSubCategory,
        _sortType,
      );
      setDatas(res);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRegionChange = e => {
    const regionIndex = region.findIndex(item => item.title === e.target.value);
    setRegionNum(regionIndex);
    setDistrictNum(0);
  };

  const regionFilter = e => {
    const selectedRegion = e.target.value;
    const districtIndex = region[regionNum].list.indexOf(selectedRegion);
    setDistrictNum(districtIndex);
  };

  const handlePageChange = _tempPage => {
    setPageNum(_tempPage);
  };

  // 02-01 소연
  useEffect(() => {
    if (sortType !== 0) fetchData(pageNum, sortType);
    else fetchData(pageNum);
  }, [pageNum, sortType]);

  useEffect(() => {
    const regionData = datas.filter(item =>
      item.addr.includes(region[regionNum].title.slice(0, 2)),
    );
    const districtData = regionData.filter(item =>
      item.addr.includes(region[regionNum].list[districtNum]),
    );
    setFilterData(districtData);
  }, [districtNum, datas, regionNum]);

  // details 페이지로 이동
  const handlePageChangeDetails = _item => {
    const url = `/details/${_item.categories.mainCategory}/${_item.categories.subCategory}/${_item.iproduct}`;
    console.log("wowo", _item);
    const serverData = {
      mainCategoryId: _item.categories.mainCategory,
      subCategoryId: _item.categories.subCategory,
      iproduct: _item.iproduct,
    };
    console.log(serverData);
    const res = getProductDetail(serverData);
    navigate(url);
    console.log(res);
  };


  return (
    <Layout>
      <SideBar />
      <MoreWrap>
        <div className="header-wrap">
          <div className="header-cate-wrap">
            <div>{state && state.title ? state.title : "Default Title"}</div>
            <div>{datas.length}개</div>
          </div>
          <div>
            <div className="bt-wrap">
              <div>
                <button onClick={() => setSortType(0)}>최신순</button>
                <img src="/images/main/line.svg" />
                <button onClick={() => setSortType(2)}>조회순</button>
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
              <select
                onChange={e => regionFilter(e)}
                value={region[regionNum].list[districtNum]}
              >
                {region[regionNum].list.map((item, index) => {
                  return <option key={`regionList${index}`}>{item}</option>;
                })}
              </select>
            </div>
          </div>
        </div>
        <div className="main-wrap">
          {filterData &&
            filterData.map((item, index) => (
              <div
                className="item-wrap"
                key={`MainMore-item-${index}`}
                onClick={() => handlePageChangeDetails(item)}
              >
                <img
                  className="item-image"
                  src={`/pic/${item.prodMainPic}`}
                  alt="제품 이미지"
                />

                <div className="desc-wrap">
                  <span className="desc-title">{item.title}</span>
                  <hr></hr>
                  <div className="desc-price">
                    {item.rentalPrice.toLocaleString()}
                  </div>
                  <div className="desc-addr">{item.addr}</div>
                  <div className="view">조회수{item.view}</div>
                </div>
              </div>
            ))}
        </div>
        <div className="pagination">
          <Pagination
            current={pageNum}
            onChange={handlePageChange}
            total={50}
            pageSize={10}
          />
        </div>
      </MoreWrap>
    </Layout>
  );
};

export default MainMorePage;
