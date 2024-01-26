import React from "react";
import styled from "@emotion/styled";
import Profile from "../details/Profile";

const PageWrapper = styled.div`
  max-width: 1260px;
  margin: 0 auto;
  display: flex;
`;

const ChatBox = styled.div`
  width: 640px;
  height: 900px;
  flex-shrink: 0;
  padding-left: 20px;
  padding-top: 25px;
  border: 1px solid #777;
`;

const ChatList = styled.div`
  color: #000;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 45px;
`;

const ProductContentWrapper = styled.div`
  display: flex;
  align-items: baseline; /* 제품명과 날짜를 수평 정렬하기 위해 추가 */
`;

const ProductContent = styled.div`
  width: 380px;
  height: 15px;
  color: #777;
  font-size: 13px;
  font-weight: 400;
  margin-left: 80px;
`;

const CurrentDate = styled.div`
  width: 80px;
  height: 15px;
  color: #777;
  font-size: 13px;
  font-weight: 400;
  margin-left: 50px; /* 여유 공간 조정을 위해 수정 */
`;

const ChatPage = () => (
  <PageWrapper>
    <ChatBox>
      <ChatList>
        구매 목록 <img src="/images/chat/Vector.svg" alt="Vector" />
      </ChatList>
      <Profile />
      <ProductContentWrapper>
        <ProductContent>
          갤럭시 워치 4 골프 에디션 4 - 44mm 블루투스 (블랙 에디션) 갤럭시 ...
        </ProductContent>
        <CurrentDate>2024/01/14</CurrentDate>
      </ProductContentWrapper>
    </ChatBox>
  </PageWrapper>
);

export default ChatPage;
