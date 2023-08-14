import React from "react";
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";


const CreateProduct = () => {
  var urlCat = "https://locknlock-dvxb.onrender.com/api/category/all";
  var urlBan = "https://locknlock-dvxb.onrender.com/api/banner/all";
  const API_URL = "https://noteyard-backend.herokuapp.com";
  const UPLOAD_ENDPOINT = "api/blogs/uploadImg";
  const [category, setCategory] = useState();
  const [banner, setBanner] = useState([]);
  const [prdName, setPrdName] = useState();
  const [catid, setCatId] = useState();
  const [bannerId, setBannerId] = useState(0);
  const [image, setImage] = useState();
  const [imageDetail, setImageDetail] = useState(null);
  const [importPrice, setImportPrice] = useState();
  const [price, setPrice] = useState();
  const [sales, setSales] = useState();
  const [status, setStatus] = useState(true);
  const [detail, setDetail] = useState();
  const [quantity, setQuantity] = useState();
  const [imgSrc, setImgSrc] = useState("");
  const [imgSrcDetail, setImgSrcDetail] = useState("");
  const [selectedImage, setSelectedImage] = useState(" ");
  useEffect(() => {
    document.title = 'Thêm mới sản phẩm';
    fetch(urlCat)
    .then((res) => res.json())
    .then((data) => {
      setCategory(data);
    })
    .catch((err) => console.log(err));
    fetch(urlBan)
    .then((res) => res.json())
    .then((data) => {
      setBanner(data);
    })
    .catch((err) => console.log(err));
  }, []);

  const handleChange = (e, editor) => {
    const data = editor.getData();
    setDetail(data);
  };
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
  const handleUploadfileDetail = (e) => {
    const file = e.target.files[0];
    const timestamp = Date.now();
    const fileName = `${timestamp}-${file.name}`
    console.log(fileName)
    setImageDetail(fileName);
    if (
      file.type === "image/jpeg" ||
      file.type === "image/jpg" ||
      file.type === "image/gif" ||
      file.type === "image/png"
    )
      setImgSrcDetail(URL.createObjectURL(file));

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

  const handleBannerChange = (event) => {
    setBannerId(event.target.value);
    setSelectedImage(event.target.selectedOptions[0].getAttribute('data-src'));
  };

  const handleCreateProduct = (event) => {
    event.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      productName: prdName,
      categoryId: catid === undefined ? category[0].id : catid,
      bannerId: bannerId,
      image: image,
      importPrice: importPrice*1000,
      price: price*1000,
      sale: sales,
      status: status,
      trash: false,
      detailImage: imageDetail,
      detail: detail,
      quantity: quantity,
      favoriteCount: 0
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://locknlock-dvxb.onrender.com/api/product/add", requestOptions)
      .then((response) => {
        console.log(response.text())
        if(response.ok){
          console.log(response)
          toast.success("Tạo sản phẩm thành công!", { position: "top-right" });
        }
        else
         toast.error("Tạo sản phẩm không thành công!", { position: "top-right" });
      })
      .then((result) => {
        console.log(result)
      })
      .catch((error) => {
        console.log("error", error)
      });
      document.getElementById("create-product-form").reset();


  };
  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <h4 className="fw-bold py-3 mb-4">Thêm sản phẩm mới</h4>
      <div className="row">
        <div className="col-xl-12">
          <form id="create-product-form" onSubmit={handleCreateProduct} encType="multipart/form-data">
            {/* HTML5 Inputs */}
            <div className="card mb-4">
              <div className="card-body">
                <div className="mb-3 row">
                  <label
                    htmlFor="html5-text-input"
                    className="col-md-2 col-form-label"
                  >
                    Tên sản phẩm
                  </label>
                  <div className="col-md-10">
                    <input
                      className="form-control"
                      type="text"
                      id="html5-text-input"
                      required
                      onChange={(event) => setPrdName(event.target.value)}
                    />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label
                    htmlFor="html5-text-input"
                    className="col-md-2 col-form-label"
                  >
                    Giá nhập
                  </label>
                  <div className="col-md-10">
                    <div className="input-group input-group-merge">
                      <span className="input-group-text">VNĐ</span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder={100}
                        required
                        onChange={(event) => setImportPrice(event.target.value)}
                      />
                      <span className="input-group-text">.000</span>
                    </div>
                  </div>
                </div>
                <div className="mb-3 row">
                  <label
                    htmlFor="html5-text-input"
                    className="col-md-2 col-form-label"
                  >
                    Giá bán
                  </label>
                  <div className="col-md-10">
                    <div className="input-group input-group-merge">
                      <span className="input-group-text">VNĐ</span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder={100}
                        required
                        onChange={(event) => setPrice(event.target.value)}
                      />
                      <span className="input-group-text">.000</span>
                    </div>
                  </div>
                </div>
                <div className="mb-3 row">
                  <label
                    htmlFor="html5-text-input"
                    className="col-md-2 col-form-label"
                  >
                    Giảm giá
                  </label>
                  <div className="col-md-10">
                    <div className="input-group input-group-merge">
                      <input
                        type="text"
                        className="form-control"
                        placeholder={25}
                        required
                        onChange={(event) => setSales(event.target.value)}
                      />
                      <span className="input-group-text">%</span>
                    </div>
                  </div>
                </div>
                <div className="mb-3 row">
                  <label
                    htmlFor="html5-text-input"
                    className="col-md-2 col-form-label"
                  >
                    Số lượng
                  </label>
                  <div className="col-md-10">
                    <input
                      className="form-control"
                      type="text"
                      id="html5-text-input"
                      required
                      onChange={(event) => setQuantity(event.target.value)}
                    />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label
                    htmlFor="exampleFormControlSelect1"
                    className="col-md-2 col-form-label"
                  >
                    Loại danh mục
                  </label>
                  <div className="col-md-10">
                    <select
                      className="form-select"
                      id="exampleFormControlSelect1"
                      onChange={(event) => setCatId(event.target.value)}
                    >
                      {category &&
                        category.map((item) => {
                          return (
                            <option value={item.id}>
                              {item.categoryName}
                            </option>
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
                    Banner
                  </label>
                  <div className="col-md-10">
                    {
                      <img height={100} hidden={selectedImage === " " ? true : false} src={ selectedImage } alt=""/>
                    }
                    <select
                      className="form-select"
                      id="exampleFormControlSelect2"
                      onChange={handleBannerChange}
                    >
                      <option selected value={0} data-src=" ">Không có banner</option>
                      {banner &&
                        banner.map((item, index) => {
                            return (
                              <option key={index} value={item.id} data-src={`https://locknlock-d1171.web.app/assets/imgs/${item.image}`}>
                                {item.id}
                              </option>
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
                  <label
                    htmlFor="exampleFormControlSelect1"
                    className="col-md-2 col-form-label"
                  >
                    Mô tả(hình ảnh)
                  </label>
                  <div className="col-md-10">
                    <img
                      className="mb-1 img-thumbnail"
                      hidden={imgSrcDetail.length > 0 ? false : true}
                      src={imgSrcDetail}
                      style={{ width: 100 }}
                      alt="upload file"
                    ></img>
                    <input
                      className="form-control"
                      type="file"
                      onChange={handleUploadfileDetail}
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
                    {/* <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} /> */}
                    <CKEditor
                      editor={ClassicEditor}
                      data={detail}
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

export default CreateProduct;
