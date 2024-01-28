import axios from "axios";
import { SERVER_URL } from "../config";
import { useNavigate } from "react-router-dom";
const path = `${SERVER_URL}/api/mypage`;

const failPostDatas = () => {
  const navigate = useNavigate();
  navigate("/");
};



export const getMyRental = async (page,role,fn) => {
  try {
    const url = `${path}/prod?page=${page}&role=${role}`;
    const res = await axios.get(url);
    fn(res.data);
  } catch (error) {
    console.log(error);
    failPostDatas("/");
  }
};

export const postProduct = async () => {
  try {
    const res = await axios.post(`${path}`);
    return res;
  } catch (error) {
    console.log(error);
    failPostDatas("/");
  }
};

export const putProduct = async () => {
  try {
    const res = await axios.put(`${path}`);
    return res;
  } catch (error) {
    console.log(error);
    failPostDatas("/");
  }
};

export const patchProduct = async () => {
  try {
    const res = await axios.patch(`${path}`);
    return res;
  } catch (error) {
    console.log(error);
    failPostDatas("/");
  }
};

export const deleteProduct = async () => {
  try {
    const res = await axios.delete(`${path}`);
    return res;
  } catch (error) {
    console.log(error);
    failPostDatas("/");
  }
};
