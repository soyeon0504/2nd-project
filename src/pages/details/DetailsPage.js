// DetailsPage.js

import React, { useState, useEffect } from "react";
import Layout from "../../layouts/Layout";
import MyMap from "../../components/details/MyMap";
import Profile from "../../components/details/Profile";
import { getProduct } from "../../api/details/details_api";
import Calendar from "../../components/details/Calendar";
import Like from "../../components/details/Like";
import SellerProfile from "../../components/details/SellerProfile";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
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
  const [showPayModal, setShowPayModal] = useState(false);
  const [productData, setProductData] = useState(null);
  const [rentalDays, setRentalDays] = useState(1); // 기본값으로 1일 설정
  const [paymentData, setPaymentData] = useState({
    rentPrice: 0,
    rentalDays: 1, // 기본값으로 1일 설정
    deposit: 0,
  });
  const [rentalStartDate, setRentalStartDate] = useState(null);
  const [rentalEndDate, setRentalEndDate] = useState(null);
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const { mainCategory, subCategory, productId } = useParams();

  // URL에서 매개변수 추출
  const togglePayModal = () => {
    setShowPayModal(!showPayModal);
  };

  const handleDateSelect = (startDate, endDate) => {
    setRentalStartDate(startDate);
    setRentalEndDate(endDate);
    const timeDiff = Math.abs(new Date(endDate) - new Date(startDate));
    const days = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)) + 1; // 시작일을 포함하여 계산
    setRentalDays(days);

    const rentPrice = productData.rentalPrice || 0;
    const totalRentPrice = rentPrice * days;

    setPaymentData({
      ...paymentData,
      rentPrice: totalRentPrice,
      rentalDays: days,
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getProduct(mainCategory, subCategory, productId);
        setProductData(response.data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchData();
  }, [mainCategory, subCategory, productId]);
  if (!productData) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <PageWrapper>
        <SubContainer>
          <BoxImg>
            <ProductImage
              src={`/pic/${productData.prodMainPic}`}
              alt="제품 이미지"
            />
          </BoxImg>
          <Box>
            <Title>
              <ContentWrapper>{productData.title}</ContentWrapper>
              <SellerProfile
                sellerName={productData.nick}
                profileImage={`/pic/${productData.userPic}`}
                iuser={productData.iuser}
                iauth={productData.iauth}
              />
            </Title>

            <PriceContainer>
              <Price>{productData.rentalPrice.toLocaleString()} 원</Price>
              <RentalText>일일대여가</RentalText>
              <RentalText>(재고:{productData.inventory})</RentalText>
            </PriceContainer>
            <ViewCount>조회수 {productData.view.toLocaleString()}</ViewCount>
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
                  <DepositText>보증금 (50%~100%)</DepositText>
                  <DepositDetailText>
                    {productData.deposit.toLocaleString()} 원
                  </DepositDetailText>
                </div>
              </InfoContainer>
            </AddressContainer>
            <Container>
              <Like
                isLiked={productData.isLiked}
                productId={productData.iproduct}
              />
              <BtnChat as={Link} to={`/chat/${productData.iuser}`}>
                채팅하기
              </BtnChat>
              <BtnPay onClick={togglePayModal}>결제하기</BtnPay>
            </Container>
            {showPayModal && (
              <Box visible={showPayModal} onCancel={togglePayModal}>
                <Pay
                  productData={productData}
                  paymentData={paymentData}
                  rentalStartDate={rentalStartDate}
                  rentalEndDate={rentalEndDate}
                  onClose={togglePayModal}
                  onDateSelect={handleDateSelect}
                />
              </Box>
            )}
          </Box>
        </SubContainer>
        <MainContainer>
          <ProductContent>상품내용</ProductContent>
          {/* 렌탈가능일 : {productData.rentalStartDate}~{" "}
          {productData.rentalEndDate} */}
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
          <Detail>{productData.contents}</Detail>

          <PayContainer>
            <Calendar onDateSelect={handleDateSelect} />
            <PayRow>
              <PayLabel>
                {productData.rentalPrice.toLocaleString()} 원 x {rentalDays}일
              </PayLabel>
              <PayValue>
                {(productData.rentalPrice * rentalDays).toLocaleString()} 원
              </PayValue>
            </PayRow>
            <PayRow>
              <PayLabel>보증금</PayLabel>
              <PayValue>{productData.deposit.toLocaleString()} 원</PayValue>
            </PayRow>
            <TotalPrice />
            <PayRow>
              <PayLabel>총 합계</PayLabel>
              <PayValue>
                {(
                  productData.rentalPrice * rentalDays +
                  productData.deposit
                ).toLocaleString()}{" "}
                원
              </PayValue>
            </PayRow>
          </PayContainer>
        </MiniContainer>

        <MyMap x={productData.x} y={productData.y} />

        <Profile reviews={productData.reviews} starCount={productData.rating} />
      </PageWrapper>
    </Layout>
  );
};

export default DetailsPage;
