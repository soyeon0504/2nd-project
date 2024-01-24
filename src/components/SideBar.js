import React from 'react'
import { ButtonWrap, Call, Chat, Like, Profile, SideBarWrap, Wrap, Write } from './sideBarStyle'
import { Link } from 'react-router-dom'

export const SideBar = () => {
  return (
    <Wrap>
        <SideBarWrap>
            <ButtonWrap>

                <Write>
                    <Link to="/main"></Link>
                </Write>
                <Chat>
                    <Link to="/main"></Link>
                </Chat>
                <Link to="/my">
                    <Like>
                    </Like>
                </Link>
                <Profile>
                    <Link to="/main"></Link>
                </Profile>
                <Call>
                    <Link to="/main"></Link>
                </Call>

            </ButtonWrap>
        </SideBarWrap>
    </Wrap>
  )
}
