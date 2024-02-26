import React, { useEffect, useMemo, useRef, useState } from "react";
import Layout from "../../layouts/Layout";
import {
  FreeRegisterMain,
  FreeRegisterPageStyle,
  GoToListBt,
} from "../../styles/free/FreeRegisterPageStyle";
import { FreeHeader } from "../../styles/free/FreePageStyle";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
// import "../../styles/free/freeimg.css"
import DOMPurify from "dompurify";
import { BtSection, CancelBt, SaveBt } from "../../styles/join/JoinPageStyle";
import { jwtAxios } from "../../util/jwtUtil";

const FreeRegisterPage = () => {
  // 페이지 이동
  const navigate = useNavigate()
  const MoveToList = () => {
    navigate(`/free`)
  }
  const handleCancel = () => {
    navigate(`/free`)
  }

  // react-quill
  const [value, setValue] = useState("");
  useEffect(() => {
    console.log(value);
  }, [value]);

  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [{ font: [] }],
        [{ align: [] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [{ list: "ordered" }, { list: "bullet" }, "link"],
        [
          {
            color: [],
          },
          { background: [] },
        ],
        ["image", "video"],
        ["clean"],
      ],
    },
  };

  return (
    <Layout>
      <FreeRegisterPageStyle>
        <FreeHeader>
          <p>자유게시판</p>
          <GoToListBt onClick={MoveToList}></GoToListBt>
        </FreeHeader>
        
        <FreeRegisterMain>
          <input placeholder="제목을 입력해주세요"/>
        <div>
        <ReactQuill onChange={setValue} modules={modules} style={{height:"500px"}} />
      </div>
      {/* <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(value) }} /> */}

    </FreeRegisterMain>
    
    <BtSection mgbtm="40px">
      <CancelBt onClick={handleCancel}>취소</CancelBt>
      <SaveBt>저장</SaveBt>
    </BtSection>
        
      </FreeRegisterPageStyle>
    </Layout>
  );
};

export default FreeRegisterPage;
