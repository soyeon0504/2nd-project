import React, { useEffect, useState } from "react";
import {
  MyListDiv,
  MyListTop,
  MyManagementBt,
  MyManagementBtHover,
} from "../../styles/my/MyList";
import { getMyBoard } from "../../api/my/my_api";
import { useTable, usePagination } from "react-table";
import { DetailsContainer, EllipsisDiv, PaginationButton, PaginationContainer, TrContaineer } from "../../styles/my/MyTable";

const contentData = {
  "list": [
    {
      "iboard": 14,
      "title": "etst13",
      "contents": ``,
      "view": 0,
      "createdAt": "2024-02-28T07:56:39.226281",
      "istatus": 0,
      "commentCount": 16
    },
    {
      "iboard": 14,
      "title": "etst13",
      "contents": null,
      "view": 0,
      "createdAt": "2024-02-28T07:56:39.226281",
      "istatus": 0,
      "commentCount": 16
    }
  ]
}

const MyBoardList = ({ activeBtn }) => {
  const [data, setData] = useState([]);
  const [expandedRowIndex, setExpandedRowIndex] = useState(null);

  const columns  = React.useMemo(
    () => [
      {
        Header: "번호",
        accessor: "iboard",
        width: 50,
      },
      {
        Header: "날짜",
        accessor: "createdAt",
        width: 100,
      },
      {
        Header: "제목",
        accessor: "title",
        width: 100,
      },
      {
        Header: "내용",
        accessor: "contents",
        width: 200,
      },
      {
        Header: "조회수",
        accessor: "view",
        width: "50px",
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
    const fetchData = async () => {
      try {
        let result;
        if (activeBtn === "등록 게시글") {
          result = await getMyBoard(1);
        } 
        setData(result.list)
        // setData(contentData.list)
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [activeBtn]);

  return (
    <MyListDiv>
      <MyListTop>
        {activeBtn === "등록 게시글" && <h2>등록 게시글</h2>}
      </MyListTop>
      <table
        {...getTableProps()}
        style={{
          borderCollapse: "collapse",
          width: "980px",
          marginTop: "20px",
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
                {row.cells.map((cell,columnIndex) => (
                  <td
                    {...cell.getCellProps()}
                    style={{
                      height: "60px",
                      textAlign: "center",
                      fontSize: "14px",
                      borderBottom: "1px solid #2C39B5",
                      whiteSpace: "nowrap", 
                      overflow: "hidden",   
                      textOverflow: "ellipsis",
                      maxWidth: headerGroups[0].headers[columnIndex].width,
                    }}
                    key={cell.column.id}
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
              </TrContaineer>
              <tr>
                <td colSpan={columns.length}>
                  <DetailsContainer show={isRowExpanded} content={"end"}>
                    <MyManagementBt>수정</MyManagementBt>
                    <MyManagementBtHover>삭제</MyManagementBtHover>
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
  );
};

export default MyBoardList;
