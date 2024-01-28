import React from 'react'
import { ButtonWrap, Call, Chat, Like, Profile, SideBarWrap, Wrap, Write } from './sideBarStyle'
import { Link } from 'react-router-dom'

export const SideBar = ({setSelectedItem, setActiveBtn}) => {

    const handleLinkClick = (subItem) => {
        if (setSelectedItem && setActiveBtn) {
            setSelectedItem(subItem);
            setActiveBtn(subItem);
        }
        sessionStorage.setItem('selectedItem', subItem);
    };

    
  return (
    <Wrap>
        <SideBarWrap>
            <ButtonWrap>
                <Link to="/prod">
                    <Write>
                    </Write>
                </Link>
                <Link to="/">
                    <Chat>
                    </Chat>
                </Link>
                <Link to="/my?interest" onClick={()=>{handleLinkClick("관심 목록")}}>
                    <Like>
                    </Like>
                </Link>
                <Link to="/my" onClick={()=>{handleLinkClick("대여중")}}>
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
