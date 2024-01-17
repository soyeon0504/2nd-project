import styled from "@emotion/styled";
import React from "react";

const ProfileDiv = styled.div`
  display: flex;
  align-items: center;
  height: 180px;
  border: 1px solid #e4e7ff;
  padding: 2rem;
  border-radius: 5px;
`;

const ProfileLeft = styled.div`
  display: flex;
  width: 412px;
  height: 140px;
  align-items: center;
  border-right: 1px solid #f2f2ff;
  h1 {
    font-weight: 400;
    margin-left: 2rem;
  }
`;

const ProfileImg = styled.div`
  width: 7rem;
  height: 7rem;
  box-sizing: border-box;
  border-radius: 45px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProfileRight = styled.div`
  display: flex;
  div {
    padding: 0 10px;
    width: 170px;
    height: 80px;
    color: #777;
    text-align: center;
    border-right: 1px solid #f2f2ff;
    :first-of-type {
      margin-left: 4.3rem;
    }
    :last-of-type {
      border: 0;
    }
    p {
      width: 150px;
      font-size: 1.6rem;
      padding: 12px;
    }
    span {
      display: block;
      width: 150px;
      font-size: 1.8rem;
    }
  }
`;

const MyProfile = () => {
  return (
    <ProfileDiv>
      <ProfileLeft>
        <ProfileImg>
          <img src="/images/kong.jpg" />
        </ProfileImg>
        <div>
          <h1>코골고있는콩이</h1>
        </div>
      </ProfileLeft>
      <ProfileRight>
        <div>
          <p>대여중</p>
          <span>{Array.length}</span>
        </div>
        <div>
          <p>대여완료</p>
          <span>{Array.length}</span>
        </div>
        <div>
          <p>작성후기</p>
          <span>{Array.length}</span>
        </div>
      </ProfileRight>
    </ProfileDiv>
  );
};

export default MyProfile;
