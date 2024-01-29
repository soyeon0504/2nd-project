import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
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

const dummyData = [
  {
    id: 1,
    profileImage: "/images/kong.jpg",
    profileName: "프로필 이름 1",
    productContent: "갤럭시 워치 4 골프 에디션 4 - 44mm 블루투스 (블랙 에디션)",
    currentDate: "2024/01/14",
  },
  {
    id: 2,
    profileImage: "/images/kong.jpg",
    profileName: "프로필 이름 2",
    productContent: "다른 상품 내용...",
    currentDate: "2024/01/15",
  },
  // Add more dummy data as needed
];

// Copy the first two objects to create additional dummy data
const additionalDummyData = Array.from({ length: 10 }, (_, index) => ({
  id: index + 3,
  profileImage: "/images/kong.jpg",
  profileName: `프로필 이름 ${index + 3}`,
  productContent: `더미 상품 내용 ${index + 1}...`,
  currentDate: "2024/01/15",
}));

const allDummyData = [...dummyData, ...additionalDummyData];

const ChatProfile = ({ onProfileSelect }) => {
  const [selectedProfile, setSelectedProfile] = useState(null);

  const handleProfileSelect = profile => {
    setSelectedProfile(profile);
    onProfileSelect(profile); // Notify the parent component about the selected profile
  };

  return (
    <>
      {allDummyData.map(data => (
        <ChatProfileBox
          key={data.id}
          onClick={() => handleProfileSelect(data)}
          selected={selectedProfile && selectedProfile.id === data.id}
        >
          <ProfileContainer>
            <ProfileImg>
              <img src={data.profileImage} alt="Profile Image" />
            </ProfileImg>
            <ProfileName>{data.profileName}</ProfileName>
          </ProfileContainer>
          <ProductContentWrapper>
            <ProductContent>{data.productContent}</ProductContent>
            <CurrentDate>{data.currentDate}</CurrentDate>
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
