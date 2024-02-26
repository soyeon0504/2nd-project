import React, { useRef, useState } from "react";
import Layout from "../../layouts/Layout";
import {
  BtSection,
  FreeHeader,
  FreeMain,
  FreePageStyle,
  FreeSearchForm,
  PaginationButton,
  PaginationContainer,
  SearchSection,
  SortWrap,
} from "../../styles/free/FreePageStyle";
import { useNavigate } from "react-router-dom";
import { getFreeList } from "../../api/free/free_api";
import { usePagination, useTable } from "react-table";

// search 카테고리
const searchCate = [
  {
    id: 1,
    title: "제목",
  },
  {
    id: 2,
    title: "내용",
  },
  {
    id: 3,
    title: "제목+내용",
  },
  {
    id: 4,
    title: "닉네임",
  },
];

// 더미데이터
const freeData = [
  {
    id: 1,
    title: "하..바보준*님 거래 잘 좀 합시다!!!!!!!!!!!!!!",
    nick: "콩이",
    like: "650",
    look: "650",
    date: "2024.02.20",
  },
  {
    id: 2,
    title: "하..바보준*님 거래 잘 좀 합시다!!!!!!!!!!!!!!",
    nick: "콩이",
    like: "600",
    look: "600",
    date: "2024.02.20",
  },
  {
    id: 3,
    title: "하..바보준*님 거래 잘 좀 합시다!!!!!!!!!!!!!!",
    nick: "콩이",
    like: "350",
    look: "350",
    date: "2024.02.20",
  },
  {
    id: 4,
    title: "하..바보준*님 거래 잘 좀 합시다!!!!!!!!!!!!!!",
    nick: "콩이",
    like: "250",
    look: "250",
    date: "2024.02.20",
  },
  {
    id: 5,
    title: "하..바보준*님 거래 잘 좀 합시다!!!!!!!!!!!!!!",
    nick: "콩이",
    like: "150",
    look: "150",
    date: "2024.02.20",
  },
  {
    id: 6,
    title: "하..바보준*님 거래 잘 좀 합시다!!!!!!!!!!!!!!",
    nick: "콩이",
    like: "120",
    look: "120",
    date: "2024.02.20",
  },
  {
    id: 7,
    title: "하..바보준*님 거래 잘 좀 합시다!!!!!!!!!!!!!!",
    nick: "콩이",
    like: "50",
    look: "50",
    date: "2024.02.20",
  },
  {
    id: 8,
    title: "하..바보준*님 거래 잘 좀 합시다!!!!!!!!!!!!!!",
    nick: "콩이",
    like: "8",
    look: "8",
    date: "2024.02.20",
  },
  {
    id: 9,
    title: "하..바보준*님 거래 잘 좀 합시다!!!!!!!!!!!!!!",
    nick: "콩이",
    like: "9",
    look: "9",
    date: "2024.02.20",
  },
  {
    id: 10,
    title: "하..바보준*님 거래 잘 좀 합시다!!!!!!!!!!!!!!",
    nick: "콩이",
    like: "10",
    look: "10",
    date: "2024.02.20",
  },
  {
    id: 11,
    title: "하..바보준*님 거래 잘 좀 합시다!!!!!!!!!!!!!!",
    nick: "콩이",
    like: "11",
    look: "11",
    date: "2024.02.20",
  },
  {
    id: 12,
    title: "하..바보준*님 거래 잘 좀 합시다!!!!!!!!!!!!!!",
    nick: "콩이",
    like: "12",
    look: "12",
    date: "2024.02.20",
  },
  {
    id: 13,
    title: "하..바보준*님 거래 잘 좀 합시다!!!!!!!!!!!!!!",
    nick: "콩이",
    like: "13",
    look: "13",
    date: "2024.02.20",
  },
  {
    id: 14,
    title: "하..바보준*님 거래 잘 좀 합시다!!!!!!!!!!!!!!",
    nick: "콩이",
    like: "14",
    look: "14",
    date: "2024.02.20",
  },
];

