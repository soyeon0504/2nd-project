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




export const postProduct = async () => {
  try {
    const res = await axios.post(`${path}`);
    return res;
  } catch (error) {
    console.log(error);
    failPostDatas("/");
  }
};

export const putProduct = async () => {
  try {
    const res = await axios.put(`${path}`);
    return res;
  } catch (error) {
    console.log(error);
    failPostDatas("/");
  }
};

export const patchProduct = async () => {
  try {
    const res = await axios.patch(`${path}`);
    return res;
  } catch (error) {
    console.log(error);
    failPostDatas("/");
  }
};

export const deleteProduct = async () => {
  try {
    const res = await axios.delete(`${path}`);
    return res;
  } catch (error) {
    console.log(error);
    failPostDatas("/");
  }
};