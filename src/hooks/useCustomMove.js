import React from "react";
import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom";

const useCustomMove = () => {
  const navigate = useNavigate();
  // 쿼리 알아내기
  const [urlSearchParams, setUrlSearchParams] = useSearchParams();

  // 정렬기준
  const sort = urlSearchParams.get("sort")
    ? parseInt(urlSearchParams.get("sort"))
    : "";

  // 검색어
  const search = urlSearchParams.get("search")
    ? parseInt(urlSearchParams.get("search"))
    : "";

  // 현재 목록의 페이지 번호
  const page = urlSearchParams.get("page")
    ? parseInt(urlSearchParams.get("page"))
    : 1;

  // 메인카테고리
  const mc = urlSearchParams.get("mc")
    ? parseInt(urlSearchParams.get("mc"))
    : "";

  // 서브카테고리
  const sc = urlSearchParams.get("sc")
    ? parseInt(urlSearchParams.get("sc"))
    : "";

    // 쿼리스트링 만들기
    const queryStrDefault = createSearchParams({sort, search, page, mc, sc}).toString()

  return <div>useCustomMove</div>;
};

export default useCustomMove;
