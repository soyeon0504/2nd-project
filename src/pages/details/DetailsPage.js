import React, { useState } from "react";

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

const DetailsPage = () => {
  const [showPayModal, setShowPayModal] = useState(false); // 모달 표시 여부를 나타내는 상태

  const togglePayModal = () => {
    setShowPayModal(!showPayModal);
    // Pay 모달을 띄울 때, 모달이 나타날 때만 body에 ModalBackdrop 클래스를 추가하여 배경을 어둡게 만듦
    if (!showPayModal) {
      document.body.classList.add("ModalBackdrop");
    } else {
      document.body.classList.remove("ModalBackdrop");
    }
  };

  const [productData, setProductData] = useState({
    pic: "/images/kong.jpg",
    title: " 애플 워치 SE - 40mm GPS 스페이스 그레이 알루미늄  ",
    price: "7,000 원",
    rentalDuration: "일일대여가",
    viewCount: 20,
    address: "대구광역시 달서구 월성동",
    purchaseDate: "2017년 5월 10일",
    deposit: "보증금",
    depositDetail: "원가의 30% 50,000원",
    content: "상품내용",
    sellerName: "닉네임",
    profileImage: "../../images/kong.jpg",
  });

  const [detailContent, setDetailContent] = useState(
    "상품 내용 입력 부분상품 내용 입력 부분상품 내용 입력 부분상품 내용 입력 부분상품 내용 입력 부분",
  );

  const [paymentData, setPaymentData] = useState({
    rentPrice: 7000,
    rentalDays: 30,
    deposit: 50000,
  });

  return (
    <Layout>
      <PageWrapper>
        <SubContainer>
          <BoxImg>
            <ProductImage src={productData.pic} alt="제품 이미지" />
          </BoxImg>
          <Box>
            <Title>
              <ContentWrapper>{productData.title}</ContentWrapper>
              <SellerProfile
                sellerName={productData.sellerName}
                profileImage={productData.profileImage}
              />
            </Title>

            <PriceContainer>
              <Price>{productData.price}</Price>
              <RentalText>{productData.rentalDuration}</RentalText>
            </PriceContainer>
            <ViewCount>조회수 {productData.viewCount}</ViewCount>
            <AddressContainer>
              <InfoContainer>
                <Address>
                  주소
                  <DetailedAddress>{productData.address}</DetailedAddress>
                </Address>
                <InfoLine>
                  <InfoText>제품구매일 </InfoText>
                  <PurchaseDateText>
                    {productData.purchaseDate}
                  </PurchaseDateText>
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
            {showPayModal && ( // showPayModal 상태가 true일 때만 Pay 컴포넌트가 렌더링됨
              <Pay
                productData={productData}
                paymentData={paymentData}
                onClose={togglePayModal} // Pay 컴포넌트에 onClose 이벤트 핸들러 전달
              />
            )}
          </Box>
        </SubContainer>
        <MainContainer>
          <ProductContent>{productData.content}</ProductContent>
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
          <Detail>{detailContent}</Detail>
          <PayContainer>
            <Calendar />
            <PayRow>
              <PayLabel>
                {productData.price} x {paymentData.rentalDays}일
              </PayLabel>
              <PayValue>
                {productData.price * paymentData.rentalDays} 원
              </PayValue>
            </PayRow>
            <PayRow>
              <PayLabel>보증금</PayLabel>
              <PayValue>{paymentData.deposit} 원</PayValue>
            </PayRow>
            <TotalPrice />
            <PayRow>
              <PayLabel>총 합계</PayLabel>
              <PayValue>
                {productData.price * paymentData.rentalDays +
                  paymentData.deposit}
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
