import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import React, { useEffect,  useState } from "react";
import { Link } from "react-router-dom";
import { confirm } from "react-confirm-box";

const ListCategory = () => {
  const [allCat, setAllCat] = useState([]);
  const [category, setCategory] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    document.title = 'Danh sách danh mục';
    fetch("https://locknlock-dvxb.onrender.com/api/category/all")
    .then((res) => res.json())
    .then((data) => {
      setAllCat(data);
    })
    .catch((err) => console.log(err));
    loadData();
  }, []);


  const loadData = () => {
    fetch('https://locknlock-dvxb.onrender.com/api/category/list')
    .then((res) => res.json())
    .then((data) => {
      setCategory(data);
    })
    .catch((err) => console.log(err));
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = category.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(category.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleClick = (event) => {
    event.preventDefault();
    setCurrentPage(Number(event.target.id));
  };

  const renderPageNumbers = pageNumbers.map((number) => {
    const activeClass = number === currentPage ? "active" : "";
    return (
        <li className={`page-item ${activeClass}`} style={{display: "inline-block"}}>
          <a onClick={handleClick} id={number} className="page-link" href="#st">{number}</a>
        </li>
    );
  });

  const addTrash = async (event) => {
    event.preventDefault();
    const result = await confirm("Bạn có chắc muốn xóa danh mục?", event);
    if (result) {
      var id = event.target.id;
      var url = "https://locknlock-dvxb.onrender.com/api/category/" + id
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        status: false,
        trash: true,
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
        toast.success("Đã xóa tạm thời danh mục!", { position: "top-right" });
        loadData();
      })
      .catch((error) => console.log("error", error));
    } 
  }
  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <h4 className="fw-bold py-3 mb-4">Danh mục</h4>
      <div className="card">
        <h5 className="card-header">Danh sách</h5>
        <div
          style={{ height: "50vh"}}
          className="table-responsive text-nowrap"
        >
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Hình ảnh</th>
                <th>Tên danh mục</th>
                <th>Danh mục cha</th>
                <th>Trạng thái</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody className="table-border-bottom-0">
              {currentItems &&
                currentItems.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <img hidden={item.image === null ? true : false } width={60} src={`../../assets/imgs/${item.image}`} alt=""/>
                      </td>
                      <td>
                        <strong>{item.categoryName}</strong>
                      </td>
                      <td>
                        {item.parent === 0
                          ? "Danh mục gốc"
                          : allCat.map((subcat, index) => {
                              if (item.parent === subcat.id) {
                                return subcat.categoryName;
                              }
                            })}
                      </td>
                      <td>
                        {item.status === false ? (
                          <span className="badge bg-label-primary me-1">
                            Inactive
                          </span>
                        ) : (
                          <span className="badge bg-label-success me-1">
                            Active
                          </span>
                        )}
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
                              to={"/dashboard/category/edit/" + item.id}
                            >
                              <i className="bx bx-edit-alt me-1" /> Chỉnh sửa
                            </Link>
                            <Link
                              className="dropdown-item"
                              to="#"
                              id={item.id}
                              onClick={addTrash}
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
      <nav aria-label="Page navigation" style={{textAlign: "center", marginTop: "10px"}}>
        <ul className="pagination" style={{display: "inline-block"}}>
          {renderPageNumbers}
        </ul>
      </nav>
      <ToastContainer />
    </div>
  );
};

export default ListCategory;
