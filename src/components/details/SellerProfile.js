import React from "react";
import {
  SellerProfileContainer,
  ProfileImg,
  ProfileName,
} from "../../styles/details/DetailsComponentStyles";

const SellerProfile = ({ sellerName, profileImage, iuser }) => {
  const handleDelete = () => {
    console.log("Delete action");
    // 여기에 삭제 동작을 추가하십시오.
  };

  // 현재 사용자와 게시물 올린 유저가 일치할 때만 삭제 버튼을 표시

  return (
    <SellerProfileContainer>
      {/* Profile image */}
      <ProfileImg>
        <img src={profileImage} alt="Profile Image" />
      </ProfileImg>
      {/* Seller name */}
      <ProfileName>{sellerName}</ProfileName>
      {/* 삭제 버튼 */}
    </SellerProfileContainer>
  );
};

export default SellerProfile;
