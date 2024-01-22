import styled from "@emotion/styled";

export const MoreWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  .header-cate-wrap {
    display: flex;
    max-width: 1260px;
  }
  .bt-wrap {
    width: 100px;
    display: flex;
    justify-content: space-evenly;
    button {
      border: none;
      background: transparent;
      font-size: 12px;
      color: #777;
      cursor: pointer;
    }
    img {
      width: 2px;
      height: 14px;
    }
    .area-wrap {
      display: flex;
    }
    option {
      background-color: #fff;
    }
  }
  .main-wrap {
    max-width: 1260px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-gap: 20px;
  }
  .item-wrap {
    position: relative;
    img {
      width: 100%;
      border: none;
      border-radius: 2%;
    }
    .like {
      position: absolute;
      border: none;
      top: 10px;
      right: 10px;
      z-index: 1;
      width: 30px;
      height: 30px;
      background-repeat: no-repeat;
      button {
        border: none;
        background: transparent;
      }
  }
  }
`;
