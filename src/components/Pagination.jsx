import React from 'react'
import { returnPaginationRagne } from '../util/paginationUtil'
import { PaginationContainer } from '../styles/PaginationStyle';
import "bootstrap/dist/css/bootstrap.css"


const Pagination = (props) => {
  let array = returnPaginationRagne(props.totalPage, props.page, props.limit, props.siblings, props.onPageChange) || [];
  

  const handleButtonClick = (value) => {
    switch (value) {
      case "first":
        props.onPageChange(1);
        break;
      case "prev":
        if (props.page > 1) {
          props.onPageChange(props.page - 1);
        }
        break;
      case "next":
        if (props.page < props.totalPage) {
          props.onPageChange(props.page + 1);
        }
        break;
      case "last":
        props.onPageChange(props.totalPage);
        break;
      default:
        props.onPageChange(Number(value));
        break;
    }
  };

  
  return (
    <PaginationContainer>
        <ul className="pagination pagination-md justify-content-end">
          <li className="page-item"><span className="page-link" onClick={() =>handleButtonClick("first")}>&laquo;</span></li>
          <li className="page-item"><span className="page-link" onClick={() => handleButtonClick("prev")}>&lsaquo;</span></li>
          {array.map(value => (
            <li key={value} className={`page-item ${props.page === value ? 'active' : ''}`}>
            <span className="page-link" onClick={() => handleButtonClick(value)}>{value}</span>
          </li>
          ))}
          <li className="page-item"><span className="page-link" onClick={() => handleButtonClick("next")}>&rsaquo;</span></li>
          <li className="page-item"><span className="page-link" onClick={() => handleButtonClick("last")}>&raquo;</span></li>
        </ul>

    </PaginationContainer>
  )
}

export default Pagination