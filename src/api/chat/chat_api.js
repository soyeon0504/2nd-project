import axios from "axios";
import { SERVER_URL } from "../config";
import { jwtAxios } from "../../util/jwtUtil";

const path = `${SERVER_URL}/api`;

export const getChatList = async page => {
  try {
    const url = `${path}/chat?page=${page}`;
    const res = await jwtAxios.get(url);

    return res;
  } catch (error) {
    console.log(error);
  }
};

export const postChat = async (iuser, iproduct) => {
  try {
    const url = `${SERVER_URL}/api/chat/room/${iuser}?iproduct=${iproduct}`;
    await jwtAxios.post(url);
  } catch (error) {
    console.error(error);
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
