import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { AddCart } from "../../store/action/cart";
import { store } from "../../store/store";

const formatter = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
  minimumFractionDigits: 0,
});

const ProductDetailRes = (props) => {
  const [product, setProduct] = useState({});
  const addToViewedProducts = (product) => {
    const viewedProducts =
      JSON.parse(localStorage.getItem("viewedProducts")) || [];
    const isProductViewed = viewedProducts.some(
      (viewedProduct) => viewedProduct.id === product.id
    );
    if (isProductViewed) {
      return;
    }
    const updatedViewedProducts = [product, ...viewedProducts.slice(0, 23)];
    localStorage.setItem(
      "viewedProducts",
      JSON.stringify(updatedViewedProducts)
    );
  };

  useEffect(() => {
    fetch(`https://locknlock-dvxb.onrender.com/api/product/${props.id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        addToViewedProducts(data);
      })
      .catch((error) => console.error(error));
  }, [props.id]);

  function addToCartClickHandle(e, id, name, image, price, sale, quantity) {
    e.preventDefault();
    if (quantity === 0) {
      toast.error("Đã hết sản phẩm", { position: "bottom-center" });
    } else {
      store.dispatch(
        AddCart({
          id: id,
          name: name,
          quantity: 1,
          price: price,
          sale: sale,
          image: image,
        })
      );
      toast.success("Đã thêm sản phẩm vào giỏ hàng", {
        position: "bottom-center",
      });
    }
  }

  return (
    <div id="contents" className="normal-detail">
      <div className="root_width">
        <div className="xans-product xans-product-headcategory Bình giữ nhiệt / Bình nước ">
          <div className="root_width">
            <div className="xans-product xans-product-image overview ">
              <div className="prdImgView">
                <div
                  className="xans-product xans-product-mobileimage "
                  id="xans-product-mobileimage-slider-0"
                  style={{ overflow: "hidden" }}
                >
                  <ul
                    style={{
                      backfaceVisibility: "hidden",
                      listStyle: "none",
                      margin: "0px",
                      width: "1245px",
                      transitionDuration: "0ms",
                      transform: "translate3d(0px, 0px, 0px)",
                    }}
                  >
                    <li
                      style={{
                        width: "415px",
                        display: "table-cell",
                        verticalAlign: "top",
                      }}
                    >
                      <p className="thumbnail">
                        <img
                          src={`https://locknlock-d1171.web.app/assets/imgs/${product.image}`}
                          className="ThumbImage"
                          alt=""
                        />
                        <span className="xans-product xans-product-imagestyle ">
                          <span
                            className="prdIcon "
                            style={{ backgroundImage: 'url("")' }}
                          />
                        </span>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="xans-product xans-product-detail">
              <div className="detailArea ">
                <div className="infoArea">
                  <div className="headingArea">
                    <h2>{product.productName}</h2>
                    <div className="xans-product xans-product-detail headingArea-bottom sale_has">
                      <span className="sale_text  "></span>
                      <span className="span_product_price    on1 ">
                        {formatter.format(product.price)}
                      </span>
                      <span className="span-has-dis  on1 ">
                        {formatter.format(
                          product.price - product.price * (0.01 * product.sale)
                        )}
                        <span style={{ fontSize: "20px", color: "#ff3604" }}>
                          {" "}
                          {product.sale}%
                        </span>
                      </span>
                    </div>
                  </div>
                  <table
                    border={1}
                    summary
                    className="xans-product xans-product-option "
                  >
                    <caption>Phân Loại Sản Phẩm</caption>
                    <tbody className="xans-product xans-product-detail delivery_price ">
                      <tr className="delivery-tr">
                        <td>
                          {" "}
                          <div className="delivery_price_div ">
                            <span className="delivery_price_span">
                              Nhà vận chuyển
                            </span>
                            Ninja Van
                          </div>
                        </td>
                      </tr>
                      <tr className="delivery-tr">
                        <td>
                          {" "}
                          <div className="ec-front-shop-delivery-defferent-shipping">
                            <span className="delivery_price_span">
                              Phí Vận chuyển
                            </span>
                            <span
                              style={{ fontSize: "12px", color: "#555555" }}
                            >
                              <span className="delv_price_B">
                                <input
                                  id="delivery_cost_prepaid"
                                  name="delivery_cost_prepaid"
                                  defaultValue="P"
                                  type="hidden"
                                />
                                đ30,000 ~ <strong>đ1,920,000</strong>
                                <div className="differentialShipping layerTheme">
                                  <a href="#none" className="btnHelp">
                                    도움말
                                  </a>
                                  <div className="layerShipping">
                                    <p>
                                      <strong>
                                        Phí vận chuyển có điều kiện
                                      </strong>
                                    </p>
                                    <a href="#none" className="btnClose">
                                      Đóng
                                    </a>
                                  </div>
                                </div>
                              </span>
                            </span>
                            <a className="fix-close" href="#none" />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="xans-product xans-product-action">
                    <div className="ec-base-button gColumn">
                      <a
                        className="btnNormal btnBlack sizeL"
                        href="/productdetail/5"
                        onClick={(e) =>
                          addToCartClickHandle(
                            e,
                            product.id,
                            product.productName,
                            product.image,
                            product.price,
                            product.sale,
                            product.quantity
                          )
                        }
                      >
                        Thêm vào giỏ hàng
                      </a>
                      <Link
                        className="btnSubmit btnBlue sizeL"
                        to=""
                      >
                        <span id="btnBuy">Mua ngay</span>
                      </Link>
                    </div>
                    <div id="appPaymentButtonBox" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="xans-product xans-product-additional ">
            <div id="prdDetail" className="ec-base-tab gFlex">
              <div className="root_width">
                <div className="cont">
                  <div
                    className="edibot-product-detail"
                    style={{ width: "100%", margin: "0 auto" }}
                  >
                    <div
                      type="application/json"
                      className="-edibot-metadata"
                    ></div>
                    <div
                      style={{ position: "relative", margin: "0 0px" }}
                      className="edb-img-tag-w"
                    >
                      <img
                        alt="phụ kiện xám Ảnh màu sắc-S1L1"
                        style={{
                          margin: "0 auto",
                          display: "block",
                          maxWidth: "100%",
                        }}
                        src={`https://locknlock-d1171.web.app/assets/imgs/${product.detailImage}`}
                      />
                      <br />
                      <div
                        dangerouslySetInnerHTML={{ __html: product.detail }}
                      />
                    </div>
                    <div
                      style={{
                        display: "block",
                        content: '" "',
                        height: "100px!important",
                      }}
                    />
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default ProductDetailRes;
