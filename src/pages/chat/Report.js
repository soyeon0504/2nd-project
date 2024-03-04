import React from "react";
import Layout from "../../layouts/Layout";
import styled from "@emotion/styled";
import Select from "react-select"; // 추가
const PageWrapper = styled.div`
  max-width: 1260px;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 50px;
  width: 100%;
  display: flex;
  -webkit-box-pack: center;
  place-content: center;
`;
const BoxWrapper = styled.div`
  width: 705px;
  height: 858px;
  /* background: #9c9d9e; */
  padding: 18px;
`;

const ReportTitle = styled.div`
  width: 600px;
  height: 35px;
  /* background: #2c2c2c; */
  font-size: 30px;
  color: rgb(24, 24, 24);
  font-weight: bold;
  margin: 20px 0px 40px;
`;
const ReportUser = styled.div`
  font-size: 16px;
  width: 100%;
  line-height: 45px;
  height: 50px;

  place-items: center;

  margin-bottom: 30px;
  border-bottom: 1px solid rgb(229, 229, 229);
  border-top: 1px solid rgb(229, 229, 229);
`;
const ReportTitleSub = styled.div`
  font-size: 16px;
  margin-bottom: 10px;
`;
const ReportText = styled.textarea`
  width: 100%;
  height: 20%;

  resize: none;
  outline: none;
  padding: 16px 16px 90px;
  border-radius: 6px;
  background-color: rgb(250, 250, 250);
  border: none;
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: rgb(51, 51, 51);
  margin-bottom: 20px;
`;

const Notice = styled.div`
  font-size: 14px;
  color: rgb(51, 51, 51);
`;

const reportOptions = [
  // 신고 유형 옵션
  { value: "1", label: "상품신고" },
  { value: "2", label: "채팅신고" },
  { value: "3", label: "거래신고" },
  { value: "4", label: "신고" },
  // 필요한만큼 추가
];

const customStyles = {
  control: provided => ({
    ...provided,
    padding: "3px 3px",
    border: "1px solid rgb(229, 229, 229)",
    borderRadius: "6px",
    fontSize: "18px",
    fontWeight: "bold",
    color: "rgb(178, 178, 178)",

    marginBottom: "30px",
  }),
  // 필요한만큼 추가
};
const ReportButton = styled.button`
  // 버튼 스타일 설정
  width: 100%;
  height: 6%;
  background: red;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  margin-top: 20px;
  font-size: 18px;
`;

const Report = () => {
  return (
    <PageWrapper>
      <BoxWrapper>
        <ReportTitle>신고하기</ReportTitle>
        <ReportUser>신고할유저 - 배구이 </ReportUser>
        <ReportTitleSub>신고 유형 선택</ReportTitleSub>
        <Select
          options={reportOptions}
          placeholder="신고 유형을 선택해주세요"
          styles={customStyles}
        />
        <ReportTitleSub>신고 내용</ReportTitleSub>
        <ReportText placeholder="신고 내용을 입력해주세요" />
        <ReportTitleSub>유의 사항</ReportTitleSub>
        <Notice>
          ・ 신고에 필요한 정보 외 개인정보를 포함하지 않도록 주의해주세요.
          <br />
          ・ 산업안전 보건법에 따라 고객응대 근로자 보호조치를 시행하고 있어요.
          욕설 또는 폭언을 하지 말아주세요. <br />・ 접수는 24시간 가능하지만,
          답변은 9시 - 18시 사이에 순차적으로 받을 수 있어요.
        </Notice>
        <ReportButton>신고하기</ReportButton>
      </BoxWrapper>
    </PageWrapper>
  );
};

export default Report;
