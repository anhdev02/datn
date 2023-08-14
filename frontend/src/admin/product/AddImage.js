import React, { useEffect } from "react";
import { useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const AddImage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [image01, setImage01] = useState();
  const [imgSrc01, setImgSrc01] = useState("");
  const [image02, setImage02] = useState();
  const [imgSrc02, setImgSrc02] = useState("");
  const [image03, setImage03] = useState();
  const [imgSrc03, setImgSrc03] = useState("");

  useEffect(() => {
    document.title = 'Thêm ảnh vào sản phẩm';
  }, []);

  const handleUploadfile01 = (e) => {
    const file = e.target.files[0];
    const timestamp = Date.now();
    const fileName = `${timestamp}-${file.name}`;
    setImage01(fileName);
    if (
      file.type === "image/jpeg" ||
      file.type === "image/jpg" ||
      file.type === "image/gif" ||
      file.type === "image/png"
    )
      setImgSrc01(URL.createObjectURL(file));

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
  const handleUploadfile02 = (e) => {
    const file = e.target.files[0];
    const timestamp = Date.now();
    const fileName = `${timestamp}-${file.name}`;
    setImage02(fileName);
    if (
      file.type === "image/jpeg" ||
      file.type === "image/jpg" ||
      file.type === "image/gif" ||
      file.type === "image/png"
    )
      setImgSrc02(URL.createObjectURL(file));

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
  const handleUploadfile03 = (e) => {
    const file = e.target.files[0];
    const timestamp = Date.now();
    const fileName = `${timestamp}-${file.name}`;
    setImage03(fileName);
    if (
      file.type === "image/jpeg" ||
      file.type === "image/jpg" ||
      file.type === "image/gif" ||
      file.type === "image/png"
    )
      setImgSrc03(URL.createObjectURL(file));

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

  const handleAddImageToProduct = (event) => {
    event.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify([
      {
        productId: id,
        image: image01,
      },
      {
        productId: id,
        image: image02,
      },
      {
        productId: id,
        image: image03,
      },
    ]);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://locknlock-dvxb.onrender.com/api/image/add-multiple", requestOptions)
      .then((response) => {
        console.log(response.text())
        if(response.ok){
          toast.success("Thêm hình ảnh thành công!", { position: "top-right" });
          setTimeout(() =>navigate("/dashboard/product/list"),1000);
        }
        else
         toast.error("Thêm hình ảnh không thành công!", { position: "top-right" });
      })
      .then((result) => {
        console.log(result)
      })
      .catch((error) => {
        console.log("error", error)
      });
  };
  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <h4 className="fw-bold py-3 mb-4">Thêm ảnh cho sản phẩm {id}</h4>
      <div className="row">
        <div className="col-xl-12">
          <form
            id="create-product-form"
            onSubmit={handleAddImageToProduct}
            encType="multipart/form-data"
          >
            <div className="card mb-4">
              <div className="card-body">
                <div className="mb-3 row">
                  <label
                    htmlFor="exampleFormControlSelect1"
                    className="col-md-2 col-form-label"
                  >
                    Hình ảnh 1
                  </label>
                  <div className="col-md-10">
                    <img
                      className="mb-1 img-thumbnail"
                      hidden={imgSrc01.length > 0 ? false : true}
                      src={imgSrc01}
                      style={{ height: 100 }}
                      alt="upload file"
                    ></img>
                    <input
                      className="form-control"
                      type="file"
                      onChange={handleUploadfile01}
                      required
                      id="formFile"
                    />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label
                    htmlFor="exampleFormControlSelect1"
                    className="col-md-2 col-form-label"
                  >
                    Hình ảnh 2
                  </label>
                  <div className="col-md-10">
                    <img
                      className="mb-1 img-thumbnail"
                      hidden={imgSrc02.length > 0 ? false : true}
                      src={imgSrc02}
                      style={{ height: 100 }}
                      alt="upload file"
                    ></img>
                    <input
                      className="form-control"
                      type="file"
                      onChange={handleUploadfile02}
                      required
                      id="formFile"
                    />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label
                    htmlFor="exampleFormControlSelect1"
                    className="col-md-2 col-form-label"
                  >
                    Hình ảnh 3
                  </label>
                  <div className="col-md-10">
                    <img
                      className="mb-1 img-thumbnail"
                      hidden={imgSrc03.length > 0 ? false : true}
                      src={imgSrc03}
                      style={{ height: 100 }}
                      alt="upload file"
                    ></img>
                    <input
                      className="form-control"
                      type="file"
                      onChange={handleUploadfile03}
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
                    <Link to="/dashboard/product/list">
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

export default AddImage;
