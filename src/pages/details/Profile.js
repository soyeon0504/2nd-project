import React from "react";
import styled from "@emotion/styled";

const ProfileImg = styled.div`
  width: 7rem;
  height: 7rem;
  box-sizing: border-box;
  border-radius: 45px;
  overflow: hidden;
  font-size: 16px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Profile = () => {
  return (
    <ProfileImg>
      <img src="/images/kong.jpg" />
    </ProfileImg>
  );
};

export default Profile;
