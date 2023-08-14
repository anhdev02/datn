import React, { useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { store } from "../../store/store";
import {
  DeleteCart,
  IncreaseQuantity,
  DecreaseQuantity,
} from "../../store/action/cart";
import { useState } from "react";
import { useSelector } from "react-redux";

const formatter = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
  minimumFractionDigits: 0,
});
const Cart = () => {
  const navigate = useNavigate();
  const [selectedProducts, setSelectedProducts] = useState([]);
  const number = useSelector((state) => state.cart.carts.length);
  const [carts, setCarts] = useState([]);
  const [cartNumber, setCartNumber] = useState(0);
  const [Checked, setChecked] = useState(0);
  var totalPriceSale = 0,
    totalPrice = 0,
    totalItem = 0;

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      loadDataCart();
    });
    loadDataCart();
    return () => {
      unsubscribe();
    };
  }, []);

  const handleCheckout = (e) => {
    e.preventDefault();
    navigate("/pay", { state: { products: selectedProducts } });
  };

  const loadDataCart = () => {
    const { numberCart, carts } = store.getState().cart;
    setCartNumber(numberCart);
    setCarts(carts);
  };

  const isChecked = (id) => {
    if (document.getElementById(id) != null)
      return document.getElementById(id).checked;
  };

  const handleCheckboxChange = (
    id,
    name,
    image,
    price,
    sale,
    quantity,
    stt
  ) => {
    const selectedProduct = selectedProducts.find(
      (product) => product.id === id
    );
    setChecked(Checked + 1);
    totalPriceSale = 0;
    totalPrice = 0;
    totalItem = 0;
    if (selectedProduct) {
      setSelectedProducts(
        selectedProducts.filter((product) => product.id !== id)
      );
    } else {
      const productToAdd = { id, name, image, price, sale, quantity, stt };
      setSelectedProducts([...selectedProducts, productToAdd]);
    }
  };

  const handleSelectAllChange = (event) => {
    const newSelectAll = event.target.checked;
    const option = document.querySelectorAll(".basket_chk");
    if (newSelectAll) {
      option.forEach((checkbox) => {
        checkbox.checked = true;
      });
    } else {
      option.forEach((checkbox) => {
        checkbox.checked = false;
      });
    }
    setChecked(Checked + 1);
  };

  const deleteSelectAllChange = (event) => {
    event.preventDefault();
    const productsToDelete = [...selectedProducts];
    productsToDelete.forEach((product, index) => {
      store.dispatch(DeleteCart(product.stt - index));
    });
    setSelectedProducts([]);
    const alloption = document.getElementById("allCheckbox");
    const option = document.querySelectorAll(".basket_chk");
    alloption.checked = false;
    option.forEach((checkbox) => {
      checkbox.checked = false;
    });
    loadDataCart();
  };

  if (localStorage.getItem("id") === null) {
    return <Navigate to="/login" />;
  }

  return (
    <div id="wrap">
      <div id="container">
        <div id="contents">
          <div className="root_width">
            <div className="wrap-basket-width">
              <div className="path">
                <span>Trang Hiện Tại</span>
                <ol>
                  <li>
                    <Link to="/">Trang Chủ</Link>
                  </li>
                  <li title="Current Page">
                    <strong>Giỏ Hàng</strong>
                  </li>
                </ol>
              </div>
              <div className="titleArea-new">
                <h2>Sản phẩm trong giỏ hàng</h2>
              </div>
              <div className="wrap-basket">
                <div className="wrap-basket-top">
                  <span className="xans-order xans-order-normoversea Baskrt_new">
                    <input
                      type="checkbox"
                      id="allCheckbox"
                      onChange={handleSelectAllChange}
                    />
                    Chọn tất cả
                    <span className="xans-order xans-order-normoverseatitle">
                      ({number})
                    </span>
                  </span>
                  <span className="xans-element- xans-order xans-order-selectorder ec-base-button">
                    <Link
                      to=""
                      onClick={deleteSelectAllChange}
                      className="order_list_Delete"
                    >
                      Xóa mục đã chọn
                    </Link>
                  </span>
                  <Link className="more-wish" to="">
                    Xem danh sách yêu thích
                  </Link>
                </div>
                <div className="xans-element- xans-order xans-order-basketpackage Baskrt_new">
                  <div className="xans-element- xans-order xans-order-dcinfo ec-base-box typeMember">
                    <div className="information">
                      <h3 className="title">Quyền lợi</h3>
                      <div className="description">
                        <ul className="mileage">
                          <li>
                            <Link to="">
                              Mã giảm giá : <strong>0 Mã giảm giá</strong>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="orderListArea ec-base-table typeList gBorder">
                    <table
                      border={1}
                      summary
                      className="xans-element- xans-order xans-order-normoversea xans-record-"
                    >
                      <caption>Sản phẩm</caption>
                      <colgroup>
                        <col style={{ width: "27px" }} className />
                        <col style={{ width: "92px" }} />
                        <col style={{ width: "auto" }} />
                        <col style={{ width: "75px" }} />
                        <col style={{ width: "120px" }} />
                        <col style={{ width: "88px" }} />
                        <col style={{ width: "110px" }} />
                      </colgroup>
                      <thead>
                        <tr>
                          <th scope="col" className />
                          <th scope="col" />
                          <th scope="col">Sản phẩm / Option</th>
                          <th scope="col" className="Order-count">
                            Số Lượng
                          </th>
                          <th scope="col">Giá</th>
                          <th scope="col">Giảm còn</th>
                          <th scope="col" />
                        </tr>
                      </thead>
                      <tbody className="xans-element- xans-order xans-order-list center">
                        {carts.map((product, i) => {
                          if (isChecked("basket_chk_id_" + i)) {
                            totalItem = totalItem + parseInt(product.quantity);
                            totalPriceSale =
                              totalPriceSale +
                              product.price *
                                (0.01 * product.sale) *
                                product.quantity;
                            totalPrice =
                              totalPrice + product.price * product.quantity;
                          }
                          return (
                            <tr key={i}>
                              <td className>
                                <input
                                  type="checkbox"
                                  id={`basket_chk_id_${i}`}
                                  className="basket_chk"
                                  name="basket_product_normal_type_oversea"
                                  onChange={() =>
                                    handleCheckboxChange(
                                      product.id,
                                      product.name,
                                      product.image,
                                      product.price,
                                      product.sale,
                                      product.quantity,
                                      i
                                    )
                                  }
                                />
                              </td>
                              <td className="thumb gClearLine">
                                <Link to={`/productdetail/${product.id}`}>
                                  <img
                                    src={`https://locknlock-d1171.web.app/assets/imgs/${product.image}`}
                                    alt={product.name}
                                  />
                                </Link>
                              </td>
                              <td className="left gClearLine">
                                <strong className="name">
                                  <Link
                                    to={`/productdetail/${product.id}`}
                                    className="ec-product-name"
                                  >
                                    {product.name}
                                  </Link>
                                </strong>
                              </td>
                              <td>
                                <span className>
                                  <span className="ec-base-qty">
                                    <input
                                      id="quantity_id_1"
                                      name="quantity_name_1"
                                      size={2}
                                      value={product.quantity}
                                      defaultValue={product.quantity}
                                      type="text"
                                    />
                                    <button
                                      onClick={() =>
                                        store.dispatch(
                                          IncreaseQuantity(product.id)
                                        )
                                      }
                                      className="up"
                                    >
                                      <img
                                        src="https://locknlock-d1171.web.app/assets/imgs/btn_quantity_up.gif"
                                        alt="Up"
                                      />
                                    </button>
                                    <button
                                      onClick={() =>
                                        store.dispatch(
                                          DecreaseQuantity(product.id)
                                        )
                                      }
                                      className="down"
                                    >
                                      <img
                                        src="https://locknlock-d1171.web.app/assets/imgs/btn_quantity_down.gif"
                                        alt="Down"
                                      />
                                    </button>
                                  </span>
                                  <Link to="" className="btnNormal gBlank5">
                                    Sửa
                                  </Link>
                                </span>
                              </td>
                              <td>
                                <div className="product_purchase_price_div">
                                  <strong>
                                    {formatter.format(
                                      product.price * product.quantity
                                    )}
                                  </strong>
                                </div>
                              </td>
                              <td rowSpan={1}>
                                <span />
                                <div id className>
                                  <strong className="txtWarnB">
                                    <span id="product_discount_price_front1">
                                      {formatter.format(
                                        (product.price -
                                          product.price *
                                            (0.01 * product.sale)) *
                                          product.quantity
                                      )}
                                    </span>
                                  </strong>
                                </div>
                              </td>
                              <td className="button">
                                <button
                                  className="btnNormal btn_deleteBasketItem"
                                  onClick={() => store.dispatch(DeleteCart(i))}
                                >
                                  Xoá
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                  <div className="xans-element- xans-order xans-order-totaloversea ec-base-table typeList gBorder total">
                    <table border={1} summary>
                      <caption>Tổng</caption>
                      <colgroup>
                        <col style={{ width: "23%" }} />
                        <col style={{ width: "21%" }} className />
                        <col style={{ width: "auto" }} />
                      </colgroup>
                      <thead>
                        <tr>
                          <th scope="col">
                            <span>Tổng</span>
                          </th>
                          <th
                            scope="col"
                            id="oversea_total_benefit_price_title_area"
                          >
                            <Link to="">Giảm Giá</Link>
                          </th>
                          <th scope="col">Tổng tiền thanh toán</th>
                        </tr>
                      </thead>
                      <tbody className="center">
                        <tr>
                          <td>
                            <div className="box txt16">
                              <strong>
                                <span className="txt23">
                                  <span className="total_product_price_display_front">
                                    {formatter.format(totalPrice)}
                                  </span>
                                </span>
                              </strong>
                            </div>
                          </td>
                          <td id="oversea_total_benefit_price_area">
                            <div className="box txt16">
                              <strong>
                                <span className="total-discount">-</span>
                                <span
                                  id="oversea_total_product_discount_price_front"
                                  className="txt23"
                                >
                                  {formatter.format(totalPriceSale)}
                                </span>
                              </strong>
                            </div>
                          </td>
                          <td>
                            <div className="box txtEm txt16">
                              <strong className="txt23">
                                <span className="total-equal">=</span>
                              </strong>
                              <strong>
                                <span
                                  id="oversea_total_order_price_front"
                                  className="txt23"
                                >
                                  {formatter.format(
                                    totalPrice - totalPriceSale
                                  )}
                                </span>
                              </strong>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="xans-element- xans-order xans-order-totalorder ec-base-button justify">
                    <Link to="/pay" className="btnBlue">
                      Thanh Toán tất cả sản phẩm
                    </Link>
                    <Link to="" onClick={handleCheckout} className="btnBlack">
                      Thanh toán sản phẩm đã chọn
                    </Link>
                    <span className="gRight">
                      <Link to="" className="btnNormal sizeM">
                        Tiếp Tục Mua Sắm
                      </Link>
                    </span>
                    <div id="appPaymentButtonBox" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="layout" />
      </div>
    </div>
  );
};

export default Cart;
