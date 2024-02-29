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
import { postFreeData } from "../../api/free/free_api";

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

  // 1. React Quill 태그 를 저장한다.
  const quillRef = useRef(null);
  // 2. 이미지 핸들링
  const imageHandler = () => {
    // 1. 에디터를 저장한다.
    const editor = quillRef.current.getEditor();
    // 2. 이미지 업로드를 위한 트릭
    //   image를 저장할 html 태그를 즉시 생성한다.
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click(); // 강제클릭
    // 이미지 선택을 한다면 처리를 진행한다.
    input.addEventListener("change", () => {
      // console.log("파일체인지");
      try {
        // 일반적인 파일 처리과정을 진행한다.

        // 백엔드 이미지 서버로 전송해서 이미지 경로 받아야 합니다.
        // 1. 화면에 이미지를 보여주기 전에
        // 2. 백엔드로 이미지를 전송한다.
        // 3. 전송이 완료되면 결과를 리턴 받는다.
        // 4. 결과에는 무엇이 담겨지는가 하면
        // 5. 이미지의 경로와 이미지의 파일명이 문자열로 들어온다.

        const file = input.files[0];
        // console.log(file);
        const formData = new FormData();
        formData.append("pics", file);
        const header = { headers: { "Content-Type": "multipart/form-data" } };
        const res = jwtAxios.post("백엔드와 협의한 주소", formData, header);
        // const res = jwtAxios.post(`/api/board/image-upload?iboard=${newIBoard}`,, formData, header);
        // res.data ====> /board/1048/e75629d1-3e06-496a-86f4-11da4a38a4b5.png
        // 서버주소 : http://192.168.0.144:5223/pic
        const imgUrl = "서버주소" + res.data;
        console.log("서버로 이미지 전송 axio 실행");
        // 에디터에 이미지 배치하기
        // 현재 에디터에 마우스 커서가 깜빡거리는 위치를 알아낸다.
        const range = editor.getSelection();
        // html 태그 img 생성한다. 그리고, 추가한다.
        editor.insertEmbed(range.index, "image", imgUrl);
        // 강제로 마우스 커서 위치를 다음으로 이동한다.
        editor.setSelection(range.index + 1);
      } catch (err) {
        console.log("err");
      }
    });
  };

  const [value, setValue] = useState("");
  useEffect(() => {
    console.log(value);
  }, [value]);

  const modules = useMemo(
    () =>({
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
      handlers: {image:imageHandler},
    },
  }),
  [],
  );

  // 데이터 연동(게시글 등록)
  const handleSubmitBoard = async() => {
    const formData = new FormData();
    const dto = new Blob(
      [
        JSON.stringify({
          title: title,
          contents: value
        }),
      ],
      {type: "application/json"},
    );
    formData.append("dto", dto);
    try {
      postFreeData({obj: formData});
      navigate('/free/details')
    } catch (error) {
      console.log(error)
    }
  }

  const [title, setTitle] = useState("")
  // const [contents, setContents] = useState("")
  const handleChangeTitle = e => {
    setTitle(e.target.value)
  }
  // const handleChangeContents = e => {
  //   setContents(e.target.value)
  // }

  return (
    <Layout>
      <FreeRegisterPageStyle>
        <FreeHeader>
          <p>자유게시판</p>
          <GoToListBt onClick={MoveToList}></GoToListBt>
        </FreeHeader>
        
        <FreeRegisterMain>
          <input placeholder="제목을 입력해주세요" onChange={handleChangeTitle}/>
        <div>
        <ReactQuill ref={quillRef} onChange={setValue} modules={modules} style={{height:"500px"}} />
      </div>
      {/* <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(value) }} /> */}

    </FreeRegisterMain>
    
    <BtSection mgbtm="40px">
      <CancelBt onClick={handleCancel}>취소</CancelBt>
      <SaveBt onClick={handleSubmitBoard}>저장</SaveBt>
    </BtSection>
        
      </FreeRegisterPageStyle>
    </Layout>
  );
};

export default FreeRegisterPage;
