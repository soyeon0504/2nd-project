import React, { useState } from 'react'
import styled from '@emotion/styled'
import { Common } from '../../styles/CommonStyles'
import { Pagination } from 'antd'

const MyReportDiv = styled.div`
  background: ${Common.color.p500};
  padding-bottom: 20px;
`

const PaginationDiv = styled.div`
  text-align: center;
  padding-top: 20px;
  height: 50px;
`
const TableDiv = styled.table`
  width: 1020px;
  text-align: center;
  border-collapse: separate;
  thead {
    width:100%; 
    height: 60px; 
    background: #2C39B5; 
    font-size: 18px;
    color: #FFF;
  }
  tbody tr {
    position: relative;
  }
`

const FirstTr = styled.tr`
  font-size: 1.6rem;
  height: 60px;
  cursor: pointer; 
  transition: background-color 0.3s ease; 
  &:hover {
    background-color: #E4E7FF; 
  }
`
const SecondTr = styled.tr`
  font-size: 1.4rem;
   height: ${(props) => (props.isOpen ? '60px' : '0')}; 
   overflow: hidden;
   transition: height 0.3s ease;
   td {
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    opacity: ${(props) => (props.isOpen ? '1' : '0')};
     height: 60px;
     overflow: hidden;
     transition: opacity 0.3s ease, max-height 0.3s ease;
     border-bottom: 1px solid ${Common.color.primary};
   }
   
   
`;

const contentData = [
  {
    id: 1,
    uid: "junseo",
    nick: "바보준서",
    cate: "잠수(구매전)",
    date: "2024.02.15",
    oppositeId: "kong123",
    state: "반려",
    content: `15일 14시에 중앙로역에서 만나기로 했는데 안 나왔어요.
    한시간동안 기다렸는데 연락도 없고!!! 아주 나쁜 놈이네요`,
  },
  {
    id: 2,
    uid: "junseo",
    nick: "바보준서",
    cate: "잠수(구매전)",
    date: "2024.02.15",
    oppositeId: "kong123",
    state: "반려",
    content: `15일 14시에 중앙로역에서 만나기로 했는데 안 나왔어요.
    한시간동안 기다렸는데 연락도 없고!!! 아주 나쁜 놈이네요`,
  },
  {
    id: 3,
    uid: "junseo",
    nick: "바보준서",
    cate: "잠수(구매전)",
    date: "2024.02.15",
    oppositeId: "kong123",
    state: "반려",
    content: `15일 14시에 중앙로역에서 만나기로 했는데 안 나왔어요.
    한시간동안 기다렸는데 연락도 없고!!! 아주 나쁜 놈이네요`,
  },
  {
    id: 4,
    uid: "junseo",
    nick: "바보준서",
    cate: "잠수(구매전)",
    date: "2024.02.15",
    oppositeId: "kong123",
    state: "반려",
    content: `15일 14시에 중앙로역에서 만나기로 했는데 안 나왔어요.
    한시간동안 기다렸는데 연락도 없고!!! 아주 나쁜 놈이네요`,
  },
  {
    id: 5,
    uid: "junseo",
    nick: "바보준서",
    cate: "잠수(구매전)",
    date: "2024.02.15",
    oppositeId: "kong123",
    state: "반려",
    content: `15일 14시에 중앙로역에서 만나기로 했는데 안 나왔어요.
    한시간동안 기다렸는데 연락도 없고!!! 아주 나쁜 놈이네요`,
  },
  {
    id: 6,
    uid: "junseo",
    nick: "바보준서",
    cate: "잠수(구매전)",
    date: "2024.02.15",
    oppositeId: "kong123",
    state: "반려",
    content: `15일 14시에 중앙로역에서 만나기로 했는데 안 나왔어요.
    한시간동안 기다렸는데 연락도 없고!!! 아주 나쁜 놈이네요`,
  },
  {
    id: 7,
    uid: "junseo",
    nick: "바보준서",
    cate: "잠수(구매전)",
    date: "2024.02.15",
    oppositeId: "kong123",
    state: "반려",
    content: `15일 14시에 중앙로역에서 만나기로 했는데 안 나왔어요.
    한시간동안 기다렸는데 연락도 없고!!! 아주 나쁜 놈이네요`,
  }
]

const MyReportPage = () => {
  const [contentOpen, setContentOpen] = useState(null);
  const [pageNum, setPageNum] = useState(1);

  const totalItems = contentData.length;

  // const handleSlideDown = id => {
  //   if (contentOpen === id) {
  //     setContentOpen(null);
  //   } else {
  //     setContentOpen(id);
  //   }
  // };

  const handleSlideDown = (id) => {
    setContentOpen((prev) => (prev === id ? null : id));
  };

  return (
    <MyReportDiv>
      <TableDiv>
      <thead>
            <tr>
              <th>아이디</th>
              <th>닉네임</th>
              <th>신고항목</th>
              <th>신고일자</th>
              <th>신고한 아이디</th>
              <th>상태</th>
            </tr>
          </thead>
          {contentData.map(item => (
            <tbody
              key={item.id}
              style={{
                fontSize: "18px",
                backgroundColor: "inherit",
              }}
            >
              <FirstTr onClick={() => handleSlideDown(item.id)}>
                <td>{item.uid}</td>
                <td>{item.nick}</td>
                <td>{item.cate}</td>
                <td>{item.date}</td>
                <td>{item.oppositeId}</td>
                <td>{item.state}</td>
              </FirstTr>
              <SecondTr isOpen={contentOpen === item.id}>
                <td colSpan={6}>
                  {item.content}
                </td>
              </SecondTr>
            </tbody>
          ))}    
      </TableDiv>
      <PaginationDiv>
        <Pagination
          current={pageNum}
          total={totalItems}
          pageSize={10}
        />
      </PaginationDiv> 
    </MyReportDiv>
  )
}

export default MyReportPage