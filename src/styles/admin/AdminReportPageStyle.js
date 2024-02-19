import styled from "@emotion/styled";

export const ReportTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #c14b45;
  padding-bottom: 17px;
  margin-bottom: 30px;
  h1 {
    font-size: 20px;
    font-weight: 400;
  }
  select {
    width: 120px;
    height: 30px;
    border: 1px solid #c14b45;
  }
`;

export const ReportSearchForm = styled.div`
  display: flex;
  width: 230px;
  height: 35px;
  padding-left: 10px;
  align-items: center;
  border-radius: 5px;
  border: 1px solid #bebebe;
`;

export const ReportSearchWord = styled.input`
  width: 190px;
  border: none;

  color: rgb(0, 0, 0);
  font-size: 16px;
`;

export const ReportSearchBt = styled.button`
width: 16px;
height: 16px;
background-image: url("/images/admin/bt_search.svg");
background-color: transparent;
border: none;
cursor: pointer;
`
