import React, { useEffect,  useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { confirm } from "react-confirm-box";


const ListUser = () => {
  const [user, setUser] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  useEffect(() => {
    document.title = 'Người dùng đang hoạt động';
    loadData();
  }, []);

  const loadData = () => {
    fetch('https://locknlock-dvxb.onrender.com/api/user/list')
    .then((res) => res.json())
    .then((data) => {
      setUser(data);
    })
    .catch((err) => console.log(err));
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = user.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(user.length / itemsPerPage); i++) {
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
    const result = await confirm("Bạn có chắc muốn xóa người dùng?", event);
    if (result) {
      var id = event.target.id;
      var url = "https://locknlock-dvxb.onrender.com/api/user/"+id;
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
          toast.success("Đã xóa tạm thời người dùng!", { position: "top-right" });
          loadData();
        })
        .catch((error) => console.log("error", error));
    }
   
  }

  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <h4 className="fw-bold py-3 mb-4">Người dùng</h4>
      <div className="card">
        <h5 className="card-header">Danh sách</h5>
        <div
          style={{ height: "50vh" }}
          className="table-responsive text-nowrap"
        >
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Tài khoản</th>
                <th>Điện thoại</th>
                <th>Email</th>
                <th>Vai trò</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody className="table-border-bottom-0">
              {currentItems &&
                currentItems.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <strong>{item.username}</strong>
                      </td>
                      <td>{item.phone}</td>
                      <td>
                        {item.email === null
                          ? "Chưa có email"
                          : item.email}
                      </td>
                      <td>
                        {item.roles.length <= 1
                          ? item.roles[0].name
                          : item.roles.map((role) => {
                              return (
                                <span>
                                  {role.name}
                                  <br />
                                </span>
                              );
                            })}
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
                              to={"/dashboard/user/edit/" + item.id}
                            >
                              <i className="bx bx-edit-alt me-1" /> Chỉnh sửa
                            </Link>
                            <Link
                              className="dropdown-item"
                              id={item.id}
                              to="#"
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

export default ListUser;
