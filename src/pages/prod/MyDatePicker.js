import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


import "../../styles/prodcss/myDare.css";
import { register } from "./Products";

function MyDatePicker() {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div>
      <label htmlFor="dateInput"></label>
      <DatePicker
        id="dateInput"
        selected={selectedDate}
        onChange={date => setSelectedDate(date)}
        dateFormat="yyyy/MM/dd" // 날짜 표시 형식 설정 (선택 사항)
        showPopperArrow={false} // 팝업 화살표 감추기 (선택 사항)
     
        placeholderText="제품 구매년도를 입력해주세요.   예) 2017년 12월 / 2015년 6월 19일"
      />
    </div>
  );
}

export default MyDatePicker;
