import React, { useEffect, useState } from "react";
import { BoardWrap, HeaderWrap } from "../../styles/admin/AdminBoardPageStyle";
import { deleteProduct, getAllProducts } from "../../api/admin/admin_board_api";
import { PaginationContent } from "../../styles/admin/AdminReportPageStyle";

const boardData = [
  {
    totalDisputeCount: 0,
    products: [
      {
        iproduct: 114,
        iuser: 1,
        nick: "ㅎㅎㅎㅎㅎ",
        mainCategory: 1,
        subCategory: 2,
        pricePerDay: 2,
        view: 50,
        createdAt: "2024-02-27T10:41:13.518Z",
        status: 0,
      },
    ],
  },
];

const initBoardData = {
  totalDisputeCount: 0,
  products: [
    {
      iproduct: 0,
      iuser: 0,
      nick: "string",
      mainCategory: 0,
      subCategory: 0,
      pricePerDay: 0,
      view: 0,
      createdAt: "2024-02-27T11:23:41.089Z",
      status: 0,
    },
  ],
};

const AdminBoardPage = () => {
  // 전체 게시물 데이터
  const [boardAllData, setBoardAllData] = useState([]);
  // console.log("boardAllData", boardAllData);

  const [page, setPage] = useState(1);
  const [type, setType] = useState();
  const [limit, setLimit] = useState(15);

  const [boardLength, setBoardLength] = useState([]);

  const searchOptions = ["전체", "닉네임", "카테고리"];
  const [selectedSearchOption, setSelectedSearchOption] = useState("전체"); // 선택된 검색 옵션 상태
  const [searchKeyword, setSearchKeyword] = useState(""); // 검색어 상태
  const [filteredData, setFilteredData] = useState([]); // 필터링된 데이터 상태 추가
  // 최신순, 조회순 정렬
  const [sortType, setSortType] = useState(0);

  // 백엔드에서 제공하는 sort 값을 받아오는 함수
  const getSort = sortType => {
    if (sortType === 1) {
      return "조회수"; // 예시로 '조회수 많은순 내림차순'을 반환
    } else {
      return "최신순"; // 기본값은 최신순
    }
  };

  useEffect(() => {
    const sort = getSort(sortType);
    getAllProducts(page, successFn, errorFn, sort);
  }, [page, sortType]);

  const successFn = res => {
    console.log("성공했을때", res);
    setBoardAllData(res);
    setBoardLength(res)
    // setFilteredData(res.products)
  };
  const errorFn = res => {
    // console.log("실패", res);
    alert(`${res.message} \n 에러코드(${res.errorCode})`);
  };

  const getLength = () => {
    return boardData.length;
  };
  const totalPage = Math.ceil(getLength / limit);

  // 페이지 번호를 조정하여 2페이지 이상이 생성되지 않도록 막음
  if (page > totalPage) {
    setPage(totalPage);
  }

  const handlePageChange = (value, pageNum, page, limit, totalPage) => {
    if (value === "first") {
      setPage(1);
    } else if (value === "prev") {
      if (page !== 1) {
        setPage(page - 1);
      }
    } else if (value === "next") {
      if (page !== totalPage) {
        setPage(page + 1);
      }
    } else if (value === "last") {
      setPage(totalPage);
    } else {
      setPage(value);
    }
  };

  // 한 페이지당 10개의 항목을 가져오는 함수
  const getPageItems = () => {
    const startIndex = (page - 1) * 15;
    const endIndex = startIndex + 15;
    return filteredData.slice(startIndex, endIndex);
  };

  // useEffect(() => {
  //   // console.log("페이지 변경됨:", page);
  // }, [page]);
  

  const handleSearchOptionChange = e => {
    setSelectedSearchOption(e.target.value);
    // 선택된 검색 옵션에 따라 검색 유형을 설정
    if (e.target.value === "닉네임") {
      setType(1);
    } else if (e.target.value === "카테고리") {
      setType(2);
    }
  };


  const handleSearchKeywordChange = e => {
    setSearchKeyword(e.target.value);
  };

  const handleSearchSubmit = e => {
    // e.preventDefault();
    const filtered =  boardAllData.products.filter(item => {
      // 검색어가 포함된 항목만 필터링하여 반환
      if (typeof item.subCategory !== "string" || !item.subCategory) return false;
      return (
        item.subCategory
          .toLowerCase()
          .includes(searchKeyword.toLowerCase()) ||
        // item.rentalPrice.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        item.nick.toLowerCase().includes(searchKeyword.toLowerCase())
        // 필터링 조건을 필요에 따라 추가
      );
    });
    setFilteredData(filtered);
  };
  // console.log(filteredData);

  const handleClickDelete = (iproduct) => {
    const reason = 1;
    deleteProduct(iproduct, reason, successFn, errorFn);
  };

  
  return (
    <BoardWrap>
      <HeaderWrap>
        <div className="header-title">
          <div className="title">상품 게시판</div>
          <div className="total">총 {boardAllData.totalDisputeCount}개</div>
        </div>
        <div className="search-wrap">
          <form>
            <select
              onChange={handleSearchOptionChange}
              value={selectedSearchOption}
            >
              {searchOptions.map(option => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder={`${
                selectedSearchOption === "전체"
                  ? "검색어를 입력하세요."
                  : selectedSearchOption === "카테고리"
                  ? "카테고리를 입력하세요."
                  : selectedSearchOption + "을 입력하세요."
              }`}
              value={selectedSearchOption === "전체" ? "--" : searchKeyword}
              onChange={handleSearchKeywordChange}
              disabled={selectedSearchOption === "전체"}
            />
            <button onClick={handleSearchSubmit} type="submit">
              <img src="/images/admin/search.svg" />
            </button>
          </form>
        </div>
        <div className="bt-wrap">
          <div>
            <button onClick={() => setSortType(0)}>최신순</button>
            <img src="/images/admin/line.svg" />
            <button onClick={() => setSortType(1)}>조회순</button>
          </div>
        </div>
      </HeaderWrap>
      <table style={{ width: "100%" }}>
        <thead
          style={{ height: "50px", background: "#FFE6E6", fontSize: "16px" }}
        >
          <tr>
            <th>상품번호</th>
            <th>카테고리</th>
            <th>대여 가격</th>
            <th>판매자 이름</th>
            <th>조회수</th>
            <th>등록일</th>
            <th>상품 조회</th>
            <th>상품 관리</th>
          </tr>
        </thead>
        {boardAllData &&
          boardAllData.products &&
          boardAllData.products.map((item, index) => (
            <React.Fragment key={index}>
              <tbody
                key={item.id}
                style={{
                  fontSize: "16px",
                  background: index % 2 === 1 ? "#FFF7F7" : "inherit",
                }}
              >
                <tr className="board-data">
                  <td>{item.iproduct}</td>
                  <td>{item.subCategory}</td>
                  <td>{item.pricePerDay}</td>
                  <td>{item.nick}</td>
                  <td>{item.view}</td>
                  <td>{item.createdAt}</td>
                  <td>
                    {item.productInquiry}
                    <button className="move">이동</button>
                  </td>
                  <td>
                    {item.productManage}
                    <button className="delete" onClick={e => {handleClickDelete(item.iproduct)}}>삭제</button>
                  </td>
                </tr>
              </tbody>
            </React.Fragment>
          ))}
      </table>
      <div>
        
        <PaginationContent
          current={page}
          onChange={handlePageChange}
          total={boardAllData.totalDisputeCount}
          // size={Math.floor(reportLength / 12) + 1}
          pageSize={12}
        />
      </div>
    </BoardWrap>
  );
};

export default AdminBoardPage;
