import styled from "@emotion/styled";
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 반투명한 검은색 배경 */
  z-index: 998; /* 모달보다 작은 값으로 설정하여 모달 뒤로 숨김 */
`;

export const ModalContainer = styled.div`
position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  text-align: center;
  border: 2px solid #777;
  border-radius: 20px;
  width: 500px;
  height: 600px;
  background-color: #fff;
  z-index: 999;
  .close-modal {
    width: 60px;
    height: 30px;
    font-size: 15px;
    border: 1px solid #777;
    border-radius: 5px;
    background-color: #c14b45;
    display: flex;
    justify-content: center;
  }.close-modal:hover {
    background-color: #fff;
  }
`;


export const Modal = ({ children, toggleModal }) => {
  return (
    <>
      <ModalOverlay onClick={toggleModal} />
      <ModalContainer>
        {children}
        <button className="close-modal" onClick={toggleModal}>
          닫기
        </button>
      </ModalContainer>
    </>
  );
};