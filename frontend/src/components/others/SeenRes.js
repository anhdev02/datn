import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { AddCart } from "../../store/action/cart";
import { store } from "../../store/store";

const formatter = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
  minimumFractionDigits: 0,
});

const SeenRes = () => {
  const [viewedProducts, setViewedProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const loadData = () => {
    const viewedProductsData =
      JSON.parse(localStorage.getItem("viewedProducts")) || [];
    setViewedProducts(viewedProductsData);
  };

  useEffect(() => {
    loadData();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = viewedProducts.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(viewedProducts.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleClick = (event) => {
    event.preventDefault();
    setCurrentPage(Number(event.target.id));
  };

  const renderPageNumbers = pageNumbers.map((number) => {
    const activeClass = number === currentPage ? "this" : "other";
    return (
      <li>
        <Link onClick={handleClick} id={number} to="" className={activeClass}>
          {number}
        </Link>
      </li>
    );
  });

  const removeFromViewedProducts = (productId) => {
    const viewedProducts = JSON.parse(localStorage.getItem('viewedProducts')) || [];
    const updatedViewedProducts = viewedProducts.filter((product) => product.id !== productId);
    localStorage.setItem('viewedProducts', JSON.stringify(updatedViewedProducts));
    loadData();
  };

  function addToCartClickHandle(id, name, image, price, sale, quantity) {
    if (quantity === 0) {
      toast.error("Đã hết sản phẩm", { position: "bottom-left" });
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
        position: "bottom-left",
      });
    }
  }

  return (
    <div id="contents">
      <div className="root_width myshop_width">
        <div className="xans-element- xans-product xans-product-recentlist xans-record-">
          <div className="titleArea-new">
            <h2>Đã Xem Gần Đây</h2>
          </div>
          <ul className="xans-element- xans-product xans-product-listitem">
            {
              currentItems.map((product) => (
                <li>
                  <div className="ec-base-prdInfo">
                    <div className="prdBox">
                      <div className="thumbnail">
                        <Link to={`/productdetail/${product.id}`}>
                          <img
                            src={`https://locknlock-d1171.web.app/assets/imgs/${product.image}`}
                            alt=""
                            width={71}
                            height={71}
                          />
                        </Link>
                        <span className="wishIcon" />
                      </div>
                      <div className="description">
                        <strong className="prdName">
                          <Link to={`/productdetail/${product.id}`}>
                            {product.productName}
                          </Link>
                        </strong>
                        <ul className="info">
                          <li className="price strike">
                            <strong>{formatter.format(product.price)}</strong>
                          </li>
                          <li >{formatter.format(
                              product.price -
                                product.price * (0.01 * product.sale)
                            )}</li>
                          <li className="mileage" />
                        </ul>
                      </div>
                    </div>
                    <div className="ec-base-button">
                      <span className="gLeft">
                        <button
                          type="button"
                          className="btnNormal btn_recent_del"
                          onClick={() => removeFromViewedProducts(product.id)}
                          rel={705}
                        >
                          <img
                            src="./assets/imgs/btn_wish_delete.png"
                            alt="Remove"
                            width={13}
                            height={13}
                          />
                        </button>
                        <button
                          type="button"
                          className="btnStrong"
                          onClick={() =>
                            addToCartClickHandle(
                              product.id,
                              product.productName,
                              product.image,
                              product.price,
                              product.sale,
                              product.quantity
                            )
                          }
                        >
                          Thêm giỏ hàng
                        </button>
                      </span>
                    </div>
                  </div>
                </li>
              ))
            }
          </ul>
          <p className="empty displaynone">
            Bạn không có sản phẩm nào được xem gần đây.
          </p>
        </div>
        <div className="xans-product xans-product-normalpaging ec-base-paginate">
          <ol>{renderPageNumbers}</ol>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SeenRes;
