import React, { useState } from "react";
import { postProduct } from "../../api/details/details_api";

import {
  Box,
  Image,
  TextContainer,
  Title,
  Duration,
  PriceRow,
  PriceLabel,
  PriceValue,
  TotalPrice,
  SubBox,
  BtnCancel,
  BtnCard,
  BtnPayList,
  BtnPay,
  ModalContainer,
  Overlay,
} from "../../styles/details/DetailsComponentStyles";

const Pay = ({
  onClose,
  productData,
  paymentData,
  rentalStartDate,
  rentalEndDate,
  onDateSelect,
}) => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [cardClicked, setCardClicked] = useState(false);
  const [naverPayClicked, setNaverPayClicked] = useState(false);
  const [tossPayClicked, setTossPayClicked] = useState(false);
  const [paycoClicked, setPaycoClicked] = useState(false);
  const [bankTransferClicked, setBankTransferClicked] = useState(false);
  const [bankDepositClicked, setBankDepositClicked] = useState(false);
  const [phoneClicked, setPhoneClicked] = useState(false);

  // 결제 방법을 선택했을 때의 처리를 담당하는 함수입니다.
  const handlePaymentMethodClick = (method, rentalEndDate, rentalStartDate) => {
    setSelectedPaymentMethod(method);
    setSelectedPaymentMethod(rentalStartDate);
    setSelectedPaymentMethod(rentalEndDate);

    // 선택된 결제 방법에 따라 해당 결제 방법을 강조하기 위해 각각의 결제 방법 상태를 업데이트합니다.
    setCardClicked(method === "credit-card");
    setNaverPayClicked(method === "naverPay");
    setTossPayClicked(method === "tossPay");
    setPaycoClicked(method === "payco");
    setBankTransferClicked(method === "bankTransfer");
    setBankDepositClicked(method === "bankDeposit");
    setPhoneClicked(method === "phone");
  };

  // 결제하기 버튼 클릭 시 호출되는 핸들러
  const handlePayment = async () => {
    try {
      if (selectedPaymentMethod) {
        const res = await postProduct(
          productData.iproduct,
          selectedPaymentMethod,
          rentalStartDate,
          rentalEndDate,
        );
        // 여기서 결제 성공 후 처리할 작업을 추가합니다.
        console.log("결제가 완료되었습니다.", res);
      } else {
        console.error("결제 방법을 선택해주세요.");
      }
    } catch (error) {
      console.error("결제 과정에서 오류가 발생했습니다.", error);
    }
  };

  return (
    <>
      <Overlay>
        <Box>
          <Image src={`/pic/${productData.prodMainPic}`} alt="제품 이미지" />
          <TextContainer>
            <Title>{productData.title}</Title>
            <Duration>대여기간 : {paymentData.rentalDays}일</Duration>

            <PriceRow>
              <PriceLabel>
                {productData.rentalPrice.toLocaleString()} 원 x{" "}
                {paymentData.rentalDays}일
              </PriceLabel>
              <PriceValue>
                {(
                  productData.rentalPrice * paymentData.rentalDays
                ).toLocaleString()}{" "}
                원
              </PriceValue>
            </PriceRow>

            <PriceRow>
              <PriceLabel> 보증금 </PriceLabel>
              <PriceValue>{productData.deposit.toLocaleString()} 원</PriceValue>
            </PriceRow>

            <TotalPrice />

            <PriceRow>
              <PriceLabel> 총 합계 </PriceLabel>
              <PriceValue>
                {(
                  productData.rentalPrice * paymentData.rentalDays +
                  productData.deposit
                ).toLocaleString()}{" "}
                원
              </PriceValue>
            </PriceRow>
          </TextContainer>
        </Box>

        <SubBox>
          <BtnCard
            clicked={cardClicked}
            onClick={() => handlePaymentMethodClick("credit-card")}
          >
            신용·체크카드
          </BtnCard>
          <BtnPayList
            clicked={naverPayClicked}
            onClick={() => handlePaymentMethodClick("naverPay")}
          >
            <img src="images/details/naverpay.svg" alt="네이버페이" />
          </BtnPayList>
          <BtnPayList
            clicked={tossPayClicked}
            onClick={() => handlePaymentMethodClick("tossPay")}
          >
            <img src="images/details/toss-pay.svg" alt="토스페이" />
          </BtnPayList>
          <BtnPayList
            clicked={paycoClicked}
            onClick={() => handlePaymentMethodClick("payco")}
          >
            <img src="images/details/payco.svg" alt="페이코" />
          </BtnPayList>
          <BtnPayList
            clicked={bankTransferClicked}
            onClick={() => handlePaymentMethodClick("bankTransfer")}
          >
            계좌이체
          </BtnPayList>
          <BtnPayList
            clicked={bankDepositClicked}
            onClick={() => handlePaymentMethodClick("bankDeposit")}
          >
            무통장입금
          </BtnPayList>
          <BtnPayList
            clicked={phoneClicked}
            onClick={() => handlePaymentMethodClick("phone")}
          >
            휴대폰
          </BtnPayList>

          <BtnCancel onClick={onClose}>취소하기</BtnCancel>
          <BtnPay onClick={onDateSelect}>결제하기</BtnPay>
        </SubBox>
      </Overlay>
    </>
  );
};

export default Pay;
