import React, { useState, useEffect } from "react";
import Layout from "../../layouts/Layout";
import MyMap from "../../components/details/MyMap";
import Calendar from "../../components/details/Calendar";
import Profile from "../../components/details/Profile";
import Like from "../../components/details/Like";
import SellerProfile from "../../components/details/SellerProfile";
import Pay from "../../components/details/Pay";
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
  PayRow,
  PayLabel,
  PayValue,
  TotalPrice,
  PayContainer,
} from "../../styles/details/DetailsPageStyles";
import { getProduct } from "../../api/details/details_api";

const DetailsPage = () => {
  const [productData, setProductData] = useState(null);
  const [paymentData, setPaymentData] = useState(null);

  const togglePayModal = () => setShowPayModal(!showPayModal);

  useEffect(() => {
    // getProduct 함수를 호출하여 상품 데이터 가져오기
    const fetchData = async () => {
      try {
        const response = await getProduct(1, 25);
        setProductData(response.data); // API 응답에서 데이터 추출하여 상태 업데이트
      } catch (error) {
        console.error("Error fetching product data: ", error);
      }
    };

    fetchData();
  }, []);

  const [showPayModal, setShowPayModal] = useState(false);
  if (!productData || !paymentData) {
    return <div>Loading...</div>; // Loading state
  }

  return (
    <Layout>
      <PageWrapper>
        <SubContainer>
          <BoxImg>
            <ProductImage
              src={`/images/${productData.prodMainPic}`}
              alt="제품 이미지"
            />
          </BoxImg>
          <Box>
            <Title>
              <ContentWrapper>{productData.title}</ContentWrapper>
              <SellerProfile
                sellerName={productData.nick}
                profileImage={`/images/${productData.userPic}`}
              />
            </Title>

            <PriceContainer>
              <Price>{productData.price.toLocaleString()} 원</Price>
              <RentalText>{productData.rentalPrice}</RentalText>
            </PriceContainer>
            <ViewCount>조회수 {productData.view}</ViewCount>
            <AddressContainer>
              <InfoContainer>
                <Address>
                  주소
                  <DetailedAddress>{productData.addr}</DetailedAddress>
                </Address>
                <InfoLine>
                  <InfoText>제품구매일 </InfoText>
                  <PurchaseDateText>{productData.buyDate}</PurchaseDateText>
                </InfoLine>
                <div>
                  <DepositText>{productData.deposit}</DepositText>
                  <DepositDetailText>
                    {productData.depositDetail}
                  </DepositDetailText>
                </div>
              </InfoContainer>
            </AddressContainer>
            <Container>
              <Like />
              <BtnChat>채팅하기</BtnChat>
              <BtnPay onClick={togglePayModal}>결제하기</BtnPay>{" "}
            </Container>
            {showPayModal && (
              <Pay
                productData={productData}
                paymentData={paymentData}
                onClose={togglePayModal}
              />
            )}
          </Box>
        </SubContainer>
        <MainContainer>
          <ProductContent>{productData.contents}</ProductContent>
        </MainContainer>
        <MiniContainer>
          <Caution>
            <CautionContent>
              <CautionText>
                <HeaderText>
                  <CautionImage
                    src="/images/details/caution.svg"
                    alt="경고창 이미지"
                  />
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
          <Detail>디테일 내용</Detail>
          <PayContainer>
            <Calendar />
            <PayRow>
              <PayLabel>
                {productData.price.toLocaleString()} x {paymentData.rentalDays}
                일
              </PayLabel>
              <PayValue>
                {(productData.price * paymentData.rentalDays).toLocaleString()}{" "}
                원
              </PayValue>
            </PayRow>
            <PayRow>
              <PayLabel>보증금</PayLabel>
              <PayValue>{paymentData.deposit.toLocaleString()} 원</PayValue>
            </PayRow>
            <TotalPrice />
            <PayRow>
              <PayLabel>총 합계</PayLabel>
              <PayValue>
                {(
                  productData.price * paymentData.rentalDays +
                  paymentData.deposit
                ).toLocaleString()}{" "}
                원
              </PayValue>
            </PayRow>
          </PayContainer>
        </MiniContainer>
        <MyMap />
        <Profile />
      </PageWrapper>
    </Layout>
  );
};

export default DetailsPage;
