import React from "react";
import Sidenav from "../components/layouts/sidenav";
import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBBtn,
} from "mdb-react-ui-kit";
import { useState, useEffect } from "react";
function Inovice() {
  const [inovices, setInovice] = useState([]);
  let totalprice = 0;
  useEffect(() => {
    fetch("http://localhost:3000/api/inovices")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setInovice(result.data.inovice);
      });
  }, []);
  return (
    <div className="margin-content">
      <Sidenav />
      <MDBCard>
        <MDBCardHeader>
          <h4>inovices list</h4>
        </MDBCardHeader>
        <MDBCardBody>
          <MDBTable striped>
            <MDBTableHead>
              <tr>
                <th scope="col">inovice N°</th>
                <th scope="col">created at</th>
                <th scope="col">Show</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              {inovices.map((inovice, index) => (
                <tr>
                  <th scope="row">{inovice.id}</th>
                  <td>{inovice.created_at}</td>
                  <td>
                    <MDBBtn
                      style={{ backgroundColor: "#3b5998" }}
                      href={"/order/" + inovice.id}
                    >
                      Show orders
                    </MDBBtn>
                  </td>
                </tr>
              ))}
            </MDBTableBody>
          </MDBTable>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
}
export default Inovice;
