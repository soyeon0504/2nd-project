import React, { useState } from "react";
import { PageWrapper, ChatBox, ChatList } from "../../styles/chat/ChatStyles";
import ChatProfile from "../../components/chat/ChatProfile";

import Layout from "../../layouts/Layout";
import ChatBoxComponent from "../../components/chat/ChatBoxComponent";

const ChatPage = () => {
  const [selectedProfile, setSelectedProfile] = useState(null);

  const handleProfileSelect = profile => {
    setSelectedProfile(profile);
  };

  return (
    <Layout>
      <PageWrapper>
        <ChatBox>
          <ChatList>
            채팅 목록 <img src="/images/chat/Vector.svg" alt="Vector" />
          </ChatList>
          <ChatProfile onProfileSelect={handleProfileSelect} />
        </ChatBox>
        <ChatBox>
          <ChatBoxComponent selectedProfile={selectedProfile} />
        </ChatBox>
      </PageWrapper>
    </Layout>
  );
};

export default ChatPage;
