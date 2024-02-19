import React from "react";
import { MidalCover, MidalCovers } from "../../styles/mdalStylecss";

const Modal = () => {

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

export default Modal;
