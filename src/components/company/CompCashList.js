import React, { useEffect, useState } from 'react'
import { MyListDiv,  MyListTop } from '../../styles/my/MyList';
import { useTable, usePagination } from 'react-table';
import styled from '@emotion/styled';

const PaginationContainer = styled.div`
    text-align: center;
    margin-top: 20px;
  `;

  const PaginationButton = styled.button`
    padding: 5px 10px;
    font-size: 16px;
    margin-right: 20px;
    border-radius: 3px;
    border: 1px solid #2C39B5;
    background-color: #F2F2FF;
    color: #2C39B5;

    :hover {
      background-color: #E4E7FF;
    }
    &.active {
      font-weight: bold;
      background-color: #2C39B5;
      color: #fff;
    }
  `;

const cashData = [
  {
    icomp: 1,
    irecharge: 1,
    method: "삼성 페이",
    cash: "150,000",
    created_at: "2024-02-01"
  },
  {
    icomp: 2,
    irecharge: 2,
    method: "삼성 페이",
    cash: "150,000",
    created_at: "2024-02-01"
  },
  {
    icomp: 3,
    irecharge: 3,
    method: "카카오 페이",
    cash: "155,000",
    created_at: "2024-02-01"
  },
  {
    icomp: 4,
    irecharge: 4,
    method: "삼성 카드 결제",
    cash: "150,000",
    created_at: "2024-02-03"
  },
  {
    icomp: 5,
    irecharge: 5,
    method: "네이버 페이",
    cash: "150,000",
    created_at: "2024-02-04"
  },
  {
    icomp: 1,
    irecharge: 1,
    method: "삼성 페이",
    cash: "150,000",
    created_at: "2024-02-04"
  },
  {
    icomp: 2,
    irecharge: 2,
    method: "삼성 페이",
    cash: "150,000",
    created_at: "2024-02-01"
  },
  {
    icomp: 3,
    irecharge: 3,
    method: "카카오 페이",
    cash: "155,000",
    created_at: "2024-02-01"
  },
  {
    icomp: 4,
    irecharge: 4,
    method: "삼성 카드 결제",
    cash: "150,000",
    created_at: "2024-02-03"
  },
  {
    icomp: 5,
    irecharge: 5,
    method: "네이버 페이",
    cash: "150,000",
    created_at: "2024-02-04"
  },
  {
    icomp: 1,
    irecharge: 1,
    method: "삼성 페이",
    cash: "150,000",
    created_at: "2024-02-04"
  },
  {
    icomp: 1,
    irecharge: 1,
    method: "삼성 페이",
    cash: "150,000",
    created_at: "2024-02-01"
  },
  {
    icomp: 2,
    irecharge: 2,
    method: "삼성 페이",
    cash: "150,000",
    created_at: "2024-02-01"
  },
  {
    icomp: 3,
    irecharge: 3,
    method: "카카오 페이",
    cash: "155,000",
    created_at: "2024-02-01"
  },
  {
    icomp: 4,
    irecharge: 4,
    method: "삼성 카드 결제",
    cash: "150,000",
    created_at: "2024-02-03"
  },
  {
    icomp: 5,
    irecharge: 5,
    method: "네이버 페이",
    cash: "150,000",
    created_at: "2024-02-04"
  },
  {
    icomp: 1,
    irecharge: 1,
    method: "삼성 페이",
    cash: "150,000",
    created_at: "2024-02-04"
  },
  {
    icomp: 2,
    irecharge: 2,
    method: "삼성 페이",
    cash: "150,000",
    created_at: "2024-02-01"
  },
  {
    icomp: 3,
    irecharge: 3,
    method: "카카오 페이",
    cash: "155,000",
    created_at: "2024-02-01"
  },
  {
    icomp: 4,
    irecharge: 4,
    method: "삼성 카드 결제",
    cash: "150,000",
    created_at: "2024-02-03"
  },
  {
    icomp: 5,
    irecharge: 5,
    method: "네이버 페이",
    cash: "150,000",
    created_at: "2024-02-04"
  },
  {
    icomp: 1,
    irecharge: 1,
    method: "삼성 페이",
    cash: "150,000",
    created_at: "2024-02-04"
  },
];

const CompCashList = ({activeBtn}) => {
  const [data, setData] = useState(cashData);

  const columns  = React.useMemo(
    () => [
      {
        Header: "번호",
        accessor: "icomp",
        width: 80,
      },
      {
        Header: "날짜",
        accessor: "created_at",
        width: 120,
      },
      {
        Header: "결제 수단",
        accessor: "method",
        width: 180,
      },
      {
        Header: "결제 금액",
        accessor: "cash",
        width: 100,
      }
    ],[]);
  
  
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data, // data 속성을 useState로부터 받아온 데이터로 설정
      initialState: { pageIndex: 0 },
    },
    usePagination
  );

  useEffect(() => {
    setData(cashData);
  }, [activeBtn]);

  return (
    <MyListDiv>
      <MyListTop>
        <h2>충전 내역</h2>
      </MyListTop>
      <table
        {...getTableProps()}
        style={{
          borderCollapse: "collapse",
          width: "100%",
          marginTop: "25px",
        }}
      >
        <thead>
          {headerGroups.map(headerGroup => (
            <tr key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps()}
                  style={{
                    borderTop: "1px solid #2C39B5",
                    borderBottom: "1px solid #2C39B5",
                    height: "40px",
                    textAlign: "center",
                    fontWeight: "normal",
                    fontSize: "14px",
                    width: column.width,
                  }}
                  key={column.id}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page && page.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={row.id}>
                {row.cells.map(cell => (
                  <td
                    {...cell.getCellProps()}
                    style={{
                      height: "60px",
                      textAlign: "center",
                      fontSize: "14px",
                      borderBottom: "1px solid #2C39B5",
                    }}
                    key={cell.column.id}
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
      <PaginationContainer>
        <PaginationButton
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
        >
          {"<<"}
        </PaginationButton>
        <PaginationButton
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          {"<"}
        </PaginationButton>
        {Array.from({ length: pageCount }, (_, i) => (
          <PaginationButton
            key={i}
            className={pageIndex === i ? "active" : ""}
            onClick={() => gotoPage(i)}
          >
            {i + 1}
          </PaginationButton>
        ))}
        <PaginationButton
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          {">"}
        </PaginationButton>
        <PaginationButton
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
        >
          {">>"}
        </PaginationButton>
      </PaginationContainer>
         <span></span>
      </div>
    </MyListDiv>
  );
};


export default CompCashList