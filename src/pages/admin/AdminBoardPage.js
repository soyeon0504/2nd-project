import React from 'react'
import { BoardWrap, HeaderWrap } from '../../styles/admin/AdminBoardPageStyle'
import { Pagination } from 'antd'

const boardData = [
{
  id: 1,
  iproduct: 115,
  category: "노트북",
  rentalPrice: "10,000원",
  nick: "바보준서",
  view: "조회수 650",
  date: "2024-02-19",
  productInquiry: "",
  productManage: ""
},
{
  id: 1,
  iproduct: 115,
  category: "노트북",
  rentalPrice: "10,000원",
  nick: "바보준서",
  view: "조회수 650",
  date: "2024-02-19",
  productInquiry: "",
  productManage: ""
},{
  id: 1,
  iproduct: 115,
  category: "노트북",
  rentalPrice: "10,000원",
  nick: "바보준서",
  view: "조회수 650",
  date: "2024-02-19",
  productInquiry: "",
  productManage: ""
},{
  id: 1,
  iproduct: 115,
  category: "노트북",
  rentalPrice: "10,000원",
  nick: "바보준서",
  view: "조회수 650",
  date: "2024-02-19",
  productInquiry: "",
  productManage: ""
},{
  id: 1,
  iproduct: 115,
  category: "노트북",
  rentalPrice: "10,000원",
  nick: "바보준서",
  view: "조회수 650",
  date: "2024-02-19",
  productInquiry: "",
  productManage: ""
},{
  id: 1,
  iproduct: 115,
  category: "노트북",
  rentalPrice: "10,000원",
  nick: "바보준서",
  view: "조회수 650",
  date: "2024-02-19",
  productInquiry: "",
  productManage: ""
},{
  id: 1,
  iproduct: 115,
  category: "노트북",
  rentalPrice: "10,000원",
  nick: "바보준서",
  view: "조회수 650",
  date: "2024-02-19",
  productInquiry: "",
  productManage: ""
},{
  id: 1,
  iproduct: 115,
  category: "노트북",
  rentalPrice: "10,000원",
  nick: "바보준서",
  view: "조회수 650",
  date: "2024-02-19",
  productInquiry: "",
  productManage: ""
},{
  id: 1,
  iproduct: 115,
  category: "노트북",
  rentalPrice: "10,000원",
  nick: "바보준서",
  view: "조회수 650",
  date: "2024-02-19",
  productInquiry: "",
  productManage: ""
},{
  id: 1,
  iproduct: 115,
  category: "노트북",
  rentalPrice: "10,000원",
  nick: "바보준서",
  view: "조회수 650",
  date: "2024-02-19",
  productInquiry: "",
  productManage: ""
},{
  id: 1,
  iproduct: 115,
  category: "노트북",
  rentalPrice: "10,000원",
  nick: "바보준서",
  view: "조회수 650",
  date: "2024-02-19",
  productInquiry: "",
  productManage: ""
},
]

const AdminBoardPage = () => {
  return (
    <BoardWrap>
      <HeaderWrap>
            <div className='header-title'>
                <div className='title'>상품 게시판</div>
                <div className='total'>총 32개</div>
            </div>
            <div className='search-wrap'>
                <form>
                    <select>
                        <option></option>
                    </select>
                    <input type='text' placeholder='검색어를 입력하세요' />
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
              <th></th>
              <th>상품번호</th>
              <th>카테고리</th>
              <th>대여 가격</th>
              <th>판매자 이름</th>
              <th>조회수</th>
              <th>등록일</th>
              <th>상품 조회</th>
              <th>상품관리</th>
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
                <td>{item.iproduct}</td>
                <td>{item.category}</td>
                <td>{item.rentalPrice}</td>
                <td>{item.nick}</td>
                <td>{item.view}</td>
                <td>{item.date}</td>
                <td>{item.productInquiry}
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
      <Pagination defaultCurrent={1} total={50} />
      </div>
    </BoardWrap>
  )
}

export default AdminBoardPage