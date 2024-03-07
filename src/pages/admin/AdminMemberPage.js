import React, { useEffect, useState } from "react";
import { getProducts, deleteUser } from "../../api/admin/admin_user_api";
import { Pagination } from "antd";
import {
  MemberSearchBt,
  MemberSearchForm,
  MemberSearchWord,
  MemberTitle,
  PaginationContent,
  SearchOptionSelect,
} from "../../styles/admin/AdminReportPageStyle";

const AdminMemberPage = ({ activeBtn }) => {
  const searchOptions = ["전체", "이름", "아이디"];
  const membershipStatusOptions = ["전체", "정상", "정지"];
  const reasonOptions = ["이유1", "이유2", "이유3"]; // 이유 옵션 추가
  const [memberData, setMemberData] = useState([]);
  const [selectedSearchOption, setSelectedSearchOption] = useState("전체");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchData();
  }, [currentPage, selectedSearchOption, searchKeyword]);

  const convertSearchTypeToNumber = type => {
    switch (type) {
      case "이름":
        return 2;
      case "아이디":
        return 3;
      default:
        return 1; // 전체
    }
  };

  const convertReasonToNumber = reason => {
    switch (reason) {
      case "이유1":
        return 1;
      case "이유2":
        return 2;
      case "이유3":
        return 3;
      default:
        return 1; // 기본값 설정
    }
  };

  const fetchData = async () => {
    try {
      const searchTypeNumber = convertSearchTypeToNumber(selectedSearchOption);
      const data = await getProducts(
        currentPage,
        searchTypeNumber,
        searchKeyword,
      );
      setMemberData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSearchOptionChange = e => {
    setSelectedSearchOption(e.target.value);
  };

  const handleSearchKeywordChange = e => {
    setSearchKeyword(e.target.value);
  };

  const handleSearchSubmit = async () => {
    setCurrentPage(1); // 검색 시에는 페이지를 1로 초기화
    fetchData(); // 검색 버튼 클릭 시에만 데이터 요청
  };

  const handleMemberWithdrawal = async (userId, reason) => {
    try {
      const reasonNumber = convertReasonToNumber(reason);
      const deletedUser = await deleteUser(userId, reasonNumber);
      if (deletedUser) {
        console.log("회원 탈퇴 성공:", deletedUser);
      } else {
        console.log("회원 탈퇴 실패: 삭제된 사용자 없음", deleteUser);
      }
    } catch (error) {
      console.error("회원 탈퇴 실패:", error);
    }
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
              {searchOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </SearchOptionSelect>
            <MemberSearchWord
              placeholder={`${
                selectedSearchOption === "전체"
                  ? "검색어를 입력하세요"
                  : selectedSearchOption + "을 입력하세요"
              }`}
              value={searchKeyword}
              onChange={handleSearchKeywordChange}
            />
            <MemberSearchBt onClick={handleSearchSubmit} />
          </MemberSearchForm>
          <select>
            {membershipStatusOptions.map((option, index) => (
              <option key={index} value={index + 1}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </MemberTitle>

      <table
        style={{
          borderCollapse: "collapse",
          width: "100%",
          marginTop: "25px",
        }}
      >
        <thead>
          <tr>
            <th style={tableHeaderStyle}>유저 번호</th>
            <th style={tableHeaderStyle}>아이디</th>
            <th style={tableHeaderStyle}>닉네임</th>
            <th style={tableHeaderStyle}>가입일시</th>
            <th style={tableHeaderStyle}>이메일</th>
            <th style={tableHeaderStyle}>벌점</th>
            <th style={tableHeaderStyle}>회원상태</th>
            <th style={tableHeaderStyle}>회원관리</th>
          </tr>
        </thead>
        <tbody>
          {memberData.map((member, index) => (
            <tr key={index}>
              <td style={tableCellStyle}>{member.iuser}</td>
              <td style={tableCellStyle}>{member.uid}</td>
              <td style={tableCellStyle}>{member.nick}</td>
              <td style={tableCellStyle}>
                {new Date(member.createdAt).toLocaleString()}
              </td>
              <td style={tableCellStyle}>{member.email}</td>
              <td style={tableCellStyle}>{member.penalty}</td>
              <td style={tableCellStyle}>
                <span
                  style={{
                    color: member.penalty <= -50 ? "#B6000B" : "#000",
                  }}
                >
                  {member.penalty > -50 ? "정상" : "정지"}
                </span>
              </td>
              <td style={tableCellStyle}>
                <button
                  style={managementButtonStyle}
                  onClick={() => handleMemberWithdrawal(member.iuser)} // iuser 전달
                >
                  회원탈퇴
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <PaginationContent
        current={currentPage}
        total={100}
        onChange={page => setCurrentPage(page)}
        pageSize={10}
        showSizeChanger={false}
        style={{ marginTop: "20px", textAlign: "center" }}
      />
    </div>
  );
};

const tableHeaderStyle = {
  padding: "10px",
  border: "2px solid #fff",
  height: "60px",
  textAlign: "center",
  backgroundColor: "#FFE6E6",
  fontWeight: "700",
  fontSize: "16px",
};

const tableCellStyle = {
  padding: "10px",
  border: "2px solid #fff",
  height: "60px",
  textAlign: "center",
  fontSize: "16px",
};

const managementButtonStyle = {
  width: "90px",
  height: "32px",
  borderRadius: "8px",
  background: "#B6000B",
  fontSize: "14px",
  color: "#fff",
  border: "none",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
  cursor: "pointer",
  zIndex: 1,
};

export default AdminMemberPage;
