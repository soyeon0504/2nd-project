import styled from "@emotion/styled";

export const MyListDiv = styled.div`
  height: 55rem;
  background: #f2f2ff;
  border-radius: 10px;
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
  }
  > div {
    display: flex;
    justify-content: center;
    gap: 5px;
  }
`;

export const MyListTopButton = styled.button`
  border-radius: 3px;
  border: 1px solid #2c39b5;
  background: ${props => (props.active ? "#2C39B5" : "#f2f2ff")};
  color: ${props => (props.active ? "#fff" : "#2C39B5")};
  width: 50px;
  height: 25px;
  text-align: center;
  cursor: pointer;
`;

export const MyListMid = styled.div`
  display: flex;
  position: relative;
  gap: 1rem;
  color: #777;
  padding: 1rem;
  border: 1px solid #2c39b5;
  border-radius: 1rem;
  margin-top: 2.3rem;
`;

export const MyListMidImg = styled.div`
  width: 10rem;
  height: 10rem;
  border-radius: 1rem;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const MyListMidTxt = styled.div`
  display: flex;
  flex-direction: column;
  width: 35rem;
  gap: 1rem;
  h2 {
    height: 3rem;
    font-size: 1.4rem;
    font-weight: 400;
  }
  p {
    font-size: 2rem;
    font-weight: 600;
  }
  span {
    font-size: 1.4rem;
  }
`;

export const MyListMidLast = styled.div`
  display: flex;
  align-items: end;
  justify-content: right;
  width: 100px;
  height: 100px;
  position: absolute;
  bottom: 1rem;
  right: 1rem;
`;

export const MyListBottom = styled.div`
  margin-top: 2.3rem;
  display: flex;
  justify-content: center;
`;
