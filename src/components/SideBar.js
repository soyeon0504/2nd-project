import React from 'react'
import { ButtonWrap, Call, Chat, Like, Profile, SideBarWrap, Wrap, Write } from './sideBarStyle'
import { Link } from 'react-router-dom'

export const SideBar = () => {
  return (
    <Wrap>
        <SideBarWrap>
            <ButtonWrap>
                <Link to="/main">
                    <Write>
                    </Write>
                </Link>
                <Link to="/main">
                    <Chat>
                    </Chat>
                </Link>
                <Link to="/main">
                    <Like>
                    </Like>
                </Link>
                <Link to="/my">
                    <Profile>
                    </Profile>
                </Link>
                <Link to="/customer">
                    <Call>
                    </Call>
                </Link>

            </ButtonWrap>
        </SideBarWrap>
    </Wrap>
  )
}
