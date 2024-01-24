import React from "react";
import { Breadcrumb } from "antd";
import { Link, useLocation } from "react-router-dom";

const MyBreadcrumb = () => {
  const location = useLocation();
  const separator = " > ";

  const breadcrumbContainerStyle = {
    maxWidth: "1260px",
    margin: "0 auto",
  };

  const breadcrumbStyle = {
    display: "inline-block",
  };

  const renderBreadcrumb = () => {
    const pathnames = location.pathname.split("/").filter(item => item !== "");
    const breadcrumbItems = pathnames.map((pathname, index) => {
      const url = `/${pathnames.slice(0, index + 1).join("/")}`;
      const isLast = index === pathnames.length - 1;
      let label = pathname;

      if (pathname === "my") {
        label = "마이 페이지";
      } else if (pathname === "details") {
        label = "상세 페이지";
      }

      return (
        <Breadcrumb.Item key={url}>
          {isLast ? label : <Link to={url}>{label}</Link>}
        </Breadcrumb.Item>
      );
    });

    const isHomePath = location.pathname === "/";
    return (
      <div style={breadcrumbContainerStyle}>
        <Breadcrumb separator={separator} style={breadcrumbStyle}>
          {isHomePath ? null : (
            <Breadcrumb.Item>
              <Link to="/">홈</Link>
            </Breadcrumb.Item>
          )}
          {breadcrumbItems}
        </Breadcrumb>
      </div>
    );
  };

  return renderBreadcrumb();
};

export default MyBreadcrumb;
