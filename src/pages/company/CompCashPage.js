import React from 'react'
import CompProfile from '../../components/company/CompProfile'
import CompCashList from '../../components/company/CompCashList'
import CompCashButton from '../../components/company/CompCashButton'

const CompCashPage = ({activeBtn, setActiveBtn }) => {
  return (
    <> 
      <CompCashButton />
      <CompProfile />
      <CompCashList activeBtn={activeBtn} setActiveBtn={setActiveBtn}/>
    </>
  )
}

export default CompCashPage