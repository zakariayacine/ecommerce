import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import AddProduct from './pages/AddProduct';
import Orders from './pages/Orders';
import Order from './pages/Order';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes, Route} from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<AddProduct />} />
        <Route path="/inovice" element={<Orders />} />
        <Route path="/order/:Id" element={<Order />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
