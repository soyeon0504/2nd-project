import axios from "axios";
import { SERVER_URL } from "../config";

export const searchGet = async (search, pageNum, searchGetSuccess) => {
  try {
    const url = `${SERVER_URL}/api/prod?search=${search}&page=${pageNum}`;
    const res = await axios.get(url);
    const resStatus = res.status.toString();

    if (resStatus.charAt(0) === "2") {
      // searchGetSuccess([...res.data])
      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
};
