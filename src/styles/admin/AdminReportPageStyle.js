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

export const MemberTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border-bottom: 1px solid #c14b45; */
  padding-bottom: 17px;
  margin-bottom: 10px;
  h1 {
    font-size: 20px;
    font-weight: 400;
  }
  select {
    width: 120px;
    height: 35px;
    border: 1px solid #bebebe;
    /* border-radius: 5px; */
  }
`;

export const MemberSearchWord = styled.input`
  width: 180px;
  border: none;
  /* border-radius: 10px; */
  color: rgb(0, 0, 0);
  font-size: 16px;
`;

export const MemberSearchForm = styled.div`
  display: flex;
  width: 320px;
  height: 35px;

  align-items: center;
  /* border-radius: 5px; */
  border: 1px solid #bebebe;
`;
=======
export const ReportMain = styled.div`
table{
  width: 100%;
  text-align: center;
}
thead{
  height: 60px;
  background: #FFE6E6;
  font-size: 18px;
}
tbody{
  font-size: 18px;
}
tr{
  height: 60px;
}
button {
  width: ${props => (props.width ? props.width : "65px")};
  height: 30px;
  background: #fff;
  border-radius: 8px;
  border: 1px solid #79747E;
  cursor: pointer;
}
button:hover{
  background: #FFE6E6;
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
    left:50%;
    top: -110%;
}

.hovertext:hover:before {
    opacity: 1;
    visibility: visible;
}
`;

export const PaginationContent = styled(Pagination)`
.ant-pagination-item-active {
  border-color: #C14B45;
  background-color: #C14B45;
}
  .ant-pagination-item-active a {
    color: #fff;
  }
  .ant-pagination-item-active:hover {
  border-color: #C14B45;
  background-color: #C14B45;
}
  .ant-pagination-item-active a:hover {
    color: #fff;
  }
`;

