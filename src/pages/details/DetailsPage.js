import React from "react";
import Layout from "../../layouts/Layout";
import styled from "@emotion/styled";

import Calendar from "./Calendar";
import MyMap from "./MyMap";

const PageWrapper = styled.div`
  max-width: 1260px; /* Maximum width */
  margin: 0 auto; /* Center the content horizontally */
`;

const MainContainer = styled.div`
  gap: 60px;
  margin-top: 65px;

  display: flex; // 추가
  font-size: 16px;
`;

const SubContainer = styled(MainContainer)`
  display: flex;
`;

const ProductContent = styled.div`
  margin-left: 10px;
  margin-right: 750px;
`;

const MiniContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;

const Box = styled.div`
  height: 550px;
  flex: 0 0 600px;
  border-bottom: 1px solid #2c39b5;
`;

const BoxImg = styled.div`
  height: 550px;
  flex: 0 0 600px;
`;

const Title = styled.div`
  width: 360px;
  height: 77px;
  flex-shrink: 0;
  color: #4b4b4b;
  font-family: Inter;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 15.32px;
  white-space: pre-line;
`;

const Price = styled.div`
  width: 154px;
  height: 57.5px;
  flex-shrink: 0;
  color: #4b4b4b;
  font-family: Inter;
  font-size: 40px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding-bottom: 40px;
`;

const ViewCount = styled.div`
  margin-top: 28px;
  flex-shrink: 0;
  color: #4b4b4b;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 40px;
`;

const Address = styled.div`
  width: 230px;
  height: 80px;
  flex-shrink: 0;
  color: #777;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border-right: 1px solid #e4e7ff;
`;
const PriceContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #2c39b5;
  padding-bottom: 50px;
`;
const RentalText = styled.span`
  font-size: 18px;
  color: #6b6b6b;
  margin-left: 40px;
  margin-top: 20px;
`;
const InfoContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;
  margin-bottom: 53px;
`;
const InfoLine = styled.div`
  border-right: 1px solid #e4e7ff;
`;

const InfoText = styled.span`
  width: 90px;
  height: 80px;
  flex-shrink: 0;
  color: #777;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const DepositText = styled(InfoText)`
  color: #fa5050;
  padding-left: 20px;
`;

const DetailedAddress = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 28px;
`;

const AddressContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #2c39b5;
`;

const PurchaseDateText = styled.div`
  margin-top: 28px;
  margin-right: 20px;
  color: #2d2d2d; // 제품 구매일 텍스트 색상
  font-family: Inter;
  color: #000;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const DepositDetailText = styled.div`
  margin-left: 20px;
  margin-top: 28px;
  color: #2d2d2d; // 보증금 텍스트 색상
  font-family: Inter;
  font-size: 18px; // 보증금 텍스트 크기
  // 기타 필요한 스타일 속성 추가
  color: #000;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const BtnChat = styled.div`
  width: 200px;
  height: 46px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid #2c39b5;
  color: #2c39b5;
  margin-top: 54px;
  margin-right: 40px;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BtnPay = styled(BtnChat)`
  background: #2c39b5;
  color: #fff;
`;

const Container = styled.div`
  display: flex;
`;

const Caution = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 750px;
  height: 112px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #f2f2ff;
  white-space: pre-wrap;
  padding: 10px;
  margin-right: 110px;
`;

const Detail = styled.div`
  position: absolute;
  margin-top: 130px;
  margin-left: 10px;
  width: 730px;
  height: 230px;
  flex-shrink: 0;
  color: #4b4b4b;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const CautionContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; // 추가
  align-items: center; // 추가
`;

const CautionText = styled.div`
  margin-left: 10px;
  justify-content: center;
`;

const CautionImage = styled.img`
  margin-right: 20px; // 오른쪽 마진 추가
  margin-left: 20px;
`;
const CautionsImage = styled.img`
  margin-left: 50px;
  right: auto;
`;

const HeaderText = styled.p`
  text-align: center;
  color: #363636;
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
`;

const BodyText = styled.p`
  margin-top: 10px;
  color: #777;
  text-align: center;
  font-family: Inter;
  font-size: 10px;
  font-weight: 400;
`;

const RedText = styled.span`
  color: #ff2f2f;
  font-family: Inter;
  font-size: 10px;
  font-weight: 700;
`;

const BlackText = styled.span`
  color: #000;
  font-family: Inter;
  font-size: 10px;
  font-weight: 400;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

const WishlistImage = styled.img`
  width: 50px;
  margin-top: 54px;
  margin-right: 110px;
`;

const PayContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  height: 283px;
  flex-shrink: 0;
  padding-left: 20px;
  padding-right: 13px;
  box-sizing: border-box;
  border: 1px solid #ccc;

  border-radius: 20px;
  background: #fff;

  box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.25);
`;

const PayRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
`;

const PayLabel = styled.span`
  color: #000;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 15px;
`;

const StartDateContainer = styled(PayRow)`
  width: 367px;
  height: 50px;
  border-radius: 10px;
  border: 1px solid #2c39b5;
  padding-left: 10px;

  margin-bottom: 30px;
  margin-top: 24px;
  display: flex;

  justify-content: center;
`;

const PayValue = styled.span`
  color: #000;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 20px;
`;

const ReviewFormStyle = styled.div`
  width: 1300px;
  height: 380px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid #2c39b5;
`;

const ReviewStyle = styled.div`
  margin-top: 50px;
  margin-left: 20px;
  width: 1260px;
  height: 100px;
  flex-shrink: 0;
  border-bottom: 1px solid #2c39b5;
`;

const DetailsPage = () => {
  return (
    <Layout>
      <PageWrapper>
        <SubContainer>
          <BoxImg>
            <ProductImage src="/images/kong.jpg" alt="제품 이미지" />
          </BoxImg>
          <Box>
            <Title>애플워치 스페이스{}</Title>
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
          <Detail>내용 입력 </Detail>
          <PayContainer>
            <StartDateContainer>
              <PayLabel>
                시작일
                <CautionImage src="/images/Arrow.jpg" alt="시작끝" />
                마감일
                <CautionsImage src="/images/calendar.jpg" alt="캘린더" />
              </PayLabel>
            </StartDateContainer>
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

          <Calendar />
        </MiniContainer>
        <MyMap />
        <ReviewFormStyle>
          후기
          <ReviewStyle>프로필</ReviewStyle>
        </ReviewFormStyle>
      </PageWrapper>
    </Layout>
  );
};

export default DetailsPage;
