import axios from "axios";
import { SERVER_URL } from "../config";
import { jwtAxios } from "../../util/jwtUtil";

// FreePage 전체 게시글 호출
export const getFreeList = async ({
  page,
  search,
  type,
  sort,
  setFreeList,
}) => {
  try {
    let url = `${SERVER_URL}/api/board?page=${page}`;
    if (search) {
      url += `&search=${search}`;
    }
    if (type) {
      url += `&type=${type}`;
    }
    if (sort) {
      url += `&sort=${sort}`;
    }

    const res = await jwtAxios.get(url);
    setFreeList([...res.data]);
  } catch (error) {
    console.log(error);
  }
};

// 게시글 DetailsPage
export const getFreeData = async (iboard) => {
  try {
    const url = `${SERVER_URL}/api/board/${iboard}`;

    const res = await axios.get(url);
    return res;
  } catch (error) {
    console.log(error);
  }
};

// 게시글 등록
export const postFreeData = async ({ obj }) => {
  try {
    const header = { headers: { "Content-Type": "multipart/form-data" } };

    const url = `${SERVER_URL}/api/board`;
    const res = await jwtAxios.get(url, obj, header);
    return res;
  } catch (error) {
    console.log(error);
  }
};
