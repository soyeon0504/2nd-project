import axios from "axios";
import { SERVER_URL } from "../config";
import { jwtAxios } from "../../util/jwtUtil";

const path = `${SERVER_URL}/api`;

export const getProducts = async page => {
  try {
    const url = `${path}/admin/user?page=${page}`;
    const res = await jwtAxios.get(url);
    return Array.isArray(res.data) ? res.data : []; // Ensure that data is an array
  } catch (error) {
    console.log(error);
    return []; // Return an empty array in case of error
  }
};
