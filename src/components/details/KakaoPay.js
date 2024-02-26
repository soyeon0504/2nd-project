import React from "react";
import axios from "axios";

const CLIENT_ID = "3B7D7A747D68961CEC9E";
const REDIRECT_URI = "YOUR_REDIRECT_URI"; // 실제 사용하는 리다이렉션 URI로 대체해야 합니다.
const CODE = "YOUR_AUTHORIZATION_CODE"; // OAuth 인증 코드

const tokenUrl = `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&code=${CODE}`;

const data = {
  cid: "TC0ONETIME",
  partner_order_id: "YOUR_ORDER_ID",
  partner_user_id: "YOUR_USER_ID",
  item_name: "초코파이",
  quantity: "1",
  total_amount: "2200",
  vat_amount: "200",
  tax_free_amount: "0",
  approval_url: "https://developers.kakao.com/success",
  fail_url: "https://developers.kakao.com/fail",
  cancel_url: "https://developers.kakao.com/cancel",
};

const openKakaoPay = () => {
  axios
    .post(tokenUrl)
    .then(response => {
      const accessToken = response.data.access_token;

      const paymentUrl = "https://kapi.kakao.com/v1/payment/ready";
      axios
        .post(paymentUrl, data, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
          },
        })
        .then(response => {
          const { next_redirect_pc_url } = response.data;
          window.open(next_redirect_pc_url, "_self");
        })
        .catch(error => {
          console.error(error);
        });
    })
    .catch(error => {
      console.error(error);
    });
};

const KakaoPayButton = () => {
  return <button onClick={openKakaoPay}>카카오페이 결제하기</button>;
};

export default KakaoPayButton;
