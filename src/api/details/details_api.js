import axios from "axios";
import { SERVER_URL } from "../config";
import { useNavigate } from "react-router-dom";
import { jwtAxios } from "../../util/jwtUtil";
const path = `${SERVER_URL}/api`;

export const failPostDatas = () => {
  // const navigate = useNavigate();
  // navigate("/");
};

export const getProduct = async (mainicategory, subicategory, iproduct) => {
  try {
    const url = `${path}/prod/${mainicategory}/${subicategory}/${iproduct}`;
    const res = await jwtAxios.get(url);

    return res;
  } catch (error) {
    console.log(error);
    failPostDatas("/");
  }
};

export const getUserInfo = async userpk => {
  try {
    const url = `${path}/user?=tar${userpk}`;
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
export const getDisavled = async (iproduct, y, m) => {
  try {
    const url = `${path}/prod/disabled-date/${iproduct}?y=${y}&m=${m}`;
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
    const res = await jwtAxios.post(url, data);
    return res;
  } catch (error) {
    console.log(error);
    failPostDatas("/");
  }
};

export const postReview = async (ipayment, contents, rating) => {
  try {
    const url = `${path}/pay/riview?ipayment=${ipayment}&contents=${contents}&rating=${rating}`;
    const res = await jwtAxios.post(url);
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

export const Reviepatch = async (ireview, contents, rating) => {
  try {
    const url = `${path}/pay/review?ireview?=${ireview}&contents=${contents}&rating=${rating}`;
    const res = await jwtAxios.patch(url);
    return res;
  } catch (error) {
    console.log(error);
    failPostDatas("/");
  }
};

export const deleteProduct = async iproduct => {
  try {
    const url = `${path}/prod/${iproduct}?div=1`;
    const res = await jwtAxios.delete(url);
    return res;
  } catch (error) {
    console.log(error);
    failPostDatas("/");
  }
};

export const Reviewdelete = async rev => {
  try {
    const url = `${path}/pay/review?rev=${1}`;
    const res = await jwtAxios.delete(url);
    return res;
  } catch (error) {
    console.log(error);
    failPostDatas("/");
  }
};
