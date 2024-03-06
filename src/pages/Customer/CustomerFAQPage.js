import React from 'react'
import CustomBtn from '../../components/customer/CustomBtn'
import CustomList from '../../components/customer/CustomList'

export const CustomerFAQPage = ({activeBtn, setActiveBtn, handleSubItemClick}) => {
  return (
    <>
        {/* <CustomBtn 
        activeBtn={activeBtn} 
        setActiveBtn={setActiveBtn} 
        onButtonClick={handleSubItemClick}
        /> */}
        <CustomList />
    </>
  )
}
