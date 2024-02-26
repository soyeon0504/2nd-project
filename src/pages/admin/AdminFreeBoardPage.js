import React, { useEffect, useState } from 'react'
import { BoardWrap, HeaderWrap } from '../../styles/admin/AdminBoardPageStyle'
import Pagination from '../../components/Pagination'

const boardData = [
{
  id: 1,
  ipost: 111,
  nick: "바보준서",
  view: 650,
  date: "2024-02-19",
  postInquiry: "",
  postManage: ""
},
{
    id: 1,
    ipost: 115,
    nick: "바보준서",
    view: 650,
    date: "2024-02-19",
    postInquiry: "",
    postManage: ""
  },{
    id: 1,
    ipost: 115,
    nick: "바보준서",
    view: 650,
    date: "2024-02-19",
    postInquiry: "",
    postManage: ""
  },{
    id: 1,
    ipost: 115,
    nick: "바보준서",
    view: 650,
    date: "2024-02-19",
    postInquiry: "",
    postManage: ""
  },{
    id: 1,
    ipost: 115,
    nick: "바보준서",
    view: 650,
    date: "2024-02-19",
    postInquiry: "",
    postManage: ""
  },{
    id: 1,
    ipost: 115,
    nick: "바보준서",
    view: 650,
    date: "2024-02-19",
    postInquiry: "",
    postManage: ""
  },{
    id: 1,
    ipost: 115,
    nick: "바보준서",
    view: 650,
    date: "2024-02-19",
    postInquiry: "",
    postManage: ""
  },{
    id: 1,
    ipost: 115,
    nick: "바보준서",
    view: 650,
    date: "2024-02-19",
    postInquiry: "",
    postManage: ""
  },{
    id: 1,
    ipost: 115,
    nick: "바보준서",
    view: 650,
    date: "2024-02-19",
    postInquiry: "",
    postManage: ""
  },{
    id: 1,
    ipost: 115,
    nick: "바보준서",
    view: 650,
    date: "2024-02-19",
    postInquiry: "",
    postManage: ""
  },{
    id: 1,
    ipost: 115,
    nick: "바보준서",
    view: 650,
    date: "2024-02-19",
    postInquiry: "",
    postManage: ""
  },{
    id: 1,
    ipost: 115,
    nick: "바보준서",
    view: 650,
    date: "2024-02-19",
    postInquiry: "",
    postManage: ""
  },{
    id: 1,
    ipost: 115,
    nick: "바보준서",
    view: 650,
    date: "2024-02-19",
    postInquiry: "",
    postManage: ""
  },{
    id: 1,
    ipost: 115,
    nick: "바보준서",
    view: 650,
    date: "2024-02-19",
    postInquiry: "",
    postManage: ""
  },{
    id: 1,
    ipost: 115,
    nick: "바보준서",
    view: 650,
    date: "2024-02-19",
    postInquiry: "",
    postManage: ""
  },{
    id: 1,
    ipost: 115,
    nick: "바보준서",
    view: 650,
    date: "2024-02-19",
    postInquiry: "",
    postManage: ""
  },{
    id: 1,
    ipost: 115,
    nick: "바보준서",
    view: 650,
    date: "2024-02-19",
    postInquiry: "",
    postManage: ""
  },{
    id: 1,
    ipost: 115,
    nick: "바보준서",
    view: 650,
    date: "2024-02-19",
    postInquiry: "",
    postManage: ""
  },{
    id: 1,
    ipost: 998,
    nick: "바보준서",
    view: 650,
    date: "2024-02-19",
    postInquiry: "",
    postManage: ""
  },
  {
    id: 1,
    ipost: 999,
    nick: "바보준서",
    view: 650,
    date: "2024-02-19",
    postInquiry: "",
    postManage: ""
  },
  {
    id: 1,
    ipost: 1000,
    nick: "바보준서",
    view: 650,
    date: "2024-02-19",
    postInquiry: "",
    postManage: ""
  },

]

const AdminBoardPage = () => {

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(15);
  const getLength = function () {
    return boardData.length;
  }
  let totalPage = Math.ceil(getLength() / limit)

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
  


  return (
    <BoardWrap>
        <HeaderWrap>
            <div className='header-title'>
                <div className='title'>자유 게시판</div>
                <div className='total'>총 28개</div>
            </div>
            <div className='search-wrap'>
                <form>
                    <select>
                        <option>작성자</option>
                    </select>
                    <input type='text' placeholder='닉네임을 입력하세요'/>
                    <button>
                        <img src='/images/admin/search.svg'/>
                    </button>
                </form>
            </div>
            <div className="bt-wrap">
              <div>
                <button onClick={() => {}}>최신순</button>
                <img src="/images/admin/line.svg" />
                <button onClick={() => {}}>조회순</button>
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
          {getPageItems().map((item, index) => (
            <>
            <tbody
              key={item.id}
              style={{
                fontSize: "16px",
                background: index % 2 === 1 ? "#FFF7F7" : "inherit",
              }}
              >
              <tr className='board-data'>

                <td>{item.ipost}</td>
                <td>{item.nick}</td>
                <td>{item.view}</td>
                <td>{item.date}</td>
                <td>{item.postInquiry}
                <td>{item.postManage}</td>
                  <button className='move'>이동</button>
                </td>
                <td>{item.productManage}
                  <button className='delete'>삭제</button>
                </td>
              </tr>
            </tbody>
                </>
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

export default AdminBoardPage