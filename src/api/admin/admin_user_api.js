import axios from "axios";
import { SERVER_URL } from "../config";
import { jwtAxios } from "../../util/jwtUtil";

const path = `${SERVER_URL}/api`;

export const getAllProducts = async page => {
  try {
    const url = `${path}/admin/user?page=${page}`;
    const res = await jwtAxios.get(url);
    const status = res.status.toString();
    if (status.charAt(0) === "2") {
      successFn(res.data);
    }
    return res.data;
  } catch (error) {
    const res = error.response.data;
    errorFn(res);
  }
};
