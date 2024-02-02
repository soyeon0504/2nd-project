import axios from "axios";
import { SERVER_URL } from "../config";
import { useNavigate } from "react-router-dom";
import { jwtAxios } from "../../util/jwtUtil";
const path = `${SERVER_URL}/api`;

const failPostDatas = () => {
  // const navigate = useNavigate();
  // navigate("/");
};

export const getProduct = async (mainicategory, subicategory, iproduct) => {
  try {
    const url = `${path}/prod/${mainicategory}/${subicategory}/{iproduct}?iproduct=${iproduct}`;
    const res = await jwtAxios.get(url);

    return res;
  } catch (error) {
    console.log(error);
    failPostDatas("/");
  }
};

export const getUserInfo = async userpk => {
  try {
    const url = `${path}user?=tar${userpk}`;
    const res = await jwtAxios.get(url);

    return res;
  } catch (error) {
    console.log(error);
    failPostDatas("/");
  }
};

export const getFav = async iproduct => {
  try {
    const url = `${path}/prod/fav/${iproduct}`;
    const res = await jwtAxios.get(url);

    return res;
  } catch (error) {
    console.log(error);
    failPostDatas("/");
  }
};

export const postProduct = async (
  iproduct,
  paymentMethod,
  rentalStartDate,
  rentalEndDate,
) => {
  try {
    const url = `${path}/pay`;
    const data = {
      iproduct,
      paymentMethod,
      rentalStartDate,
      rentalEndDate,
    };
    const res = await jwtAxios.post(url, data); // 요청 시 필수값인 data를 함께 전달
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
