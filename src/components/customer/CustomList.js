import React, { useState } from "react";
import { MyListDiv } from "../../styles/my/MyList";
import styled from "@emotion/styled";
import { Common } from "../../styles/CommonStyles";
import MyMoreButton from "../my/MyMoreButton";

const CustomTxt = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  width: 100%;
  height: 6rem;
  border-bottom: 1px solid ${Common.color.primary};
  span {
    font-size: 1.4rem;
  }
  p {
    font-size: 1.4rem;
  }
  cursor: pointer;
`;
export const CustomSlide = styled.div`
  overflow: hidden;
  max-height: ${props => (props.isopen ? "500px" : "0")};
  transition: max-height 0.5s ease-in-out;
  box-sizing: border-box;
  border-bottom: ${props =>
    props.isopen ? `1px solid ${Common.color.primary}` : "0"};
  dt {
    font-size: 1.4rem;
    padding: 1rem;
    white-space: pre-wrap;
  }
`;
const CustomBottom = styled.div`
  margin-top: 2rem;
`;

const contentData = [
  {
    id: 1,
    title: "[회원탈퇴]",
    content: "회원탈퇴는 어떻게 하나요?",
    description: `    
    안녕하세요 [서비스명] 사용자 여러분,
    우리 서비스를 이용해 주셔서 감사합니다. 
    회원탈퇴를 원하시는 경우 아래 안내에 따라 간단한 절차를 따라주세요.

    1. 로그인:
    서비스에 로그인하여 현재 사용 중인 계정으로 접속하세요.

    2. 회원탈퇴 옵션 찾기: 
    마이 페이지 또는 프로필 페이지에서 회원탈퇴 메뉴를 찾습니다.

    3. 안내에 따라 진행:
    회원탈퇴 옵션을 선택한 후, 안내에 따라 진행합니다. 보안을 위해 비밀번호를 다시 입력해야 할 수 있습니다.

    4. 탈퇴 완료: 
    모든 단계를 완료하면 회원탈퇴가 완료됩니다. 계정과 관련된 모든 데이터는 삭제될 수 있습니다.

    ※주의사항: 
    회원탈퇴 시에는 현재까지의 데이터와 정보가 모두 삭제되며, 복구가 불가능합니다.
    실수로 탈퇴하지 않도록 신중하게 결정해 주세요. 
    더 이상 서비스 이용을 원치 않으시거나 다른 문의사항이 있으시면 언제든지 저희에게 문의해 주세요. 
    더 나은 서비스를 제공하기 위해 항상 노력하겠습니다.
 
    감사합니다.
    `,
  },
  {
    id: 2,
    title: "[거래문의]",
    content: "거래를 취소하고 싶어요. 어떻게 하나요?",
    description: `    
    판/구매자의 거래 단계에 따라 아래 경로에서 가능합니다.
    [구매취소 방법]

     앱 > 마이 > 구매내역

    - 결제완료 단계 : '구매 취소' 
    - 주문확인/배송준비 단계 : '구매취소 요청'

    * 구매취소 요청 시, 판매자에게 취소 요청이 전달되며 판매자의 요청 수락 시 취소 처리됩니다.
    * 판매자가 취소 요청을 확인하지 않은 경우에는 48시간 후 자동 취소됩니다.

    [판매취소 방법]

      앱 > 마이 > 판매내역

    - 결제완료/배송준비 : '판매 취소'

    * 배송 전에는 취소가 가능하지만 배송이 시작된 이후에는 즉시 취소가 불가합니다.
    * 판/구매회원 간의 취소 협의 완료된 대화내용을 캡처하여 고객센터 1:1문의하기로 첨부해 주시면 취소 가능한 상태로 변경 도움드리겠습니다
    `,
  },
  {
    id: 3,
    title: "[대여내역]",
    content: "대여내역은 어떻게 확인할 수 있나요?",
    description: `    
    대여 내역을 확인하는 방법은 아래 경로를 통해 가능합니다.

    [구매내역 조회방법]

    앱 > 마이 > 대여내역

    * 대여내역은 최근 1년 이내의 거래 건에 대해서만 확인 가능합니다.
    `,
  },
  {
    id: 4,
    title: "[대여취소]",
    content: "대여취소는 어떻게 해야 되나요?",
    description: `    
    안녕하세요. [회사명 고객센터]입니다.

    대여 취소는 고객님이 원하시는 경우, 특별한 사유로 인해 또는 정책에 따라 가능할 수 있습니다. 대여 취소를 요청하시려면 다음 단계를 따라주시기 바랍니다.

    [고객 식별 정보 확인]
    -성함, 예약 번호 또는 회원 ID 등을 확인하여 정확한 대여 정보를 파악합니다.
    
    [취소 가능 여부 확인]
    -대여 이용 약관 및 정책을 기준으로 대여 취소 가능 여부를 확인합니다.
    -특정 기간 내 무료 취소 정책이나 환불 규정이 있는지 확인합니다.
    
    [고객과 상의]
    -대여 취소 사유와 관련된 세부 정보를 확인하고, 고객과 적절한 소통을 통해 상황을 이해합니다.
    -추가 정보나 문서가 필요한 경우, 해당 정보를 요청합니다.
    
    [취소 처리]
    -취소가 승인되면, 시스템에서 대여 정보를 취소하고, 환불 절차를 진행합니다.
    -환불 여부와 관련된 정책을 적용하여 적절한 환불 절차를 수행합니다.
    
    [고객 안내]
    -고객에게 취소가 완료되었음을 안내하고, 환불 여부와 관련된 정보를 제공합니다.
    -필요한 경우, 추가 서비스 또는 혜택을 제공하여 고객 만족도를 유지합니다.
    
    위의 단계는 대략적인 가이드일 뿐이며, 실제 상황에 따라 프로세스가 다를 수 있습니다. 
    대여 취소 시에는 신속하고 공정한 처리를 위해 고객과의 원활한 소통이 중요합니다. 
    또한, 관련된 정책과 규정을 준수하여 프로세스를 진행하는 것이 필요합니다.
    `,
  },
  {
    id: 5,
    title: "[고객센터]",
    content: "고객센터 전화번호와 운영시간을 알려주세요",
    description: `    
    고객센터 전화번호는 1803-3124 입니다.
    
    [운영시간]

    월 ~ 금요일 
    09:00 ~ 18:00 
    주말, 공휴일 휴무 
    `,
  },
];

const CustomList = () => {
  const [slideDownUp, setSlidDownUp] = useState(contentData.map(() => false));

  const handleSlideDownToggle = index => {
    const newSlideDownUp = [...slideDownUp];
    newSlideDownUp[index] = !newSlideDownUp[index];
    setSlidDownUp(newSlideDownUp);
  };

  return (
    <MyListDiv>
      {contentData.map((item, index) => (
        <div key={item.id}>
          <CustomTxt onClick={() => handleSlideDownToggle(index)}>
            <span>{item.title}</span>
            <p>{item.content}</p>
          </CustomTxt>
          <CustomSlide isopen={slideDownUp[index]}>
            <dt>{item.description}</dt>
          </CustomSlide>
        </div>
      ))}
      <CustomBottom>
        <MyMoreButton />
      </CustomBottom>
    </MyListDiv>
  );
};

export default CustomList;
