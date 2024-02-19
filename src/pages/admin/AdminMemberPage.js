import React from "react";
import { useTable } from "react-table";

const AdminMemberPage = ({ activeBtn }) => {
  // 테이블 데이터 설정
  const tableData = React.useMemo(
    () =>
      Array.from({ length: 12 }, (_, rowIndex) =>
        Array.from(
          { length: activeBtn === "개인 회원" ? 7 : 8 },
          (_, colIndex) =>
            `${activeBtn === "개인 회원" ? "개인" : "기업"} 데이터 ${
              rowIndex + 1
            }-${colIndex + 1}`,
        ),
      ),
    [activeBtn],
  );

  // 열 제목 설정
  const columns = React.useMemo(
    () => [
      {
        Header: "회원번호",
        accessor: "회원번호",
        width: 120,
      },
      {
        Header: "아이디",
        accessor: "아이디",
        width: 150,
      },
      {
        Header: "이름",
        accessor: "이름",
        width: 150,
      },
      {
        Header: "가입일자",
        accessor: "가입일자",
        width: 150,
      },
      {
        Header: "이메일",
        accessor: "이메일",
        width: 300,
      },
      ...(activeBtn === "기업 회원"
        ? [
            {
              Header: "사업자번호",
              accessor: "사업자번호",
              width: 100,
            },
          ]
        : []),
      {
        Header: "벌점",
        accessor: "벌점",
        width: 100,
      },
      {
        Header: "회원상태",
        accessor: "회원상태",
        width: 100,
      },
      {
        Header: "회원정지",
        accessor: "회원정지",
        width: 100,
      },
    ],
    [activeBtn],
  );

  // React 테이블 훅 사용
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: tableData });

  return (
    <div>
      {activeBtn === "개인 회원" && <h1>개인 회원 페이지</h1>}
      {activeBtn === "기업 회원" && <h1>기업 회원 페이지</h1>}
      <table
        {...getTableProps()}
        style={{ borderCollapse: "collapse", width: "100%", marginTop: "25px" }}
      >
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps()}
                  style={{
                    padding: "10px",
                    border: "1px solid #BEBEBE",
                    height: "60px",
                    textAlign: "center",
                    backgroundColor: "#FFE6E6",
                    fontWeight: "normal",
                    fontSize: "16px",
                    width: column.width,
                  }}
                  key={column.id}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={row.id}>
                {row.cells.map(cell => (
                  <td
                    {...cell.getCellProps()}
                    style={{
                      padding: "10px",
                      border: "1px solid #BEBEBE",
                      height: "60px",
                      textAlign: "center",
                      fontSize: "14px",
                      backgroundColor:
                        cell.column.id === "이메일"
                          ? row.index % 2 === 0
                            ? "#fff"
                            : "#FFF7F7"
                          : row.index % 2 === 0
                          ? "#FFF"
                          : "#FFF7F7",
                    }}
                    key={cell.column.id}
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AdminMemberPage;
