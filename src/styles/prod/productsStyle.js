import styled from "@emotion/styled";
import { Common } from "../CommonStyles";

export const AllWidth = styled.div`
  width: 1260px;
  margin: 0 auto;
`;

export const HashDiv = styled.div`
  justify-content: space-between;
  width: 86%;

  input {
    width: 20rem !important;
    margin-right: 8px;
  }
`;
export const HadhPriceDiv = styled.div`
  width: 2000px;
  height: 3000px;
  display: block;
  justify-content: space-between;

  width: 86rem;
  .css-hchrte > div {
    width: 7rem !important;
  }
  #hadh {
  }
  .hadh {
    width: 20rem !important;
    margin-right: 8px;
  }
  span {
    margin-left: 5px;
    margin-top: 5px;
    font-size: 1.8rem;
  }
`;
export const PriceDiv = styled.div`
  /* justify-content: space-between; */
  display: flex !important;
  flex-wrap: wrap !important;
  width: 86rem;

  input {
    width: 20rem !important;
    margin-right: 8px;
  }
  span {
    margin-left: 5px;
    margin-top: 5px;
    font-size: 1.8rem;
  }
  p {
    display: block;
    padding-top: 5px;
    width: 21rem;
    text-align: center;
    font-size: 1.4rem;
  }
  .controlBt {
    display: flex;
  }

  .upBt {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 36px;
    height: 20px;
    background-color: #2c39b5;
    border: 1px solid #3946be;
    color: #fff;
    border: none;
    border-radius: 5px 5px 0px 0px;
    cursor: pointer;
    font-size: 1.8rem;
  }
  .upBt:active {
    background-color: #89cdff;
    color: #2c39b5;
  }
  .downBt {
    width: 36px;
    height: 20px;
    background-color: #2c39b5;

    color: #fff;
    border: none;
    border-radius: 0px 0px 5px 5px;
    cursor: pointer;
    font-size: 1.8rem;
  }
  .downBt:active {
    background-color: #89cdff;
    color: #fff;
  }
`;

export const ListDiv = styled.div`
  display: flex;

  margin-top: 6rem;

  :nth-of-type(1) {
    margin-top: 0;
  }
  label {
    display: flex;
    width: 12rem;
    p {
      font-size: 1.6rem;
      :nth-of-type(2) {
        color: #ff0303;
      }
    }
    span {
      margin-left: 5px;
      font-size: 1.6rem;
    }
  }
  > div {
    display: flex;
    flex-wrap: wrap;
    flex-direction: ${props => (props.direction ? props.direction : "none")};
    gap: 1rem;

    input {
      width: 86rem;
      padding-left: 15px;
      height: 4rem;
      border-radius: 5px;
      border: 1px solid ${Common.color.primary};
      color: #000;
      font-size: 1.6rem;
    }
    input.showSpinner {
      width: 20rem;
    }
  }
  textarea {
    width: 86rem;
    resize: none;
    height: 28rem;
    border-radius: 5px;
    border: 1px solid ${Common.color.primary};
    padding: 15px;
    color: #000;
    font-size: 1.6rem;
  }
  h2 {
    font-size: 1.6rem;
    font-weight: 400;
    text-align: end;
  }
`;

export const BtWrap = styled.div`
  display: flex;
  padding-top: 10px;
  width: 250px;
  height: 230px;
  cursor: pointer;
  color: ${Common.color.primary};
  font-size: 16px;
  font-weight: 400;
  border-radius: 5px;
  border: 1px solid ${Common.color.primary};
`;
export const Resets = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 50px;
  border-radius: 10px;
  background: #2c39b5;
  border: none;
  cursor: pointer;
  margin-left: 1104px;
  color: #fff;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
// 주 카테고리
export const BtnColor = styled.button`
  width: 24.5rem;
  border: 0;
  background: ${props => (props.clickbtn ? Common.color.p500 : "0")};
  height: 3.6rem;
  color: ${props =>
    props.clickbtn ? Common.color.primary : Common.color.p300};
`;
// 서브카테고리
export const BtnColorSub = styled.button`
  width: 24.5rem;
  border: 0;
  background: ${props => (props.clickbtn ? Common.color.p500 : "0")};
  height: 3.6rem;
  color: ${props =>
    props.clickbtn ? Common.color.primary : Common.color.p300};
`;

export const ProductImgBt = styled.button`
  background: transparent;
  border: 0;
  cursor: pointer;
  img {
    width: 18rem;
    height: 18rem;
    border: 1px solid ${Common.color.primary};
    border-radius: 5px;
    object-fit: cover;
  }
`;
export const ProductImgMap = styled.div`
  display: flex;
  margin-left: 100px;
  flex-wrap: wrap !important;
  width: 500px;
  margin-left: 20px;
  img {
    width: 9rem;
    height: 9rem;
    border: 1px solid ${Common.color.primary};
    border-radius: 5px;
    object-fit: cover;
  }
`;
