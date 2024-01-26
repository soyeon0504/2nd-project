import styled from '@emotion/styled'
import React from 'react'
import CustomBtn from '../../components/customer/CustomBtn'
import { Common } from '../../styles/CommonStyles'

const PreDiv =styled.div`
    width: 1020px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.5rem;
    color: ${Common.color.primary};
    background: ${Common.color.p500};
    border-radius: 1rem;
`

const CustomerPrePage = ({activeBtn, setActiveBtn, handleSubItemClick}) => {
  return (
    <>
      <CustomBtn 
        activeBtn={activeBtn} 
        setActiveBtn={setActiveBtn} 
        onButtonClick={handleSubItemClick}
      />
      <PreDiv>준비 중입니다.</PreDiv>
    </>
    
  )
}

export default CustomerPrePage
