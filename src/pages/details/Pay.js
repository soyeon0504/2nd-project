import React, { useState } from "react";
import styled from "@emotion/styled";

import { Common } from "../../styles/CommonStyles";

const Box = styled.div`
  padding: 22px;
  width: 470px;
  height: 240px;
  display: flex;
  align-items: flex-start;

  border-bottom: 1px solid ${Common.color.primary};
`;

const SubBox = styled.div`
  padding: 20px;
  width: 470px;
  max-height: 380px;
  display: flex;
  flex-wrap: wrap;
  gap: 5px; /* Adjust the gap as needed */
`;

const Image = styled.img`
  width: 190px;
  height: 190px;
  margin-right: 25px;
  margin-bottom: 40px;
  border-radius: 10px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  width: 202px;
  height: 37px;
  color: #000;
  font-size: 15px;
  font-weight: 500;
`;

const Duration = styled.div`
  width: 205px;
  height: 20px;
  color: #000;
  font-size: 13px;
  font-weight: 400;
  margin-bottom: 40px;
`;

const PriceRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PriceLabel = styled.div`
  width: 70px;
  height: 14px;

  color: #000;

  font-size: 13px;

  font-weight: 400;

  margin-bottom: 18px;
`;

const PriceValue = styled(PriceLabel)`
  width: 65px;
  text-align: right;
`;

const TotalPrice = styled.div`
  border-bottom: 1px solid ${Common.color.primary};
  margin-bottom: 15px;
`;

const BtnCard = styled.div`
  width: 430px;
  height: 70px;
  flex-shrink: 0;
  border-radius: 5px;

  background: #f2f2ff;

  align-items: center;
  justify-content: center;
  color: #000;
  font-size: 16px;
  display: flex;

  text-align: center;
  cursor: pointer;

  &:hover {
    background: #2c39b5;
    color: #f2f2ff;
  }
`;
const BtnPayList = styled(BtnCard)`
  width: 140px;
  height: 70px;
  flex-shrink: 0;
`;

const BtnCancel = styled.div`
  width: 200px;
  height: 46px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid #2c39b5;
  color: #2c39b5;
  margin-top: 45px;
  font-family: Inter;
  font-size: 16px;

  font-weight: 400;
  line-height: normal;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background: #2c39b5;
    color: #fff;
  }
`;

export const BtnPay = styled(BtnCancel)`
  color: #2c39b5;

  margin-left: 20px;
`;

const Pay = () => {
  const [paymentData, setPaymentData] = useState({
    productImage: "/images/kong.jpg",
    productName: "애플워치 스페이스 닉네임",
    rentalPeriod: 30,
    price: 7000,
    deposit: 50000,
  });

  return (
    <>
      <Box>
        <Image src={paymentData.productImage} alt="제품 이미지" />
        <TextContainer>
          <Title>{paymentData.productName}</Title>
          <Duration>대여기간 : {paymentData.rentalPeriod}일</Duration>

          <PriceRow>
            <PriceLabel>
              {paymentData.price} x {paymentData.rentalPeriod}일
            </PriceLabel>
            <PriceValue>
              {paymentData.price * paymentData.rentalPeriod} 원
            </PriceValue>
          </PriceRow>

          <PriceRow>
            <PriceLabel> 보증금 </PriceLabel>
            <PriceValue>{paymentData.deposit} 원</PriceValue>
          </PriceRow>
          <TotalPrice />

          <PriceRow>
            <PriceLabel> 총 합계 </PriceLabel>
            <PriceValue>
              {paymentData.price * paymentData.rentalPeriod +
                paymentData.deposit}{" "}
              원
            </PriceValue>
          </PriceRow>
        </TextContainer>
      </Box>
      <SubBox>
        <BtnCard>신용·체크카드</BtnCard>
        <BtnPayList>
          <img src="images/details/naverpay.svg" alt="네이버페이" />
        </BtnPayList>
        <BtnPayList>
          <img src="images/details/payco.svg" alt="페이코" />
        </BtnPayList>
        <BtnPayList>
          <img src="images/details/toss-pay.svg" alt="토스페이" />
        </BtnPayList>
        <BtnPayList>계좌이체</BtnPayList>
        <BtnPayList>무통장입금</BtnPayList>
        <BtnPayList>휴대폰</BtnPayList>
        <BtnCancel>취소하기</BtnCancel>
        <BtnPay>결제하기</BtnPay>
      </SubBox>
    </>
  );
};

export default Pay;
