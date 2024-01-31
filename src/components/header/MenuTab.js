import React, { useState } from "react";
import {
  MainMenu,
  MainMenuList,
  MenuTabStyle,
  SubMenuList,
} from "../../styles/header/MenuTabStyle";
import { useNavigate } from "react-router-dom";
export const menuCate = [
  {
    title: "스마트 기기",
    list: [
      { id: 1-1, cate: "스마트 워치" },
      { id: 1-2, cate: "태블릿" },
      { id: 1-3, cate: "갤럭시" },
      { id: 1-4, cate: "아이폰" },
    ],
  },
  {
    title: "PC / 노트북",
    list: [
      { id: 2-1, cate: "노트북" },
      { id: 2-2, cate: "PC" },
      { id: 2-3, cate: "마우스" },
      { id: 2-4, cate: "키보드" },
    ],
  },
  {
    title: "영상 / 카메라",
    list: [
      { id: 3-1, cate: "빔프로젝터" },
      { id: 3-2, cate: "셋톱박스" },
      { id: 3-3, cate: "카메라" },
      { id: 3-4, cate: "캠코더" },
      { id: 3-5, cate: "DSLR" },
    ],
  },
  {
    title: "음향",
    list: [
      { id: 4-1, cate: "스피커" },
      { id: 4-2, cate: "이어폰" },
      { id: 4-3, cate: "헤드폰" },
      { id: 4-4, cate: "마이크" },
    ],
  },
  {
    title: "게임 기기",
    list: [
      { id: 5-1, cate: "플레이스테이션" },
      { id: 5-2, cate: "닌텐도" },
      { id: 5-3, cate: "Wii" },
      { id: 5-4, cate: "XBOX" },
      { id: 5-5, cate: "기타" },
    ],
  },
];
const MenuTab = () => {
  // hover시 배경색 변경
  const [activeCategory, setActiveCategory] = useState(null);
  const handleCategoryHover = category => {
    setActiveCategory(category); // 마우스가 hover되었음을 상태에 저장
  };
  const handleCategoryLeave = () => {
    setActiveCategory(null); // 마우스가 hover되지 않았음을 상태에 저장
  };
  // 페이지 이동
  const navigate = useNavigate();
  const handleClickCate = () => {
    navigate(`/main/more`);
  };
  return (
    <MenuTabStyle>
      {menuCate.map(item => (
        <MainMenu key={item.title}>
          <MainMenuList>{item.title}</MainMenuList>
          <SubMenuList>
            {item.list.map(listItem => (
              <li
                key={listItem.id}
                onClick={handleClickCate}
                onMouseEnter={() => handleCategoryHover(listItem.cate)}
                onMouseLeave={handleCategoryLeave}
                style={
                  activeCategory === listItem.cate
                    ? { color: "#2C39B5", fontWeight: "500" }
                    : {}
                }
              >
                {listItem.cate}
              </li>
            ))}
          </SubMenuList>
        </MainMenu>
      ))}
    </MenuTabStyle>
  );
};
export default MenuTab;
