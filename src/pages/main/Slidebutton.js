import styled from "@emotion/styled";

export const SlideBtWrap = styled.div`
display: block;
position: relative;
`
export const BtSlidePrev = styled.button`
display: block;
position: absolute;
top: -220px;
left: -100px;
border: none;
cursor: pointer;
background: transparent;
/* visibility: hidden; */


img {
width: 70px;
height: 70px;
}

&::before {
  content: "";
  position: relative;
  width: 10px;
  height: 18px;
}
`;

// 슬라이드 우측 이동 버튼
export const BtSlideNext = styled.button`
position: absolute;
top: -220px;
right: -100px;
border: none;
cursor: pointer;
background: transparent;
/* padding: 10px 20px; */
img {
width: 70px;
height: 70px;
}


&::before {
  content: "";
  position: relative;
  width: 10px;
  height: 18px;
  display: block;
  margin: 0 auto;
}
`;