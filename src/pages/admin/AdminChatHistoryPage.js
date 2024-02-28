import React, { useEffect, useState } from "react";
import { BoardWrap, HeaderWrap } from "../../styles/admin/AdminBoardPageStyle";
import Pagination from "../../components/Pagination";
import { Modal } from "../../styles/admin/AdminChatHistoryStyle";
import { getChatHistory } from "../../api/admin/admin_board_api";

const chatData = {
  "totalChatCount": 124,
  "chats": [
    {
      "ichat": 222,
      "category": "사기",
      "nick": "우헤헹",
      "createdAt": "2024-02-28T06:28:38.904Z"
    }
  ]
}

const initChatData = {
  "totalChatCount": 0,
  "chats": [
    {
      "ichat": 0,
      "category": "string",
      "nick": "string",
      "createdAt": "2024-02-28T06:28:38.904Z"
    }
  ]
}

const AdminBoardPage = () => {
  // 채팅 내역 데이터
  const [chatHistoryData, setChatHistoryData] = useState({});
  console.log("chatHistoryData", chatHistoryData)

  const searchOptions = ["전체", "닉네임", "카테고리"];
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  // const [selectedSearchOption, setSelectedSearchOption] = useState("전체"); // 선택된 검색 옵션 상태
  // const [searchKeyword, setSearchKeyword] = useState(""); // 검색어 상태
  const getLength = function () {
    return chatHistoryData.length;
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
  const [modal, setModal] = useState(true);
  const toggleModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    getChatHistory(page, successFn, errorFn);
  }, [page]);


  const successFn = res => {
    console.log("성공했을때", res);
    setChatHistoryData(res);
    console.log(res)
  };

  const errorFn = res => {
    console.log("실패", res);
    alert(`${res.message} \n 에러코드(${res.errorCode})`);
  };



  return (
    <BoardWrap>
      <HeaderWrap>
        <div className="header-title">
          <div className="title">채팅 내역</div>
          <div className="total">총 {chatHistoryData.totalChatCount}개</div>
        </div>
      </HeaderWrap>

      <table style={{ width: "100%" }}>
        <thead
          style={{ height: "50px", background: "#FFE6E6", fontSize: "16px" }}
        >
          <tr>
            <th>번호</th>
            <th>카테고리</th>
            <th>닉네임</th>
            <th>등록일</th>
            <th>내역 관리</th>
            {/* <th>내역 삭제</th> */}
          </tr>
        </thead>
        {chatHistoryData && chatHistoryData.chats && chatHistoryData.chats.map((item, index) => (
          <>
            <tbody
              key={item.id}
              style={{
                fontSize: "16px",
                background: index % 2 === 1 ? "#FFF7F7" : "inherit",
              }}
            >
              <tr className="board-data">
                <td>{item.ichat}</td>
                <td>{item.category}</td>
                {/* <td>{item.rentalPrice}</td> */}
                <td>{item.nick}</td>
                {/* <td>{item.view}</td> */}
                <td>{item.createdAt}</td>
                <td>
                  {item.productInquiry}
                  <div>
                    <button className="move" onClick={toggleModal}>
                      내용
                    </button>
                  </div>
                </td>
                {/* <td>
                  {item.productManage}
                  <button className="delete">삭제</button>
                </td> */}
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
          <button className="close-modal" onClick={toggleModal}>
            닫기
          </button>
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
