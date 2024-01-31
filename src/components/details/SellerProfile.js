import React from "react";
import {
  SellerProfileContainer,
  ProfileImg,
  ProfileName,
} from "../../styles/details/DetailsComponentStyles";
import { useAuth } from "./AuthContext";

const SellerProfile = ({ sellerName, profileImage, iuser, iauth }) => {
  const currentUser = useAuth(); // 현재 로그인한 사용자 정보를 가져오는 함수 (예: 세션 정보, 토큰 등)

  const handleEdit = () => {
    console.log("Edit action");
  };

  const handleDelete = () => {
    console.log("Delete action");
  };

  // 현재 사용자가 판매자와 동일한 경우에만 수정 및 삭제 옵션을 표시
  const isCurrentUserSeller =
    currentUser && (currentUser.id === iuser || currentUser.auth === iauth);

  return (
    <>
      {isCurrentUserSeller && (
        <div
          style={{
            position: "absolute",
            display: "flex",
            marginTop: "-50px",
            marginLeft: "495px",
          }}
        >
          <span
            onClick={handleEdit}
            style={{ cursor: "pointer", fontSize: "15px", marginRight: "10px" }}
          >
            수정
          </span>{" "}
          <span style={{ fontSize: "15px" }}>|</span>{" "}
          <span
            onClick={handleDelete}
            style={{ cursor: "pointer", fontSize: "15px", marginLeft: "10px" }}
          >
            삭제
          </span>
        </div>
      )}
      <SellerProfileContainer>
        {/* Profile image */}
        <ProfileImg>
          <img src={profileImage} alt="Profile Image" />
        </ProfileImg>

        {/* Seller name */}
        <ProfileName>{sellerName}</ProfileName>
      </SellerProfileContainer>
    </>
  );
};

export default SellerProfile;
