import styled from "@emotion/styled";

export const MidalCovers = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 투명도 조절을 위해 rgba 사용 */
  z-index: 1000; /* 모달보다 낮은 z-index 값을 설정하여 모달 위에 위치하도록 함 */

  .maincover {
    display: block;
    width: 680px; //모달의 가로크기
    height: 600px; //모달의 세로크기
    position: fixed;
    border: 1.7px solid #2c39b5;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff; /* 모달의 배경색 */
    padding: 20px;
    border-radius: 5px;
    z-index: 1001; /* 모달창보다 높은 z-index 값을 설정하여 모달 위에 위치하도록 함 */
    border-radius: 52px;
    > div:nth-of-type(1) {
      display: flex;
      width: 680px;
      height: 80px;
      justify-content: center;
      box-sizing: border-box;
      img {
        width: 100px;
        height: 100%;
        padding-bottom: 13px;
        object-fit: cover;
      }
    }
    button.btn-open-modal {
      width: 65px;
      height: 25px;
      position: absolute;
      top: 45px;
      right: 45px;
      border-radius: 52px;
      color: #2c39b5;
      /* border: none; */
      background-color: rgb(255, 255, 255);
    }
  }
  .modala {
    position: absolute;
    left: 45px;
    padding: 40px;
    width: 587.892px;
    height: 428.938px;
    text-align: center;
    border-radius: 22px;
    border: 1.7px solid #2c39b5;

    background-color: rgb(255, 255, 255); //모달창 배경색 흰색
    border-radius: 10px; //테두리
    box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15); //테두리 그림자/모듈창열었을때 위치설정 가운데로
  }
`;
export const BT = styled.div`
  display: flex;
  justify-content: space-around;
  width: 513px;
  height: 58px;

  .BtRight {
    width: 190px;
    height: 58px;
    border-radius: 5px;
    background: #f0f0ff;
    border: none;
    color: #2c39b5;
  }
  .BtLeft {
    width: 190px;
    height: 58px;
    border-radius: 5px;
    background: #2c39b5;
    padding-left: 10px;
    border: none;
    color: #f0f0ff;
  }
`;
export const Detail = styled.div`
  display: flex;

  width: 513px;
  height: 300px;
  /* background-color: cornflowerblue; */
  h1 {
    display: flex;
    align-items: center;
  }
`;
