import styled from "@emotion/styled";

export const PageWrapper = styled.div`
  max-width: 1280px;
  height: 630px;
  margin: 0 auto;

  display: flex;
  /* margin-top: 20px; */
`;

export const ChatBox = styled.div`
  width: 630px;

  height: auto;
  max-height: 615px;
  flex-shrink: 0;
  padding-left: 20px;
  padding-top: 15px;
  margin-right: 20px;
  border: 1px solid #777;
  overflow: hidden; /* 넘치는 내용 숨김 */
  overflow-y: auto; /* 내용이 넘칠 때 수직 스크롤 표시 */
  position: relative;
`;

export const ChatProfileBox = styled.div`
  width: 600px;
  height: 90px;
  flex-shrink: 0;
  justify-content: flex-end;
  cursor: pointer; /* 클릭 가능하도록 커서 스타일 지정 */
  pointer-events: auto; /* 클릭 이벤트 활성화 */
`;

export const ChatBtn = styled.img`
  font-size: 14px;
  position: absolute;
  cursor: pointer; /* 클릭 가능하도록 커서 스타일 지정 */
  pointer-events: auto; /* 클릭 이벤트 활성화 */
  right: 0; /* 오른쪽 끝으로 이동 */
  width: 5%;
  top: 10px;
  margin-right: 20px;
`;

export const ChatList = styled.div`
  color: #000;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 45px;
`;

export const ProductContentWrapper = styled.div`
  display: flex;
  align-items: baseline; /* 제품명과 날짜를 수평 정렬하기 위해 추가 */
`;

export const ProductContent = styled.div`
  width: 380px;

  overflow: hidden;
  text-overflow: ellipsis;
  color: #777;
  font-size: 13px;
  font-weight: 400;
  margin-left: 92px;
  margin-top: 20px;
  line-height: 15px; /* Match with height for accurate calculation */
  display: -webkit-box;
  -webkit-line-clamp: 3; /* Show up to 3 lines */
  -webkit-box-orient: vertical;
`;

export const CurrentDate = styled.div`
  width: 80px;
  height: 15px;
  color: #777;
  font-size: 13px;
  font-weight: 400;
  margin-left: 40px;
`;

export const ChatBoxWrapper = styled.div``;

export const ChatBoxContainer = styled.div`
  flex-direction: column;
`;

export const ChatBoxContent = styled.div`
  max-width: 100%;
  max-height: 550px;
  height: auto;
  box-sizing: border-box;
  background-color: #fff;
`;

export const NoChatSelectedMessage = styled.p`
  font-size: 16px;
  text-align: center;
  width: 600px;
`;

export const ChatInput = styled.input`
  width: 580px;
  max-width: 100%; /* 최대 너비 설정 */
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 20px;
  font-size: 16px;
  background: #f2f2ff;
  padding-left: 10px;
  bottom: 10px;

  z-index: 5;
`;

export const ProfileInfoContainer = styled.div`
  display: inline-block;
  margin-left: 10px;
`;

export const ChatText = styled.div`
  max-height: 460px;
  min-height: 460px;
  margin-bottom: 5px;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const ProfileName = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
  display: flex;
`;

export const ChatMessage = styled.div`
  position: relative;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 10px;
  background-color: ${({ isSender }) => (isSender ? "#DCF8C6" : "#E5E5EA")};
  align-self: ${({ isSender }) => (isSender ? "flex-end" : "flex-start")};
`;
