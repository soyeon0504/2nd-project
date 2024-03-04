import axios from "axios";
import { SERVER_URL } from "../config";
import { jwtAxios } from "../../util/jwtUtil";

const path = `${SERVER_URL}/api`;

// 상품 게시판 api
export const getAllProducts = async(page, successFn, errorFn) => {
    try {
        // http://192.168.0.144:5226/api/admin/product
        //                  /admin/product?page=${page}&type=${type}////
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
export const getFreeBoard = async(page, successFn, errorFn) => {
    try {
        // http://192.168.0.144:5226/api/admin/product
        //                  /admin/product?page=${page}&type=${type}////
        const url = `${path}/admin/board?page=${page}`
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

// 신고된 채팅 내역
export const getChatHistory = async(page, successFn, errorFn) => {
    try {
        // http://192.168.0.144:5226/api/admin/product
        //                  /admin/product?page=${page}&type=${type}////
        const url = `${path}/admin/chat?page=${page}`
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