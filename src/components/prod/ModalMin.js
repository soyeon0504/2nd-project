import React, { useState } from "react";
import { BT, Detail, MidalCovers } from "../../styles/prod/mdalStylecss";

const ModalMin = ({ title, deletes, registration }) => {
  const [isOpen, setIsOpen] = useState(true);
  // 모달 창 닫기
  const closeMsdal = () => {
    setIsOpen(true);
  };
  return (
    <MidalCovers>
      <div className="maincover">
        <div>
          <img src="/images/logo.svg" />
        </div>
        <button className="btn-open-modal" onClick={() => setIsOpen(true)}>
          닫기
        </button>
        <div className="modala">
          <div>
            <Detail>
              <h1>{title}</h1>
            </Detail>
            <BT>
              <button className="BtRight">{registration}</button>
              <button className="BtLeft">{deletes}</button>
            </BT>
          </div>
        </div>
      </div>
    </MidalCovers>
  );
};

export default ModalMin;
