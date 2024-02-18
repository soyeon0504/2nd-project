import React from "react";
// import { ReportTitle } from "../../styles/admin/AdminReportPageStyle";

const AdminMemberPage = ({ activeBtn }) => {
  let tableData;
  let numColumns;

  // activeBtn prop에 따라 데이터와 열 수 설정
  if (activeBtn === "개인 회원") {
    tableData = Array.from({ length: 12 }, (_, rowIndex) =>
      Array.from(
        { length: 8 },
        (_, colIndex) => `개인 데이터 ${rowIndex + 1}-${colIndex + 1}`,
      ),
    );
    numColumns = 8;
  } else if (activeBtn === "기업 회원") {
    tableData = Array.from({ length: 12 }, (_, rowIndex) =>
      Array.from(
        { length: 9 },
        (_, colIndex) => `기업 데이터 ${rowIndex + 1}-${colIndex + 1}`,
      ),
    );
    numColumns = 9;
  }

  // 열 제목에 대한 스타일 및 색상 정의
  const tableHeaderStyle = {
    backgroundColor: "#FFE6E6",
    fontWeight: "normal",
    textAlign: "center",
    padding: "10px",
    border: "1px solid #BEBEBE",
    height: "60px",
    color: "#000",
    fontSize: "16px",
  };

  // 표 내용에 대한 스타일 및 색상 정의
  const tableCellStyle = {
    textAlign: "center",
    padding: "10px",
    border: "1px solid #BEBEBE",
    height: "60px",
    fontSize: "14px",
  };

  // 이메일과 사업자 번호 열에 대한 스타일 및 너비 조정
  const emailColumnStyle = {
    ...tableCellStyle,
    width: "180px",
  };

  const oddEmailColumnStyle = {
    ...emailColumnStyle,
    backgroundColor: "#FFF7F7",
  };

  const evenEmailColumnStyle = {
    ...emailColumnStyle,
    backgroundColor: "#fff",
  };

  return (
    <div>
      {activeBtn === "개인 회원" && (
        <div>
          <h1>개인 회원 페이지</h1>
        </div>
      )}
      {activeBtn === "기업 회원" && (
        <div>
          <h1>기업 회원 페이지</h1>
        </div>
      )}
      {/* 표 시작 */}

      <table
        style={{ borderCollapse: "collapse", width: "100%", marginTop: "25px" }}
      >
        <thead>
          <tr>
            {/* 열 제목  */}
            <th style={{ ...tableHeaderStyle, width: "120px" }}>회원번호</th>
            <th style={{ ...tableHeaderStyle, width: "150px" }}>아이디</th>
            <th style={{ ...tableHeaderStyle, width: "150px" }}>이름</th>
            <th style={{ ...tableHeaderStyle, width: "150px" }}>가입일자</th>
            <th style={{ ...tableHeaderStyle, width: "250px" }}>이메일</th>
            {activeBtn === "기업 회원" && (
              <th style={{ ...tableHeaderStyle, width: "80px" }}>사업자번호</th>
            )}
            <th style={{ ...tableHeaderStyle, width: "100px" }}>벌점</th>
            <th style={{ ...tableHeaderStyle, width: "100px" }}>회원상태</th>
            <th style={{ ...tableHeaderStyle, width: "100px" }}>회원정지</th>
          </tr>
        </thead>
        <tbody>
          {/* 데이터 배열을 순회하면서 표 내용 생성 */}
          {tableData.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              style={{
                backgroundColor: rowIndex % 2 === 0 ? "#FFF" : "#FFF7F7",
              }}
            >
              {/* 각 행의 데이터 렌더링 */}
              {row.map((data, colIndex) => {
                if (colIndex === 4) {
                  return (
                    <td
                      key={colIndex}
                      style={
                        rowIndex % 2 === 0
                          ? evenEmailColumnStyle
                          : oddEmailColumnStyle
                      }
                    >
                      {data}
                    </td>
                  );
                } else if (colIndex === 5 && activeBtn === "기업 회원") {
                  return (
                    <td
                      key={colIndex}
                      style={
                        rowIndex % 2 === 0
                          ? evenEmailColumnStyle
                          : oddEmailColumnStyle
                      }
                    >
                      {data}
                    </td>
                  );
                } else {
                  return (
                    <td
                      key={colIndex}
                      style={
                        rowIndex % 2 === 0
                          ? { ...tableCellStyle, backgroundColor: "#FFF" }
                          : tableCellStyle
                      }
                    >
                      {data}
                    </td>
                  );
                }
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminMemberPage;
