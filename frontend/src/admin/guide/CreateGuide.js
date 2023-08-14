import React from "react";
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { useEffect } from "react";

const CreateGuide = () => {
  const [link, setLink] = useState();
  const [guideName, setGuideName] = useState();
  const [image, setImage] = useState();
  const [status, setStatus] = useState(true);
  const [imgSrc, setImgSrc] = useState("");

  useEffect(() => {
    document.title = 'Thêm mới hướng dẫn';
  }, []);
  const handleUploadfile = (e) => {
    const file = e.target.files[0];
    const timestamp = Date.now();
    const fileName = `${timestamp}-${file.name}`
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


  const handleCreateGuide = (event) => {
    event.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      name: guideName,
      image: image,
      link: link,
      status: status,
      trash: false,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://locknlock-dvxb.onrender.com/api/guide/add", requestOptions)
      .then((response) => {
        console.log(response.text())
        if(response.ok){
          console.log(response)
          toast.success("Tạo hướng dẫn thành công!", { position: "top-right" });
        }
        else
         toast.error("Tạo hướng dẫn không thành công!", { position: "top-right" });
      })
      .then((result) => {
        console.log(result)
      })
      .catch((error) => {
        console.log("error", error)
      });
      document.getElementById("create-guide-form").reset();


  };
  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <h4 className="fw-bold py-3 mb-4">Thêm hướng dẫn mới</h4>
      <div className="row">
        <div className="col-xl-12">
          <form id="create-guide-form" onSubmit={handleCreateGuide} encType="multipart/form-data">
            <div className="card mb-4">
              <div className="card-body">
                <div className="mb-3 row">
                  <label
                    htmlFor="html5-text-input"
                    className="col-md-2 col-form-label"
                  >
                    Tên hướng dẫn
                  </label>
                  <div className="col-md-10">
                    <input
                      className="form-control"
                      type="text"
                      id="html5-text-input"
                      required
                      onChange={(event) => setGuideName(event.target.value)}
                    />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label
                    htmlFor="html5-text-input"
                    className="col-md-2 col-form-label"
                  >
                    Link hướng dẫn
                  </label>
                  <div className="col-md-10">
                    <input
                      className="form-control"
                      type="text"
                      id="html5-text-input"
                      required
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
                  <div className="col-md-10">
                    <select
                      className="form-select"
                      id="exampleFormControlSelect1"
                      onChange={(event) => setStatus(event.target.value)}
                    >
                      <option selected value={true}>
                        Hiện
                      </option>
                      <option value={false}>Ẩn</option>
                    </select>
                  </div>
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
                    <input
                      className="form-control"
                      type="file"
                      onChange={handleUploadfile}
                      required
                      id="formFile"
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
                    <Link to="/dashboard/guide/list">
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
  )
}

export default CreateGuide