import styled from "styled-components";

export const PageWrapper = styled.div`
  max-width: 1260px;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const BoxWrapper = styled.div`
  width: 705px;
  height: auto;
  padding: 18px;
`;

export const ReportTitle = styled.div`
  width: 100%;
  font-size: 30px;
  color: #181818;
  font-weight: bold;
  margin: 20px 0px 40px;
`;

export const ReportUser = styled.div`
  font-size: 16px;
  width: 100%;
  line-height: 45px;
  height: 50px;
  border-bottom: 1px solid #e5e5e5;
  border-top: 1px solid #e5e5e5;
  margin-bottom: 30px;
`;

export const ReportTitleSub = styled.div`
  font-size: 16px;
  margin-bottom: 10px;
`;

export const ReportText = styled.textarea`
  width: 100%;
  height: 20%;
  resize: none;
  outline: none;
  padding: 16px 16px 90px;
  border-radius: 6px;
  background-color: #fafafa;
  border: none;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.5;
  letter-spacing: normal;
  color: #333333;
  margin-bottom: 20px;
`;

export const Notice = styled.div`
  font-size: 14px;
  color: #333333;
`;

export const ReportButton = styled.button`
  width: 100%;
  height: 7%;
  background: red;
  color: white;
  font-size: 1.8rem;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  margin-top: 20px;
  margin-bottom: 40px;
`;
