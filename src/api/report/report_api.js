import axios from "axios";
import { SERVER_URL } from "../config";
import { jwtAxios } from "../../util/jwtUtil";

const path = `${SERVER_URL}/api`;

const apiPaths = {
  user: "dispute/user",
  product: "dispute/product",
  payment: "dispute/payment",
  chat: "dispute/chat",
  board: "dispute/board",
};

// API 호출 함수
export const postReport = async (identity, reason, option) => {
  try {
    const endpoint = apiPaths[option];
    if (!endpoint) {
      console.error("올바르지 않은 옵션입니다.");
      throw new Error("올바르지 않은 옵션입니다.");
    }

    const url = `${path}/${endpoint}?identity=${identity}&reason=${reason}`;
    const res = await jwtAxios.post(url);

    if (res.status === 200) {
      console.log("신고가 성공적으로 접수되었습니다.");
      return res.data;
    } else {
      console.error("신고 접수 중 오류가 발생했습니다.");
      throw new Error("신고를 처리하는 동안 오류가 발생했습니다.");
    }
  } catch (error) {
    console.error("신고를 처리하는 동안 오류가 발생했습니다.", error);
    throw error;
  }
};
