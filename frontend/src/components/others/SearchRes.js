import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const formatter = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
  minimumFractionDigits: 0,
});

const SearchRes = (props) => {
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
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

  function OrderProduct(e) {
    e.preventDefault();
    if (e.target.value === "recent") {
      const sortedProducts = [...products];
      sortedProducts.sort((a, b) => {
        return b.id - a.id;
      });
      setProducts(sortedProducts);
    } else if (e.target.value === "priceasc") {
      const sortedProducts = [...products];
      sortedProducts.sort((a, b) => {
        const priceA = a.price - a.price * (a.sale * 0.01);
        const priceB = b.price - b.price * (b.sale * 0.01);
        return priceA - priceB;
      });
      setProducts(sortedProducts);
    } else if (e.target.value === "price") {
      const sortedProducts = [...products];
      sortedProducts.sort((a, b) => {
        const priceA = a.price - a.price * (a.sale * 0.01);
        const priceB = b.price - b.price * (b.sale * 0.01);
        return priceB - priceA;
      });
      setProducts(sortedProducts);
    } else if (e.target.value === "favor") {
      const sortedProducts = [...products];
      sortedProducts.sort((a, b) => {
        return b.favoriteCount - a.favoriteCount;
      });
      setProducts(sortedProducts);
    }
  }

  return (
    <div id="contents">
      <div class="root_width mobile_width">
        <div id="shopQ">
          <div class="xans-product xans-product-searchdata typeTop search_ndisplaynone xans-record-">
            <div class="xans-product-normalmenu-m">
              <p class="xans-product xans-product-searchdata prdCount xans-record-">
                Tổng
                <strong>{products.length}</strong>
                cái
              </p>
              <div class="xans-product xans-product-searchdata sort xans-record-">
                <div>
                  <select onChange={OrderProduct} name="order_by" id="order_by">
                    <option value="" selected>
                      ::: Lựa chọn tiêu chuẩn :::
                    </option>
                    <option value="recent">Sản phẩm mới</option>
                    <option value="priceasc">Giá thấp</option>
                    <option value="price">Giá cao</option>
                    <option value="favor">Sản phẩm yêu thích</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="xans-search xans-search-result wrap-mProduct Product-list">
          <ul class="prdList grid4">
            {currentItems.map((product, index) => (
              <li key={index}>
                <div class="inner">
                  <div class="thumbnail">
                    <div class="prdImg">
                      <div class="wrap-thumbnail">
                        <Link
                          class="BG-thumbnail"
                          to={`/productdetail/${product.id}`}
                        >
                          <img
                            src={`https://locknlock-d1171.web.app/assets/imgs/${product.image}`}
                            alt={product.productName}
                          />
                        </Link>
                      </div>

                      <div class="wrap-list-icon">
                        <span class="wish-span">
                          <img
                            src="./assets/imgs/btn_wish_before.png"
                            class="icon_img ec-product-listwishicon"
                            alt="Trước đăng ký Sản phẩm yêu thích"
                            style={{ cursor: "pointer" }}
                            icon_status={product.icon_status}
                            onClick={() => handleImageClick(product)}
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="description">
                    <h4 class="name">
                      <Link to={`/productdetail/${product.id}`}>
                        {product.productName}
                      </Link>
                    </h4>
                    <ul class="xans-search xans-search-listitem spec xans-product-listitem">
                      <li >
                        <span
                          style={{
                            fontSize: "16px",
                            color: "#0079e3",
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
                      <li >
                        <span
                          style={{
                            fontSize: "16px",
                            color: "#0079e3",
                            fontWeight: "bold",
                          }}
                        >
                          {formatter.format(
                            product.price -
                              product.price * (0.01 * product.sale)
                          )}
                          <span style={{ fontSize: "12px", color: "#f20000" }}>
                            {product.sale}%
                          </span>
                        </span>
                      </li>
                    </ul>
                    <div class="wrap-new-icon">
                      <span class="wrap-new-span"></span>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div class="xans-search xans-search-paging ec-base-paginate">
          <ol>{renderPageNumbers}</ol>
        </div>
      </div>
    </div>
  );
};

export default SearchRes;
