import React, { useState } from "react";
import { Upload, message } from "antd";
import ImgCrop from "antd-img-crop";
import "../../styles/imageUpload.css";

const ImageUpload = () => {
  const [fileList, setFileList] = useState([ {
    uid: "-1",
    name: "image.png",
    status: "done",
    url: "",
  },]);

  const checkFileSize = (file) => {
    const maxSize = 5 * 1024 * 1024; // 5MB

    if (file.size > maxSize) {
      // 파일 크기가 초과하면 에러 메시지를 표시하고 업로드를 중단
      console.error("File size exceeds 5MB limit.");
      return false;
    }

    return true;
  };


  const checkFileExtension = (file) => {
    const allowedExtensions = ["image/jpeg", "image/png"]; // 허용할 파일 확장자

    if (!allowedExtensions.includes(file.type)) {
      // 허용되지 않는 파일 확장자일 경우 에러 메시지 출력
      message.error("이미지 파일만 업로드 가능합니다.");
      return false;
    }

    return true;
  };

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const beforeUpload = (file) => {
    return checkFileExtension(file);
  };

  const onPreview = async (file) => {
    if (file.url) {
      const imgWindow = window.open(file.url);
      imgWindow?.document.write(`<img src="${file.url}" alt="${file.name}" />`);
    }
  };

  return (
    <ImgCrop>
      <Upload
        action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
        listType="picture-card"
        fileList={fileList}
        onChange={onChange}
        onPreview={onPreview}
        beforeUpload={beforeUpload}
        style={{ display: "flex", width: "966px", height: "200px" }}
      >
        {fileList.length < 10 && "+ Upload"}
      </Upload>
    </ImgCrop>
  );
};

export default ImageUpload;
