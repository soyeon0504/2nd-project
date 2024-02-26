import React, { useEffect, useState } from "react";
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
  PageContainer,
} from "../../styles/user/UserProfileStyle";
import Layout from "../../layouts/Layout";
import { SideBar } from "../../components/SideBar";
import { useNavigate } from "react-router-dom";
import MyMoreButton from "../../components/my/MyMoreButton";
import useCustomLogin from "../../hooks/useCustomLogin";
import { getUserProfile, getProductList } from "../../api/user/userProfile_api";

const postData = [
  {
    id: 1,
    title: "갤럭시 워치 4 골프 에디션 4 - 44mm 블루투스 (블랙 에디션)",
    price: "260,000원",
    date: "대여 기간 : 2024-01-11 ~ 2024-01-31  (30일)",
    profileImage: "../images/kong.jpg",
    userName: "바보준서",
    postImage: "../images/user/watch.jpeg",
  },
  {
    id: 1,
    title: "갤럭시 워치 4 골프 에디션 4 - 44mm 블루투스 (블랙 에디션)",
    price: "260,000원",
    date: "대여 기간 : 2024-01-11 ~ 2024-01-31  (30일)",
    profileImage: "../images/kong.jpg",
    userName: "바보준서",
    postImage: "../images/user/watch.jpeg",
  },
  {
    id: 1,
    title: "갤럭시 워치 4 골프 에디션 4 - 44mm 블루투스 (블랙 에디션)",
    price: "260,000원",
    date: "대여 기간 : 2024-01-11 ~ 2024-01-31  (30일)",
    profileImage: "../images/kong.jpg",
    userName: "바보준서",
    postImage: "../images/user/watch.jpeg",
  },
  {
    id: 1,
    title: "갤럭시 워치 4 골프 에디션 4 - 44mm 블루투스 (블랙 에디션)",
    price: "260,000원",
    date: "대여 기간 : 2024-01-11 ~ 2024-01-31  (30일)",
    profileImage: "../images/kong.jpg",
    userName: "바보준서",
    postImage: "../images/user/watch.jpeg",
  },
  {
    id: 1,
    title: "갤럭시 워치 4 골프 에디션 4 - 44mm 블루투스 (블랙 에디션)",
    price: "260,000원",
    date: "대여 기간 : 2024-01-11 ~ 2024-01-31  (30일)",
    profileImage: "../images/kong.jpg",
    userName: "바보준서",
    postImage: "../images/user/watch.jpeg",
  },
  {
    id: 1,
    title: "갤럭시 워치 4 골프 에디션 4 - 44mm 블루투스 (블랙 에디션)",
    price: "260,000원",
    date: "대여 기간 : 2024-01-11 ~ 2024-01-31  (30일)",
    profileImage: "../images/kong.jpg",
    userName: "바보준서",
    postImage: "../images/user/watch.jpeg",
  },
  {
    id: 1,
    title: "갤럭시 워치 4 골프 에디션 4 - 44mm 블루투스 (블랙 에디션)",
    price: "260,000원",
    date: "대여 기간 : 2024-01-11 ~ 2024-01-31  (30일)",
    profileImage: "../images/kong.jpg",
    userName: "바보준서",
    postImage: "../images/user/watch.jpeg",
  },
  {
    id: 1,
    title: "갤럭시 워치 4 골프 에디션 4 - 44mm 블루투스 (블랙 에디션)",
    price: "260,000원",
    date: "대여 기간 : 2024-01-11 ~ 2024-01-31  (30일)",
    profileImage: "../images/kong.jpg",
    userName: "바보준서",
    postImage: "../images/user/watch.jpeg",
  },
  {
    id: 1,
    title: "갤럭시 워치 4 골프 에디션 4 - 44mm 블루투스 (블랙 에디션)",
    price: "260,000원",
    date: "대여 기간 : 2024-01-11 ~ 2024-01-31  (30일)",
    profileImage: "../images/kong.jpg",
    userName: "바보준서",
    postImage: "../images/user/watch.jpeg",
  },
];

const initUserData = {
  y: 1,
  x: 2,
  addr: "대구",
  restAddr: "달서구",
  nick: "소연",
  storedPic: "",
  phone: "010",
  email: "ㅔㅔㅔ",
  rating: 4,
  auth: 1,
  istatus: 1,
};

