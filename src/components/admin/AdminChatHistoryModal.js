import styled from "@emotion/styled";

const AdminChatHistoryModal = ({ toggleModal }) => {
  return (
    <>
      <ModalOverlay onClick={toggleModal} />
        <ModalContainer>
        <div className="modal-content">
          <h2>신고된 채팅 내역</h2>
          <div className="chat-wrap">
            <div className="admin-profile-wrap">
              <div className="admin-chat-content">
              <p>안녕하세요. 저희 거래는 어디서 할까요?</p>
              </div>
              <div className="profile-wrap">
                <div className="admin-profile">
                  <img src="/images/admin/admin_profile.png" />
                </div>
                <div className="admin-nick">준서</div>
              </div>
            </div>
            <div className="user-profile-wrap">
              <div className="profile-wrap">
                <div className="user-profile">
                  <img src="/images/kong.jpg" />
                </div>
                <div className="user-nick">콩이</div>
              </div>
              <div className="user-chat-content">
                <p>중앙파출소 앞에서 만날까요</p>
              </div>
            </div>
          </div>
          <div className="chat-wrap">
            <div className="admin-profile-wrap">
              <div className="admin-chat-content">
              <p>안녕하세요. 저희 거래는 어디서 할까요?</p>
              </div>
              <div className="profile-wrap">
                <div className="admin-profile">
                  <img src="/images/admin/admin_profile.png" />
                </div>
                <div className="admin-nick">준서</div>
              </div>
            </div>
            <div className="user-profile-wrap">
              <div className="profile-wrap">
                <div className="user-profile">
                  <img src="/images/kong.jpg" />
                </div>
                <div className="user-nick">콩이</div>
              </div>
              <div className="user-chat-content">
                <p>중앙파출소 앞에서 만날까요</p>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <div className="close-modal-wrap">
            <button className="close-modal" onClick={toggleModal}>
              <div className="close-text">닫기</div>
            </button>
          </div>
        </div>
        </ModalContainer>
    </>
  );
};

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 반투명한 검은색 배경 */
  z-index: 998; /* 모달보다 작은 값으로 설정하여 모달 뒤로 숨김 */
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  text-align: center;
  border: 2px solid #777;
  border-radius: 20px;
  width: 600px;
  height: 650px;
  background-color: #fff;
  z-index: 999;
  padding-top: 20px;
  .user-nick {
    margin-top: 3px;
    margin-right: 20px;
  }
  .profile-wrap {
    display: block;
    .admin-nick {
      margin-top: 3px;
      margin-left: 20px;
      font-size: 13px;
    }
  }
  .admin-profile-wrap {
    position: absolute;
    width: 500px;
    display: flex;
    justify-content: space-between;
    top: 50px;
    right: 20px;
    .admin-chat-content {
      width: 500px;
      >p {
        padding-top: 12px;
      }
    }
    .admin-profile {
      width: 50px;
      height: 50px;
      border: 1px solid #777;
      border-radius: 25px;
      margin-left: 20px;
      
    }
    .admin-profile > img {
      width: 48px;
      height: 48px;
      border-radius: 25px;
    }
  }
  .admin-chat-content {
    top: 50px;
    right: 80px;
    width: 450px;
    height: 50px;
    border: 2px solid #E9E9E9;
    border-radius: 10px;
    background-color: #ffe6e6;
    font-size: 17px;
    color: #555;
  
  }
  .user-profile-wrap {
    position: absolute;
    width: 500px;
    display: flex;
    justify-content: space-between;
    top: 130px;
    left: 20px;
    .user-nick {
        font-size: 14px;
      }
    .user-profile {
      width: 50px;
      height: 50px;
      border: 1px solid #777;
      border-radius: 25px;
      margin-right: 20px;
      
    }
    .user-profile > img {
      width: 50px;
      height: 50px;
      border-radius: 25px;
    }
    
  }
  .user-chat-content {
    top: 120px;
    left: 80px;
    width: 450px;
    height: 50px;
    border: 2px solid #E9E9E9;
    border-radius: 10px;
    font-size: 17px;
    color: #555;
    >p {
      padding-top: 12px;
    }
  }
  
  .close-modal-wrap {
    position: absolute;
    justify-content: center;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    .close-modal {
      width: 60px;
      height: 30px;
      font-size: 15px;
      border: 1px solid #c14b45;
      border-radius: 5px;
      background-color: #c14b45;
      .close-text {
        color: #fff;
      }
      .close-text:hover {
        color: #111;
      }
    }
    .close-modal:hover {
      background-color: #fff;
      border: 1.5px solid #777;
      
    }
  }
`;
export default AdminChatHistoryModal;
