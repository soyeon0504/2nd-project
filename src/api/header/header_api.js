import axios from "axios";
import { SERVER_URL } from "../config";

export const searchGet = async ({ sendData, successFn, failFn, errFn }) => {
  try {
    // console.log("sendData", sendData);
    let url = `${SERVER_URL}/api/prod?search=${sendData.search}&page=${sendData.pageNum}`;
    if (sendData.mc) {
      url += `&mc=${sendData.mc}`;
    }if (sendData.sc) {
      url += `&sc=${sendData.sc}`;
    }
    
    const res = await axios.get(url);
    const resStatus = res.status.toString();

    if (resStatus.charAt(0) === "2") {
      successFn(res.data);
    } else {
      failFn(res.data);
    }
  } catch (error) {
    errFn(error);
  }
};
