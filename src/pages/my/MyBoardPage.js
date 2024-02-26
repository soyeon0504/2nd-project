import React from "react";
import MyProfile from "../../components/my/MyProfile";
import MyManagement from "../../components/my/MyManagement";

const MyBoardPage = ({activeBtn, setActiveBtn}) => {
  
  return (
    <>
      <MyProfile />
      <MyManagement activeBtn={activeBtn} setActiveBtn={setActiveBtn}/>
    </>
  );
};

export default MyBoardPage;
