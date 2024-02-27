import axios from "axios";
import { SERVER_URL } from "../config";
import { jwtAxios } from "../../util/jwtUtil";

const path = `${SERVER_URL}/api`;


export const getUserProfile = async(iuser, successGetFn, errorFn) => {
    try {
        //                  /user?tar=1
        const url = `${path}/user?tar=${iuser}`
        const res = await jwtAxios.get(url);
        const status = res.status.toString()
        if(status.charAt(0) === "2") {
            successGetFn(res.data)
        }
        return res.data;
    } catch (error) {
        const res = error.response.data
        errorFn(res);
    }
}

export const getProductList = async(iuser, page, successFn, errorFn) => {
    try {
        //                  /prod/list?iuser=1&page=1
        const url = `${path}/prod/list?iuser=${iuser}&page=${page}`
        const res = await axios.get(url);
        const status = res.status.toString()
        if(status.charAt(0) === "2") {
            successFn(res.data)
        }
        return res.data;
    } catch (error) {
        const res = error
        errorFn(res);
        // console.log(error);
    }
}