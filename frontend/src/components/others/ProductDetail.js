import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { AddCart } from "../../store/action/cart";
import { store } from "../../store/store";

const formatter = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
  minimumFractionDigits: 0,
});

const ProductDetail = (props) => {
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [quantityProduct, setQuantityProduct] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(0);
  const [image, setImage] = useState([]);
  const [currentImage, setCurrentImage] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [imgSrc, setImgSrc] = useState("");
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleHover = (e) => {
    const img = e.target;
    const { width, height } = img.getBoundingClientRect();
    const x = width / 2;
    const y = height / 2;
    setCoords({ x, y });
    setImgSrc(img.src);
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  const handleIncrease = () => {
    if (quantity < quantityProduct) {
      setQuantity((prevQuantity) => prevQuantity + 1);
    }else {
      toast.error("Số lượng sản phẩm không đủ", {
        position: "bottom-left",
      });
    }
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }else {
      toast.error("Số lượng sản phẩm phải lớn hơn 0", {
        position: "bottom-left",
      });
    }
  };

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords({ x, y });
  };

  const handleImageClick = (event) => {
    setCurrentImage(event.target.src);
  };
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

  const handleBuyNow = (e) => {
    e.preventDefault();
    const updatedProduct = [
      {
        id: product.id,
        image: product.image,
        name: product.productName,
        price: product.price,
        sale: product.sale,
        quantity: quantity,
        stt: 0
      }
    ];
    navigate('/pay', { state: { products: updatedProduct } });
  };

  useEffect(() => {
    fetch(
      `https://locknlock-dvxb.onrender.com/api/product/${props.id}`
    )
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        setQuantityProduct(data.quantity)
        setTotal((data.price - data.price * (data.sale * 0.01)));
        addToViewedProducts(data);

      })
      .catch((error) => console.error(error));

    fetch(
      `https://locknlock-dvxb.onrender.com/api/image/${props.id}`
    )
      .then((response) => response.json())
      .then((data) => setImage(data))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    setTotal((product.price - product.price*(product.sale*0.01)) * quantity);
  }, [quantity]);

  function addToCartClickHandle(e, id, name, image, price, sale, quantity) {
    e.preventDefault();
    if (quantity === 0) {
      toast.error("Đã hết sản phẩm", { position: "bottom-left" });
    } else {
      store.dispatch(
        AddCart({
          id: id,
          name: name,
          quantity: quantity,
          price: price,
          sale: sale,
          image: image,
        })
      );
      toast.success("Đã thêm sản phẩm vào giỏ hàng", {
        position: "bottom-left",
      });
    }
  }

  return (
    <div id="wrap">
      <div id="container">
        <div id="contents" className="normal-detail">
          <div className="xans-product xans-product-headcategory">
            <div className="root_width">
              <div className="xans-product xans-product-detail">
                <div className="detailArea">
                  <div className="xans-product xans-product-image imgArea">
                    <div className="keyImg">
                      <div className="thumbnail">
                        <Link to="" alt="P0000BBD">
                          <img
                            src={
                              currentImage === null
                                ? `https://locknlock-d1171.web.app/assets/imgs/${product.image}`
                                : currentImage
                            }
                            alt={product.productName}
                            className="BigImage"
                            onMouseEnter={handleHover}
                            onMouseLeave={handleLeave}
                            onMouseMove={handleMouseMove}
                          />
                          <span
                            id="zoomMouseGiude"
                            style={{
                              display: "block",
                              position: "relative",
                              width: "170px",
                              margin: "0px auto",
                            }}
                          >
                            <img
                              src="https://locknlock-d1171.web.app/assets/imgs/txt_product_zoom.gif"
                              id="zoomGuideImage"
                              alt="Hãy di chuyển con trỏ chuột lên trên."
                              style={{
                                position: "absolute",
                                top: "-27px",
                                right: "0px",
                              }}
                            />
                          </span>
                        </Link>
                        <div id="zoom_wrap">
                          <p
                            className={
                              isHovered
                                ? "image_zoom_large"
                                : "image_zoom_large displaynone"
                            }
                          >
                            <span className="image_zoom_large_relative">
                              <img
                                id="zoom_image"
                                alt=""
                                src={imgSrc}
                                style={{
                                  transform: `scale(2)`,
                                  transformOrigin: `${coords.x}px ${coords.y}px`,
                                }}
                              />
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      id="thumbnail"
                      className="xans-product xans-product-addimage listImg"
                    >
                      <ul>
                        <li>
                          <div>
                            <img
                              src={`https://locknlock-d1171.web.app/assets/imgs/${product.image}`}
                              className="ThumbImage"
                              onClick={handleImageClick}
                              alt=""
                            />
                          </div>
                        </li>
                        {image.map((img) => (
                          <li>
                            <div>
                              <img
                                src={`https://locknlock-d1171.web.app/assets/imgs/${img.image}`}
                                className="ThumbImage"
                                onClick={handleImageClick}
                                alt=""
                              />
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="infoArea">
                    <div className="headingArea">
                      <h2>{product.productName}</h2>
                      <div className="xans-product xans-product-detail headingArea-bottom on-sale">
                        <span className="sale_text">{product.sale}%</span>
                        <span className="span_product_price on1">
                          {formatter.format(product.price)}
                        </span>
                        <span className="on1">
                          {formatter.format(
                            product.price -
                              product.price * (0.01 * product.sale)
                          )}
                        </span>
                      </div>
                    </div>
                    <table
                      border={1}
                      className="xans-product xans-product-option xans-record-"
                    >
                      <caption>Phân Loại Sản Phẩm</caption>
                      <tbody className="xans-product xans-product-detail delivery_price">
                        <tr className="delivery-tr">
                          <td>
                            <div className="delivery_price_div">
                              <span className="delivery_price_span">
                                Nhà vận chuyển
                              </span>
                              Ninja Van
                            </div>
                          </td>
                        </tr>
                        <tr className="delivery-tr">
                          <td>
                            <div className>
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
                                  <div className="btnTooltip ec-front-shop-delivery-defferent-shipping">
                                    <Link to="">
                                      <img
                                        src="https://locknlock-d1171.web.app/assets/imgs/ico_tooltip.gif"
                                        alt="도움말"
                                      />
                                    </Link>
                                    <div className="differentialShipping layerTheme">
                                      <h3 className="title">
                                        Phí vận chuyển có điều kiện
                                      </h3>
                                      <div className="close">
                                        <Link to="">
                                          <img
                                            src="https://locknlock-d1171.web.app/assets/imgs/btn_close.gif"
                                            alt="Đóng"
                                          />
                                        </Link>
                                      </div>
                                    </div>
                                  </div>{" "}
                                </span>
                              </span>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                      <tbody />
                    </table>

                    <div id="totalProducts" className>
                      <table border={1} summary>
                        <caption>Danh Sách Sản Phẩm</caption>
                        <colgroup>
                          <col style={{ width: "auto" }} />
                          <col style={{ width: "76px" }} />
                          <col style={{ width: "150px" }} />
                        </colgroup>
                        <tbody>
                          <tr>
                            <td>{product.productName}</td>
                            <td>
                              <span className="quantity">
                                <input
                                  id="quantity"
                                  value={quantity}
                                  type="text"
                                />{" "}
                                <Link
                                  to=""
                                  onClick={handleIncrease}
                                  className="up QuantityUp"
                                >
                                  <img
                                    src="https://locknlock-d1171.web.app/assets/imgs/btn_count_up.gif"
                                    alt="up"
                                  />
                                </Link>
                                <Link
                                  to=""
                                  onClick={handleDecrease}
                                  className="down QuantityDown"
                                >
                                  <img
                                    src="https://locknlock-d1171.web.app/assets/imgs/btn_count_down.gif"
                                    alt="down"
                                  />
                                </Link>
                              </span>
                            </td>
                            <td className="right">
                              <span className="quantity_price">
                              { 
                                formatter.format(total)
                              }
                                <input
                                  type="hidden"
                                  name="option_box_price"
                                  className="option_box_price"
                                  defaultValue={434000}
                                  item_code="P0000BDP000A"
                                />
                              </span>{" "}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="xans-product xans-product-action">
                      <div
                        className="ec-base-button gColumn"
                        style={{ marginTop: "195px" }}
                      >
                        <Link
                          to=""
                          className="btnNormal btnBlack sizeL"
                          onClick={(e) =>
                            addToCartClickHandle(
                              e,
                              product.id,
                              product.productName,
                              product.image,
                              product.price,
                              product.sale,
                              quantity
                            )
                          }
                        >
                          Thêm vào giỏ hàng
                        </Link>
                        <Link to="" onClick={handleBuyNow} className="btnSubmit btnBlue sizeL">
                          <span id="btnBuy">Mua ngay</span>
                        </Link>
                      </div>
                      <div id="appPaymentButtonBox" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="xans-product xans-product-additional">
              <div id="prdDetail" className="ec-base-tab gFlex">
                <div className="root_width">
                  <div className="cont">
                    <div
                      className="edibot-product-detail"
                      style={{
                        width: "1000px",
                        maxWidth: "100%",
                        margin: "0 auto",
                      }}
                    >
                      <div
                        style={{ position: "relative" }}
                        className="edb-img-tag-w"
                      >
                        <img
                          alt="Hình ảnh mô tả"
                          style={{
                            margin: "0 auto",
                            display: "block",
                            maxWidth: "100%",
                          }}
                          hidden={product.detailImage === null ? true : false}
                          src={`https://locknlock-d1171.web.app/assets/imgs/${product.detailImage}`}
                        />
                        <br />
                        <div
                          dangerouslySetInnerHTML={{ __html: product.detail }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="layout" />
      </div>
      <ToastContainer />
    </div>
  );
};

export default ProductDetail;