const initListData = {
  "¡user": 0,
  nick: "",
  string: "",
  userPic: "string",
  iauth: 0,
  iproduct: 0,
  title: "",
  prodMainPic: "",
  rentalPrice: 0,
  rentalStartDate: "2024-02-23711:10:48.508Z",
  rentalEndDate: "2024-02-23711:10:48.508Z",
  addr: "string",
  restAddr: "",
  view: 0,
  istatus: 0,
  prodLike: 0,
  inventory: 0,
  isLiked: 0,
  categories: {
    mainCategory: 1,
    subCategory: 1,
  },
};

const UserProfile = () => {
  const navigate = useNavigate(`/details/`);

  // 프로필 데이터
  const [userData, setUserData] = useState(initUserData);
  console.log("userData", userData);

  // 제품 리스트 데이터
  const [userListData, setUserListData] = useState(initListData);
  console.log("userListData", userListData);
  
  // 게시물 클릭시 상세페이지로 이동
  const handlePageChangeDetails = async _item => {
    const url = `/details/${_item.categories.mainCategory}/${_item.categories.subCategory}/${_item.iproduct}`;
    const serverData = {
      mainCategoryId: _item.categories.mainCategory,
      subCategoryId: _item.categories.subCategory,
      iproduct: _item.iproduct,
    };
    navigate(url);
  };
  // more 버튼 클릭시 게시물 5개씩 더보기
  const [viewMore, setViewMore] = useState(4);
  const handleLoadMore = () => {
    setViewMore(prevViewMore => prevViewMore + 5);
  };

  const { loginState } = useCustomLogin();
  const iuser = loginState.iuser;
  console.log("iuser", iuser);

  useEffect(() => {
    getUserProfile(iuser, successFn, errorFn);
  }, []);

  useEffect((page) => {
    getProductList(page, successFn, errorFn);
  }, []);


  const successFn = res => {
    console.log("성공했을때", res);
    setUserData(res);
    setUserListData(res);
  };
  const errorFn = res => {
    console.log("실패", res);
    // alert(`${res.message} \n 에러코드(${res.errorCode})`);
  };

  

  return (
    <Layout>
      <SideBar />
      <PageContainer>
        <PageWrap>
          <Wrap>
            <Header>
              <div>프로필</div>
              <hr />
            </Header>
            {/* 유저 프로필 정보 */}
            <UserInfoWrap>
              <UserInfo>
                <div className="profile-wrap">
                  <ProfileImg>
                    <img src="../images/kong.jpg" />
                  </ProfileImg>
                  <UserName>{userData.nick}</UserName>
                </div>
                <hr />
                <div className="rating-wrap">
                  <Rating>
                    <div>통합 별점</div>
                    <div className="rating-score">
                      <span>5.0 /</span>
                      <span
                        style={{
                          color: "#2C39B5",
                          fontWeight: "500",
                        }}
                      >
                        4.3
                      </span>
                    </div>
                  </Rating>
                  <hr />
                  <Demerit>
                    <div>벌점</div>
                    <div className="demerit-score">
                      <span>-</span>
                      <span
                        style={{
                          color: "green",
                          fontWeight: "500",
                          fontSize: "25px",
                        }}
                      >
                        <span>15</span>
                      </span>
                      <span>점</span>
                    </div>
                  </Demerit>
                </div>
              </UserInfo>
            </UserInfoWrap>

            {/* 제품리스트 */}
            <PostInfoWrap>
              <PostInfo>
                <Title>
                  <div>작성 게시물</div>
                  <div>26개</div>
                </Title>
                <PostWrap
                  className="item-wrap"
                  // key={`MainMore-item-${index}`}
                  onClick={() => handlePageChangeDetails()}
                >
                  {postData.slice(0, viewMore).map((userListData, index) => (
                    <Post key={index}>
                      <div>
                        <PostImg>
                          <img src={userListData.prodMainPic} alt="Post Image" />
                        </PostImg>
                        <PostDesc>
                          <div className="post-info-title">{userListData.title}</div>
                          <div className="post-info-price">{userListData.rentalPrice}</div>
                          <div className="post-info-date">{userListData.rentalStartDate}</div>
                        </PostDesc>
                      </div>
                      <ProfileWrap>
                        <div>
                          <img src={userListData.userPic} alt="Profile Image" />
                        </div>
                        <div className="user-name">{userListData.nick}</div>
                      </ProfileWrap>
                    </Post>
                  ))}
                </PostWrap>
                <MyMoreButton handleLoadMore={handleLoadMore} />
              </PostInfo>
            </PostInfoWrap>
          </Wrap>
        </PageWrap>
      </PageContainer>
    </Layout>
  );
};

export default UserProfile;
