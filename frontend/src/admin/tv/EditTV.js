import React from "react";
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { useEffect } from "react";

const EditTV = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [tv, setTV] = useState();
  const [link, setLink] = useState();
  const [tvName, setTVName] = useState();
  const [image, setImage] = useState();
  const [status, setStatus] = useState(true);
  const [detail, setDetail] = useState();
  const [imgSrc, setImgSrc] = useState("");

  useEffect(() => {
    document.title = 'Chỉnh sửa LocknLockTV';
    fetch(`https://locknlock-dvxb.onrender.com/api/tv/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTV(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (e, editor) => {
    const data = editor.getData();
    setDetail(data);
  };

  function GetStatus() {
    if (tv !== undefined) {
      if (tv.status === true) {
        return (
          <select
            className="form-select"
            id="exampleFormControlSelect1"
            aria-label="Default select example"
            onChange={(event) => setStatus(event.target.value)}
          >
            <option selected value={true}>
              Hiện
            </option>
            <option value={false}>Ẩn</option>
          </select>
        );
      } else {
        return (
          <select
            className="form-select"
            id="exampleFormControlSelect1"
            aria-label="Default select example"
            onChange={(event) => setStatus(event.target.value)}
          >
            <option value={true}>Hiện</option>
            <option selected value={false}>
              Ẩn
            </option>
          </select>
        );
      }
    }
  }
  const handleUploadfile = (e) => {
    const file = e.target.files[0];
    const timestamp = Date.now();
    const fileName = `${timestamp}-${file.name}`;
    setImage(fileName);
    if (
      file.type === "image/jpeg" ||
      file.type === "image/jpg" ||
      file.type === "image/gif" ||
      file.type === "image/png"
    )
      setImgSrc(URL.createObjectURL(file));

    var formdata = new FormData();
    formdata.append("file", file, fileName);
    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch("https://locknlock-dvxb.onrender.com/api/product/upload-file", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  const handleEditTV = (event) => {
    event.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      name: tvName !== undefined ? tvName : tv.name,
      image: image !== undefined ? image : tv.image,
      link: link !== undefined ? link : tv.link,
      details: detail,
      status: status !== undefined ? status : tv.status,
      trash: false,
    });

    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`https://locknlock-dvxb.onrender.com/api/tv/${tv.id}`, requestOptions)
      .then((response) => {
        console.log(response.text());
        if (response.ok) {
          console.log(response);
          toast.success("Sửa LocknLockTV thành công!", { position: "top-right" });
          setTimeout(() => navigate("/dashboard/tv/list"), 1000);
        } else
          toast.error("Sửa LocknLockTV không thành công!", {
            position: "top-right",
          });
      })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <h4 className="fw-bold py-3 mb-4">Sửa LocknLockTV</h4>
      <div className="row">
        <div className="col-xl-12">
          <form onSubmit={handleEditTV} encType="multipart/form-data">
            <div className="card mb-4">
              <div className="card-body">
                <div className="mb-3 row">
                  <label
                    htmlFor="html5-text-input"
                    className="col-md-2 col-form-label"
                  >
                    Tên LocknLockTV
                  </label>
                  <div className="col-md-10">
                    <input
                      className="form-control"
                      type="text"
                      id="html5-text-input"
                      defaultValue={tv && tv.name}
                      onChange={(event) => setTVName(event.target.value)}
                    />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label
                    htmlFor="html5-text-input"
                    className="col-md-2 col-form-label"
                  >
                    Link video
                  </label>
                  <div className="col-md-10">
                    <input
                      className="form-control"
                      type="text"
                      id="html5-text-input"
                      defaultValue={tv && tv.link}
                      onChange={(event) => setLink(event.target.value)}
                    />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label
                    htmlFor="exampleFormControlSelect1"
                    className="col-md-2 col-form-label"
                  >
                    Trạng thái
                  </label>
                  <div className="col-md-10">{GetStatus()}</div>
                </div>
                <div className="mb-3 row">
                  <label
                    htmlFor="exampleFormControlSelect1"
                    className="col-md-2 col-form-label"
                  >
                    Hình ảnh
                  </label>
                  <div className="col-md-10">
                    <img
                      className="mb-1 img-thumbnail"
                      hidden={imgSrc.length > 0 ? false : true}
                      src={imgSrc}
                      style={{ height: 100 }}
                      alt="upload file"
                    ></img>
                    {
                        tv !== undefined && 
                        <img
                        className="mb-1 img-thumbnail"
                        hidden={imgSrc.length > 0 ? true : false}
                        src={"https://locknlock-d1171.web.app/assets/imgs/" + tv.image}
                        style={{ height: 100 }}
                        alt="upload file"
                        ></img>
                    }
                    <input
                      className="form-control"
                      type="file"
                      onChange={handleUploadfile}
                      id="formFile"
                    />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label
                    htmlFor="exampleFormControlSelect1"
                    className="col-md-2 col-form-label"
                  >
                    Mô tả
                  </label>
                  <div className="col-md-10">
                    <CKEditor
                      editor={ClassicEditor}
                      data={tv!==undefined && tv.details !== null ? tv.details : detail}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="mb-3 row">
                  <div className="col-md-2"></div>
                  <div className="col-md-10">
                    <button
                      style={{ marginRight: "20px" }}
                      type="submit"
                      className="btn btn-success"
                    >
                      Lưu
                    </button>
                    <Link to="/dashboard/tv/list">
                      <button type="button" class="btn btn-dark">
                        Hủy
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default EditTV;
