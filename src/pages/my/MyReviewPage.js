import React from "react";
import MyReviewList from "../../components/my/review/MyReviewList";

const MyReviewPage = ({activeBtn}) => {

  return (
   <>
      <MyReviewList activeBtn={activeBtn} />
    </>
  );
};

export default MyReviewPage;
