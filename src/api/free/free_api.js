import axios from "axios";
import { SERVER_URL } from "../config";
import { jwtAxios } from "../../util/jwtUtil";

// FreePage 전체 게시글 호출
export const getFreeList = async ({ sendData }) => {
  try {
    const url = `${SERVER_URL}/api/board?page=${sendData.page}&search=${sendData.search}&type=${sendData.type}`;

    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// 게시글 DetailsPage
export const getFreeData = async iboard => {
  try {
    const url = `${SERVER_URL}/api/board/${iboard}`;

    const res = await axios.get(url);
    return res;
  } catch (error) {
    console.log(error);
  }
};

// 게시글 등록
export const postFreeData = async () => {
  try {
    const url = `${SERVER_URL}/api/board`;

    const res = await jwtAxios.get(url);
    return res;
  } catch (error) {
    console.log(error);
  }
};
