// import axios from "axios";
import axios from "axios";
import { SERVER_URL } from "../config";
// 앱 등록시 Rest 키 값(절대 오픈 금지)
const client_id = "beae94b18549648a1e9a98b4e0d945b2";
// 카카오 로그인 통과시 이동할 주소
const redirect_uri = "http://localhost:3000/login/kakao";
// 카카오 로그인 문서 참조
const auth_code_path = "https://kauth.kakao.com/oauth/authorize";
const response_type = "code";
const authParam = new URLSearchParams({

    client_id, redirect_uri, response_type
})

// 카카오 로그인시 활용
export const getKakaoLoginLink = () => {
  const kakaoURL = `${auth_code_path}?${authParam.toString()}`;
  return kakaoURL;
};
// access 토큰 받기 경로
const access_token_url = `https://kauth.kakao.com/oauth/token`;
export const getAccessToken = async authCode => {
  const header = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
    },
  };

  const params = {
    grant_type: "authorization_code",
    client_id: client_id,
    redirect_uri: redirect_uri,
    code: authCode,
  };

  const res = await axios.post(access_token_url, params, header);
  const accessToken = res.data.access_token;
  return accessToken;
};
// Access Token 으로 회원정보 가져오기
export const getMemberWithAccessToken = async accessToken => {
  console.log("백엔드에 회원 등록을 위한 액세스 토큰 전달 ", accessToken);
  const res = await axios.get(
    `${SERVER_URL}/api/user/kakao?accessToken=${accessToken}`,
  );

  return res.data;
};
