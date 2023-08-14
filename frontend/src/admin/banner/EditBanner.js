import React, { useEffect, useReducer, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useParams, useNavigate, Link } from "react-router-dom";

const EditBanner = () => {
  const navigate = useNavigate();
  const [banner, setBanner] = useState();
  const [image, setImage] = useState();
  const [imgSrc, setImgSrc] = useState("");
  const [reducerCategory, forceUpdate] = useReducer(x=>x+1, 0);
  var status;
  const { id } = useParams();
  var url = "https://locknlock-dvxb.onrender.com/api/banner/" + id;
  useEffect(() => {
    document.title = 'Chỉnh sửa banner';
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
      setBanner(data);
    })
    .catch((err) => console.log(err));
  }, [reducerCategory]);

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

  function GetStatus() {
    if (banner !== undefined) {
      if (banner.status === true) {
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
  const handleEditBanner = (event) => {
    event.preventDefault();
    if(status===undefined){
        status = banner.status
    }
    var urlPut = "https://locknlock-dvxb.onrender.com/api/banner/" + banner.id;
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      image: image!==undefined ? image : banner.image,
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
          toast.success("Sửa banner thành công!", { position: "top-right" });
          setTimeout(() => navigate("/dashboard/banner/list"), 1000);
        }else{
          console.log(response);
          toast.error("Sửa banner không thành công!", { position: "top-right" });
        }
      })
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
      forceUpdate();
  };
  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <h4 className="fw-bold py-3 mb-4">Chỉnh sửa banner</h4>
      <div className="row">
        <div className="col-xl-12">
          <form onSubmit={handleEditBanner}>
            {/* HTML5 Inputs */}
            <div className="card mb-4">
              <div className="card-body">
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
                      banner !== undefined && 
                        <img 
                      className="mb-1 img-thumbnail"
                      hidden={banner.image === null || imgSrc.length > 0 ? true : false}
                      src={"https://locknlock-d1171.web.app/assets/imgs/"+banner.image}
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
                  <div className="col-md-2"></div>
                  <div className="col-md-10">
                    <button
                      style={{ marginRight: "20px" }}
                      type="submit"
                      className="btn btn-success"
                    >
                      Lưu
                    </button>
                    <Link to="/dashboard/banner/list">
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
  )
}

export default EditBanner