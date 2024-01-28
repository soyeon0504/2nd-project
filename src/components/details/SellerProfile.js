import React from "react";
import {
  SellerProfileContainer,
  ProfileImg,
  ProfileName,
} from "../../styles/details/DetailsComponentStyles";

const SellerProfile = ({ sellerName, profileImage }) => {
  const handleEdit = () => {
    console.log("Edit action");
  };

  const handleDelete = () => {
    console.log("Delete action");
  };

  return (
    <>
      {/* Edit/Delete text */}
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
