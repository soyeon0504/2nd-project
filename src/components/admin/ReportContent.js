import styled from "@emotion/styled";
import React from "react";

const ReportContent = ({ onClose, Bt_No, Bt_Ok }) => {
  const ReportContentStyle = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;

    width: 600px;
    height: 500px;
    border-radius: 10px;
    border: 1px solid #e46962;
    background: #fff;
    padding: 10px;
    padding-top: 20px;
  `;
  const ContentTitle = styled.div`
    display: flex;
    justify-content: space-between;
    width: 550px;
    height: 50px;
    margin: 0 auto;
    background: #ffe6e6;
    padding: 5px 0 0 10px;
    p {
      color: #000;
      font-size: 25px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
    img {
      width: 40px;
      height: 40px;
    }
  `;
  const ContentMain = styled.div`
    width: 550px;
    height: 330px;
    margin: 0 auto;
    background: #fff7f7;
    padding: 10px;
    p {
      color: #000;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  `;
  const BtSection = styled.div`
    width: 270px;
    margin: 0 auto;
    padding-top: 30px;
    button {
      width: 100px;
      height: 40px;
      border-radius: 3px;
      border: none;
      font-size: 18px;
      font-weight: 500;
    }
    .BtNo {
      border: 1px solid #c14b45;
      background: #fff;
      color: #c14b45;
      margin-right: 70px;
    }
    .BtOk {
      background: #c14b45;
      color: #fff;
    }
  `;
  return (
    <ReportContentStyle>
      <ContentTitle>
        <p>신고 내용</p>
        <img src="/images/admin/bt_close.svg" onClick={onClose}></img>
      </ContentTitle>
      <ContentMain>
        <p>
          바보준서님이 대여를 하고 연락이 안되는 잠수상태인거 같습니다 저번주
          토요일에 거래를 했었고 기록이 남아있습니다.
        </p>
      </ContentMain>
      <BtSection>
        <button className="BtNo" onClick={Bt_No}>
          반려
        </button>
        <button className="BtOk" onClick={Bt_Ok}>
          수락
        </button>
      </BtSection>
    </ReportContentStyle>
  );
};

export default ReportContent;
