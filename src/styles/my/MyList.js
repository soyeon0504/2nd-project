import styled from "@emotion/styled";
import { Common } from "../CommonStyles";

export const MyListDiv = styled.div`
  background: ${Common.color.p500};
  border-radius: 1rem;
  padding: 2rem;
`;
export const MYListDivs = styled.div`
  background: ${Common.color.p500};
  border-radius: 1rem;
  padding: 2rem;

`;

export const MyListTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2 {
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.5;
    color: #403d3d;
  }
  > div {
    display: flex;
    justify-content: center;
    gap: 5px;
  }
`;

export const MyListTopButton = styled.button`
  border-radius: 3px;
  border: 1px solid ${Common.color.primary};
  background: ${props =>
    props.selected ? Common.color.primary : Common.color.p500};
  color: ${props =>
    props.selected ? Common.color.p600 : Common.color.primary};
  width: 5rem;
  height: 2.5rem;
  text-align: center;
  cursor: pointer;
`;

export const MyListMid = styled.div`
  display: flex;
  gap: 2rem;
  position: relative;
  overflow: hidden;
  color: #000;
  padding: 1rem;
  border: 1px solid ${Common.color.primary};
  border-radius: 1rem;
  margin-top: 2.3rem;
  height: 12rem;
  width: 98rem;

  display: flex;
  margin-top: 10px;
  justify-content: end;
  width: 980px;
  button {
    cursor: pointer;
    width: 110px;
    height: 30px;
    border: 0;
    border-radius: 5px;
    background-color: #fcd508;
    color: #fff;
    z-index: 99;
  }
`;

    display: flex;
    margin-top: 10px;
    justify-content: end;
    width: 980px;
    button {
      cursor: pointer;
      width: 110px;
      height: 30px;
      border: 0;
      border-radius: 5px;
      background-color: #f6b65a;
      color: #fff;
      z-index: 9;
    }
`


export const MyListProfileImg = styled.div`
  width: 6rem !important;
  height: 6rem !important;
  box-sizing: border-box;
  border-radius: 4.5rem;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const MyListBottom = styled.div`
  margin-top: 2.3rem;
  display: flex;
  justify-content: center;
`;

export const MyStarDiv = styled.div`
  height: 2rem;
`;

export const MyProfileDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 6rem;
  height: 100%;
  gap: 2px;
  p {
    display: block;
    font-size: 1.4rem;
    margin: 0 auto;
    margin-bottom: 2px;
  }
  span {
    font-size: 1.2rem;
    margin: 0 auto;
  }
`;

export const MyManagementBt = styled.button`
  width: 50px;
  height: 25px;
  border-radius: 5px;
  border: 1px solid ${Common.color.primary} !important;
  color: ${Common.color.primary};
`;

export const MyManagementBtHover = styled(MyManagementBt)`
  background-color: ${Common.color.primary} !important;
  color: #fff;
  width: ${props => (props.width ? props.width : "50px")};
`;
export const CompManagementBt = styled.button`
  width: 110px;
  height: 30px;
  border-radius: 5px;
  background-color: #fcd508 !important;
  color: #fff;
`;
export const CompManagementBtHover = styled(CompManagementBt)`
  background-color: transparent !important;
  color: #fcd508;
  border: 1px solid #fcd508 !important;
`;
