import React from "react";
import Layout from "../../layouts/Layout";
import { JoinLastPageStyle } from "../../styles/join/JoinLastPageStyle";
import { JoinHeader } from "../../styles/join/JoinFirstPageStyle";
import { SelectBox } from "../../styles/join/JoinSelectPage";

const JoinSelectPage = () => {
  return (
    <Layout>
      <JoinLastPageStyle>
        <JoinHeader>
            <p>회원가입</p>
          <img src="/images/join/join_step0.svg" />
        </JoinHeader>
        <SelectBox>
        <img src="/images/join/join_individual.svg" style={{width:"200px", height:"200px"}}/>
        <div style={{width:"1px", height:"500px", background:"#2C39B5"}}></div>
        <img src="/images/join/join_enterprise.svg" style={{width:"200px", height:"200px"}}/>
        </SelectBox>
        </JoinLastPageStyle>
    </Layout>
  );
};

export default JoinSelectPage;
