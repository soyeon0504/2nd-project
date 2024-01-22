import React from "react";
import Layout from "../../layouts/Layout";
import MyMap from "./MyMap";
import Calendar from "./Calendar";
import Profile from "./Profile";
import Pay from "./Pay";

import {
  SubContainer,
  PageWrapper,
  BoxImg,
  ProductImage,
  Box,
  Title,
  Container,
  BtnChat,
  BtnPay,
  PriceContainer,
  Price,
  RentalText,
  ViewCount,
  AddressContainer,
  InfoContainer,
  Address,
  DetailedAddress,
  InfoLine,
  InfoText,
  PurchaseDateText,
  DepositText,
  DepositDetailText,
  MainContainer,
  ProductContent,
  ContentWrapper,
  MiniContainer,
  Caution,
  CautionContent,
  CautionText,
  HeaderText,
  CautionImage,
  BodyText,
  RedText,
  BlackText,
  Detail,
  PayContainer,
  PayRow,
  PayLabel,
  PayValue,
  WishlistImage,
  ReviewFormStyle,
  ReviewProfile,
} from "./DetailsPageStyle";

const DetailsPage = () => {
  return (
    <Layout>
      <PageWrapper>
        <SubContainer>
          <BoxImg>
            <ProductImage src="/images/kong.jpg" alt="제품 이미지" />
          </BoxImg>
          <Box>
            <Title>
              <ContentWrapper>애플워치 스페이스 닉네임</ContentWrapper>
              <Profile />
            </Title>
            <PriceContainer>
              <Price>7,000 원</Price>
              <RentalText>일일대여가</RentalText>
            </PriceContainer>
            <ViewCount>조회수 20</ViewCount>
            <AddressContainer>
              <InfoContainer>
                <Address>
                  주소
                  <DetailedAddress>대구광역시 달서구 월성동</DetailedAddress>
                </Address>
                <InfoLine>
                  <InfoText>제품구매일 </InfoText>
                  <PurchaseDateText>2017년 5월 10일</PurchaseDateText>
                </InfoLine>
                <div>
                  <DepositText>보증금</DepositText>
                  <DepositDetailText>원가의 30% 50,000원</DepositDetailText>
                </div>
              </InfoContainer>
            </AddressContainer>
            <Container>
              <WishlistImage src="/images/dibs.jpg" alt="이미지" />
              <BtnChat>채팅하기</BtnChat>
              <BtnPay>결제하기</BtnPay>
            </Container>
          </Box>
        </SubContainer>
        <MainContainer>
          <ProductContent>상품내용</ProductContent> 결제정보
        </MainContainer>
        <MiniContainer>
          <Caution>
            <CautionContent>
              <CautionText>
                <HeaderText>
                  <CautionImage src="/images/caution.svg" alt="경고창 이미지" />
                  거래 전 주의사항 안내
                </HeaderText>
                <BodyText>
                  판매자가 별도의 메신저로 결제링크를 보내거나
                  직거래(직접송금)을
                  <br />
                  유도하는 경우 사기일 가능성이 높으니 거래를 자제해 주시고
                </BodyText>
                <BodyText>
                  <RedText>고객센터</RedText>
                  <BlackText>에 문의하시길 바랍니다.</BlackText>
                </BodyText>
              </CautionText>
            </CautionContent>
          </Caution>
          <Detail>
            내용 입력내용 입력내용 입력내용 입력내용 입력내용 입력내용 입력내용
          </Detail>
          <PayContainer>
            <Calendar />
            <PayRow>
              <PayLabel>7,000 x 30일</PayLabel>
              <PayValue>210,000 원</PayValue>
            </PayRow>
            <PayRow>
              <PayLabel>보증금</PayLabel>
              <PayValue>50,000 원</PayValue>
            </PayRow>
            <PayRow>
              <PayLabel>총 합계</PayLabel>
              <PayValue>260,000 원</PayValue>
            </PayRow>
          </PayContainer>
        </MiniContainer>
        <MyMap />
        <ReviewFormStyle>
          후기
          <ReviewProfile>
            <Profile />
          </ReviewProfile>
        </ReviewFormStyle>
        <Pay />
      </PageWrapper>
    </Layout>
  );
};

export default DetailsPage;
