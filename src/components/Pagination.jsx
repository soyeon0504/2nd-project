import React from "react";
import { returnPaginationRagne } from "../util/paginationUtil";
import { PaginationContainer } from "../styles/PaginationStyle";

const Pagination = props => {
  let array =
    returnPaginationRagne(
      props.totalPage,
      props.page,
      props.limit,
      props.siblings,
      props.onPageChange,
    ) || [];

  return (
    <PaginationContainer>
      <ul className="pagination pagination-md justify-content-end">
        <li className="page-item">
          <span
            className="page-link"
            onClick={() => props.onPageChange("&laquo;")}
          >
            &laquo;
          </span>
        </li>
        <li className="page-item">
          <span
            className="page-link"
            onClick={() => props.onPageChange("&lsaquo;")}
          >
            &lsaquo;
          </span>
        </li>
        {array.map(value => (
          <li key={value} className="page-item">
            <span
              className="page-link"
              onClick={() => props.onPageChange(value)}
            >
              {value}
            </span>
          </li>
        ))}
        <li className="page-item">
          <span
            className="page-link"
            onClick={() => props.onPageChange("&rsaquo;")}
          >
            &rsaquo;
          </span>
        </li>
        <li className="page-item">
          <span
            className="page-link"
            onClick={() => props.onPageChange("&raquo;")}
          >
            &raquo;
          </span>
        </li>
      </ul>
    </PaginationContainer>
  );
};

export default Pagination;
