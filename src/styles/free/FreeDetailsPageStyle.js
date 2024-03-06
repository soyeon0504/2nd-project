import styled from "@emotion/styled";

export const FreeDetailsPageStyle = styled.div`
  width: 1260px;
  margin: 0 auto;
`;

export const FreeDetailsMain = styled.div`
  display: flex;
`;
export const TitleSection = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  border-bottom: 1px solid #e4e7ff;
  padding-top: 15px;
  padding-left: 5px;
  h1 {
    color: #000;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  h2 {
    color: #000;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
export const ContentSection = styled.div`
  padding-top: 20px;
  padding-left: 10px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e4e7ff;
  img {
    width: 300px;
    height: 300px;
    margin-right: 65px;
  }
  p {
    margin-top: 20px;
    margin-bottom: 60px;
    color: #000;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
export const ReviewSection = styled.div`
  width: 1080px;
  margin-bottom: 50px;
  h1 {
    margin-top: 10px;
    margin-bottom: 15px;
    color: #000;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
export const ReviewRegister = styled.div`
  width: 1080px;
  background: #f9f9f9;
  border: 1px solid #d9d9d9;
  margin-bottom: 30px;
  p {
    width: 1080px;
    height: 80px;
    padding-top: 15px;
    padding-left: 20px;
    border-bottom: 1px solid #d9d9d9;

    color: #777;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  textarea {
    width: 920px;
    height: 70px;
    resize: none;
    background: #f9f9f9;
    padding-left: 20px;
    padding-top: 10px;
    border: none;

    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  span {
    width: 30px;
    padding-bottom: 10px;
  }
  button {
    width: 100px;
    height: 70px;
    background: #2c39b5;
    border: none;

    color: #fff;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    cursor: pointer;
  }
`;
export const ReviewList = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #d9d9d9;
  margin-bottom: 5px;
  img {
    margin-top: 10px;
    width: 50px;
    height: 50px;
    margin-right: 10px;
    border-radius: 100%;
  }
  h1 {
    margin-top: 10px;
    margin-bottom: 15px;

    color: #000;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  p {
    margin-bottom: 15px;

    color: #777;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  h2 {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
export const CommentModifyBox = styled.div`
  width: 900px;
  align-items: center;
  margin-bottom: 7px;
  padding: 5px;
  border: 1px solid #e4e7ff;
  textarea {
    width: 820px;
    height: 50px;
    border: none;
    resize: none;

    color: #777;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  button {
    width: 50px;
    height: 30px;
    margin-left: 10px;
    border-radius: 5px;
    border: 1px solid #2c39b5;
    background: #fff;

    font-size: 15px;
    color: #2c39b5;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    cursor: pointer;
  }
`;
export const MoreBt = styled.div`
  text-align: center;
  img {
    margin: 40px auto 0px;
    cursor: pointer;
  }
`;

export const SideSection = styled.div`
  width: 150px;
  border: 1px solid #e4e7ff;
  /* background: orange; */
`;

export const WriterSection = styled.div`
  background: #e4e7ff;
  padding: 15px;

  img {
    width: 120px;
    height: 120px;
    border-radius: 5px;
  }
  h1 {
    margin-top: 5px;
    color: #000;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export const ContentState = styled.div`
  display: flex;
  justify-content: space-between;
  width: 130px;
  margin: 0 auto;
  border-bottom: 1px solid #e4e7ff;
  padding: 7px 10px;
  h1 {
    color: #000;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  div {
    display: flex;
    width: 40px;
    justify-content: space-between;
  }
  img {
    width: 18px;
    height: 18px;
    cursor: pointer;
  }
`;

export const BoardWriterBt = styled.div`
  display: flex;
  justify-content: end;
  align-items: end;
  text-align: end;
  padding-right: 20px;
  padding-bottom: 10px;
  button {
    width: 50px;
    height: 25px;
    margin-left: 10px;
    border-radius: 5px;
    border: 1px solid #2c39b5;

    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    cursor: pointer;
  }
`;

export const CommentWriterBt = styled(BoardWriterBt)`
  margin-top: 5px;
  padding-right: 0px;
`;

export const BoardLike = styled.div`
  display: flex;
  height: 30px;
  justify-content: end;
  align-items: center;
  h1 {
    margin-right: 10px;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  img {
    width: 25px;
    height: 25px;
    cursor: pointer;
  }
`;
