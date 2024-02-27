import axios from "axios";
import { SERVER_URL } from "../config";
import { jwtAxios } from "../../util/jwtUtil";

const path = `${SERVER_URL}/api`;

// 상품 게시판 api
export const getAllProducts = async(page, successFn, errorFn) => {
    try {
        // http://192.168.0.144:5226/api/admin/product
        //                  /admin/product?page=1&type=1////
        const url = `${path}/admin/product?page=${page}`
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

export const deleteProduct = async(successFn, errorFn) => {
    try {
        // http://192.168.0.144:5226/api/admin/product
        const url = `${path}/admin/product`
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

// 자유 게시판 api
export const deletePost = async(successFn, errorFn) => {
    try {
        // http://192.168.0.144:5226/api/admin/board
        const url = `${path}/admin/board`
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