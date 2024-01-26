import React from 'react';
import { useNavigate } from "react-router-dom";
import { MoreBt, MoreBtWrap } from '../../pages/main/mainStyle';


const MoreButton = (e) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
  navigate(`/main/more`)
}

  return (
    
    <MoreBtWrap>
        <MoreBt onClick={() => handleClick(e)}>MORE
            <img src='../images/main/arrow.svg' alt=''/>
        </MoreBt>
    </MoreBtWrap>
  )
}

export default MoreButton