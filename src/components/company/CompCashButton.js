import styled from '@emotion/styled'
import React from 'react'
import { Common } from '../../styles/CommonStyles'

const CompCashBtDiv = styled.div`
    display: flex;
    justify-content: end;
`
const CompCashBt = styled.button`
    display: flex;
    justify-content: space-evenly;
    border: 0;
    align-items: center;
    font-size: 18px;
    background: none;
    width: 130px;
    height: 50px;
    color: #fff;
    background-color: ${Common.color.primary};
    img {
        width: 14px;
        height: 20px;
    }
    &:hover {
        border: 2px solid ${Common.color.primary};
        color: ${Common.color.primary};
        background-color: #F2F2FF;
        img {
            content: url("/images/main/arrow.svg");
        }
    }
`

const CompCashButton = () => {
  return (
    <CompCashBtDiv>
        <CompCashBt>캐시 충전
            <img src='/images/main/arrow1.svg' alt=''/>
        </CompCashBt>
    </CompCashBtDiv>
  )
}

export default CompCashButton