import axios from "axios";
import { SERVER_URL } from "../config";
import { useNavigate } from "react-router-dom";
import { jwtAxios } from "../../util/jwtUtil";
const path = `${SERVER_URL}/api/prod`;

const failPostDatas = () => {
  const navigate = useNavigate();
  navigate("/");
};

export const postprod = async () => {
  try {
    const res = await jwtAxios.post(`${path}`);
    return res;
  } catch (error) {
    console.log(error);
    failPostDatas("/");
  }
};

export const putProd = async () => {
  try {
    const res = await jwtAxios.put(`${path}`);
    return res;
  } catch (error) {
    console.log(error);
    failPostDatas("/");
  }
};
