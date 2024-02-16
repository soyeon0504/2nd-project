import React, { useState } from "react";
import { ReportTitle } from "../../styles/admin/AdminReportPageStyle";

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

const AdminReportPage = ({ activeBtn }) => {
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

  return (
    <>
      <ReportTitle>
        <h1>{activeBtn}</h1>
        <div>
          {activeBtn === "분쟁 신고" ? (
            <select onChange={handleConflictCateChange}>
              {conflictCate.map(item => {
                return (
                  <option key={item.id} value={item.id}>
                    {item.title}
                  </option>
                );
              })}
            </select>
          ) : (
            <select onChange={handleAccidentCateChange}>
              {accidentCate.map(item => {
                return (
                  <option key={item.id} value={item.id}>
                    {item.title}
                  </option>
                );
              })}
            </select>
          )}
        </div>
      </ReportTitle>
      <div className="reportMain">Main</div>
    </>
  );
};

export default AdminReportPage;
