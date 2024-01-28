import React from "react";
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
  position: relative; /* Added */
`;

const ChatBoxContent = styled.div`
  width: 600px;
  max-height: 900px;
  height: auto;
  box-sizing: border-box;

  background-color: #fff;
  overflow-y: auto; /* Added */
`;

const NoChatSelectedMessage = styled.p`
  font-size: 16px;
  text-align: center;
`;

const ChatInput = styled.input`
  width: 580px;
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 20px;
  font-size: 16px;
  background: #f2f2ff;
  padding-left: 10px;
  position: absolute;
  bottom: 10px; /* Adjust as needed */
`;

const ProfileInfoContainer = styled.div`
  display: inline-block;
  margin-left: 10px;
`;

const ChatText = styled.div`
  width: 580px;
  max-height: 700px;
  min-height: 690px;
  overflow-y: auto;
  overflow-x: hidden;
`;

const ProfileName = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

const ChatBoxComponent = ({ selectedProfile }) => {
  return (
    <ChatBoxWrapper>
      {selectedProfile ? (
        <ChatBoxContainer>
          <ChatBoxContent>
            <img
              src={selectedProfile.profileImage}
              alt="Profile"
              style={{ width: "60px", height: "60px", borderRadius: "50%" }}
            />
            <ProfileInfoContainer>
              <ProfileName>{selectedProfile.profileName}</ProfileName>
              <p>{selectedProfile.productContent}</p>
            </ProfileInfoContainer>
            <ChatText />
          </ChatBoxContent>
          <ChatInput type="text" placeholder="메시지를 입력하세요" />
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
