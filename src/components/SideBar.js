import React from 'react'
import { ButtonWrap, Call, Chat, Like, Profile, SideBarWrap, Wrap, Write } from './sideBarStyle'
import { Link } from 'react-router-dom'

export const SideBar = () => {
  return (
    <Wrap>
        <SideBarWrap>
            <ButtonWrap>
                <Link to="/main">
                    <Write />
                </Link>
                <Link to="/main">
                    <Chat />
                </Link>
                <Link to="/main">
                    <Like />
                </Link>
                <Link to="/main">
                    <Profile />
                </Link>
                <Link to="/main">
                    <Call />
                </Link>
            </ButtonWrap>
        </SideBarWrap>
    </Wrap>
  )
}
