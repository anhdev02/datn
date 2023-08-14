import React, { useEffect,  useState } from "react";
import { Link } from "react-router-dom";
import { confirm } from "react-confirm-box";
import { ToastContainer, toast } from "react-toastify";

const ListTV = () => {
  const [tv, setTV] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    document.title = 'Danh sách LocknLockTV';
    loadData();
  }, []);

  const loadData = () => {
    fetch("https://locknlock-dvxb.onrender.com/api/tv/list")
      .then((res) => res.json())
      .then((data) => {
        setTV(data);
      })
      .catch((err) => console.log(err));
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = tv.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(tv.length / itemsPerPage); i++) {
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

  const addTrash = async (event) => {
    event.preventDefault();
    const result = await confirm("Bạn có chắc muốn xóa LocknLockTV?", event);
    if (result) {
      var id = event.target.id;
      var url = "https://locknlock-dvxb.onrender.com/api/tv/" + id;
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
          toast.success("Đã xóa tạm thời LocknLockTV!", { position: "top-right" });
          loadData();
        })
        .catch((error) => console.log("error", error));
    }
  };
  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <h4 className="fw-bold py-3 mb-4">LocknLockTV</h4>
      <div className="card">
        <h5 className="card-header">Danh sách</h5>
        <div
          style={{ height: "75vh"}}
          className="table-responsive text-nowrap"
        >
          <table className="table table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>Hình ảnh</th>
                <th>Tên LocknLockTV</th>
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
                        <img width={60} src={`../../assets/imgs/${item.image}`} alt=""/>
                      </td>
                      <td>
                        <div style={{ width: "200px", marginTop: "2vh" }}>
                          <p
                            style={{
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            }}
                          >
                            <strong>{item.name}</strong>
                          </p>
                        </div>
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
                              to={"/dashboard/tv/edit/" + item.id}
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

export default ListTV;
