import styled from "@emotion/styled";
import React from "react";

const MyH1Div = styled.div`
  width: 1260px;
  padding-bottom: 1.7rem;
  border-bottom: 1px solid #2c39b5;
  margin-bottom: 3.3rem;
  h1 {
    font-size: 2.4rem;
    font-weight: 400;
  }
`;

const Mytitle = () => {
  return (
    <MyH1Div>
      <h1>마이 페이지</h1>
    </MyH1Div>
  );
};

export default Mytitle;
