import React from "react";
import { Link } from "react-router-dom";

const AdminMainPage = () => {
  return (
    <div
      style={{
        maxWidth: "1300px",
        margin: "0 auto",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {/* 첫번째 열 */}
      <Link
        to="/admin?individual"
        style={{ width: "25%", textDecoration: "none" }}
      >
        <div
          style={{ width: "100%", padding: "20px", boxSizing: "border-box" }}
        >
          <p>회원 조회</p>
        </div>
      </Link>
      <Link
        to="/admin?conflict"
        style={{ width: "25%", textDecoration: "none" }}
      >
        <div
          style={{ width: "100%", padding: "20px", boxSizing: "border-box" }}
        >
          <p>신고 내역</p>
        </div>
      </Link>
      <Link to="/admin?prod" style={{ width: "25%", textDecoration: "none" }}>
        <div
          style={{ width: "100%", padding: "20px", boxSizing: "border-box" }}
        >
          <p>게시판 내역</p>
        </div>
      </Link>
      <Link to="/admin?ad" style={{ width: "25%", textDecoration: "none" }}>
        <div
          style={{ width: "100%", padding: "20px", boxSizing: "border-box" }}
        >
          <p>광고 표</p>
        </div>
      </Link>
      {/* 두번째 열은 동일한 방식으로 구현 */}
    </div>
  );
};

export default AdminMainPage;
