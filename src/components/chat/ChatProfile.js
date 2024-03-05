import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import {
  ProfileContainer,
  ProfileImg,
  ProfileName,
} from "../../styles/details/DetailsComponentStyles";

import {
  ProductContent,
  CurrentDate,
  ProductContentWrapper,
  ChatProfileBox,
} from "../../styles/chat/ChatStyles";

// ChatProfile 컴포넌트에서 API를 호출하기 위한 함수를 import
import { getChatList } from "../../api/chat/chat_api";

const ChatProfile = ({ onProfileSelect }) => {
  const [chatList, setChatList] = useState([]);

  useEffect(() => {
    // 페이지 로드 시 채팅 목록을 가져오도록 함
    async function fetchChatList() {
      try {
        const page = 1; // 가져올 페이지 번호
        const response = await getChatList(page);
        setChatList(response.data); // API 응답에서 데이터를 가져와 상태 업데이트
      } catch (error) {
        console.error("Error fetching chat list:", error);
      }
    }

    fetchChatList(); // 함수 호출
  }, []); // useEffect를 한 번만 호출하기 위해 빈 배열을 전달

  const [selectedProfile, setSelectedProfile] = useState(null);

  const handleProfileSelect = profile => {
    setSelectedProfile(profile);
    onProfileSelect(profile); // Notify the parent component about the selected profile
  };

  return (
    <>
      {chatList.map(data => (
        <ChatProfileBox
          key={data.id}
          onClick={() => handleProfileSelect(data)}
          selected={selectedProfile && selectedProfile.id === data.id}
        >
          <ProfileContainer>
            <ProfileImg>
              <img src={`/pic/${data.otherPersonPic}`} alt="Profile Image" />
            </ProfileImg>
            <ProfileName>{data.otherPersonNm}</ProfileName>
          </ProfileContainer>
          <ProductContentWrapper>
            <ProductContent>{data.title}</ProductContent>
          </ProductContentWrapper>
        </ChatProfileBox>
      ))}
    </>
  );
};

ChatProfile.propTypes = {
  onProfileSelect: PropTypes.func.isRequired,
};

export default ChatProfile;
