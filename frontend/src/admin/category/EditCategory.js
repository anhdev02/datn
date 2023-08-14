import React, { useEffect, useReducer, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useParams, useNavigate, Link } from "react-router-dom";

const EditCategory = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState();
  const [cat, setCat] = useState();
  const [image, setImage] = useState();
  const [imgSrc, setImgSrc] = useState("");
  const [reducerCategory, forceUpdate] = useReducer(x=>x+1, 0);
  var catName, parent, status;
  const { id } = useParams();
  var url = "https://locknlock-dvxb.onrender.com/api/category/" + id;
  var urlcat = "https://locknlock-dvxb.onrender.com/api/category/all";
  useEffect(() => {
    document.title = 'Chỉnh sửa danh mục';
      axios
      .get(url)
      .then((res) => {
          setCat(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, [reducerCategory]);
  useEffect(() => {
    axios
      .get(urlcat)
      .then((res) => {
        setCategory(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
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
  function GetRoot() {
    if (cat !== undefined) {
      if (cat.parent === 0) {
        return (
          <option selected value={0}>
            Danh mục gốc
          </option>
        );
      } else {
        return <option value={0}>Danh mục gốc</option>;
      }
    }
  }
  function GetStatus() {
    if (cat !== undefined) {
      if (cat.status === true) {
        return (
          <select
            className="form-select"
            id="exampleFormControlSelect1"
            aria-label="Default select example"
            onChange={(event) => status = event.target.value}
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
            onChange={(event) => status  = event.target.value}
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
  const handleEditCat = (event) => {
    event.preventDefault();
    if(catName===undefined){
        catName = cat.categoryName
    }
    if(parent===undefined){
        parent = cat.parent
    }
    if(status===undefined){
        status = cat.status
    }
    var urlPut = "https://locknlock-dvxb.onrender.com/api/category/" + cat.id;
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      categoryName: catName,
      image: image!==undefined ? image : cat.image,
      parent: parent,
      status: status,
      trash: false,
    });

    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(urlPut, requestOptions)
      .then((response) => {
        if(response.ok){
          toast.success("Sửa danh mục thành công!", { position: "top-right" });
          setTimeout(() => navigate("/dashboard/category/list"), 1000);
        }else{
          toast.error("Sửa danh mục không thành công!", { position: "top-right" });
        }
      })
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
      forceUpdate();
  };
  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <h4 className="fw-bold py-3 mb-4">Chỉnh sửa danh mục</h4>
      <div className="row">
        <div className="col-xl-12">
          <form onSubmit={handleEditCat}>
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
                      defaultValue={cat ? cat.categoryName : ""}
                      id="html5-text-input"
                      required
                      onChange={(event) => catName = event.target.value}
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
                      aria-label="Default select example"
                      onChange={(event) => parent = event.target.value}
                    >
                      {GetRoot()}

                      {category &&
                        category.map((item) => {
                          if (cat !== undefined && cat.parent === item.id) {
                            return (
                              <option selected value={item.id}>
                                {item.categoryName}
                              </option>
                            );
                          } else {
                            return (
                              <option value={item.id}>
                                {item.categoryName}
                              </option>
                            );
                          }
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
                    {
                      cat !== undefined && 
                        <img 
                      className="mb-1 img-thumbnail"
                      hidden={cat.image === null || imgSrc.length > 0 ? true : false}
                      src={"https://locknlock-d1171.web.app/assets/imgs/"+cat.image}
                      style={{height:100}}
                      alt="upload file"></img>
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
                    Trạng thái
                  </label>
                  <div className="col-md-10">{GetStatus()}</div>
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

export default EditCategory;
