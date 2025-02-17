import React, { useState, useEffect, useRef } from "react";
import {
  ChatBoxContainer,
  ChatBoxWrapper,
  ChatBoxContent,
  ChatInput,
  ProfileInfoContainer,
  NoChatSelectedMessage,
  ChatText,
  ProfileName,
  ChatMessage,
  ChatMessageWrapper,
  ChatBtn,
} from "../../styles/chat/ChatStyles";
import Modal from "./Modal";
import { postChat } from "../../api/chat/chat_api"; // 채팅 생성 API import
import { getCookie } from "../../util/cookieUtil"; // 쿠키 유틸 함수 import
import { Client } from "@stomp/stompjs"; // STOMP 클라이언트 추가
import useCustomLogin from "../../hooks/useCustomLogin";

const ChatBoxComponent = ({ selectedProfile, chatTextArr }) => {
  const { loginState } = useCustomLogin();
  // console.log("=================", loginState.iuser);

  // console.log("====== ChatBoxComponent ======", chatTextArr);
  const [inputMessage, setInputMessage] = useState(""); // 입력 메시지를 저장하는 상태
  const [chatMessages, setChatMessages] = useState([]); // 채팅 메시지를 저장하는 상태
  const [modalOpen, setModalOpen] = useState(false); // 모달 열림 상태를 관리하는 상태
  const [stompClient, setStompClient] = useState(null); // STOMP5 클라이언트 상태 추가
  const chatContainerRef = useRef(null); // 채팅 스크롤을 위한 ref 추가
  const memberInfo = getCookie("member");
  const authToken = memberInfo ? memberInfo.accessToken : "your_default_token";

  // WebSocket 연결 함수 정의
  const connectToChat = async () => {
    try {
      const stomp = new Client({
        brokerURL: "ws://192.168.0.144:5226/ws", // WebSocket 연결 주소
        // brokerURL: `ws://${window.location.host}/ws`,
        // brokerURL: "ws://192.168.0.65:8080/ws",
        connectHeaders: {
          Authorization: `Bearer ${authToken}`, // AccessToken 헤더에 추가
        },
        debug: str => {
          console.log(str);
        },
        reconnectDelay: 20000, // 자동 재연결 딜레이
        heartbeatIncoming: 40000, // Heartbeat 수신 주기
        heartbeatOutgoing: 40000, // Heartbeat 발신 주기
      });

      stomp.onStompError = () => {
        console.log("연결실패");
      };

      // STOMP 클라이언트 설정 및 연결
      stomp.onConnect = () => {
        // console.log("==================== WebSocket 연결이 열렸습니다.");
        // console.log(
        //   "==================== iChat 값이 궁금해 : ",
        //   selectedProfile,
        // );

        // 구독 대상 설정
        // const subscriptionDestination = selectedProfile.iuser
        const subscriptionDestination = loginState.iuser
          ? `/exchange/chat.exchange/room.${selectedProfile.otherPersonIuser}`
          : `/exchange/chat.exchange/room.${selectedProfile.ichat}`;

        console.log("==== subscriptionDestination : ", subscriptionDestination);
        // 메시지 수신 처리
        stomp.subscribe(subscriptionDestination, frame => {
          try {
            const parsedMessage = JSON.parse(frame.body);
            console.log(parsedMessage);
            // 채팅 메시지 업데이트
            setChatMessages(prevMessages => [...prevMessages, parsedMessage]);
            scrollToBottom();
          } catch (error) {
            console.error("오류가 발생했습니다:", error);
          }
        });
      };

      // STOMP 클라이언트 설정 및 연결
      stomp.activate();
      setStompClient(stomp);
    } catch (error) {
      console.error("WebSocket 연결 중 오류가 발생했습니다:", error);
    }
  };

  // 스크롤을 맨 아래로 이동하는 함수
  const scrollToBottom = () => {
    // console.log(chatContainerRef.current);
    // console.log(chatContainerRef.current.scrollTop);
    // console.log(chatContainerRef.current.scrollHeight);
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
      chatContainerRef.current.offsetHeight;
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  };
  // 스크롤 젤 아래로
  const chatBoxRef = useRef(null);

  useEffect(() => {
    // chatBoxRef.current가 존재하고 스크롤을 조작할 수 있는 엘리먼트인지 확인
    if (chatBoxRef.current) {
      // 스크롤을 항상 아래로 이동
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [chatMessages]);

  // useEffect를 사용하여 컴포넌트가 마운트될 때 WebSocket 연결
  useEffect(() => {
    connectToChat();
    scrollToBottom();
    // 컴포넌트 언마운트 시 WebSocket 연결 해제
    return () => {
      if (stompClient) {
        stompClient.deactivate();
      }
    };
  }, [selectedProfile]); // 선택된 프로필이 변경될 때마다 useEffect 다시 실행

  const sendMessage = async () => {
    // 메시지 전송
    if (stompClient && stompClient.connected && selectedProfile) {
      const { otherIuser, iuser } = selectedProfile;
      // const destination = `/pub/chat.message.${otherIuser}`;
      const destination = `/pub/chat.send.${selectedProfile.ichat}`;

      const sendMSG = {
        senderIuser: loginState.iuser,
        receiveIuser: selectedProfile.otherPersonIuser,
        message: inputMessage,
        // /*
        // content: inputMessage,
        // sender: loginState.iuser,
        // */
      };

      console.log("리액트에서 보낸 데이터 형식 ", sendMSG);

      stompClient.publish({
        destination,
        body: JSON.stringify(sendMSG),
      });
    }

    setInputMessage("");
  };

  // 입력 메시지 변경 핸들러
  const handleInputChange = e => {
    setInputMessage(e.target.value);
  };

  // 엔터 키 입력 핸들러
  const handleKeyPress = async e => {
    if (e.key === "Enter" && inputMessage.trim() !== "") {
      const newMessage = {
        text: inputMessage,
        isSender: true,
      };

      // Chat API 호출
      try {
        await sendMessage();
        console.log("채팅 메시지 전송 성공");
      } catch (error) {
        console.error("채팅 메시지 전송 실패:", error);
      }

      setChatMessages(prevMessages => [...prevMessages, newMessage]);
      setInputMessage(""); // 입력 메시지 초기화
      scrollToBottom();
    }
  };

  // 모달 열기/닫기 토글 핸들러
  const toggleModal = () => {
    setModalOpen(prevModalOpen => !prevModalOpen);
  };

  return (
    <ChatBoxWrapper>
      {selectedProfile ? (
        <ChatBoxContainer>
          <ChatBoxContent>
            <img
              src={`/pic/${selectedProfile.otherPersonPic}`}
              alt="Profile"
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                marginBottom: "20px",
              }}
            />
            <ProfileInfoContainer>
              <ChatBtn
                onClick={toggleModal}
                src="/images/chat/more.png"
                alt="more"
              />
              <ProfileName>{selectedProfile.otherPersonNm}</ProfileName>
              <p>{selectedProfile.title}</p>
            </ProfileInfoContainer>
            <ChatText ref={chatContainerRef}>
              {modalOpen && <Modal onClose={toggleModal} />}
              <ChatBoxContent>
                {/* 기존글 출력하기 */}
                {chatTextArr.map((item, index) => (
                  <ChatMessageWrapper
                    key={index}
                    style={
                      item.isender == selectedProfile.otherPersonIuser
                        ? { textAlign: "start" }
                        : { textAlign: "end" }
                    }
                  >
                    <ChatMessage
                      style={
                        item.isender == selectedProfile.otherPersonIuser
                          ? { background: "#e6e6fa" }
                          : { background: "#fafad2" }
                      }
                    >
                      {item.msg}
                    </ChatMessage>
                  </ChatMessageWrapper>
                ))}

                {chatMessages.map((message, index) => (
                  <ChatMessageWrapper
                    key={index}
                    style={
                      message.isSender == selectedProfile.otherPersonIuser
                        ? { textAlign: "start" }
                        : { textAlign: "end" }
                    }
                  >
                    <ChatMessage
                      style={
                        message.isender == selectedProfile.otherPersonIuser
                          ? { background: "#e6e6fa" }
                          : { background: "#fafad2" }
                      }
                    >
                      {message.text}
                    </ChatMessage>
                  </ChatMessageWrapper>
                ))}
              </ChatBoxContent>
            </ChatText>
          </ChatBoxContent>
          <ChatInput
            type="text"
            placeholder="메시지를 입력하세요"
            value={inputMessage} // 입력값 바인딩
            onChange={handleInputChange} // 입력값 변경 핸들러
            onKeyPress={handleKeyPress} // 엔터 키 입력 핸들러
          />
        </ChatBoxContainer>
      ) : (
        <NoChatSelectedMessage>
          프로필을 선택하여 채팅을 시작하세요.
        </NoChatSelectedMessage>
      )}
    </ChatBoxWrapper>
  );
};

export default ChatBoxComponent;
