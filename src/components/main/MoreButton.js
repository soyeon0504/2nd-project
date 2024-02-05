import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MoreBt, MoreBtWrap } from "../../styles/main/mainStyle";

const MoreButton = ({ categoryId, subCategoryId, pageNum, title }) => {
  const navigate = useNavigate();
  console.log(title);

  const handleClick = () => {
    navigate(`/more/${pageNum}/${categoryId}/${subCategoryId}`, {
      state: { title },
    });
  };

  return (
    <MoreBtWrap>
      <MoreBt onClick={handleClick}>
        MORE
        <img src="/images/main/arrow.svg" alt="" />
      </MoreBt>
    </MoreBtWrap>
  );
};

export default MoreButton;
