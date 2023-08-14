import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";


const CreateCategory = () => {
  var url = "https://locknlock-dvxb.onrender.com/api/category/all"
  const [category, setCategory] = useState();
  const [catName, setCatName] = useState();
  const [parent, setParent] = useState(0);
  const [status, setStatus] = useState(1);
  const [image, setImage] = useState(null);
  const [imgSrc, setImgSrc] = useState("");

  useEffect(()=>{
    document.title = 'Thêm mới danh mục';
    axios.get(url)
    .then(res=>{
      setCategory(res.data)
    })
    .catch(err=>{
      console.log(err)
    })
  },[]);

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
  
  const handleCreateCat = (e) => {
    e.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      categoryName: catName,
      image: image,
      parent: parent,
      status: status,
      trash: false,
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://locknlock-dvxb.onrender.com/api/category/add", requestOptions)
      .then((response) => {
        if(response.ok){
          toast.success("Tạo danh mục thành công!", { position: "top-right" });
        }else{
          toast.error("Tạo danh mục không thành công!", { position: "top-right" });
        }
        response.text();
      })
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
      document.getElementById("create-category-form").reset();

  };
  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <h4 className="fw-bold py-3 mb-4">Thêm danh mục sản phẩm mới</h4>
      <div className="row">
        <div className="col-xl-12">
          <form id="create-category-form" onSubmit={handleCreateCat}>
            {/* HTML5 Inputs */}
            <div className="card mb-4">
              <div className="card-body">
                <div className="mb-3 row">
                  <label
                    htmlFor="html5-text-input"
                    className="col-md-2 col-form-label"
                  >
                    Tên danh mục
                  </label>
                  <div className="col-md-10">
                    <input
                      className="form-control"
                      type="text"
                      name="categoryName"
                      id="categoryName"
                      required 
                      onChange={(event) => setCatName(event.target.value)}
                    />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label
                    htmlFor="exampleFormControlSelect1"
                    className="col-md-2 col-form-label"
                  >
                    Danh mục cha
                  </label>
                  <div className="col-md-10">
                    <select
                      className="form-select"
                      id="exampleFormControlSelect1"
                      name="parent"
                      aria-label="Default select example"
                      onChange={(event) => setParent(event.target.value)}
                    >
                      <option selected value={0}>
                        Danh mục gốc
                      </option>
                      {category &&
                        category.map((item) => {
                          return (
                            <option value={item.id}>{item.categoryName}</option>
                          );
                        })}
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
                      id="formFile"
                      name="image"
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
                      name="status"
                      aria-label="Default select example"
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
                  <div className="col-md-2"></div>
                  <div className="col-md-10">
                    <button
                      style={{ marginRight: "20px"   }}
                      type="submit"
                      className="btn btn-success"
                    >
                      Lưu
                    </button>
                    <Link to="/dashboard/category/list">
                      <button type="button" class="btn btn-dark">
                        Hủy
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* File input */}
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default CreateCategory;
