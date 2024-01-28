import React, { useState } from "react";

import {
  ProfileContainer,
  ProfileImg,
  ProfileName,
  ReviewFormStyle,
  ReviewProfile,
  CurrentDate,
  ReviewButton,
  ReviewText,
  ReviewProfileLine,
} from "../../styles/details/DetailsComponentStyles";
import StarRating from "./StarRating";

const Profile = () => {
  // 가상 데이터
  const profiles = [
    {
      id: 1,
      name: "프로필1",
      image: "/images/kong.jpg",
      date: "2024-01-01",
      text: "친절하게 구매 물품 확인해 주셨습니다.\n안전하게 포장하여 당일 배송해 주셨습니다.\n신뢰할 수 있는 판매자입니다친절하게 구매 물품 확인해 주셨습니다.\n안전하게 포장하여 당일 배송해 주셨습니다.\n신뢰할 수 있는 판매자입니다",
    },
    {
      id: 2,
      name: "프로필2",
      image: "/images/kong.jpg",
      date: "2024-01-02",
      text: "후기내용",
    },
    {
      id: 3,
      name: "프로필3",
      image: "/images/kong.jpg",
      date: "2024-01-03",
      text: "후기내용",
    },
    {
      id: 1,
      name: "프로필4",
      image: "/images/kong.jpg",
      date: "2024-01-01",
      text: "후기내용",
    },
    {
      id: 2,
      name: "프로필5",
      image: "/images/kong.jpg",
      date: "2024-01-02",
      text: "후기내용",
    },
    {
      id: 3,
      name: "프로필6",
      image: "/images/kong.jpg",
      date: "2024-01-03",
      text: "후기내용",
    },
  ];

  const [showAllProfiles, setShowAllProfiles] = useState(false);

  // 처음에 표시할 프로필 개수
  const initialProfileCount = 2;
  const visibleProfiles = showAllProfiles
    ? profiles
    : profiles.slice(0, initialProfileCount);

  const handleShowMore = () => {
    setShowAllProfiles(true);
  };

  const handleCancel = () => {
    setShowAllProfiles(false);
  };

  return (
    <ReviewFormStyle
      style={{ height: showAllProfiles ? "auto" : "420px", overflow: "hidden" }}
    >
      후기
      {visibleProfiles.map(profile => (
        <ReviewProfile key={profile.id}>
          <ProfileContainer>
            <ProfileImg>
              <img src={profile.image} alt="Profile Image" />
            </ProfileImg>{" "}
            <ProfileName>{profile.name}</ProfileName>
            <CurrentDate>{profile.date}</CurrentDate>
          </ProfileContainer>
          <StarRating totalStars={5} />
          <ReviewText>{profile.text}</ReviewText>
          <ReviewProfileLine />
        </ReviewProfile>
      ))}
      {!showAllProfiles ? (
        <ReviewButton onClick={handleShowMore}>더 보기</ReviewButton>
      ) : (
        <ReviewButton onClick={handleCancel} style={{ marginBottom: "25px" }}>
          취소
        </ReviewButton>
      )}
    </ReviewFormStyle>
  );
};

export default Profile;
