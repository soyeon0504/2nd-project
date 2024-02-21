import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { MyListDiv, MyListTop } from '../../styles/my/MyList'
import { useTable, usePagination } from 'react-table';

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
  const TrContaineer = styled.tr`
    :hover {
      background-color: #E4E7FF;
    }
  `

  const DetailsContainer = styled.div`
  display: flex;
  justify-content: center;
  height: ${(props) => (props.show ? 'auto' : '0')}; 
  overflow: hidden;
  padding: ${(props) => (props.show ? '10px' : '0')};
  transition: .3s ease-in-out;
  background-color: #F2F2FF;
  color: #2C39B5;
  p {
    width: 780px;
    font-size: 1.6rem;
    /* white-space: pre-wrap; */
  }
`;

const contentData = [
  {
    idispute: 1,
    category: "잠수(구매전)",
    created_at: "2024.02.15",
    ireporter: "kong123",
    penalty: "-5점",
    status: "반려",
    details: `
      15일 14시에 중앙로역에서 만나기로 했는데 안 나왔어요.
      한시간동안 기다렸는데 연락도 없고!!! 아주 나쁜 놈이네요.
      15일 14시에 중앙로역에서 만나기로 했는데 안 나왔어요.
      한시간동안 기다렸는데 연락도 없고!!! 아주 나쁜 놈이네요
    `,
  },
  {
    idispute: 2,
    category: "잠수(구매전)",
    created_at: "2024.02.15",
    ireporter: "kong123",
    penalty: "-5점",
    status: "반려",
    details: `
      15일 14시에 중앙로역에서 만나기로 했는데 안 나왔어요.
      한시간동안 기다렸는데 연락도 없고!!! 아주 나쁜 놈이네요
    `,
  },
  {
    idispute: 3,
    category: "잠수(구매전)",
    created_at: "2024.02.15",
    ireporter: "kong123",
    penalty: "-5점",
    status: "반려",
    details: `
      15일 14시에 중앙로역에서 만나기로 했는데 안 나왔어요.
      한시간동안 기다렸는데 연락도 없고!!! 아주 나쁜 놈이네요
    `,
  },
  {
    idispute: 4,
    category: "잠수(구매전)",
    created_at: "2024.02.15",
    ireporter: "kong123",
    penalty: "-15점",
    status: "반려",
    details: `
      15일 14시에 중앙로역에서 만나기로 했는데 안 나왔어요.
      한시간동안 기다렸는데 연락도 없고!!! 아주 나쁜 놈이네요`,
  },
  {
    idispute: 1,
    category: "잠수(구매전)",
    created_at: "2024.02.15",
    ireporter: "kong123",
    penalty: "-15점",
    status: "반려",
    details: `15일 14시에 중앙로역에서 만나기로 했는데 안 나왔어요.
      한시간동안 기다렸는데 연락도 없고!!! 아주 나쁜 놈이네요`,
  },
  {
    idispute: 1,
    category: "잠수(구매전)",
    created_at: "2024.02.15",
    ireporter: "kong123",
    penalty: "-15점",
    status: "반려",
    details: `15일 14시에 중앙로역에서 만나기로 했는데 안 나왔어요.
    한시간동안 기다렸는데 연락도 없고!!! 아주 나쁜 놈이네요`,
  },
  {
    idispute: 1,
    category: "잠수(구매전)",
    created_at: "2024.02.15",
    ireporter: "kong123",
    penalty: "-15점",
    status: "반려",
    details: `15일 14시에 중앙로역에서 만나기로 했는데 안 나왔어요.
    한시간동안 기다렸는데 연락도 없고!!! 아주 나쁜 놈이네요`,
  },
  {
    idispute: 1,
    category: "잠수(구매전)",
    created_at: "2024.02.15",
    ireporter: "kong123",
    penalty: "-15점",
    status: "반려",
    details: `15일 14시에 중앙로역에서 만나기로 했는데 안 나왔어요.
    한시간동안 기다렸는데 연락도 없고!!! 아주 나쁜 놈이네요`,
  },
  {
    idispute: 1,
    category: "잠수(구매전)",
    created_at: "2024.02.15",
    ireporter: "kong123",
    penalty: "-15점",
    status: "반려",
    details: `15일 14시에 중앙로역에서 만나기로 했는데 안 나왔어요.
    한시간동안 기다렸는데 연락도 없고!!! 아주 나쁜 놈이네요`,
  },
  {
    idispute: 1,
    category: "잠수(구매전)",
    created_at: "2024.02.15",
    ireporter: "kong123",
    penalty: "-15점",
    status: "반려",
    details: `15일 14시에 중앙로역에서 만나기로 했는데 안 나왔어요.
    한시간동안 기다렸는데 연락도 없고!!! 아주 나쁜 놈이네요`,
  },
  {
    idispute: 1,
    category: "잠수(구매전)",
    created_at: "2024.02.15",
    ireporter: "kong123",
    penalty: "-15점",
    status: "반려",
    details: `15일 14시에 중앙로역에서 만나기로 했는데 안 나왔어요.
    한시간동안 기다렸는데 연락도 없고!!! 아주 나쁜 놈이네요`,
  },
  {
    idispute: 1,
    category: "잠수(구매전)",
    created_at: "2024.02.15",
    ireporter: "kong123",
    penalty: "-15점",
    status: "반려",
    details: `15일 14시에 중앙로역에서 만나기로 했는데 안 나왔어요.
    한시간동안 기다렸는데 연락도 없고!!! 아주 나쁜 놈이네요`,
  },
  {
    idispute: 1,
    category: "잠수(구매전)",
    created_at: "2024.02.15",
    ireporter: "kong123",
    penalty: "-15점",
    status: "반려",
    details: `15일 14시에 중앙로역에서 만나기로 했는데 안 나왔어요.
    한시간동안 기다렸는데 연락도 없고!!! 아주 나쁜 놈이네요`,
  },
]

const MyReportPage = ({activeBtn}) => {
  const [data, setData] = useState(contentData);
  const [expandedRowIndex, setExpandedRowIndex] = useState(null);

  const columns  = React.useMemo(
    () => [
      {
        Header: "번호",
        accessor: "idispute",
        width: 80,
      },
      {
        Header: "날짜",
        accessor: "created_at",
        width: 120,
      },
      {
        Header: "신고 아이디",
        accessor: "ireporter",
        width: 150,
      },
      {
        Header: "신고 카테고리",
        accessor: "category",
        width: 150,
      },
      {
        Header: "벌점",
        accessor: "penalty",
        width: 80,
      },
      {
        Header: "상태",
        accessor: "status",
        width: 80,
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
    setData(contentData);
  }, [activeBtn]);

  return (
    <MyListDiv>
      <MyListTop>
        <h2>신고 내역</h2>
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
          {page && page.map((row,index) => {
            prepareRow(row);
            const isRowExpanded = expandedRowIndex === index;
            return (
              <React.Fragment key={row.id}>
              <TrContaineer {...row.getRowProps()} 
                onClick={() => setExpandedRowIndex(isRowExpanded ? null : index)}
                style={{cursor: "pointer"}}
              >
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
              </TrContaineer>
              <tr>
                <td colSpan={columns.length}>
                  <DetailsContainer show={isRowExpanded}>
                    <p>{row.original.details}</p>
                  </DetailsContainer>
                </td>
              </tr>
              </React.Fragment>
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
  )
}

export default MyReportPage