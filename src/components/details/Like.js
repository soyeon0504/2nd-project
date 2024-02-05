import React, { useState } from "react";
import { StyledButton } from "../../styles/details/DetailsComponentStyles";
import { getFav } from "../../api/details/details_api";

function Like({ isLiked, productId }) {
  const [liked, setLiked] = useState(isLiked);

  const toggleLiked = (e) => {
    setLiked((prev) => !prev)
    e.stopPropagation()
  }
  // const toggleLike = async () => {
  //   try {
  //     // 상태 업데이트를 이전 값에 의존하지 않도록 함수형 업데이트를 사용합니다.
  //     setLiked(prevLiked => !prevLiked);
  //     await getFav(productId);
  //   } catch (error) {
  //     // console.error("Error toggling like:", error);
  //   }
  // };




  return (
    <StyledButton onClick={toggleLiked}>
      {liked ? (
        <img src="/images/details/like_full.svg" alt="풀 하트" />
      ) : (
        <img src="/images/details/like.svg" alt="빈 하트" />
      )}
    </StyledButton>
  );
}

export default Like;
