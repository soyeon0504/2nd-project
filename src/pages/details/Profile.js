import React from "react";
import styled from "@emotion/styled";

const ProfileContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;

  gap: 1rem;
`;

const ProfileImg = styled.div`
  width: 70px;
  height: 70px;
  box-sizing: border-box;
  border-radius: 45px;
  overflow: hidden;
  font-size: 16px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const ProfileName = styled.div`
  width: 150px;
  height: 20px;
  color: #000;
  font-size: 16px;
  font-weight: 400;
`;

const Profile = () => {
  return (
    <ProfileContainer>
      <ProfileImg>
        <img src="/images/kong.jpg" alt="Profile Image" />
      </ProfileImg>

      <ProfileName>판매자 이름</ProfileName>
    </ProfileContainer>
  );
};

export default Profile;
