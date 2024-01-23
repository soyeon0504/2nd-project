import React from "react";
import MyReviewBtn from "../../components/my/review/MyReviewBtn";
import MyReviewList from "../../components/my/review/MyReviewList";

const MyReviewPage = ({activeBtn, setActiveBtn, handleSubItemClick}) => {

  return (
   <>
      <MyReviewBtn 
        activeBtn={activeBtn} 
        setActiveBtn={setActiveBtn} 
        onButtonClick={handleSubItemClick} />
      <MyReviewList activeBtn={activeBtn} setActiveBtn={setActiveBtn} onButtonClick={handleSubItemClick}/>
    </>
  );
};

export default MyReviewPage;
