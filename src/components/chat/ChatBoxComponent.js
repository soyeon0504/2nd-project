import React, { useState } from "react";
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
  ButtonContainer,
} from "../../styles/chat/ChatStyles";

const ChatBoxComponent = ({ selectedProfile, messages }) => {
  const [inputMessage, setInputMessage] = useState(""); // State to store input message
  const [chatMessages, setChatMessages] = useState([]); // State to store chat messages

  const handleInputChange = e => {
    setInputMessage(e.target.value); // Update input message state
  };

  const handleKeyPress = e => {
    if (e.key === "Enter" && inputMessage.trim() !== "") {
      // Send message when Enter key is pressed and input message is not empty
      const newMessage = {
        text: inputMessage,
        isSender: true,
      }; // New message object
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
          {/* 버튼에 margin-left: auto를 적용하여 오른쪽 끝으로 배치 */}
          <button
            onClick={() => console.log("Button clicked")}
            style={{ marginLeft: "auto" }}
          >
            버튼
          </button>
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
