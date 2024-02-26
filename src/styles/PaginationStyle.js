import styled from "@emotion/styled";

export const PaginationContainer = styled.div`
padding-top: 50px;
display: flex;
justify-content: center;
.page-link {
    color: #111;
    width: 40px;
    height: 40px;
    font-size: 18px;
    text-align: center;
    border: none;
}
.pagination .page-item.active .page-link {
    padding-top: 5px;
  background-color: #FFE6E6;
  border-radius: 5px;
}
`