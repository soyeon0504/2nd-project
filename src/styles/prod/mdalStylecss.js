import styled from "@emotion/styled";

export const MidalCovers = styled.div`
  display: block;
  width: 400px; //모달의 가로크기
  height: 600px; //모달의 세로크기

  .modala {
    position: absolute;
    top: 50%; //모달을 화면가운데 놓기위함.
    padding: 40px;

    text-align: center;

    background-color: rgb(255, 255, 255); //모달창 배경색 흰색
    border-radius: 10px; //테두리
    box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15); //테두리 그림자

    transform: translateY(-50%); //모듈창열었을때 위치설정 가운데로
  }
`;
