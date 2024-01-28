import axios from "axios";
import { SERVER_URL } from "../config";

const path = `${SERVER_URL}/api/user`;

export const loginPost = async ({ loginParam, successFn, failFn, errorFn }) => {
  try {
    const header = { headers: { "Content-Type": "application/json" } };
    const data = {
      uid: loginParam.uid,
      upw: loginParam.upw,
    };

    const res = await axios.post(`${path}`, data, header);
    const status = res.status.toString();

    if (status.charAt(0) === "2") {
      successFn(res.data);

      return res.data;
    } else {
      failFn("로그인에 실패하였습니다. 다시 시도해주세요.");
    }
  } catch (error) {
    errorFn("로그인에 실패하였습니다. 서버가 불안정합니다. 다시 시도해주세요.");
  }
};
