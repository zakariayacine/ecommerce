import "../style/addProduct.css";
import React from "react";
import Sidenav from "../components/layouts/sidenav";
import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCardFooter,
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBTextArea,
  MDBInput,
} from "mdb-react-ui-kit";
import { useState, useEffect } from "react";
function AddProduct() {
  const [basicModal, setBasicModal] = useState(false);
  const toggleShow = () => setBasicModal(!basicModal);
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [stock, setStock] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [photos, setPhotos] = useState("");
  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((res) => res.json())
      .then((result) => {
        setProducts(result.data.products);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let product = { name, stock, description, price, photos };
    fetch("http://localhost:3000/api/product/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    }).then(() => {
      window.location.href = "/";
    });
  };
  return (
    <div>
      <Sidenav />
      <div className="margin-content">
        <MDBCard alignment="center">
          <MDBCardHeader>
            <h5>
              Liste des produits
              <MDBBtn color="success float-end" onClick={toggleShow}>
                Add a new product
              </MDBBtn>
            </h5>
          </MDBCardHeader>
          <MDBCardBody>
            <MDBTable>
              <MDBTableHead>
                <tr>
                  <th scope="col">picture</th>
                  <th scope="col">Name</th>
                  <th scope="col">Stock</th>
                  <th scope="col">Price</th>
                  <th scope="col">Action</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                {products.map((product, index) => (
                  <tr>
                    <th>
                      <img src={product.photos} height={30} alt="product"></img>
                    </th>
                    <td>{product.name}</td>
                    <td>{product.stock}</td>
                    <td>{product.price}</td>
                    <td>
                      <MDBBtn href="" color="success">
                        Edit
                      </MDBBtn>
                      <MDBBtn color="danger">delete</MDBBtn>
                    </td>
                  </tr>
                ))}
              </MDBTableBody>
            </MDBTable>
          </MDBCardBody>
          <MDBCardFooter className="text-muted">
            created by boucetta zakaria yacine
          </MDBCardFooter>
        </MDBCard>
      </div>
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Ajouter un nouveau produit</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <form onSubmit={handleSubmit}>
                <MDBInput
                  label="Product name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  className="mb-3"
                />
                <MDBInput
                  label="Stock"
                  type="text"
                  value={stock}
                  onChange={(e) => setStock(e.target.value)}
                  className="mb-3"
                />
                <MDBInput
                  label="Price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  type="text"
                  className="mb-3"
                />
                <MDBInput
                  label="Photo url"
                  value={photos}
                  onChange={(e) => setPhotos(e.target.value)}
                  type="text"
                  className="mb-3"
                />
                <MDBTextArea
                  label="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={4}
                  className="mb-3"
                />
                <MDBBtn>Create</MDBBtn>
              </form>
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </div>
  );
}
export default AddProduct;
