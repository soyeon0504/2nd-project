import styled from "@emotion/styled";

export const MyListDiv = styled.div`
  height: 55rem;
  background: #f2f2ff;
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
  background: ${props => (props.selected ? "#2C39B5" : "#f2f2ff")};
  color: ${props => (props.selected ? "#fff" : "#2C39B5")};
  width: 5rem;
  height: 2.5rem;
  text-align: center;
  cursor: pointer;
`;

export const MyListMid = styled.div`
  display: flex;
  position: relative;
  gap: 1rem;
  color: #000;
  padding: 1rem;
  border: 1px solid #2c39b5;
  border-radius: 1rem;
  margin-top: 2.3rem;
  height: 12rem;
  width: 98rem;
`;

export const MyListMidEnd = styled.div`
  display: flex;
  position: relative;
  gap: 1rem;
  color: #000;
  padding: 1rem;
  border: 1px solid #2c39b5;
  border-radius: 1rem;
  margin-top: 2.3rem;
  background: rgba(0, 0, 0, 0.15);
  height: 12rem;
  width: 98rem;
  > h2 {
    position: absolute;
    top: 4rem;
    right: 40rem;
    font-size: 3rem;
    font-weight: 600;
    color: #8f8f8f;
  }
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
  height: 10rem;
  gap: 1rem;
  h2 {
    height: 3.5rem;
    font-size: 1.4rem;
    font-weight: 400;
  }
  p {
    font-size: 2rem;
    font-weight: 600;
    height: 2.5rem;
  }
  span {
    display: block;
    width: 35rem;
    height: 2rem;
    line-height: 2rem;
    font-size: 1.4rem;
    white-space: nowrap; 
    overflow: hidden;
    text-overflow: ellipsis;
  } 
`;


export const MyListMidLast = styled.div`
  display: flex;
  align-items: ${props => props.location ? props.location : "end"};
  justify-content: space-between;
  flex-direction: column;
  width: 10rem;
  height: 10rem;
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  p {
    font-size: 1.4rem;
  }
  button {
    border: 0;
    cursor: pointer;
  }
`;
export const MyListBottom = styled.div`
  margin-top: 2.3rem;
  display: flex;
  justify-content: center;
`;
