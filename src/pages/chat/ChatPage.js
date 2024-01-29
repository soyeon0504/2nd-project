import React, { useState } from "react";
import { PageWrapper, ChatBox, ChatList } from "../../styles/chat/ChatStyles";
import ChatProfile from "../../components/chat/ChatProfile";

import ChatBoxComponent from "../../components/chat/ChatBoxComponent";

const ChatPage = () => {
  const [selectedProfile, setSelectedProfile] = useState(null);

  const handleProfileSelect = profile => {
    setSelectedProfile(profile);
  };

  return (
    <PageWrapper>
      <ChatBox>
        <ChatList>
          구매 목록 <img src="/images/chat/Vector.svg" alt="Vector" />
        </ChatList>
        <ChatProfile onProfileSelect={handleProfileSelect} />
      </ChatBox>
      <ChatBox>
        <ChatBoxComponent selectedProfile={selectedProfile} />
      </ChatBox>
    </PageWrapper>
  );
};

export default ChatPage;
