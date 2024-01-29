import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

const ChatBoxWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ChatBoxContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const ChatBoxContent = styled.div`
  width: 600px;
  max-width: 100%; /* 최대 너비 설정 */
  max-height: 900px;
  height: auto;
  box-sizing: border-box;
  background-color: #fff;
`;

const NoChatSelectedMessage = styled.p`
  font-size: 16px;
  text-align: center;
`;

const ChatInput = styled.input`
  width: 580px;
  max-width: 100%; /* 최대 너비 설정 */
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 20px;
  font-size: 16px;
  background: #f2f2ff;
  padding-left: 10px;
  bottom: 10px;
`;

const ProfileInfoContainer = styled.div`
  display: inline-block;
  margin-left: 10px;
`;

const ChatText = styled.div`
  max-height: 700px;
  min-height: 690px;
  overflow-y: auto;
  overflow-x: hidden;
`;

const ProfileName = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

const ChatMessage = styled.div`
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 10px;
  background-color: ${({ isSender }) => (isSender ? "#DCF8C6" : "#E5E5EA")};
  align-self: ${({ isSender }) => (isSender ? "flex-end" : "flex-start")};
`;

const ChatBoxComponent = ({ selectedProfile, messages }) => {
  const [inputMessage, setInputMessage] = useState(
    localStorage.getItem("inputMessage") || "",
  ); // State to store input message

  const [chatMessages, setChatMessages] = useState(
    JSON.parse(localStorage.getItem("chatMessages")) || [],
  ); // State to store chat messages

  useEffect(() => {
    localStorage.setItem("inputMessage", inputMessage);
  }, [inputMessage]);

  useEffect(() => {
    localStorage.setItem("chatMessages", JSON.stringify(chatMessages));
  }, [chatMessages]);

  const handleInputChange = e => {
    setInputMessage(e.target.value); // Update input message state
  };

  const handleKeyPress = e => {
    if (e.key === "Enter" && inputMessage.trim() !== "") {
      // Send message when Enter key is pressed and input message is not empty
      const newMessage = { text: inputMessage, isSender: true }; // New message object
      setChatMessages([...chatMessages, newMessage]); // Add new message to chatMessages
      setInputMessage(""); // Clear input after sending message
    }
  };

  return (
    <ChatBoxWrapper>
      {selectedProfile ? (
        <ChatBoxContainer>
          <ChatBoxContent>
            <img
              src={selectedProfile.profileImage}
              alt="Profile"
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                marginBottom: "20px",
              }}
            />
            <ProfileInfoContainer>
              <ProfileName>{selectedProfile.profileName}</ProfileName>
              <p>{selectedProfile.productContent}</p>
            </ProfileInfoContainer>
            <ChatText>
              {chatMessages.map((message, index) => (
                <ChatMessage key={index} isSender={message.isSender}>
                  {message.text}
                </ChatMessage>
              ))}
            </ChatText>
          </ChatBoxContent>
          <ChatInput
            type="text"
            placeholder="메시지를 입력하세요"
            value={inputMessage} // Bind input value to state
            onChange={handleInputChange} // Handle input change
            onKeyPress={handleKeyPress} // Handle Enter key press
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
