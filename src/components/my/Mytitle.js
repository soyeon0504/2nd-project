import styled from "@emotion/styled";
import React from "react";

const MyH1Div = styled.div`
  width: 1260px;
  padding-bottom: 1.7rem;
  border-bottom: 1px solid #2c39b5;
  margin-bottom: 3.3rem;
`;

const MyH1 = styled.h1`
  font-size: 2.4rem;
  font-weight: 400;
`;

const Mytitle = () => {
  return (
    <MyH1Div>
      <MyH1>마이 페이지</MyH1>
    </MyH1Div>
  );
};

export default Mytitle;
