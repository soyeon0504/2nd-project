import React, { useEffect, useState } from "react";
import { getProducts, deleteUser } from "../../api/admin/admin_user_api";
import { Pagination } from "antd"; // antd에서 Pagination import 추가
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
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태 추가

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProducts(currentPage); // 현재 페이지를 인자로 전달
        console.log("Fetched data:", data);
        setMemberData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [currentPage]);

  const handleSearchOptionChange = e => {
    setSelectedSearchOption(e.target.value);
  };

  const handleSearchKeywordChange = e => {
    setSearchKeyword(e.target.value);
  };

  const handleSearchSubmit = async () => {
    try {
      const data = await getProducts(
        currentPage,
        selectedSearchOption.toLowerCase(),
        searchKeyword,
      );
      console.log("Fetched data:", data);
      setMemberData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleMemberWithdrawal = async userId => {
    try {
      const deletedUser = await deleteUser(
        userId,
        "회원 탈퇴 이유를 입력하세요.",
      );
      if (deletedUser) {
        console.log("회원 탈퇴 성공:", deletedUser);
      } else {
        console.log("회원 탈퇴 실패: 삭제된 사용자 없음");
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
            {membershipStatusOptions.map((option, index) => (
              <option key={index} value={option}>
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
                  onClick={() => handleMemberWithdrawal(member.uid)}
                >
                  회원탈퇴
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination
        current={currentPage}
        total={100} // 전체 아이템 수 입력 (임시로 100으로 설정)
        onChange={page => setCurrentPage(page)} // 페이지 변경 핸들러
        pageSize={10} // 한 페이지에 표시할 아이템 수
        showSizeChanger={false} // 페이지 크기 조절기 숨김
        style={{ marginTop: "20px", textAlign: "center" }}
      />
    </div>
  );
};

const tableHeaderStyle = {
  padding: "10px",
  border: "1px solid #BEBEBE",
  height: "60px",
  textAlign: "center",
  backgroundColor: "#FFE6E6",
  fontWeight: "normal",
  fontSize: "16px",
};

const tableCellStyle = {
  padding: "10px",
  border: "1px solid #BEBEBE",
  height: "60px",
  textAlign: "center",
  fontSize: "14px",
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
