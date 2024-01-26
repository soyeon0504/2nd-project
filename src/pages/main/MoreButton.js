import React from 'react'
import { MoreBt, MoreBtWrap } from './mainStyle'
import MainMorePage from './MainMorePage'



const MoreButton = (e) => {
  const handleClick = e => { MainMorePage }
  return (
    <MoreBtWrap>
        <MoreBt onClick={() => handleClick(e)}>MORE

            <img src='../images/main/arrow.svg' alt=''/>

        </MoreBt>
    </MoreBtWrap>
  )
}

export default MoreButton