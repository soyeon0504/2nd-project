import React from 'react'
import { BoardWrap } from '../../styles/admin/AdminBoardPageStyle'

const boardData = [
{
  id: 1,
  ipost: 115,
  nick: "바보준서",
  view: "조회수 650",
  date: "2024-02-19",
  postInquiry: "",
  postManage: ""
},
{
    id: 1,
    ipost: 115,
    nick: "바보준서",
    view: "조회수 650",
    date: "2024-02-19",
    postInquiry: "",
    postManage: ""
  },{
    id: 1,
    ipost: 115,
    nick: "바보준서",
    view: "조회수 650",
    date: "2024-02-19",
    postInquiry: "",
    postManage: ""
  },{
    id: 1,
    ipost: 115,
    nick: "바보준서",
    view: "조회수 650",
    date: "2024-02-19",
    postInquiry: "",
    postManage: ""
  },{
    id: 1,
    ipost: 115,
    nick: "바보준서",
    view: "조회수 650",
    date: "2024-02-19",
    postInquiry: "",
    postManage: ""
  },{
    id: 1,
    ipost: 115,
    nick: "바보준서",
    view: "조회수 650",
    date: "2024-02-19",
    postInquiry: "",
    postManage: ""
  },{
    id: 1,
    ipost: 115,
    nick: "바보준서",
    view: "조회수 650",
    date: "2024-02-19",
    postInquiry: "",
    postManage: ""
  },{
    id: 1,
    ipost: 115,
    nick: "바보준서",
    view: "조회수 650",
    date: "2024-02-19",
    postInquiry: "",
    postManage: ""
  },

]

const AdminBoardPage = () => {
  return (
    <BoardWrap>
        <div>
            <div>
                <div>자유 게시판</div>
                <div>총 28개</div>
            </div>
        </div>
      <table style={{ width: "100%"}}>
      <thead
            style={{height: "50px", background: "#FFE6E6", fontSize: "16px" }}
          >
            <tr>
              <th></th>
              <th>게시글 번호</th>
              <th>작성자</th>
              <th>조회수</th>
              <th>등록일</th>
              <th>게시글 조회</th>
              <th>게시글 관리</th>
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
              <tr className='board-data'>
                <td>{item.id}</td>
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
    </BoardWrap>
  )
}

export default AdminBoardPage