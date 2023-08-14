import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { confirm } from "react-confirm-box";

const TrashProduct = () => {
  const [product, setProduct] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  useEffect(() => {
    document.title = 'Thùng rác sản phẩm';
    loadData();
  }, []);

  const loadData = () => {
    fetch("https://locknlock-dvxb.onrender.com/api/product/trash")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((err) => console.log(err));
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = product.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(product.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleClick = (event) => {
    event.preventDefault();
    setCurrentPage(Number(event.target.id));
  };

  const renderPageNumbers = pageNumbers.map((number) => {
    const activeClass = number === currentPage ? "active" : "";
    return (
      <li
        className={`page-item ${activeClass}`}
        style={{ display: "inline-block" }}
      >
        <a onClick={handleClick} id={number} className="page-link" href="#st">
          {number}
        </a>
      </li>
    );
  });

  function addTrash(event) {
    event.preventDefault();
    var id = event.target.id;
    var url = "https://locknlock-dvxb.onrender.com/api/product/" + id;
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      status: true,
      trash: false,
    });

    var requestOptions = {
      method: "PATCH",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(url, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        toast.success("Sản phẩm đã được khôi phục!", { position: "top-right" });
        loadData();
      })
      .catch((error) => console.log("error", error));
  }
  const Delete = async (event) => {
    event.preventDefault();
    const result = await confirm("Sản phẩm sẽ bị xóa vĩnh viễn?", event);
    if (result) {
      var id = event.target.id;
      var url = "https://locknlock-dvxb.onrender.com/api/product/" + id;
      var requestOptions = {
        method: "DELETE",
        redirect: "follow",
      };

      fetch(url, requestOptions)
        .then((response) => {
          response.text();
          if (response.ok) {
            toast.success("Đã xóa vĩnh viễn sản phẩm!", {
              position: "top-right",
            });
          } else {
            toast.error("Xóa vĩnh viễn sản phẩm không thành công!", {
              position: "top-right",
            });
          }
        })
        .then((result) => {
          console.log(result);
          loadData();
        })
        .catch((error) => console.log("error", error));
    }
  };
  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <h4 className="fw-bold py-3 mb-4">Sản phẩm</h4>
      <div className="card">
        <h5 className="card-header">Thùng rác</h5>
        <div
          style={{ height: "60vh" }}
          className="table-responsive text-nowrap"
        >
          <table className="table table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>Hình ảnh</th>
                <th>Tên sản phẩm</th>
                <th>Giá</th>
                <th>Giảm giá</th>
                <th>Mô tả</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody className="table-border-bottom-0">
              {currentItems &&
                currentItems.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.id}</td>
                      <td>
                        <img
                          width={60}
                          src={`../../assets/imgs/${item.image}`}
                          alt=""
                        />
                      </td>
                      <td>
                        <div style={{ width: "200px", marginTop: "2vh" }}>
                          <p
                            style={{
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            }}
                          >
                            <strong>{item.productName}</strong>
                          </p>
                        </div>
                      </td>
                      <td>{item.price}</td>
                      <td>{item.sale}%</td>
                      <td>
                        <div style={{ width: "200px", marginTop: "2vh" }}>
                          <p
                            style={{
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            }}
                          >
                            {item.detail}
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="dropdown">
                          <button
                            type="button"
                            className="btn p-0 dropdown-toggle hide-arrow"
                            data-bs-toggle="dropdown"
                          >
                            <i className="bx bx-dots-vertical-rounded" />
                          </button>
                          <div className="dropdown-menu">
                            <Link
                              className="dropdown-item"
                              to="#"
                              id={item.id}
                              onClick={addTrash}
                            >
                              <i class="bx bx-share"></i> Khôi phục
                            </Link>
                            <Link
                              className="dropdown-item"
                              to="#"
                              id={item.id}
                              onClick={Delete}
                            >
                              <i className="bx bx-trash me-1" /> Xóa
                            </Link>
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
      <nav
        aria-label="Page navigation"
        style={{ textAlign: "center", marginTop: "10px" }}
      >
        <ul className="pagination" style={{ display: "inline-block" }}>
          {renderPageNumbers}
        </ul>
      </nav>
      <ToastContainer />
    </div>
  );
};

export default TrashProduct;
