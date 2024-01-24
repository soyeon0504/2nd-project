import styled from "@emotion/styled";

export const JoinFirstPageStyle = styled.div`
width: 1300px;
text-align: center;
margin: 0 auto;
/* background: skyblue; */
`;
export const JoinHeader = styled.div`
margin-top:  ${props => props.mgtop ? props.mgtop : "70px"};
text-align: center;
p {
  color: #000;
  font-size: 23px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  margin-bottom: ${props => props.mgbtm ? props.mgbtm : "60px"};
}
img {
  width: 550px;
  height: 63px;
  margin-bottom: 70px;
}
`;
export const JoinMain = styled.div`
width: 980px;
/* text-align: center; */
margin: 0 auto;
`;
export const JoinAgreement = styled.div`
width: 980px;
padding: 25px;
border-radius: 10px;
border: 1px solid #2c39b5;
margin: 0 auto;
h1 {
  color: #777;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  text-align: start;
}
h2 {
  color: #777;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  text-align: start;
}
`;
export const RadioBox = styled.div`
text-align: start;
padding: 15px 0;

color: #777;
font-size: 22px;
font-style: normal;
font-weight: 400;
line-height: normal;
input[type="radio"] {
  width: 17px;
  height: 17px;
  margin-right: 10px;
}
input[type="radio"] + label {
  margin-right: 25px;
}
input[type="radio"]:checked + label {
  color: #000;
}
`;
export const ConfirmBt = styled.button`
width: 200px;
height: 50px;
border-radius: 10px;
background: #2c39b5;
margin: 100px auto;
border: none;

color: #fff;
font-size: 22px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;