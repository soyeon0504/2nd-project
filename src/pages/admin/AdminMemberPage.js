import React, { useEffect, useState } from "react";
import { useTable, usePagination } from "react-table";
import { getProducts } from "../../api/admin/admin_user_api";
import {
  MemberSearchBt,
  MemberSearchForm,
  MemberSearchWord,
  MemberTitle,
  SearchOptionSelect,
} from "../../styles/admin/AdminReportPageStyle";

const AdminMemberPage = ({ activeBtn }) => {
  const searchOptions = ["전체", "이름", "아이디"];
  const membershipStatusOptions = ["전체", "정상", "정지"];
  const [memberData, setMemberData] = useState([]);
  const [selectedSearchOption, setSelectedSearchOption] = useState("전체");
  const [searchKeyword, setSearchKeyword] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const page = 1;
        const data = await getProducts(page);
        setMemberData(data); // 여기서 데이터 설정
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const columns = React.useMemo(
    () => [
      {
        Header: "유저 번호",
        accessor: "iuser",
        width: 100,
      },
      {
        Header: "아이디",
        accessor: "uid",
        width: 150,
      },
      {
        Header: "닉네임",
        accessor: "nick",
        width: 150,
      },
      {
        Header: "가입일시",
        accessor: "createdAt",
        width: 200,
        Cell: ({ value }) => new Date(value).toLocaleString(),
      },
      {
        Header: "이메일",
        accessor: "email",
        width: 300,
      },
      {
        Header: "벌점",
        accessor: "penalty",
        width: 100,
      },
      {
        Header: "회원상태",
        accessor: "status",
        width: 100,
        Cell: ({ row }) => (
          <span
            style={{ color: row.original.penalty <= -50 ? "#B6000B" : "#000" }}
          >
            {row.original.penalty > -50 ? "정상" : "정지"}
          </span>
        ),
      },
      {
        Header: "회원관리",
        accessor: "managementStatus",
        width: 100,
        Cell: ({ value }) => (
          <button
            style={{
              width: "58.328px",
              height: "32px",
              borderRadius: "8px",
              background: "#B6000B",
              fontSize: "14px",
              color: "#fff",
              border: "none",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
              cursor: "pointer",
              zIndex: 1,
            }}
            onClick={() => console.log("버튼이 클릭되었습니다.")}
          >
            {value}
          </button>
        ),
      },
    ],
    [],
  );

  const { getTableProps, getTableBodyProps, headerGroups, page, prepareRow } =
    useTable(
      {
        columns,
        data: memberData,
        initialState: { pageIndex: 0 },
      },
      usePagination,
    );

  const handleSearchOptionChange = e => {
    setSelectedSearchOption(e.target.value);
  };

  const handleSearchKeywordChange = e => {
    setSearchKeyword(e.target.value);
  };

  const handleSearchSubmit = () => {
    // Your search logic here
  };

  return (
    <div>
      <MemberTitle>
        <h1>{activeBtn}</h1>
        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <MemberSearchForm>
            <SearchOptionSelect
              onChange={handleSearchOptionChange}
              value={selectedSearchOption}
            >
              {searchOptions.map(option => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </SearchOptionSelect>
            <MemberSearchWord
              placeholder={`${
                selectedSearchOption === "전체"
                  ? "검색어를 입력하세요."
                  : selectedSearchOption + "을 입력하세요."
              }`}
              value={searchKeyword}
              onChange={handleSearchKeywordChange}
            />
            <MemberSearchBt onClick={handleSearchSubmit} />
          </MemberSearchForm>
          <select>
            {/* Handle membership status change */}
            {membershipStatusOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </MemberTitle>

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
                    fontSize: "15px",
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
          {page.map((row, rowIndex) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={rowIndex}>
                {row.cells.map((cell, cellIndex) => (
                  <td
                    {...cell.getCellProps()}
                    style={{
                      padding: "10px",
                      border: "1px solid #BEBEBE",
                      height: "60px",
                      textAlign: "center",
                      fontSize: "14px",
                      backgroundColor:
                        cell.column.id === "email"
                          ? row.index % 2 === 0
                            ? "#fff"
                            : "#FFF7F7"
                          : row.index % 2 === 0
                          ? "#FFF"
                          : "#FFF7F7",
                    }}
                    key={cellIndex} // Use cellIndex as key
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
