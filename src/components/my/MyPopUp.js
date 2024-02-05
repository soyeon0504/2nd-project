import styled from "@emotion/styled";
import React from "react";

export const ModalBackground = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: rgba(0, 0, 0, 0.5);
z-index: 999;
`

const MyPopUp = ({ title,txt, onConfirm }) => {
  const MyPopUp = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;

    width: 320px;
    height: 300px;
    display: flex;

    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    border: 1px solid #2c39b5;
    background: #fff;
    h1 {
        font-size: 25px;
    }
    b {
      color: #000;
      text-align: left;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      white-space: pre-line;
    }
    button {
        margin-top: 30px;
      width: 100px;
      height: 50px;
      border-radius: 5px;
      border: none;
      background: #2c39b5;
        cursor: pointer;
      color: #fff;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  `;

  return (
    <MyPopUp>
        <h1>{title}</h1>
      <b>{txt}</b>
      <button onClick={onConfirm}>확인</button>
    </MyPopUp>
  );
};

export default MyPopUp;
