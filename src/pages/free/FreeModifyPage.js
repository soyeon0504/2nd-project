import React, { useEffect, useState } from "react";
import Layout from "../../layouts/Layout";
import { FreeRegisterMain, FreeRegisterPageStyle, GoToListBt } from "../../styles/free/FreeRegisterPageStyle";
import { FreeHeader } from "../../styles/free/FreePageStyle";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { BtSection, CancelBt, SaveBt } from "../../styles/join/JoinPageStyle";
import { useNavigate } from "react-router-dom";

const FreeModifyPage = () => {
  // 페이지 이동
  const navigate = useNavigate();
  const MoveToList = () => {
    navigate(`/free`);
  };
  const handleCancel = () => {
    navigate(`/free`);
  };
  const handleSave = () => {
    navigate(`/free/details`)
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
        [
          { align: "justify" },
          { align: "" },
          { align: "center" },
          { align: "right" },
        ],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [{ list: "ordered" }, { list: "bullet" }, "link"],
        [
          {
            color: [],
          },
          { background: [] },
        ],
        ["image",],
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
          <input placeholder="제목을 입력해주세요" />
          <div>
            <ReactQuill
              onChange={setValue}
              modules={modules}
              style={{ height: "500px" }}
            />
          </div>
          {/* <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(value) }} /> */}
        </FreeRegisterMain>

        <BtSection mgbtm="40px">
          <CancelBt onClick={handleCancel}>취소</CancelBt>
          <SaveBt onClick={handleSave}>저장</SaveBt>
        </BtSection>
      </FreeRegisterPageStyle>
    </Layout>
  );
};

export default FreeModifyPage;
