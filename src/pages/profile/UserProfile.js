import React from "react";
import {
  Demerit,
  Header,
  PageWrap,
  ProfileImg,
  Rating,
  UserName,
  Wrap,
  Title,
  PostWrap,
  PostImg,
  PostDesc,
  ProfileWrap,
  UserInfo,
  PostInfo,
  Post,
  UserInfoWrap,
  PostInfoWrap,
} from "../../styles/user/UserProfileStyle";
import Layout from "../../layouts/Layout";
import { SideBar } from "../../components/SideBar";
import { MoreBt } from "../../styles/main/mainStyle";
import styled from "@emotion/styled";

const handleClick = () => {};

const postData = [
  {
    id: 1,
    title: "갤럭시 워치 4 골프 에디션 4 - 44mm 블루투스 (블랙 에디션)",
    price: "260,000원",
    date: "대여 기간 : 2024-01-11 ~ 2024-01-31  (30일)",
    profileImage: "../images/kong.jpg",
    userName: "우즈이와이프",
    postImage: "../images/user/watch.jpeg",
  },
  {
    id: 1,
    title: "갤럭시 워치 4 골프 에디션 4 - 44mm 블루투스 (블랙 에디션)",
    price: "260,000원",
    date: "대여 기간 : 2024-01-11 ~ 2024-01-31  (30일)",
    profileImage: "../images/kong.jpg",
    userName: "우즈이와이프",
    postImage: "../images/user/watch.jpeg",
  },
  {
    id: 1,
    title: "갤럭시 워치 4 골프 에디션 4 - 44mm 블루투스 (블랙 에디션)",
    price: "260,000원",
    date: "대여 기간 : 2024-01-11 ~ 2024-01-31  (30일)",
    profileImage: "../images/kong.jpg",
    userName: "우즈이와이프",
    postImage: "../images/user/watch.jpeg",
  },
  {
    id: 1,
    title: "갤럭시 워치 4 골프 에디션 4 - 44mm 블루투스 (블랙 에디션)",
    price: "260,000원",
    date: "대여 기간 : 2024-01-11 ~ 2024-01-31  (30일)",
    profileImage: "../images/kong.jpg",
    userName: "우즈이와이프",
    postImage: "../images/user/watch.jpeg",
  },
];

const UserProfile = () => {
  return (
    <Layout>
      <SideBar />
      <PageWrap>
        <Wrap>
          <Header>
            <div>프로필</div>
            <hr />
          </Header>
          <UserInfoWrap>
            <UserInfo>
              <div className="profile-wrap">
                <ProfileImg>
                  <img src="../images/kong.jpg" />
                </ProfileImg>
                <UserName>우즈이와이프</UserName>
              </div>
              <hr />
              <div className="rating-wrap">
                <Rating>
                  <div>통합 별점</div>
                  <div>
                    <img src="../images/user/rating.svg" />
                  </div>
                </Rating>
                <hr />
                <Demerit>
                  <div>벌점</div>
                  <div className="score">
                    -{" "}
                    <span
                      style={{
                        color: "green",
                        fontWeight: "500",
                        fontSize: "20px",
                      }}
                    >
                      15
                    </span>{" "}
                    점
                  </div>
                </Demerit>
              </div>
            </UserInfo>
          </UserInfoWrap>

          <PostInfoWrap>
            <PostInfo>
              <Title>
                <div>작성 게시물</div>
                <div>26개</div>
              </Title>

              <PostWrap>
                {postData.map(post => (
                  <Post key={post.id}>
                    <div>
                      <PostImg>
                        <img src={post.postImage} alt="Post Image" />
                      </PostImg>
                      <PostDesc>
                        <div className="post-info-title">{post.title}</div>
                        <div className="post-info-price">{post.price}</div>
                        <div className="post-info-date">{post.date}</div>
                      </PostDesc>
                    </div>
                    <ProfileWrap>
                      <div>
                        <img src={post.profileImage} alt="Profile Image" />
                      </div>
                      <div className="user-name">{post.userName}</div>
                    </ProfileWrap>
                  </Post>
                ))}
              </PostWrap>
              <MoreBt 
              onClick={handleClick}
              >
                MORE
                <img src="/images/main/arrow.svg" alt="" />
              </MoreBt>
            </PostInfo>
          </PostInfoWrap>
        </Wrap>
      </PageWrap>
    </Layout>
  );
};

export default UserProfile;
