import React, { useEffect, useState } from "react";
import { useTable, usePagination } from "react-table";
import styled from "@emotion/styled";

import {
  ReportSearchBt,
  MemberSearchForm,
  MemberSearchWord,
  MemberTitle,
} from "../../styles/admin/AdminReportPageStyle";

const AdminMemberPage = ({ activeBtn }) => {
  const searchOptions = ["전체", "이름", "아이디"];
  const membershipStatusOptions = ["전체", "정상", "정지"];
  const [memberData, setMemberData] = useState([]);
  const [selectedSearchOption, setSelectedSearchOption] = useState("전체");
  const [selectedMembershipStatus, setSelectedMembershipStatus] =
    useState("전체");
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleSearchOptionChange = e => {
    setSelectedSearchOption(e.target.value);
  };

  const handleMembershipStatusChange = e => {
    setSelectedMembershipStatus(e.target.value);
  };

  const handleSearchKeywordChange = e => {
    setSearchKeyword(e.target.value);
  };

  const CustomSelect = styled.select`
    padding: 5px 10px;
    font-size: 16px;
    border-radius: 8px;
    border: 1px solid #ccc;
    background-color: #fff;
    appearance: none;
    outline: none;
  `;
  const PaginationContainer = styled.div`
    text-align: center;
    margin-top: 20px;
  `;

  const PaginationButton = styled.button`
    padding: 5px 10px;
    font-size: 16px;
    margin-right: 20px;

    &.active {
      font-weight: bold;
      background-color: #b6000b;
      color: #fff;
    }
  `;

  const MemberStatus = styled.span`
    color: ${props => (props.isSuspended ? "#B6000B" : "#000")};
  `;
  useEffect(() => {
    // 여기서 실제 API 요청을 보내어 회원 데이터를 가져옵니다.
    // 아래 예시에서는 더미 데이터를 사용하고 있습니다.
    const fetchData = async () => {
      // API 요청을 보내어 회원 데이터를 받아옵니다.
      // const response = await fetch("API_ENDPOINT_URL");
      // const data = await response.json();
      // 실제 데이터를 받아온 후에는 아래와 같이 데이터를 설정합니다.
      const personalData = [
        {
          id: 1,
          username: "hello123",
          name: "배구이",
          joinDate: "2024-02-01",
          email: "green@naver.com",
          penalty: -50,
          membershipStatus: "정지",
          managementStatus: "정지",
        },
        {
          id: 2,
          username: "goodbye456",
          name: "경만이",
          joinDate: "2024-02-01",
          email: "blue@naver.com",
          penalty: -20,
          membershipStatus: "정상",
          managementStatus: "정지",
        },
        {
          id: 3,
          username: "user3",
          name: "User Three",
          joinDate: "2024-02-03",
          email: "user3@example.com",
          penalty: -30,
          membershipStatus: "정지",
          managementStatus: "정지",
        },
        {
          id: 4,
          username: "user4",
          name: "User Four",
          joinDate: "2024-02-04",
          email: "user4@example.com",
          penalty: -40,
          membershipStatus: "정상",
          managementStatus: "정지",
        },
        {
          id: 5,
          username: "user5",
          name: "User Five",
          joinDate: "2024-02-05",
          email: "user5@example.com",
          penalty: -50,
          membershipStatus: "정지",
          managementStatus: "정지",
        },
        {
          id: 5,
          username: "user5",
          name: "User Five",
          joinDate: "2024-02-05",
          email: "user5@example.com",
          penalty: -50,
          membershipStatus: "정지",
          managementStatus: "정지",
        },
        {
          id: 5,
          username: "user5",
          name: "User Five",
          joinDate: "2024-02-05",
          email: "user5@example.com",
          penalty: -50,
          membershipStatus: "정지",
          managementStatus: "정지",
        },
        {
          id: 5,
          username: "user5",
          name: "User Five",
          joinDate: "2024-02-05",
          email: "user5@example.com",
          penalty: -50,
          membershipStatus: "정지",
          managementStatus: "정지",
        },
        {
          id: 5,
          username: "user5",
          name: "User Five",
          joinDate: "2024-02-05",
          email: "user5@example.com",
          penalty: -50,
          membershipStatus: "정지",
          managementStatus: "정지",
        },
        {
          id: 5,
          username: "user5",
          name: "User Five",
          joinDate: "2024-02-05",
          email: "user5@example.com",
          penalty: -50,
          membershipStatus: "정지",
          managementStatus: "정지",
        },
        {
          id: 6,
          username: "user6",
          name: "User Six",
          joinDate: "2024-02-06",
          email: "user6@example.com",
          penalty: -60,
          membershipStatus: "정지",
          managementStatus: "정지",
        },
        {
          id: 7,
          username: "user7",
          name: "User Seven",
          joinDate: "2024-02-07",
          email: "user7@example.com",
          penalty: -70,
          membershipStatus: "정지",
          managementStatus: "정지",
        },
        {
          id: 8,
          username: "user8",
          name: "User Eight",
          joinDate: "2024-02-08",
          email: "user8@example.com",
          penalty: -80,
          membershipStatus: "정지",
          managementStatus: "정지",
        },
        {
          id: 9,
          username: "user9",
          name: "User Nine",
          joinDate: "2024-02-09",
          email: "user9@example.com",
          penalty: -90,
          membershipStatus: "정지",
          managementStatus: "정지",
        },
        {
          id: 10,
          username: "user10",
          name: "User Ten",
          joinDate: "2024-02-10",
          email: "user10@example.com",
          penalty: -100,
          membershipStatus: "정지",
          managementStatus: "정지",
        },
      ];

      const companyData = [
        {
          id: 11,
          username: "company123",
          name: "은진이",
          joinDate: "2024-02-01",
          email: "company@naver.com",
          businessRegistrationNumber: "123-45-67890",
          penalty: -30,
          membershipStatus: "정상",
          managementStatus: "정지",
        },
        {
          id: 12,
          username: "business456",
          name: "소연이",
          joinDate: "2024-02-01",
          email: "business@naver.com",
          businessRegistrationNumber: "987-65-43210",
          penalty: -50,
          membershipStatus: "정지",
          managementStatus: "정지",
        },
      ];

      if (activeBtn === "개인 회원") {
        setMemberData(personalData);
      } else if (activeBtn === "기업 회원") {
        setMemberData(companyData);
      }
    };

    fetchData();
  }, [activeBtn]);

  // Define columns
  const columns = React.useMemo(
    () => [
      {
        Header: "회원번호",
        accessor: "id",
        width: 120,
      },
      {
        Header: "아이디",
        accessor: "username",
        width: 150,
      },
      {
        Header: "이름",
        accessor: "name",
        width: 150,
      },
      {
        Header: "가입일자",
        accessor: "joinDate",
        width: 150,
      },
      {
        Header: "이메일",
        accessor: "email",
        width: 300,
      },
      ...(activeBtn === "기업 회원"
        ? [
            {
              Header: "사업자번호",
              accessor: "businessRegistrationNumber",
              width: 150,
            },
          ]
        : []),
      {
        Header: "벌점",
        accessor: "penalty",
        width: 100,
      },
      {
        Header: "회원상태",
        accessor: "membershipStatus",
        width: 100,
        Cell: ({ row }) => (
          <MemberStatus isSuspended={row.original.penalty <= -50}>
            {row.original.penalty > -50 ? "정상" : "정지"}
          </MemberStatus>
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
              border: "none", // 테두리 제거
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)", // 그림자 추가
              cursor: "pointer", // 커서 스타일을 포인터로 설정
              zIndex: 1, // 다른 요소와 겹치는 경우 z-index 설정
            }}
            onClick={() => console.log("버튼이 클릭되었습니다.")}
          >
            {value}
          </button>
        ), // 버튼 추가 및 스타일 변경
      },
    ],
    [activeBtn],
  );

  // Use react-table hook for table and pagination
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data: memberData,
      initialState: { pageIndex: 0 }, // 페이지 인덱스 초기값 설정
      ...usePagination, // 페이지네이션 훅 추가
    },
    usePagination,
  );

  return (
    <div>
      <MemberTitle>
        <h1>{activeBtn}</h1>
        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <MemberSearchForm>
            <select
              onChange={handleSearchOptionChange}
              value={selectedSearchOption}
            >
              {searchOptions.map(option => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <MemberSearchWord
              placeholder={`${
                selectedSearchOption === "전체"
                  ? "전체"
                  : selectedSearchOption + "을 입력하세요."
              }`}
              value={searchKeyword}
              onChange={handleSearchKeywordChange}
            />
            <ReportSearchBt />
          </MemberSearchForm>
          <select
            onChange={handleMembershipStatusChange}
            value={selectedMembershipStatus}
          >
            {membershipStatusOptions.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </MemberTitle>
      {activeBtn === "개인 회원" && <h1></h1>}
      {activeBtn === "기업 회원" && <h1></h1>}
      {/* 테이블 */}
      <table
        {...getTableProps()}
        style={{
          borderCollapse: "collapse",
          width: "100%",
          marginTop: "25px",
        }}
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
          {page.map(row => {
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
                        cell.column.id === "email"
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
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <PaginationContainer>
          <PaginationButton
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
          >
            {"<<"}
          </PaginationButton>
          <PaginationButton
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            {"<"}
          </PaginationButton>
          {Array.from({ length: pageCount }, (_, i) => (
            <PaginationButton
              key={i}
              className={pageIndex === i ? "active" : ""}
              onClick={() => gotoPage(i)}
            >
              {i + 1}
            </PaginationButton>
          ))}
          <PaginationButton onClick={() => nextPage()} disabled={!canNextPage}>
            {">"}
          </PaginationButton>
          <PaginationButton
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            {">>"}
          </PaginationButton>
        </PaginationContainer>
        <span></span>
      </div>
    </div>
  );
};

export default AdminMemberPage;
