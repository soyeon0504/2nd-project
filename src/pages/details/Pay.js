import React from "react";
import styled from "@emotion/styled";

const Box = styled.div`
  padding: 22px;
  max-width: 470px;
  height: 620px;
  display: flex;
  align-items: flex-start; /* 텍스트를 위쪽으로 정렬 */
`;

const Image = styled.img`
  width: 180px;
  height: 180px;
  margin-right: 25px;
  margin-bottom: 40px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  width: 225px;
  height: 37px;
  color: #000;
  font-size: 14px;
  font-weight: 400;
`;

const Duration = styled.div`
  width: 202px;
  height: 20px;
  color: #000;
  font-size: 13px;
  font-weight: 400;
  margin-bottom: 40px;
`;

const Price = styled.div`
  width: 202px;
  height: 14px;
  flex-shrink: 0;
  color: #000;
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 18px;
`;

const Pay = () => {
  return (
    <Box>
      <Image src="/images/camera.jpeg" alt="제품 이미지" />
      <TextContainer>
        <Title>갤럭시 워치 4 골프 에디션</Title>
        <Duration>대여기간 : 2024.09.01 ~ 2024.09.03</Duration>

        <Price> 7000 x 30일 </Price>
        <Price> 보증금 </Price>
        <Price> 총 합계 </Price>
      </TextContainer>
    </Box>
  );
};

export default Pay;
