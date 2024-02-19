import React, { useState } from "react";
import { ReportSearchBt, ReportSearchForm, ReportSearchWord, ReportTitle } from "../../styles/admin/AdminReportPageStyle";

const stateCate = [
  {
    id: 0,
    title: "전체",
  },
  {
    id: 1,
    title: "수리",
  },
  {
    id: 2,
    title: "반려",
  },
  {
    id: 3,
    title: "미처리",
  },
];

const conflictCate = [
  {
    id: 0,
    title: "전체",
  },
  {
    id: 1,
    title: "잠수(구매전)",
  },
  {
    id: 2,
    title: "잠수(구매후)",
  },
  {
    id: 3,
    title: "허위매물",
  },
  {
    id: 4,
    title: "바꿔치기",
  },
  {
    id: 5,
    title: "매너",
  },
  {
    id: 6,
    title: "지연",
  },
];

const accidentCate = [
  {
    id: 0,
    title: "전체",
  },
  {
    id: 1,
    title: "파손",
  },
  {
    id: 2,
    title: "분실",
  },
];

const conflictData = [
  {
    id: 1,
    uid: "junseo",
    nick: "바보준서",
    cate: "잠수(구매전)",
    date: "2024.02.15",
    oppositeId: "kong123",
    penaltyPoint: "-15",
    state: "반려",
    content: `15일 14시에 중앙로역에서 만나기로 했는데 안 나왔어요.
    한시간동안 기다렸는데 연락도 없고!!! 아주 나쁜 놈이네요`,
  },
  {
    id: 2,
    uid: "qwqwqw11",
    nick: "현빈대마왕",
    cate: "지연",
    date: "2024.02.15",
    oppositeId: "qwqwqw55",
    penaltyPoint: "-10",
    state: "수리",
    content: `오늘까지 대여 날짜인데 반납할 시간 없다고 내일 반납한다고 하네요.
    내일 대여하기로 한 사람있는데 전 어떻게 해야하죠??`,
  },
  {
    id: 3,
    uid: "junseo",
    nick: "바보준서",
    cate: "잠수(구매전)",
    date: "2024.02.15",
    oppositeId: "kong123",
    penaltyPoint: "-15",
    state: "수리",
    content: `15일 14시에 중앙로역에서 만나기로 했는데 안 나왔어요.
    한시간동안 기다렸는데 연락도 없고!!! 아주 나쁜 놈이네요`,
  },
  {
    id: 4,
    uid: "qwqwqw11",
    nick: "현빈대마왕",
    cate: "지연",
    date: "2024.02.15",
    oppositeId: "qwqwqw55",
    penaltyPoint: "-10",
    state: "반려",
    content: `오늘까지 대여 날짜인데 반납할 시간 없다고 내일 반납한다고 하네요.
    내일 대여하기로 한 사람있는데 전 어떻게 해야하죠??`,
  },
  {
    id: 5,
    uid: "junseo",
    nick: "바보준서",
    cate: "잠수(구매전)",
    date: "2024.02.15",
    oppositeId: "kong123",
    penaltyPoint: "-15",
    state: "미처리",
    content: `15일 14시에 중앙로역에서 만나기로 했는데 안 나왔어요.
    한시간동안 기다렸는데 연락도 없고!!! 아주 나쁜 놈이네요`,
  },
  {
    id: 6,
    uid: "qwqwqw11",
    nick: "현빈대마왕",
    cate: "지연",
    date: "2024.02.15",
    oppositeId: "qwqwqw55",
    penaltyPoint: "-10",
    state: "미처리",
    content: `오늘까지 대여 날짜인데 반납할 시간 없다고 내일 반납한다고 하네요.
    내일 대여하기로 한 사람있는데 전 어떻게 해야하죠??`,
  },
];

const accidentData = [
  {
    id: 1,
    uid: "junseo",
    nick: "바보준서",
    cate: "파손",
    date: "2024.02.15",
    oppositeId: "kong123",
    penaltyPoint: "-15",
    state: "반려",
    content: `15일 14시에 중앙로역에서 만나기로 했는데 안 나왔어요.
    한시간동안 기다렸는데 연락도 없고!!! 아주 나쁜 놈이네요`,
  },
  {
    id: 2,
    uid: "qwqwqw11",
    nick: "현빈대마왕",
    cate: "파손",
    date: "2024.02.15",
    oppositeId: "qwqwqw55",
    penaltyPoint: "-10",
    state: "수리",
    content: `오늘까지 대여 날짜인데 반납할 시간 없다고 내일 반납한다고 하네요.
    내일 대여하기로 한 사람있는데 전 어떻게 해야하죠??`,
  },
  {
    id: 3,
    uid: "junseo",
    nick: "바보준서",
    cate: "분실",
    date: "2024.02.15",
    oppositeId: "kong123",
    penaltyPoint: "-15",
    state: "수리",
    content: `15일 14시에 중앙로역에서 만나기로 했는데 안 나왔어요.
    한시간동안 기다렸는데 연락도 없고!!! 아주 나쁜 놈이네요`,
  },
  {
    id: 4,
    uid: "qwqwqw11",
    nick: "현빈대마왕",
    cate: "파손",
    date: "2024.02.15",
    oppositeId: "qwqwqw55",
    penaltyPoint: "-10",
    state: "반려",
    content: `오늘까지 대여 날짜인데 반납할 시간 없다고 내일 반납한다고 하네요.
    내일 대여하기로 한 사람있는데 전 어떻게 해야하죠??`,
  },
  {
    id: 5,
    uid: "junseo",
    nick: "바보준서",
    cate: "분실",
    date: "2024.02.15",
    oppositeId: "kong123",
    penaltyPoint: "-15",
    state: "미처리",
    content: `15일 14시에 중앙로역에서 만나기로 했는데 안 나왔어요.
    한시간동안 기다렸는데 연락도 없고!!! 아주 나쁜 놈이네요`,
  },
  {
    id: 6,
    uid: "qwqwqw11",
    nick: "현빈대마왕",
    cate: "분실",
    date: "2024.02.15",
    oppositeId: "qwqwqw55",
    penaltyPoint: "-10",
    state: "미처리",
    content: `오늘까지 대여 날짜인데 반납할 시간 없다고 내일 반납한다고 하네요.
    내일 대여하기로 한 사람있는데 전 어떻게 해야하죠??`,
  },
];

