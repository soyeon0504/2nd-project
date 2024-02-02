import axios from "axios";
import { SERVER_URL } from "../config";
import { useNavigate } from "react-router-dom";
import { jwtAxios } from "../../util/jwtUtil";
const path = `${SERVER_URL}/api`;

const failPostDatas = () => {
  // const navigate = useNavigate();
  // navigate("/");
};

export const getProductWow = async () => {
  try {
    const url = `${path}/prod/main?mc=1&mc=2&mc=3&mc=4&mc=5&sc=1&sc=1&sc=1&sc=1&sc=1`;
    const res = await axios.get(url);
    console.log(res);
    return res.data;
  } catch (error) {
    console.log(error);
    // failPostDatas("/");
  }
};
export const getProduct = async (mainCategoryId, subCategoryId) => {
  try {
    const url = `${path}/prod/main?mc=${mainCategoryId}&sc=${subCategoryId}`;
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    console.log(error);
    // failPostDatas("/");
  }
};

// 상품 상세 정보 출력
export const getProductDetail = async serverData => {
  try {
    // const serverData = {
    //   mainCategoryId: id,
    //   subCategoryId: focus + 1,
    //   iproduct: _item.iproduct,
    // };
    // http://localhost:3000/api/prod/1/1/75?iproduct=75
    // http://112.222.157.156:5225/api/prod/1/1/%7Biproduct%7D?iproduct=75
    // const url = `${path}/prod/${serverData.mainCategoryId}/${serverData.subCategoryId}/${serverData.iproduct}`;
    // const url = `${path}/prod/${serverData.mainCategoryId}/${serverData.subCategoryId}/${serverData.iproduct}?iproduct=${serverData.iproduct}`;
    const url = `${path}/prod/${serverData.mainCategoryId}/${serverData.subCategoryId}/{iproduct}?iproduct=${serverData.iproduct}`;
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    console.log(error);
    // failPostDatas("/");
  }
};

export const getMoreProduct = async (categoryId, subCategoryId, pageNum) => {
  try {
    // api/prod/3/2?page=1
    const url = `${path}/prod/${categoryId}/${subCategoryId}?page=${pageNum}`;
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