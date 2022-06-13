import React from "react";
import Sidenav from "../components/layouts/sidenav";
import {useParams} from "react-router-dom";
import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
} from "mdb-react-ui-kit";
import { useState, useEffect } from "react";
function Orders() {
  let {Id} = useParams();
  const [orders, setOrders] = useState([]);
  const [user, setUser] = useState([]);
  let totalprice = 0;
  let user_id = 1;
  useEffect(() => {
    fetch("http://localhost:3000/api/orders/"+Id)
      .then((res) => res.json())
      .then((result) => {
        setOrders(result.data.orders);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/api/user/"+user_id)
      .then((res) => res.json())
      .then((result) => {
        setUser(result.data.user);
      });
  }, []);
  return (
    <div className="margin-content">
      <Sidenav />
      <MDBCard>
          <MDBCardHeader>
              <h4>Order number : {Id}</h4>
              <p>Contact :</p>
              {
              user.map((user, index) => (
              <div><p>Nom du client: {user.name}</p>
              <p>email : {user.email}</p></div>))
              }
          </MDBCardHeader>
          <MDBCardBody>
          <MDBTable striped>
      <MDBTableHead>
        <tr>
          <th scope='col'>picture</th>
          <th scope='col'>Name</th>
          <th scope='col'>Qtty</th>
          <th scope='col'>Unit Price</th>
          <th scope='col'>Total Price</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
      {
      orders.map((order, index) => (
          totalprice += Number(order.total),
            <tr>
            <th scope='row'><img src={order.photos} alt={order.name} height={30}></img></th>
            <td>{order.name}</td>
            <td>{order.qtt}</td>
            <td>{order.price}</td>
            <td>{order.total}</td>
            </tr>
        ))}
        <tr>
            <td colSpan={4}></td>
            <td>Prix total: {totalprice}</td>
            </tr>
      </MDBTableBody>
    </MDBTable>
          </MDBCardBody>
      </MDBCard>

    </div>
  );
}
export default Orders;