const AdminReportPage = ({ activeBtn }) => {
  // 카테고리 선택
  const [selectedConflictCate, setSelectedConflictCate] = useState("");
  const handleConflictCateChange = e => {
    const selectedOption = conflictCate.find(
      item => item.id === parseInt(e.target.value),
    );
    setSelectedConflictCate(selectedOption ? selectedOption.title : "");
    // const selectedConflictCateId = parseInt(e.target.value);
    // const selectedConflictCate = conflictCate.find(
    //   item => item.id === selectedConflictCateId,
    // );
  };

  const [selectedAccidentCate, setSelectedAccidentCate] = useState("");
  const handleAccidentCateChange = e => {
    const selectedOption = conflictCate.find(
      item => item.id === parseInt(e.target.value),
    );
    setSelectedAccidentCate(selectedOption ? selectedOption.title : "");
  };

  // 상태 선택
  const [selectStateCate, setSelectStateCate] = useState("")
  const handleStateCateChange = e => {
    const selectedOption = stateCate.find(
      item => item.id === parseInt(e.target.value),
    );
    setSelectStateCate(selectedOption ? selectedOption.title : "");
  }

  // 신고내용 open/close
  const [contentOpen, setContentOpen] = useState(null);

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
    <>
      <ReportTitle>
        <h1>{activeBtn}</h1>
        <div style={{display:"flex", gap: "20px", alignItems:"center"}}>
          <ReportSearchForm>
            <ReportSearchWord placeholder={"아이디를 입력하세요."}></ReportSearchWord>
            <ReportSearchBt/>
          </ReportSearchForm>
          {activeBtn === "분쟁 신고" ? (
            <select onChange={handleConflictCateChange} defaultValue="">
              <option value="" disabled hidden>
                카테고리 선택
              </option>
              {conflictCate.map(item => {
                return (
                  <option key={item.id} value={item.id}>
                    {item.title}
                  </option>
                );
              })}
            </select>
          ) : (
            <select onChange={handleAccidentCateChange} defaultValue="">
              <option value="" disabled hidden>
                카테고리
              </option>
              {accidentCate.map(item => {
                return (
                  <option key={item.id} value={item.id}>
                    {item.title}
                  </option>
                );
              })}
            </select>
          )}
          <select onChange={handleStateCateChange} defaultValue="">
              <option value="" disabled hidden>
                상태 선택
              </option>
              {stateCate.map(item => {
                return (
                  <option key={item.id} value={item.id}>
                    {item.title}
                  </option>
                );
              })}
            </select>
        </div>
      </ReportTitle>
      <div className="reportMain">
        <table style={{ width: "100%", textAlign: "center" }}>
          <thead
            style={{ height: "60px", background: "#FFE6E6", fontSize: "18px" }}
          >
            <tr>
              <th>아이디</th>
              <th>닉네임</th>
              <th>신고항목</th>
              <th>신고일자</th>
              <th>신고한 아이디</th>
              <th>벌점</th>
              <th>상태</th>
            </tr>
          </thead>
          {conflictData.map(item => (
            <tbody
              key={item.id}
              style={{
                fontSize: "18px",
                backgroundColor: item.id % 2 === 0 ? "#FFF7F7" : "inherit",
              }}
            >
              <tr
                style={{ height: "60px" }}
                onClick={() => handleSlideDown(item.id)}
              >
                <td>{item.uid}</td>
                <td>{item.nick}</td>
                <td>{item.cate}</td>
                <td>{item.date}</td>
                <td>{item.oppositeId}</td>
                <td>{item.penaltyPoint}</td>
                <td>{item.state} {item.state === "미처리" && <button>상태 변경</button>}</td>
              </tr>
              {contentOpen === item.id && (
                <tr>
                  <td colSpan={7} style={{ padding: "15px 0" }}>
                    {item.content}
                  </td>
                </tr>
              )}
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
};

export default AdminReportPage;
