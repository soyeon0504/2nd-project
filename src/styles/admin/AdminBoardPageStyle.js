import styled from "@emotion/styled";
export const BoardWrap = styled.div `
    text-align: center;
    .move, .delete {
        width: 60px;
        height: 30px;
        font-weight: bold;
        color: #79747E;
        background: #fff;
        border: 2px solid #79747E;
        border-radius: 5px;
        cursor: pointer;
        &:hover {
          /* color: #fff; */
          /* background-color: #B6000B; */
          border: 2px solid #B6000B;
        }
    }
    .board-data {
        >td {
            padding: 15px 0;
        }
    }
`

export const HeaderWrap = styled.div`
    display: flex;
    justify-content: space-between;
    top: 50px;
    padding-top: 20px;
    padding-bottom: 30px;
    
    .header-title {
        display: flex;
        /* text-align: center; */
        /* justify-content: center; */
    }
    .title {
        font-size: 24px;
    }
    .total {
        font-size: 19px;
        padding-top: 5px;
        padding-left: 10px;
    }
    .search-wrap {
        /* width: 500px; */
        margin-left: 350px;
        form {
            position: relative;
            display: flex;
            select {
            width: 100px;
            height: 40px;
            border: 1px solid #bebebe;
            border-radius: 5px;
            }
            input {
            width: 300px;
            height: 40px;
            border: 1px solid #bebebe;
            border-radius: 5px;
            padding-left: 15px;
            color: #000;
            font-size: 18px;
            ::placeholder {
              color: #bebebe;
              letter-spacing: 1.5px;
            }
        }
        button {
            position: absolute;
            padding-right: 10px;
            top: 10px;
            right: 0;
            background: transparent;
            border: none;
            cursor: pointer;
            img {
                width: 20px;
                height: 20px;
            }
        }
        }
        
    }
    .bt-wrap {
    display: flex;
    margin-top: 8px;
    >div{
      display: flex;
      width: 120px;
      justify-content: space-evenly;
    }
    button {
      border: none;
      background: transparent;
      font-size: 15px;
      color: #777;
      cursor: pointer;
      
    }
    img {
        width: 10px;
        height: 20px;
        margin-top: 5px;
    }
  }
`