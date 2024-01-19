import React, { useEffect, useState } from "react";

// 초기데이터
const initState = [
  ["목록1", "목록2", "목록3", "목록4", "목록5", "목록6"],
  ["아이템1", "아이템2", "아이템3", "아이템4"],
  ["항목1", "항목2", "항목3"],
  ["a", "b", "c", "d", "e", "f"],
  ["1", "2", "3", "4", "5"],
];

const viewmenu = () => {
  //리스트 아이템 state,초기 데이터 initState
  const [listIems, setListItems] = useState(initState);
  //인덱스의 번호를 찾는다
  const [selectCate, setSelctCate] = useState(0);
  //List 에 담긴 배열의 번호 합친 [] 스테이트에 담는걸 케치 한다
  const [goods, setGoods] = useState([]);

  //한번만 실행 되는 함수
  useEffect(() => {
    setGoods(setListItems[selectCate]);
  }, [initState]);

  const handleButtonClick = num => {
    setSelctCate(num);
  };

  return (
    <div>
      <div>
        {/* 버튼 태그에 onClick시  인덱의 순번을 찾아 가게 만들어 준다 */}
        <button type="button" onClick={() => handleButtonClick(0)}>
          목록
        </button>
        <button type="button" onClick={() => handleButtonClick(1)}>
          아이탬
        </button>
        <button type="button" onClick={() => handleButtonClick(2)}>
          항목
        </button>
        <button type="button" onClick={() => handleButtonClick(3)}>
          영문
        </button>
        <button type="button" onClick={() => handleButtonClick(4)}>
          정수
        </button>
      </div>

      <div>
        <ui>
          {goods.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ui>
      </div>
    </div>
  );
};

export default viewmenu;
