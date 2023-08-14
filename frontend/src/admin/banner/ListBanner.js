import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import { confirm } from "react-confirm-box";

const ListBanner = () => {
  const [banner, setBanner] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    document.title = 'Danh sách banner';
    loadData();
  }, [])

  const loadData = () => {
    fetch('https://locknlock-dvxb.onrender.com/api/banner/list')
    .then((res) => res.json())
    .then((data) => {
      setBanner(data);
      setCurrentPage(1);
    })
    .catch((err) => console.log(err));
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = banner.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(banner.length / itemsPerPage); i++) {
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
    const result = await confirm("Bạn có chắc muốn xóa banner?", event);
    if (result) {
      var id = event.target.id;
      var url = "https://locknlock-dvxb.onrender.com/api/banner/" + id
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
          toast.success("Đã xóa tạm thời banner!", { position: "top-right" });
          loadData();
        })
        .catch((error) => console.log("error", error));
    } 
  }
  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <h4 className="fw-bold py-3 mb-4">Banner</h4>
      <div className="card">
        <h5 className="card-header">Danh sách</h5>
        <div
          style={{ height: "50vh"}}
          className="table-responsive text-nowrap"
        >
          <table className="table table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>Hình ảnh</th>
                <th>Trạng thái</th>
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
                        <img width={100} src={`../../assets/imgs/${item.image}`} alt=""/>
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
                              to={"/dashboard/banner/edit/" + item.id}
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
  )
}

export default ListBanner