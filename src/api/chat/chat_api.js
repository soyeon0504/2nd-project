import axios from "axios";
import { SERVER_URL } from "../config";
import { jwtAxios } from "../../util/jwtUtil";

const path = `${SERVER_URL}/api`;

export const postChat = async (iuser, iproduct) => {
  try {
    const url = `${path}/chat/room/${iuser}?iproduct=${iproduct}`;
    const res = await jwtAxios.post(url, data);
    return res;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to post chat");
  }
};

// export const getUserInfo = async userId => {
//   try {
//     const url = `${path}/user?id=${userId}`;
//     const res = await jwtAxios.get(url);
//     return res.data;
//   } catch (error) {
//     console.log(error);
//     throw new Error("Failed to get user info");
//   }
// };
