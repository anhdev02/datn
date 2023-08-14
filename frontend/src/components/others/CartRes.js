import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { store } from "../../store/store";
import {
  DeleteCart,
  IncreaseQuantity,
  DecreaseQuantity,
} from "../../store/action/cart";

const formatter = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
  minimumFractionDigits: 0,
});

const CartRes = () => {
  const [carts, setCarts] = useState([]);
  const [cartNumber, setCartNumber] = useState(0);
  var totalPriceSale = 0,
    totalPrice = 0;

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      loadDataCart();
    });
    loadDataCart();
    return () => {
      unsubscribe();
    };
  }, []);

  const loadDataCart = () => {
    const { numberCart, carts } = store.getState().cart;
    setCartNumber(numberCart);
    setCarts(carts);
  };

  if (localStorage.getItem("id") === null) {
    return <Navigate to="/login" />;
  }
  return (
    <div id="contents">
      <div className="root_width myshop_width">
        <div className="mobile_width">
          <div className="path">
            <span>Trang Hiện Tại</span>
            <ol>
              <li>
                <Link to="/">Trang Chủ</Link>
              </li>
              <li className="Current-Page">
                <strong>Giỏ Hàng</strong>
              </li>
            </ol>
          </div>
          <div className="titleArea-new">
            <h2>Sản phẩm trong giỏ hàng</h2>
          </div>
          <div className="xans-element- xans-order xans-order-basketpackage" />
          <div className="xans-element- xans-order xans-order-emptyitem ec-base-fold theme1 selected eToggle">
            <div className="contents">
              <div className="xans-element- xans-order xans-order-normoversea">
                <div className="xans-element- xans-order xans-order-list">
                  {carts.map((product, i) => {
                    totalPriceSale =
                      totalPriceSale +
                      product.price * (0.01 * product.sale) * product.quantity;
                    totalPrice = totalPrice + product.price * product.quantity;
                    return (
                      <div className="ec-base-prdInfo">
                        <div className="prdBox">
                          <div className="thumbnail">
                            <Link to={`/productdetail/${product.id}`}>
                              <img
                                src={`https://locknlock-d1171.web.app/assets/imgs/${product.image}`}
                                alt={product.name}
                                width={71}
                                height={71}
                              />
                            </Link>
                          </div>
                          <div className="description">
                            <strong className="prdName" title="Product">
                              <Link
                                to={`/productdetail/${product.id}`}
                                className="ec-product-name"
                              >
                                {product.name}
                              </Link>
                            </strong>
                            <ul className="info">
                              <li
                                title="Reward Points"
                                id="product_mileage0"
                                className="mileage"
                              >
                                -
                              </li>
                              <li>
                                <ul className="price">
                                  <li id>
                                    Giá sản phẩm:{" "}
                                    <strong>
                                      {formatter.format(
                                        product.price * product.quantity
                                      )}
                                    </strong>
                                  </li>
                                  <li className id>
                                    Giảm giá:
                                    <span className="txtWarn">
                                      {formatter.format(
                                        product.price *
                                          (0.01 * product.sale) *
                                          product.quantity
                                      )}
                                    </span>
                                  </li>
                                </ul>
                              </li>
                              <li className="ec-base-qty">
                                <button
                                  onClick={() =>
                                    store.dispatch(DecreaseQuantity(product.id))
                                  }
                                  className="QuantityDown qtyDown"
                                >
                                  <img
                                    alt="down"
                                    src="./assets/imgs/ico_quantity_down.jpg"
                                    width={33}
                                    height={29}
                                  />
                                </button>
                                <input
                                  id="quantity_id_0"
                                  name="quantity_name_0"
                                  size={3}
                                  value={product.quantity}
                                  defaultValue={product.quantity}
                                  type="text"
                                />
                                <button
                                  onClick={() =>
                                    store.dispatch(IncreaseQuantity(product.id))
                                  }
                                  className="QuantityUp qtyUp"
                                >
                                  <img
                                    alt="up"
                                    src="./assets/imgs/ico_quantity_up.jpg"
                                    width={33}
                                    height={29}
                                  />
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="ec-base-button">
                          <div className="gLeft">
                            <Link
                              to=""
                              className="btnNormal"
                              onClick={() => store.dispatch(DeleteCart(i))}
                            >
                              <img
                                src="./assets/imgs/btn_basket_delete.png"
                                alt="Remove"
                                width={13}
                                height={13}
                              />
                            </Link>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="xans-element- xans-order xans-order-totaloversea totalSummary">
              <div className="ec-base-fold theme2 theme2-none eToggle">
                <div className="title">
                  <h3>Tổng</h3>
                  <p>
                    đ
                    <strong>
                      <span className="total_product_price_display_front">
                        {formatter.format(totalPrice)}
                      </span>
                    </strong>
                  </p>
                </div>
              </div>
              <div
                id="oversea_total_benefit_price_title_area"
                className="ec-base-fold theme2 eToggle"
              >
                <div className="title">
                  <h3>Giảm Giá</h3>
                  <p>
                    đ
                    <strong id="oversea_total_product_discount_price_front">
                      {formatter.format(totalPriceSale)}
                    </strong>
                  </p>
                </div>
              </div>
            </div>
            <div
              id="orderFixItem"
              className="xans-element- xans-order xans-order-totalorder orderFixItem"
            >
              <div className="ec-base-button gColumn">
                <div className="xans-element- xans-order xans-order-totaloversea BtnBlack">
                  Tổng tiền :
                  <strong
                    className="oversea_total1"
                    id="oversea_total_order_price_front"
                  >
                    {formatter.format(totalPrice - totalPriceSale)}
                  </strong>
                </div>
                <Link to="/pay" className="btnSubmit BtnBlue">
                  Thanh toán
                </Link>
              </div>
              <div id="appPaymentButtonBox" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartRes;
