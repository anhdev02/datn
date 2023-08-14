import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AddCart } from "../../store/action/cart";
import { store } from "../../store/store";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const formatter = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
  minimumFractionDigits: 0,
});

const FavouritesListRes = () => {
  const userId = localStorage.getItem("id");
  const [productFavorites, setProductFavorites] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const loadData = () => {
    fetch(`https://locknlock-dvxb.onrender.com/api/product/favorite/${userId}`)
      .then((res) => res.json())
      .then((data) => setProductFavorites(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadData();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  let currentItems;
  if (productFavorites.length > 0) {
    currentItems = productFavorites.slice(indexOfFirstItem, indexOfLastItem);
  } else {
    currentItems = [];
  }

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(productFavorites.length / itemsPerPage); i++) {
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

  const removeFromFavorites = async (userId, productId) => {
    try {
      await axios.delete(
        `https://locknlock-dvxb.onrender.com/api/favorite/${userId}/${productId}`
      );
      await axios.put(
        `https://locknlock-dvxb.onrender.com/api/product/favorite/${productId}`,
        {
          favoriteCount: -1,
        }
      );
    } catch (error) {
      console.error("Lỗi khi xóa khỏi danh sách yêu thích:", error);
    }
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
        <div className="xans-element- xans-myshop xans-myshop-wishlist wishlistdisplaynone0 xans-record-">
          <div className="titleArea-new">
            <h2>Danh Sách Yêu Thích</h2>
          </div>
          <ul className="xans-element- xans-product xans-product-listitem">
            {currentItems &&
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
                          <li className="strike ">
                            <strong />
                          </li>
                          <li className="price strike">
                            <strong>{formatter.format(product.price)}</strong>
                          </li>
                          <li className>
                            {formatter.format(
                              product.price -
                                product.price * (0.01 * product.sale)
                            )}
                          </li>
                          <li className="mileage" />
                        </ul>
                      </div>
                    </div>
                    <div className="ec-base-button">
                      <span className="gLeft">
                        <button
                          type="button"
                          className="btnNormal btn_recent_del"
                          onClick={() => removeFromFavorites(userId, product.id)}
                          rel={705}
                        >
                          <img
                            src="https://locknlock-d1171.web.app/assets/imgs/btn_wish_delete.png"
                            alt="Remove"
                            width={13}
                            height={13}
                          />
                        </button>
                        <button
                          type="button"
                          className="btnStrong "
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
              ))}
          </ul>
        </div>
        <div className="xans-product xans-product-normalpaging ec-base-paginate">
          <ol>{renderPageNumbers}</ol>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default FavouritesListRes;
