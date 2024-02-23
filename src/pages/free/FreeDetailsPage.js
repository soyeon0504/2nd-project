import React, { useState } from "react";
import Layout from "../../layouts/Layout";
import {
  ContentSection,
  ContentState,
  FreeDetailsMain,
  FreeDetailsPageStyle,
  MoreBt,
  ReviewList,
  ReviewRegister,
  ReviewSection,
  SideSection,
  TitleSection,
  WriterSection,
} from "../../styles/free/FreeDetailsPageStyle";
import { FreeHeader } from "../../styles/free/FreePageStyle";
import { GoToListBt } from "../../styles/free/FreeRegisterPageStyle";
import { useNavigate } from "react-router-dom";

const contentData = [
  {
    title: "하..바보준*님 거래 잘 좀 합시다!!!!!!!!!!!!!!",
    content: "바보준*님 잘 좀 했으면 좋겠습니다.",
    date: "2024.02.23",
    reviews: [
      {
        writer: "바보준서",
        text: "허 어이가 없네 내가 잘해줬더만 그렇게 이야기하기있나 이제 너랑 안봐!!!!! 연락하지마!",
      },
      {
        writer: "바보아니다",
        text: "그래 다신 연락안할거다 흥! 니도 연락하지마 이미 차단했음",
      },
    ],
  },
];

const FreeDetailsPage = () => {
  // 페이지 이동
  const navigate = useNavigate();
  const MoveToList = () => {
    navigate(`/free`);
  };

  return (
    <Layout>
      <FreeDetailsPageStyle>
        <FreeHeader>
          <p>자유게시판</p>
          <GoToListBt onClick={MoveToList}></GoToListBt>
        </FreeHeader>

        {contentData.map(item => (
          <FreeDetailsMain key={item.title}>
            <div style={{ width: "1110px" }}>
              <TitleSection>
                <h1>{item.title}</h1>
                <h2>{item.date}</h2>
              </TitleSection>

              <ContentSection>
                <div>
                  <img src={`/images/kong.jpg`} alt="업로드이미지1" />
                  <img src={`/images/kong.jpg`} alt="업로드이미지2" />
                  <img src={`/images/kong.jpg`} alt="업로드이미지3" />
                </div>
                <p>{item.content}</p>
              </ContentSection>

              <ReviewSection>
                <h1>댓글 {item.reviews.length}</h1>
                <ReviewRegister>
                  <p>
                    저작권 등 다른 사람의 권리를 침해하거나 명예를 훼손하는
                    게시물은 이용약관 및 관련 법률에 의해 제재를 받을 수
                    있습니다.
                    <br />
                    건전한 토론 문화와 양질의 댓글 문화를 위해, 타인에게
                    불쾌감을 주는 욕설 또는 특정 계층/민족, 종교 등을 비하하는
                    단어들은 표시가 제한됩니다.
                  </p>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "end",
                    }}
                  >
                    <textarea
                      maxLength={200}
                      placeholder="댓글을 입력해주세요"
                      onChange={e => {
                        const inputText = e.target.value;
                        const inputLength = inputText.length;
                        const maxLength = 200;
                        const counterText = `${inputLength}/${maxLength}`;

                        // 입력된 글자수와 최대 글자수를 표시하는 부분
                        document.getElementById("counter").innerText =
                          counterText;
                      }}
                    />
                    <span id="counter">0/200</span>
                    <button>등록</button>
                  </div>
                </ReviewRegister>

                {item.reviews.map(listItem => (
                  <ReviewList key={listItem.text}>
                    <img src={`/images/kong.jpg`} alt="유저이미지" />
                    <div>
                      <h1>{listItem.writer}</h1>
                      <p>{listItem.text}</p>
                    </div>
                  </ReviewList>
                ))}
                <MoreBt>
                  <img src="/images/free/bt_more.svg" />
                </MoreBt>
              </ReviewSection>
            </div>

            <SideSection>
              <WriterSection>
                <img src={`/images/kong.jpg`} alt="작성자 이미지" />
                <h1>바보준서</h1>
              </WriterSection>
              <ContentState>
                <h1>댓글</h1>
              </ContentState>
              <ContentState>
                <h1>좋아요</h1>
              </ContentState>
              <ContentState>
                <h1>조회수</h1>
              </ContentState>
            </SideSection>
          </FreeDetailsMain>
        ))}
      </FreeDetailsPageStyle>
    </Layout>
  );
};

export default FreeDetailsPage;
