import React from 'react'
import CompManagement from '../../components/company/CompManagement'
import CompProfile from '../../components/company/CompProfile'

const CompManagementPage = ({activeBtn, setActiveBtn}) => {
  return (
    <>
      <CompProfile />
      <CompManagement activeBtn={activeBtn} setActiveBtn={setActiveBtn}/>
    </>
  )
}

export default CompManagementPage