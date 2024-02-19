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

  const handleSlideDown = id => {
    if (contentOpen === id) {
      // 이미 펼쳐진 행을 클릭한 경우 닫기
      setContentOpen(null);
    } else {
      // 새로운 행을 클릭한 경우 해당 행 펼치기
      setContentOpen(id);
    }
  };

  return (
    <MyReportDiv>
      <div className="reportMain">
        <table style={{ width: "100%", textAlign: "center" }}>
          <thead
            style={{ width:"100%" ,height: "60px", background: "#2C39B5", fontSize: "18px", color: "#FFF" }}
          >
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
              <tr style={{ height: "60px", borderBottom: "1px solid #2C39B5" }} onClick={() => handleSlideDown(item.id)}>
                <td>{item.uid}</td>
                <td>{item.nick}</td>
                <td>{item.cate}</td>
                <td>{item.date}</td>
                <td>{item.oppositeId}</td>
                <td>{item.state}</td>
              </tr>
              {contentOpen === item.id && (
                <tr>
                  <td colSpan={6} style={{ width: "1000px",padding: "15px 0", borderBottom: "1px solid #2C39B5", borderTop: "1px solid #2C39B5" }}>
                    {item.content}
                  </td>
                </tr>
              )}
            </tbody>
          ))}
        </table>
        <PaginationDiv>
          <Pagination
            current={pageNum}
            total={totalItems}
            pageSize={10}
          />
        </PaginationDiv>
      </div>
    </MyReportDiv>
  )
}

export default MyReportPage