import React from "react";
import Layout from "../../layouts/Layout";
import {
  FreeHeader,
  FreePageStyle,
  FreeSearchForm,
  SearchSection,
  SortWrap,
} from "../../styles/free/FreePageStyle";

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

const FreePage = () => {
  return (
    <Layout>
      <FreePageStyle>
        <FreeHeader>
          <p>자유게시판</p>
          <SearchSection>
            <select>
              {searchCate.map(item => {
                return <option key={item.id}>{item.title}</option>;
              })}
            </select>
            <FreeSearchForm>
              <input placeholder="검색어를 입력하세요"></input>
              <button></button>
            </FreeSearchForm>
          </SearchSection>
        </FreeHeader>
        <div>
            <SortWrap>
                <button>최신순</button>
                <img src="/images/main/line.svg" />
                <button>좋아요순</button>
                <img src="/images/main/line.svg" />
                <button>조회순</button>
            </SortWrap>
        </div>
      </FreePageStyle>
    </Layout>
  );
};

export default FreePage;
