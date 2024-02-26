import axios from "axios";
import { SERVER_URL } from "../config";
import { jwtAxios } from "../../util/jwtUtil";

const path = `${SERVER_URL}/api`;


export const getAllProducts = async( page, successFn, errorFn) => {
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

export const deleteProduct = async(iproduct, successFn, errorFn) => {
    try {
        // http://192.168.0.144:5226/api/user?tar=12
        const url = `${path}/user?tar=1`
        const res = await jwtAxios.delete(url);
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
