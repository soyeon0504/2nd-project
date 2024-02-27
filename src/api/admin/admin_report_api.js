import { jwtAxios } from "../../util/jwtUtil";
import { SERVER_URL } from "../config";

// 신고내역 list 조회
export const getDispute = async(page) => {
    try {
        const url = `${SERVER_URL}/api/admin/dispute?page=${page}`;

        const res = await jwtAxios.get(url)
        return res;
    } catch (error) {
        console.log(error);
    }
}

// 신고 수락 or 반려
export const postDispute = async(idispute,type) => {
    try {
        const url = `${SERVER_URL}/api/admin/dispute/${idispute}?type=${type}`;

        const res = await jwtAxios.post(url)
        return res;
    } catch (error) {
        console.log(error);
    }
}