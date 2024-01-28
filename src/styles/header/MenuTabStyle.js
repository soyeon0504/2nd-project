import styled from "@emotion/styled";

// 메인 메뉴창
export const MenuTabStyle = styled.div`
  position: fixed;
  display: block;
  z-index: 100;
  top: 160px;
  width: 540px;
  height: 310px;
  border: 1px solid #2c39b5;
  background: #fff;
  padding: 30px 20px;
`;
export const MainMenu = styled.ul`
  display: block;
  list-style: none;
  li {
    display: flex;
    margin-bottom: 20px;
  }
`;
export const MainMenuList = styled.div`

  color: #4b4b4b;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  text-align: center;
`;
export const MainMenuLi = styled.li`
width: 130px;
height: 34px;
background: #f2f2ff;
text-align: center;

`;
export const SubMenu = styled.div`
  display: flex;
  /* list-style: none; */
  gap: 20px;
  li {
    color: #777;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
  }
`;
