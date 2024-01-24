import styled from '@emotion/styled'
import React from 'react'

const MyMoreBtWrap = styled.div`
    display: flex;
    justify-content: center;
`

const MyMoreBtn = styled.button`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 18px;
    background: none;
    border-radius: 3.5rem;
    width: 130px;
    height: 50px;
    color: #2c39b5;
    border: 2px solid #2c39b5;
    img {
        width: 14px;
        height: 20px;
    }
    &:hover {
        color: #fff;
        background-color: #2c39b5;
        img {
            content: url("/images/main/arrow1.svg");
        }
    }
`

const MyMoreButton = () => {
  return (
    <MyMoreBtWrap>
        <MyMoreBtn onClick={() => {}}>MORE
            <img src='/images/main/arrow.svg' alt=''/>
        </MyMoreBtn>
    </MyMoreBtWrap>
  )
}

export default MyMoreButton