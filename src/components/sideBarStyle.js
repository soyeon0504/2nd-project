import styled from "@emotion/styled";

export const Wrap = styled.div`
    z-index: 3;
    position: fixed;
    top: 300px;
    right: 50px;
`

export const SideBarWrap = styled.div`
    width: 65px;
    height: 400px;
    background-color: #eeeef1;
    border-radius: 30px;
`

export const ButtonWrap = styled.div`
    top: 10px;
    bottom: 20px;
    position: relative;
    align-items: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    padding: 10px 20px;
`
export const Write = styled.button`
    width: 40px;
    height: 40px;

    background: url("/images/main/plus.svg");

    background-repeat: no-repeat;
    border: none;
    cursor: pointer;

`
export const Chat = styled.button`
    width: 40px;
    height: 40px;

    background: url("/images/main/chat.svg") center;

    background-repeat: no-repeat;
    border: none;
    cursor: pointer;

`

export const Like = styled.button`
    width: 40px;
    height: 40px;

    background: url("/images/main/heart.svg");

    background-repeat: no-repeat;
    border: none;
    cursor: pointer;

`
export const Profile = styled.button`
    width: 40px;
    height: 40px;

    background: url("/images/main/profile.svg");

    background-repeat: no-repeat;
    border: none;
    cursor: pointer;

`
export const Call = styled.button`
    width: 40px;
    height: 40px;

    background: url("/images/main/phone.svg");

    background-repeat: no-repeat;
    border: none;
    cursor: pointer;

`