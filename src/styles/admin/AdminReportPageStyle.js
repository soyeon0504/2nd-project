import styled from "@emotion/styled";
import { Pagination } from "antd";

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
    cursor: pointer;
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
`;

//member page

export const SearchOptionSelect = styled.select`
  width: 120px;
  height: 35px;
`;

export const MemberTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  h1 {
    font-size: 20px;
    font-weight: 400;
  }
  select {
    width: 100px;
    height: 35px;
    border-radius: 5px;
    text-align: center;
    border: 1px solid #bebebe; /* 변경된 부분 */
    font-size: 16px;
  }
`;

export const MemberSearchWord = styled.input`
  width: 180px;
  flex-grow: 1; /* 변경된 부분 */
  border: 1px solid #bebebe; /* 변경된 부분 */
  border-radius: 5px;
  color: rgb(0, 0, 0);
  font-size: 16px;
  padding-left: 10px;
`;

export const MemberSearchForm = styled.div`
  display: flex;
  width: 330px;
  height: 35px;
  align-items: center;
  border: 1px solid #bebebe;
  border-radius: 5px;

  > select {
    width: 120px;
    height: 35px;
    border: none;
    background-color: transparent;
    border-right: 1px solid #bebebe;
  }

  > input {
    width: 200px;
    border: none;
    color: rgb(0, 0, 0);
    font-size: 16px;
  }
`;

//report page
export const ReportMain = styled.div`
  table {
    width: 100%;
    text-align: center;
  }
  thead {
    height: 60px;
    background: #ffe6e6;
    font-size: 18px;
  }
  tbody {
    font-size: 18px;
  }
  tr {
    height: 60px;
  }
  button {
    width: ${props => (props.width ? props.width : "65px")};
    height: 30px;
    background: #fff;
    border-radius: 8px;
    border: 1px solid #79747e;
    cursor: pointer;
  }
  button:hover {
    background: #ffe6e6;
  }

  .hovertext {
    position: relative;
  }
  .hovertext:before {
    content: attr(data-hover);
    visibility: hidden;
    opacity: 0;
    width: max-content;
    background-color: gray;
    color: #fff;
    font-size: 11px;
    text-align: center;
    border-radius: 5px;
    padding: 5px 5px;
    /* transition: opacity 1s ease-in-out; */

    position: absolute;
    z-index: 1;
    left: 50%;
    top: -110%;
  }

  .hovertext:hover:before {
    opacity: 1;
    visibility: visible;
  }
`;

export const PaginationContent = styled(Pagination)`
  .ant-pagination-item-active {
    border-color: #c14b45;
    background-color: #c14b45;
  }
  .ant-pagination-item-active a {
    color: #fff;
  }
  .ant-pagination-item-active:hover {
    border-color: #c14b45;
    background-color: #c14b45;
  }
  .ant-pagination-item-active a:hover {
    color: #fff;
  }
`;
