import styled from "@emotion/styled";

// 메인 메뉴창
export const MenuTabStyle = styled.div`
  position: fixed;
  display: block;
  z-index: 100;
  top: 155px;
  width: 540px;
  height: 310px;
  border: 1px solid #2c39b5;
  background: #fff;
  padding: 30px 20px;
`;
export const MainMenu = styled.div`
  display: flex;
  margin-bottom: 20px;
  color: #4b4b4b;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  text-align: center;
`;
export const MainMenuList = styled.div`
  width: 130px;
  height: 34px;
  background: #f2f2ff;
  padding-top: 9px;
`;

export const SubMenuList = styled.div`
  display: flex;
  margin-left: 20px;
  margin-top: 9px;
  gap: 20px;
  li {
    color: #777;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
  }
`;
