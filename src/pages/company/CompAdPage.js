import React from "react";
import CompAdList from "../../components/company/CompAdList";
import CompListBtn from "../../components/company/CompListBtn";

const CompAdPage = ({activeBtn, setActiveBtn, handleSubItemClick}) => {
  
  return (
    <>
      <CompListBtn 
      activeBtn={activeBtn} 
      setActiveBtn={setActiveBtn} 
      onButtonClick={handleSubItemClick} />
      <CompAdList activeBtn={activeBtn} setActiveBtn={setActiveBtn}/>
    </>
  );
};

export default CompAdPage;
