import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useReducer } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const formatter = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
  minimumFractionDigits: 0,
});

const DetailsOrder = () => {
    const {id} = useParams();
    const orderId = id;
    var url = "https://locknlock-dvxb.onrender.com/api/orderdetail/" + orderId;
    const [order, setOrder] = useState();
    const [reducerCategory, forceUpdate] = useReducer((x) => x + 1, 0);
    useEffect(() => {
      document.title = 'Chi tiết đơn hàng';
        axios
          .get(url)
          .then((res) => {
            setOrder(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }, [reducerCategory]);
    

  return (
    <div className="container-xxl flex-grow-1 container-p-y">
    <h4 className="fw-bold py-3 mb-4">Chi tiết đơn hàng</h4>
    <div className="card">
      <h5 className="card-header">Đơn hàng {orderId}</h5>
      <div
        style={{ height: "50vh", overflowY: "scroll" }}
        className="table-responsive text-nowrap"
      >
        <table className="table table-hover">
          <thead>
            <tr>
              <th>ID order</th>
              <th>Hình ảnh</th>
              <th>Tên sản phẩm</th>
              <th>Số lượng</th>
              <th>Giá</th>
              <th>Giảm Giá(%)</th>
            </tr>
          </thead>
          <tbody className="table-border-bottom-0">
            {
              order && 
                order.map((item,index)=>{
                  return (
                  <tr key={index}>
                    <td>
                        {item.orderId}
                    </td>
                    <td>
                        <img width={60} src={`https://locknlock-d1171.web.app/assets/imgs/${item.image}`}/>
                    </td>
                    <td>
                    <div style={{width: '200px', marginTop: '2vh'}}>
                        <p style={{overflow:'hidden', textOverflow: 'ellipsis'}}>{item.productName}</p>
                    </div>
                    </td>
                    <td>{item.quantity}</td>
                    <td>
                        {formatter.format(item.price)}
                    </td>
                    <td>
                        {item.sale}
                    </td>
                  </tr>
                   )
                })
            }
          </tbody>
        </table>
      </div>
    </div>
    <Link to="/dashboard/order/confirm"><button type="button" className="btn btn-primary">Quay lai</button></Link>
  </div>
  )
}

export default DetailsOrder