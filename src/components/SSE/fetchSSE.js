import React, { useEffect, useState } from 'react';
// import { EventSourcePolyfill } from 'event-source-polyfill';
// import { SERVER_URL } from '../../api/config';
// import { getCookie } from '../../util/cookieUtil';
// import { ModalBackground } from '../joinpopup/JoinPopUp';
// import FetchSSEModal from './FetchSSEModal';

const FetchSSE = () => {
//   const path2 = `${SERVER_URL}/api`;
//   const url = `${path2}/sse/connect`;
//   const memberInfo = getCookie("member");
//   const authToken = memberInfo ? memberInfo.accessToken : 'your_default_token';
//   const [ticket, setTicket] = useState([]);
//   const [closeModal, setCloseModal] = useState(true);

//   useEffect(() => {
//     const eventSource = new EventSourcePolyfill(url, {
//       headers: {
//         Authorization: `Bearer ${authToken}`,
//         Accept: `text/event-stream`,
//       },
//     });

//     // SSE 엔드포인트에서 데이터 수신을 처리하는 이벤트 리스너
//     eventSource.onmessage = (event) => {
//       const data = JSON.parse(event.data);
//       console.log('Received data:', data);
//       // setTicket(JSON.stringify(data));
//     };

//     // SSE 오류를 처리하는 이벤트 리스너
//     eventSource.addEventListener('error', (error) => {
//       console.error('SSE Error:', error);
//     });

//     // 정리: 컴포넌트가 언마운트될 때 EventSource 연결 닫기
//     return () => {
//       eventSource.close();
//     };
//   }, [url, authToken]);

//   const handleConfirm = async () => {
//     setCloseModal(false);
//   }

//   return (
//     <div>
//     {ticket && closeModal && (
//       <>
//        <FetchSSEModal onConfirm={handleConfirm}/>
//        <ModalBackground></ModalBackground>
//       </>
//     )}
//   </div>
//   );
};

export default FetchSSE;