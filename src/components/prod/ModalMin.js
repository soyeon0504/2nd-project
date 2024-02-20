import React from "react";
import { MidalCovers } from "../../styles/prod/mdalStylecss";

const ModalMin = () => {
  return (
    <MidalCovers>
      <div className="modala">
        <h2>모달창 제목</h2>
        <p>모달창 내용 </p>
      </div>
      <button className="btn-open-modal">Modal열기</button>
    </MidalCovers>
  );
};

export default ModalMin;
