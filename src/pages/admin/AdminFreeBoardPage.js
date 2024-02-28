import React, { useEffect, useState } from 'react'
import { BoardWrap, HeaderWrap } from '../../styles/admin/AdminBoardPageStyle'
import Pagination from '../../components/Pagination'
import { getFreeBoard } from '../../api/admin/admin_board_api'

const boardData = {
  "totalBoardCount": 11,
  "boards": [
    {
      "iboard": 32,
      "nick": "hehe",
      "view": 20,
      "createdAt": "2024-02-28T11:00:46.575Z"
    }
  ]
}

const initFreeBoardData = {
  "totalBoardCount": 11,
  "boards": [
    {
      "iboard": 32,
      "nick": "hehe",
      "view": 20,
      "createdAt": "2024-02-28T11:00:46.575Z"
    }
  ]
}

const AdminFreeBoardPage = () => {
  // 전체 자유게시판 데이터
  const [freeBoardAllData, setFreeBoardAllData] = useState([]);
  const [page, setPage] = useState(1);
  const [type, setType] = useState();
  const [limit, setLimit] = useState(15);

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
    getFreeBoard(page, successFn, errorFn, sort);
  }, [page, sortType]);

  const successFn = res => {
    console.log("성공했을때", res);
    setFreeBoardAllData(res);
    // setFilteredData(res.products)
  };
  const errorFn = res => {
    // console.log("실패", res);
    alert(`${res.message} \n 에러코드(${res.errorCode})`);
  };

  const getLength = function () {
    return freeBoardAllData.length;
  }
  const totalPage = Math.ceil(getLength() / limit)

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

  const getPageItems = () => {
    const startIndex = (page - 1) * 15;
    const endIndex = startIndex + 15;
    return boardData.slice(startIndex, endIndex);
  };
  
    useEffect(() => {
      console.log("페이지 변경됨:", page);
    }, [page]);
  
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

  return (
    <BoardWrap>
        <HeaderWrap>
            <div className='header-title'>
                <div className='title'>자유 게시판</div>
                <div className='total'>총 {freeBoardAllData.totalBoardCount}개</div>
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
      <table style={{ width: "100%"}}>
      <thead
            style={{height: "50px", background: "#FFE6E6", fontSize: "16px" }}
          >
            <tr>
              <th>게시글 번호</th>
              <th>작성자</th>
              <th>조회수</th>
              <th>등록일</th>
              <th>게시글 조회</th>
              <th>게시글 관리</th>
            </tr>
          </thead>
          {freeBoardAllData && 
            freeBoardAllData.boards && 
            freeBoardAllData.boards.map((item, index) => (
            <React.Fragment key={index}>
            <tbody
              key={item.id}
              style={{
                fontSize: "16px",
                background: index % 2 === 1 ? "#FFF7F7" : "inherit",
              }}
              >
              <tr className='board-data'>
                <td>{item.iboard}</td>
                <td>{item.nick}</td>
                <td>{item.view}</td>
                <td>{item.createdAt}</td>
                <td>{item.postInquiry}
                <td>{item.postManage}</td>
                  <button className='move'>이동</button>
                </td>
                <td>{item.productManage}
                  <button className='delete'>삭제</button>
                </td>
              </tr>
            </tbody>
                </React.Fragment>
            ))}
      </table>
      <div>
        <Pagination 
          totalPage={totalPage} 
          page={page} 
          limit={limit} 
          siblings={5} 
          onPageChange={handlePageChange}/>      
          </div>
    </BoardWrap>
  )
}

export default AdminFreeBoardPage;