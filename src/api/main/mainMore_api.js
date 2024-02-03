import axios from "axios";
import { SERVER_URL } from "../config";
import { useNavigate } from "react-router-dom";
import { jwtAxios } from "../../util/jwtUtil";
const path = `${SERVER_URL}/api`;

const failPostDatas = () => {
  // const navigate = useNavigate();
  // navigate("/");
};

export const getMoreProduct = async (pageNum, categoryId, subCategoryId, sort) => {
  try {
    // api/prod?sort=2&page=1&mc=1&sc=1
    // const url = `${path}/prod/${categoryId}/${subCategoryId}?page=${pageNum}`;
    const url = `${path}/prod?sort=${sort}&page=${pageNum}&mc=${categoryId}&sc=${subCategoryId}`;
    // /api/prod?page=1&mc=2&sc=1
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    console.log(error);
    // failPostDatas("/");
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