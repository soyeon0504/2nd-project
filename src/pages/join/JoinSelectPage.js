import React from "react";
import Layout from "../../layouts/Layout";
import { JoinLastPageStyle } from "../../styles/join/JoinLastPageStyle";
import { JoinHeader } from "../../styles/join/JoinFirstPageStyle";
import { SelectBox, SelectOne } from "../../styles/join/JoinSelectPageStyle";
import { useNavigate } from "react-router-dom";

const JoinSelectPage = () => {
    const navigate = useNavigate();
    const handleIndividual = e => {
        navigate(`/join/1?member=individual`)
    }
    const handleEnterprise = e => {
        navigate(`/join/1?member=enterprise`)
    }
  return (
    <Layout>
      <JoinLastPageStyle>
        <JoinHeader>
          <p>회원가입</p>
          <img src="/images/join/join_step0.svg" />
        </JoinHeader>
        <SelectBox>
          <SelectOne>
            <img src="/images/join/join_individual.svg" />
            <h1>일반회원</h1>
            <h2>(만 14세 이상)</h2>
            <button onClick={handleIndividual}>가입하기</button>
          </SelectOne>
          <div
            style={{ width: "1px", height: "500px", background: "#2C39B5" }}
          ></div>
          <SelectOne>
            <img src="/images/join/join_enterprise.svg" />
            <h1>기업회원</h1>
            <h2>(개인사업자, 법인사업자)</h2>
            <button onClick={handleEnterprise}>가입하기</button>
          </SelectOne>
        </SelectBox>
      </JoinLastPageStyle>
    </Layout>
  );
};

export default JoinSelectPage;
