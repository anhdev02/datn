import React from "react";
import { Link } from "react-router-dom";
import "../assets/scss/Error.scss";
import { useEffect } from "react";
const ErrorPage = () => {
  useEffect(() => {
    document.title = 'Lỗi không tìm thấy';
  }, [])
  return (
    <div className="error__page">
      <h1>Chức năng đang được phát triển</h1>
      <p className="zoom-area">Vui lòng quay lại sau!</p>
      <section className="error-container">
        <span className="four">
          <span className="screen-reader-text">4</span>
        </span>
        <span className="zero">
          <span className="screen-reader-text">0</span>
        </span>
        <span className="four">
          <span className="screen-reader-text">4</span>
        </span>
      </section>
      <div className="link-container">
        <Link to="/" className="more-link">
          Quay lại trang chủ
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
