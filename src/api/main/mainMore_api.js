import axios from "axios";
import { SERVER_URL } from "../config";
import { useNavigate } from "react-router-dom";
import { jwtAxios } from "../../util/jwtUtil";
const path = `${SERVER_URL}/api`;

const failPostDatas = () => {
  const navigate = useNavigate();
  navigate("/");
};

export const getMoreProduct = async (pageNum, categoryId, subCategoryId, sortType) => {
  try {
    let url;
    if (sortType) url = `${path}/prod?sort=${sortType}&page=${pageNum}&mc=${categoryId}&sc=${subCategoryId}`;
    else url = `${path}/prod?page=${pageNum}&mc=${categoryId}&sc=${subCategoryId}`;
    const res = await axios.get(url);

    return res.data;
  } catch (error) {
    console.log(error);
    failPostDatas("/");
  }
};
