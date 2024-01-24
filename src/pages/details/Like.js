import React, { useState } from "react";
import styled from "@emotion/styled";

const StyledButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  img {
    width: 40px;
    height: 35px;
    margin-top: 54px;
    margin-right: 110px;
  }
`;

function Like() {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <StyledButton onClick={toggleLike}>
      {liked ? (
        <img src="images/details/like_full.svg" alt="풀 하트" />
      ) : (
        <img src="images/details/like.svg" alt="빈 하트" />
      )}
    </StyledButton>
  );
}

export default Like;
