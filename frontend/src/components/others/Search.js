import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { AddCart } from "../../store/action/cart";
import { store } from "../../store/store";
import axios from "axios";

const formatter = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
  minimumFractionDigits: 0,
});

const Search = (props) => {
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [productFavorites, setProductFavorites] = useState([]);
  const userId = localStorage.getItem("id");
  useEffect(() => {
    fetch(`https://locknlock-dvxb.onrender.com/api/product/search/${props.search}`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
      fetchFavoriteProducts();
  }, [location]);

  const productIds = productFavorites.map((favorite) => favorite.productId);

  const updatedProducts = products.map((product) => {
    const icon_status = productIds.includes(product.id) ? "on" : "off";
    return { ...product, icon_status };
  });


  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = updatedProducts.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(updatedProducts.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleClick = (event) => {
    event.preventDefault();
    setCurrentPage(Number(event.target.id));
  };

  const renderPageNumbers = pageNumbers.map((number, index) => {
    const activeClass = number === currentPage ? "this" : "other";
    return (
      <li key={index}>
        <Link onClick={handleClick} id={number} to="" className={activeClass}>
          {number}
        </Link>
      </li>
    );
  });

  const fetchFavoriteProducts = async () => {
    try {
      const response = await axios.get(
        `https://locknlock-dvxb.onrender.com/api/favorite/user/${userId}`
      );
      setProductFavorites(response.data);
    } catch (error) {
      console.error("Lỗi khi lấy danh sách sản phẩm yêu thích:", error);
    }
  };

  const handleImageClick = async (product) => {
    if (product.icon_status === "on") {
      removeFromFavorites(userId, product.id);
    } else {
      addToFavorites(userId, product.id);
    }
  };

  const addToFavorites = async (userId, productId) => {
    try {
      const response = await axios.post(
        "https://locknlock-dvxb.onrender.com/api/favorite/add",
        {
          userId: userId,
          productId: productId,
        }
      );

      await axios.put(
        `https://locknlock-dvxb.onrender.com/api/product/favorite/${productId}`,
        {
          favoriteCount: 1,
        }
      );

      const favoriteId = response.data.id;
      fetchFavoriteProducts();
      return favoriteId;
    } catch (error) {
      console.error("Lỗi khi thêm vào danh sách yêu thích:", error);
    }
  };

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
      fetchFavoriteProducts();
    } catch (error) {
      console.error("Lỗi khi xóa khỏi danh sách yêu thích:", error);
    }
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

  function sortOrderNew(e) {
    e.preventDefault();
    const sortedProducts = [...products];
    sortedProducts.sort((a, b) => {
      return b.id - a.id;
    });
    setProducts(sortedProducts);
  }

  function sortOrderAsc(e) {
    e.preventDefault();
    const sortedProducts = [...products];
    sortedProducts.sort((a, b) => {
      const priceA = a.price - a.price * (a.sale * 0.01);
      const priceB = b.price - b.price * (b.sale * 0.01);
      return priceA - priceB;
    });
    setProducts(sortedProducts);
  }

  function sortOrderDesc(e) {
    e.preventDefault();
    const sortedProducts = [...products];
    sortedProducts.sort((a, b) => {
      const priceA = a.price - a.price * (a.sale * 0.01);
      const priceB = b.price - b.price * (b.sale * 0.01);
      return priceB - priceA;
    });
    setProducts(sortedProducts);
  }

  function sortOrderFavorite(e) {
    e.preventDefault();
    const sortedProducts = [...products];
    sortedProducts.sort((a, b) => {
      return b.favoriteCount - a.favoriteCount;
    });
    setProducts(sortedProducts);
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
                    <strong>Tìm kiếm</strong>
                  </li>
                  <li title="Current Page">
                    <strong>{props.search}</strong>
                  </li>
                </ol>
              </div>
              <div className="xans-product xans-product-searchdata">
                <div
                  id="searchContent"
                  className="xans-product xans-product-searchdata"
                >
                </div>
                <div className="searchResult">
                  <p className="record">
                    Tổng <strong>{products.length}</strong> cái
                  </p>
                  <ul className="xans-product xans-product-searchorderby">
                    <li>
                      <Link onClick={sortOrderNew} to="">
                        Sản phẩm mới
                      </Link>
                    </li>
                    <li>
                      <Link onClick={sortOrderAsc} to="">
                        Giá thấp
                      </Link>
                    </li>
                    <li>
                      <Link onClick={sortOrderDesc} to="">
                        Giá cao
                      </Link>
                    </li>
                    <li>
                      <Link onClick={sortOrderFavorite} to="">
                        Sản phẩm yêu thích
                      </Link>
                    </li>
                  </ul>
                </div>
                <p className={products.length !== 0 ? 'noData displaynone' : 'noData'}>Không có kết quả tìm kiếm.</p>
              </div>
              <div className="xans-search xans-search-result wrap-mProduct Product-list">
                <ul className="prdList grid4">
                  {currentItems.map((product, index) => (
                    <li key={index}>
                      <div className="inner">
                        <div className="thumbnail">
                          <div className="prdImg">
                            <div className="wrap-thumbnail">
                              <Link
                                to={`/productdetail/${product.id}`}
                                className="BG-thumbnail"
                              >
                                <img
                                  src={`https://locknlock-d1171.web.app/assets/imgs/${product.image}`}
                                  id="eListPrdImage705_"
                                  alt={product.image}
                                />
                              </Link>
                            </div>
                            <div className="wrap-list-icon">
                              <span className="cart-icon">
                                <img
                                  src="https://locknlock-d1171.web.app/assets/imgs/btn_list_cart.gif"
                                  alt="Thêm vào giỏ hàng"
                                  style={{ cursor: "pointer" }}
                                  className="ec-admin-icon cart"
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
                                />
                              </span>
                              <span className="view-icon">
                                <img
                                  src="https://locknlock-d1171.web.app/assets/imgs/btn_prd_zoom.gif"
                                  style={{ cursor: "pointer" }}
                                  alt="Phóng to hình ảnh sản phẩm"
                                />
                              </span>
                              <span className="wish-span">
                                <img
                                  src="https://locknlock-d1171.web.app/assets/imgs/btn_wish_before.png"
                                  className="icon_img ec-product-listwishicon"
                                  alt="Trước đăng ký Sản phẩm yêu thích"
                                  style={{ cursor: "pointer" }}
                                  icon_status={product.icon_status}
                                  onClick={() => handleImageClick(product)}
                                />
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="description">
                          <h4 className="name">
                            <Link to={`/productdetail/${product.id}`}>
                              <span
                                style={{
                                  fontSize: "12px",
                                  color: "#555555",
                                  fontWeight: "bold",
                                }}
                              >
                                {product.productName}
                              </span>
                            </Link>
                          </h4>
                          <ul className="xans-search xans-search-listitem spec xans-product-listitem">
                            <li>
                              <span
                                style={{
                                  fontSize: "16px",
                                  color: "#098ee6",
                                  fontWeight: "bold",
                                  textDecoration: "line-through",
                                }}
                              >
                                {formatter.format(product.price)}
                              </span>
                              <span
                                id="span_product_tax_type_text"
                                style={{ textDecoration: "line-through" }}
                              ></span>
                            </li>
                            <li>
                              <span
                                style={{
                                  fontSize: "16px",
                                  color: "#098ee6",
                                  fontWeight: "bold",
                                }}
                              >
                                {formatter.format(
                                  product.price -
                                    product.price * (0.01 * product.sale)
                                )}
                                <span
                                  style={{ fontSize: "12px", color: "#f20000" }}
                                >
                                  {product.sale}%
                                </span>
                              </span>
                            </li>
                          </ul>
                          <div className="wrap-new-icon">
                            <span className="wrap-new-span" />
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="xans-search xans-search-paging ec-base-paginate">
                <ol>{renderPageNumbers} </ol>
              </div>
            </div>
          </div>
        </div>
        <hr className="layout" />
      </div>
      <hr className="layout" />
      <ToastContainer />
    </div>
  );
};

export default Search;