const FreePage = () => {
  // 검색 데이터 연동
  const [type, setType] = useState(1);
  const [search, setSearch] = useState("");
  const searchWordRef = useRef(null);
  const searchBtRef = useRef(null);

  const handleType = e => {
    const selectedOption = searchCate.find(item => item.id === e.target.value);
    // setSelectedSubValue(selectedOption ? selectedOption.title : "");
    setType(selectedOption ? selectedOption.id : "");
  };
  const handleChangeSearch = e => {
    setSearch(e.target.value);
  };
  const handleKeyDown = e => {
    // 키 다운 이벤트 처리 함수
    if (e.key === "Enter") {
      e.preventDefault();
      searchBtRef.current.click(); // SearchBt 클릭 이벤트 호출
    }
  };
  const onClickSearch = e => {
    e.preventDefault();
    // console.log("검색실행", search);
    sessionStorage.setItem("searchValue", search);
    const sendData = {
      search: search,
      type: type,
      page: 1,
    };
    getFreeList({ sendData, failFn, errFn });
    // navigate(`/more/${searchName}/${pageNum}`)
  };

  // 데이터 연동
  const [freeList, setFreeList] = useState([]);
  const freeListData = () => {
    getFreeList({ setFreeList, failFn, errFn });
  };

  // table 헤더
  const columns = React.useMemo(() => [
    {
      Header: "제목",
      accessor: "title",
    },
    {
      Header: "닉네임",
      accessor: "nick",
    },
    {
      Header: "좋아요",
      accessor: "isLiked",
    },
    {
      Header: "조회수",
      accessor: "view",
    },
    {
      Header: "업로드 날짜",
      accessor: "createdAt",
    },
  ]);

  // 페이지네이션
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
      data: freeList,
      initialState: { pageIndex: 0 },
      ...usePagination,
    },
    usePagination,
  );

  // 페이지 이동
  const navigate = useNavigate();
  const moveToRegister = () => {
    navigate(`/free/register`);
  };
  const moveToDetail = async _item => {
    const url = `/free/details?iboard=${_item.iboard}`;
    const serverData = {
      iboard: _item.iboard,
    };
    navigate(url);
  };

  const headerKey = columns.map(header => header.accessor);
  return (
    <Layout>
      <FreePageStyle>
        <FreeHeader>
          <p>자유게시판</p>
          <SearchSection>
            <select onChange={handleType}>
              {searchCate.map(item => {
                return <option key={item.id}>{item.title}</option>;
              })}
            </select>
            <FreeSearchForm>
              <input
                ref={searchWordRef}
                onChange={e => handleChangeSearch(e)}
                onKeyDown={handleKeyDown}
                type="text"
                placeholder="검색어를 입력하세요"
              ></input>
              <button
                ref={searchBtRef}
                onClick={e => onClickSearch(e)}
                type="button"
              ></button>
            </FreeSearchForm>
          </SearchSection>
        </FreeHeader>
        <FreeMain>
          <SortWrap>
            <button>최신순</button>
            <img src="/images/main/line.svg" />
            <button>좋아요순</button>
            <img src="/images/main/line.svg" />
            <button>조회순</button>
          </SortWrap>
          <table>
            <thead>
              <tr>
                {columns.map(header => (
                  <th key={header.Header}>{header.Header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {freeList.map((item, index) => (
                <tr key={index}>
                  {/* headerKey를 순회하면서 key를 가져옴 */}
                  {headerKey.map(key => (
                    <td key={key + index} onClick={moveToDetail}>
                      {item[key]} {/* key로 객체의 값을 출력 */}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <BtSection>
            <button onClick={moveToRegister}>글쓰기</button>
          </BtSection>
          <div style={{ textAlign: "center", margin: "20px 0" }}>
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
              {Array.from(
                { length: Math.floor(freeData.length / 12) + 1 },
                (_, i) => (
                  <PaginationButton
                    key={i}
                    className={pageIndex === i ? "active" : ""}
                    onClick={() => gotoPage(i)}
                  >
                    {i + 1}
                  </PaginationButton>
                ),
              )}
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
          </div>
        </FreeMain>
      </FreePageStyle>
    </Layout>
  );
};

export default FreePage;
