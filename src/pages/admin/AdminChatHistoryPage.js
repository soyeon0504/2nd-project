import React, { useEffect, useState } from "react";
import { BoardWrap, HeaderWrap } from "../../styles/admin/AdminBoardPageStyle";
import Pagination from "../../components/Pagination";
import { Modal } from "../../styles/admin/\bAdminChatHistoryStyle";

const boardData = [
  {
    id: 1,
    iproduct: 115,
    category: "노트북",
    rentalPrice: "10,000원",
    nick: "바보준서",
    view: 650,
    date: "2024-02-19",
    productInquiry: "",
    productManage: "",
  },
  {
    id: 1,
    iproduct: 115,
    category: "노트북",
    rentalPrice: "10,000원",
    nick: "바보준서",
    view: 650,
    date: "2024-02-19",
    productInquiry: "",
    productManage: "",
  },
  {
    id: 1,
    iproduct: 115,
    category: "노트북",
    rentalPrice: "10,000원",
    nick: "바보준서",
    view: 650,
    date: "2024-02-19",
    productInquiry: "",
    productManage: "",
  },
  {
    id: 1,
    iproduct: 115,
    category: "노트북",
    rentalPrice: "10,000원",
    nick: "바보준서",
    view: 650,
    date: "2024-02-19",
    productInquiry: "",
    productManage: "",
  },
  {
    id: 1,
    iproduct: 115,
    category: "노트북",
    rentalPrice: "10,000원",
    nick: "바보준서",
    view: 650,
    date: "2024-02-19",
    productInquiry: "",
    productManage: "",
  },
  {
    id: 1,
    iproduct: 115,
    category: "노트북",
    rentalPrice: "10,000원",
    nick: "바보준서",
    view: 650,
    date: "2024-02-19",
    productInquiry: "",
    productManage: "",
  },
  {
    id: 1,
    iproduct: 115,
    category: "노트북",
    rentalPrice: "10,000원",
    nick: "바보준서",
    view: 650,
    date: "2024-02-19",
    productInquiry: "",
    productManage: "",
  },
  {
    id: 1,
    iproduct: 115,
    category: "노트북",
    rentalPrice: "10,000원",
    nick: "바보준서",
    view: 650,
    date: "2024-02-19",
    productInquiry: "",
    productManage: "",
  },
  {
    id: 1,
    iproduct: 115,
    category: "노트북",
    rentalPrice: "10,000원",
    nick: "바보준서",
    view: 650,
    date: "2024-02-19",
    productInquiry: "",
    productManage: "",
  },
  {
    id: 1,
    iproduct: 115,
    category: "노트북",
    rentalPrice: "10,000원",
    nick: "바보준서",
    view: 650,
    date: "2024-02-19",
    productInquiry: "",
    productManage: "",
  },
  {
    id: 1,
    iproduct: 115,
    category: "노트북",
    rentalPrice: "10,000원",
    nick: "바보준서",
    view: 650,
    date: "2024-02-19",
    productInquiry: "",
    productManage: "",
  },
];

const AdminBoardPage = () => {
  const searchOptions = ["전체", "닉네임", "카테고리"];
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [selectedSearchOption, setSelectedSearchOption] = useState("전체"); // 선택된 검색 옵션 상태
  const [searchKeyword, setSearchKeyword] = useState(""); // 검색어 상태
  const getLength = function () {
    return boardData.length;
  };
  const totalPage = Math.ceil(getLength() / limit);

  function handlePageChange(value) {
    if (value === "&laquo;") {
      setPage(1);
    } else if (value === "&lsaquo;") {
      if (page !== 1) {
        setPage(page - 1);
      }
    } else if (value === "&rsaquo;") {
      if (page !== totalPage) {
        setPage(page + 1);
      }
    } else if (value === "&raquo;") {
      setPage(totalPage);
    } else {
      setPage(value);
    }
  }

  // 모달창
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  //   const handleSearchOptionChange = (e) => {
  //     setSelectedSearchOption(e.target.value);
  //   };

  //   const handleSearchKeywordChange = (e) => {
  //     setSearchKeyword(e.target.value);
  //   };

  //   const handleSearchSubmit = (e) => {
  //     e.preventDefault();
  //     // 검색 기능 추가
  //     console.log("검색 옵션:", selectedSearchOption);
  //     console.log("검색어:", searchKeyword);
  //   };

  return (
    <BoardWrap>
      <HeaderWrap>
        <div className="header-title">
          <div className="title">채팅 내역</div>
          <div className="total">총 32개</div>
        </div>
        {/* <div className="search-wrap">
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
              value={searchKeyword}
              onChange={handleSearchKeywordChange}/>
            <button onClick={handleSearchSubmit}>

              <img src="/images/admin/search.svg" />
            </button>
          </form>
        </div> */}
        {/* <div className="bt-wrap">
          <div>
            <button onClick={() => setSortType(0)}>최신순</button>
            <img src="/images/admin/line.svg" />
            <button onClick={() => setSortType(2)}>조회순</button>
          </div>
        </div> */}
      </HeaderWrap>
      <table style={{ width: "100%" }}>
        <thead
          style={{ height: "50px", background: "#FFE6E6", fontSize: "16px" }}
        >
          <tr>
            <th>번호</th>
            <th>카테고리</th>
            {/* <th>대여 가격</th> */}
            <th>닉네임</th>
            <th>등록일</th>
            {/* <th>상품 조회</th> */}
            <th>내역 관리</th>
            <th>내역 삭제</th>
          </tr>
        </thead>
        {boardData.map((item, index) => (
          <>
            <tbody
              key={item.id}
              style={{
                fontSize: "16px",
                background: index % 2 === 1 ? "#FFF7F7" : "inherit",
              }}
            >
              <tr className="board-data">
                <td>{item.iproduct}</td>
                <td>{item.category}</td>
                {/* <td>{item.rentalPrice}</td> */}
                <td>{item.nick}</td>
                {/* <td>{item.view}</td> */}
                <td>{item.date}</td>
                <td>
                  {item.productInquiry}
                  <div>
                    <button className="move" onClick={toggleModal}>
                      내용
                    </button>
                  </div>
                </td>
                <td>
                  {item.productManage}
                  <button className="delete">삭제</button>
                </td>
              </tr>
            </tbody>
          </>
        ))}
      </table>
      {modal && (
        <Modal>
          <div className="overlay"></div>
          <div className="modal-content">
            <h2>hello</h2>
          </div>
          <button className="close-modal" onClick={toggleModal}>닫기</button>
        </Modal>
      )}
      <div>
        <Pagination
          totalPage={totalPage}
          page={page}
          limit={limit}
          siblings={5}
          onPageChange={handlePageChange}
        />
      </div>
    </BoardWrap>
  );
};

export default AdminBoardPage;
