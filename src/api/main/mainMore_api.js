import axios from "axios";
import { SERVER_URL } from "../config";
import { useNavigate } from "react-router-dom";
import { jwtAxios } from "../../util/jwtUtil";
const path = `${SERVER_URL}/api`;

const failPostDatas = () => {
  const navigate = useNavigate();
  navigate("/");
};

// MainMorePage.js
export const getMoreProduct = async (
  pageNum,
  categoryId,
  subCategoryId,
  sortType,
) => {
  try {
    let url;
    console.log(pageNum, categoryId, subCategoryId, sortType);
    // api/prod?sort=1&page=1&mc=1&sc=1
    if (sortType)
      url = `${path}/prod?sort=${sortType}&page=${pageNum}&mc=${categoryId}&sc=${subCategoryId}`;
    else
      url = `${path}/prod?page=${pageNum}&mc=${categoryId}&sc=${subCategoryId}`;
    const res = await axios.get(url);

    return res.data;
  } catch (error) {
    console.log(error);
    failPostDatas("/");
  }
};


export const getProdListCount = async ({
  page,
  successFn,
  errorFn,
  search,
  setTotalPage
}) => {
  try {
    let url = `${path}/prod?count`;
    if (search) {
      url += `?search=${search}`;
    }
    if (categoryId) {
      url += `&mc=${categoryId}`;
    }
    if (subCategoryId) {
      url += `&sc=${subCategoryId}`;
    }
    if (addr) {
      url += `&addr=${addr}`;
    }
    const res = await jwtAxios.get(base_url);
    const status = res.status.toString();
    setTotalPage(res.data.result);
    if (status.charAt(0) === "2") successFn(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
    // failPostDatas("/");
    errorFn(error);
  }
};

// MainMoreSearchPage.js
export const getSearchProduct = async (
  search,
  pageNum,
  categoryId,
  subCategoryId,
  sortType,
  addr,
) => {
  try {
    let url = `${path}/prod?search=${search}&page=${pageNum}`;
    if (sortType) {
      url += `&sort=${sortType}`;
    }
    if (categoryId) {
      url += `&mc=${categoryId}`;
    }
    if (subCategoryId) {
      url += `&sc=${subCategoryId}`;
    }
    if (addr) {
      url += `&addr=${addr}`;
    }

    const res = await jwtAxios.get(url);
    return res.data;
  } catch (error) {
    console.log(error);
    failPostDatas("/");
  }
};

// MainMoreSearchPage 페이지네이션
export const getCountSearchProduct = async (
  search,
  categoryId,
  subCategoryId,
  addr,
  setTotalPage,
) => {
  try {
    let url = `${path}/prod/count?search=${search}`;
    if (categoryId) {
      url += `&mc=${categoryId}`;
    }
    if (subCategoryId) {
      url += `&sc=${subCategoryId}`;
    }
    if (addr) {
      url += `&addr=${addr}`;
    }

    const res = await jwtAxios.get(url);
    setTotalPage(res.data.result);
  } catch (error) {
    console.log(error);
  }
};

