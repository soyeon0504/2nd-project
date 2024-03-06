// import React from "react";
// import axios from "axios";

// const CLIENT_ID = "3B7D7A747D68961CEC9E";
// const REDIRECT_URI = "YOUR_REDIRECT_URI"; // 테스트를 위한 리다이렉션 URI로 변경
// const CODE = "YOUR_AUTHORIZATION_CODE"; // 테스트를 위한 인증 코드로 변경

// const tokenUrl = `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&code=${CODE}`;

// const data = {
//   cid: "TC0ONETIME",
//   // 수정: 테스트를 위해 임의의 값으로 변경
//   partner_order_id: "TEST_ORDER_123",
//   partner_user_id: "TEST_USER_123",
//   item_name: "초코파이",
//   quantity: "1",
//   total_amount: "2200",
//   vat_amount: "200",
//   tax_free_amount: "0",
//   approval_url: "https://developers.kakao.com/success",
//   fail_url: "https://developers.kakao.com/fail",
//   cancel_url: "https://developers.kakao.com/cancel",
// };

// const openKakaoPay = () => {
//   axios
//     .post(tokenUrl)
//     .then(response => {
//       const accessToken = response.data.access_token;

//       const paymentUrl = "https://kapi.kakao.com/v1/payment/ready";
//       axios
//         .post(paymentUrl, data, {
//           headers: {
//             Authorization: `Bearer ${accessToken}`,
//             "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
//           },
//         })
//         .then(response => {
//           const { next_redirect_pc_url } = response.data;
//           window.open(next_redirect_pc_url, "_self");
//         })
//         .catch(error => {
//           console.error(error);
//         });
//     })
//     .catch(error => {
//       console.error(error);
//     });
// };

// const KakaoPayButton = () => {
//   return <button onClick={openKakaoPay}>카카오페이 결제하기</button>;
// };

// export default KakaoPayButton;
