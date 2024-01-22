import styled from "@emotion/styled";

export const GoodsWrap = styled.div`
  width: 1980px;
  height: 1798px;
`;
export const Goods = styled.div`
  width: 1260px;
  height: 47px;

  border-bottom: #2c39b5;

  p {
    color: #000;
    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-left: 350px;
  }
`;
export const PictureS = styled.div`
  width: 1260px;
  height: 240px;
  background-color: antiquewhite;
  display: flex;
  padding-left: 450px;
  padding-right: 450px;
  padding-bottom: 60px;
  margin-right: 172px;
  label {
    display: flex;
    margin-right: 30px;
    p {
      color: #ff0303;
      font-size: 8px;
    }
    .pic {
      color: #000;
      font-family: Inter;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
`;
export const ProductS = styled.div`
  width: auto;
  height: 97px;
  background-color: bisque;
  display: flex;
  padding-left: 450px;
  padding-right: 40px;
  margin-right: 172px;
  .ladelprt {
    display: flex;
    margin-right: 30px;
  }
  input {
    width: 860px;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #2c39b5;
    background: #fff;
  }
  p {
    color: #ff0303;
    font-size: 8px;
  }
  .prd {
    color: #000;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export const Price = styled.div`
  width: 1700px;
  height: 100px;
  background-color: bisque;
  padding-left: 450px;
  display: flex;
  p {
    color: #ff0303;
    font-size: 8px;
  }
  .LadelPre {
    display: flex;
    margin-right: 30px;
  }
  .pre {
    color: #000;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  input {
    width: 860px;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #2c39b5;
    background: #fff;
    display: flex;
    margin-right: 30px;
  }
`;

export const ListSrc = styled.div`
  width: 510px;
  height: 230px;
  display: flex;
  justify-content: space-between;
  padding-left: 450px;
  padding-bottom: 60px;
  margin-bottom: 60px;

  p {
    display: flex;
    color: #ff0303;
    font-size: 8px;
  }
  .ladelct {
    display: flex;
    margin-right: 30px;
  }
  .ct {
    color: #000;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export const Detail = styled.div`
  margin-right: 450px;
  padding-left: 450px;
  display: flex;
  padding-bottom: 60px;
  p {
    display: flex;
    color: #ff0303;
    font-size: 8px;
  }
  .dta {
    color: #000;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  input {
    display: flex;
    width: 860px;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #2c39b5;
    background: #fff;
  }
  .LadelDta {
    display: flex;
    margin-right: 30px;
  }
`;
//보증금
export const Amounts = styled.div`
  width: 1200px;
  height: auto;
  margin-right: 450px;
  padding-left: 450px;
  padding-bottom: 60px;

  /* display: flex; */
  p {
    color: #ff0303;
    font-size: 8px;
  }
  input {
    width: 860px;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #2c39b5;
    background: #fff;
    margin-bottom: 13px;
  }
  .Ladelamu {
    display: flex;
    margin-right: 30px;
  }
  .amu {
    color: #000;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .small {
    display: flex;
  }
  .Sud {
    display: flex;
    margin-bottom: 63px;
  }
`;
export const Rla = styled.div`
  margin-right: 450px;
  padding-left: 450px;
  padding-bottom: 60px;
  display: flex;
  p {
    color: #ff0303;
    font-size: 8px;
  }
  input {
    display: flex;
    width: 860px;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #2c39b5;
    background: #fff;
  }
  .LadelRa {
    display: flex;
    margin-right: 30px;
  }
  .ra {
    color: #000;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export const BtWrap = styled.div`
  display: flex;
  padding-top: 10px;
  width: 250px;
  height: 230px;
  cursor: pointer;
  color: #2c39b5;
  font-size: 16px;
  font-weight: 400;
  border-radius: 5px;
  border: 1px solid #2c39b5;
  margin-left: 10px;
`;
// 주 카테고리
export const BtnColor = styled.button`
  width: 245px;
  border: 0;
  background: ${props => (props.clickbtn ? "#f2f2ff" : "0")};
  height: 36px;
  color: ${props => (props.clickbtn ? "#2c39b5" : "#777")};
`;
// 서브카테고리
export const BtnColorSub = styled.button`
  width: 245px;
  border: 0;
  background: ${props => (props.clickbtn ? "#f2f2ff" : "0")};
  height: 36px;
  color: ${props => (props.clickbtn ? "#2c39b5" : "#777")};
`;

export const TransactionS = styled.div`
  padding-left: 450px;
  display: flex;
  margin-right: 450px;
  display: flex;
  p {
    color: #ff0303;
    font-size: 8px;
  }
  .tst {
    color: #000;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .Ladeltst {
    display: flex;
    margin-right: 30px;
  }
  input {
    width: 860px;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #2c39b5;
    background: #fff;
  }
`;
