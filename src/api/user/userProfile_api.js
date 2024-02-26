import axios from "axios";
import { SERVER_URL } from "../config";
import { jwtAxios } from "../../util/jwtUtil";

const path = `${SERVER_URL}/api`;


export const getUserProfile = async(iuser, successFn, errorFn) => {
    try {
        // http://192.168.0.144:5226/api/user?tar=12
        const url = `${path}/user?tar=1`
        const res = await jwtAxios.get(url);
        const status = res.status.toString()
        if(status.charAt(0) === "2") {
            successFn(res.data)
        }
        return res.data;
    } catch (error) {
        const res = error.response.data
        errorFn(res);
    }
}

export const getProductList = async(page, successFn, errorFn) => {
    try {
        // http://192.168.0.144:5226/api/prod/list?page=1
        const url = `${path}/prod/list?page=${page}`
        const res = await axios.get(url);
        const status = res.status.toString()
        if(status.charAt(0) === "2") {
            successFn(res.data)
        }
        return res.data;
    } catch (error) {
        errorFn(error)
        console.log(error);
    }
}