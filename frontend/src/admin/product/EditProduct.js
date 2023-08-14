import React, { useReducer } from "react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { useState } from "react";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate, useParams } from "react-router-dom";
const EditProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  var url = "https://locknlock-dvxb.onrender.com/api/product/" + id;
  var urlCat = "https://locknlock-dvxb.onrender.com/api/category/all";
  var urlBan = "https://locknlock-dvxb.onrender.com/api/banner/all";
  const [product, setProduct] = useState();
  const [category, setCategory] = useState();
  const [banner, setBanner] = useState([]);
  const [prdName, setPrdName] = useState();
  const [importPrice, setImportPrice] = useState();
  const [price, setPrice] = useState();
  const [sales, setSales] = useState();
  const [cat, setCat] = useState();
  const [bannerId, setBannerId] = useState();
  const [status, setStatus] = useState();
  const [imageDetail, setImageDetail] = useState();
  const [quantity, setQuantity] = useState();
  const [image, setImage] = useState();
  const [detail, setDetail] = useState();
  const [reducerCategory, forceUpdate] = useReducer(x=>x+1, 0);
  const [imgSrc, setImgSrc] = useState("");
  const [imgSrcDetail, setImgSrcDetail] = useState("");
  const [selectedImage, setSelectedImage] = useState(" ");
  const [hasSelectedImage, setHasSelectedImage] = useState(false);
  useEffect(() => {
    document.title = 'Chỉnh sửa sản phẩm';
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
      setProduct(data);
    })
    .catch((err) => console.log(err));
  }, [reducerCategory]);

  useEffect(() => {
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

  function GetStatus() {
    if (product !== undefined) {
      if (product.status === true) {
        return (
          <select
            className="form-select"
            id="exampleFormControlSelect1"
            aria-label="Default select example"
            onChange={(event) => setStatus(event.target.value) }
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
    setHasSelectedImage(true);
  };

  const handleEditProduct = (event) => {
    event.preventDefault();
    var urlPut = "https://locknlock-dvxb.onrender.com/api/product/" + product.id
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      productName: prdName!==undefined ? prdName: product.productName,
      categoryId: cat!==undefined ? cat: product.categoryId,
      bannerId: bannerId!==undefined ? bannerId : product.bannerId,
      image: image!==undefined ? image: product.image,
      importPrice: importPrice!==undefined ? importPrice*1000: product.importPrice,
      price: price!==undefined ? price*1000: product.price,
      sale: sales!==undefined ? sales: product.sale,
      status: status!==undefined ? status: product.status,
      trash: false,
      detailImage: imageDetail!==undefined ? imageDetail: product.detailImage,
      detail: detail,
      quantity: quantity!==undefined ? quantity: product.quantity,
      favoriteCount: product.favoriteCount
    });

    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(urlPut, requestOptions)
      .then((response) => {
        response.text()
        if(response.ok){
          toast.success("Sửa sản phẩm thành công!", { position: "top-right" });
          setTimeout(() =>navigate("/dashboard/product/list"),1000);
        }else{
          toast.error("Sửa sản phẩm không thành công!", { position: "top-right" });
        }
      })
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
      forceUpdate();
  };
  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <h4 className="fw-bold py-3 mb-4">Chỉnh sửa sản phẩm mới</h4>
      <div className="row">
        <div className="col-xl-12">
          <form onSubmit={handleEditProduct} encType="multipart/form-data">
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
                      defaultValue={product ? product.productName : ""}
                      id="html5-text-input"
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
                        defaultValue={product ? product.importPrice/1000 : ""}
                        placeholder={100}
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
                        defaultValue={product ? product.price/1000 : ""}
                        placeholder={100}
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
                    Số lượng sản phẩm
                  </label>
                  <div className="col-md-10">
                    <input
                      className="form-control"
                      type="text"
                      defaultValue={product ? product.quantity : ""}
                      id="html5-text-input"
                      onChange={(event) => setQuantity(event.target.value)}
                    />
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
                        defaultValue={product && product.sale }
                        onChange={(event) => setSales(event.target.value)}
                      />
                      <span className="input-group-text">%</span>
                    </div>
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
                      onChange={(event) => setCat(event.target.value)}
                    >
                      {category &&
                        category.map((item) => {
                          if(product !== undefined &&product.categoryId===item.id){
                            return (
                              <option selected value={item.id}>{item.categoryName}</option>
                            );
                          }else{
                            return (
                              <option value={item.id}>{item.categoryName}</option>
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
                    Banner
                  </label>
                  <div className="col-md-10">
                    <img height={100} hidden={selectedImage === " " ? true : false} src={ selectedImage} alt=""/>
                    {
                      banner.map((item) => {
                        if (product !== undefined && product.bannerId===item.id) {
                          return (
                            <img height={100} hidden={product.bannerId === 0 || (selectedImage === " " && hasSelectedImage) || selectedImage !== " " ? true : false} src={"https://locknlock-d1171.web.app/assets/imgs/"+item.image} alt="" />
                          );
                        }
                      })
                    }
                    <select
                      className="form-select"
                      id="exampleFormControlSelect2"
                      onChange={handleBannerChange}
                    >
                      <option selected={product !== undefined && product.bannerId===0 ? true : false} value={0} data-src=" ">Không có banner</option>
                      {banner &&
                        banner.map((item, index) => {
                          if (product !== undefined &&product.bannerId===item.id) {
                            return (
                              <option selected key={index} value={item.id} data-src={`https://locknlock-d1171.web.app/assets/imgs/${item.image}`}>
                                {item.id}
                              </option>
                            );
                          } else {
                            return (
                              <option key={item.id} value={item.id} data-src={`https://locknlock-d1171.web.app/assets/imgs/${item.image}`}>
                                {item.id}
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
                    Trạng thái
                  </label>
                  <div className="col-md-10">
                   {GetStatus()}
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
                      product !== undefined ? 
                        <img 
                      className="mb-1 img-thumbnail"
                      hidden={imgSrc.length > 0 ? true : false}
                      src={"https://locknlock-d1171.web.app/assets/imgs/"+product.image}
                      style={{height:100}}
                      alt="upload file"></img>: ""
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
                    {
                      product !== undefined && product.detailImage != null  ? 
                      <img 
                      className="mb-1 img-thumbnail"
                      hidden={imgSrcDetail.length > 0 || product.detailImage === null ? true : false}
                      src={"https://locknlock-d1171.web.app/assets/imgs/"+product.detailImage}
                      style={{width:100}}
                      alt="upload file"></img>: ""
                    }
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
                    <CKEditor
                      editor={ClassicEditor}
                      data={product!==undefined ? product.detail: detail}
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
            {/* File input */}
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default EditProduct;
