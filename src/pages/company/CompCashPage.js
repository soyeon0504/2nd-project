import React from 'react'
import CompProfile from '../../components/company/CompProfile'
import MyList from '../../components/my/MyList'
import CompListBtn from '../../components/company/CompListBtn'

const CompCashPage = ({activeBtn, setActiveBtn, handleSubItemClick}) => {
  return (
    <>
      <CompProfile />
      <CompListBtn 
      activeBtn={activeBtn} 
      setActiveBtn={setActiveBtn} 
      onButtonClick={handleSubItemClick} />
      <MyList activeBtn={activeBtn} setActiveBtn={setActiveBtn}/>
    </>
  )
}

export default CompCashPage