import axios from "axios"
import { SERVER_URL } from "../config"

// 회원가입
export const joinPost = async(obj, postSuccess, postFail)=> {
  try {
    const res = await axios.post(`${SERVER_URL}/api/user/signup`, obj);
    const resStatus = res.status.toString();
    if(resStatus.charAt(0) === "2") {
      console.log(res.data)
    } else {
      alert("데이터 전송에 실패했습니다.")
    }
  } catch (error) {
    console.log(error)
    postFail()
  }
}