import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import "./index.css";

import App from "./App";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Preview from "./pages/Preview";
import AddProduct from "./pages/InfoProduct";
import EditProfile from "./pages/EditProfile";
import EditProduk from "./pages/EditProduct";
import NotFound from "./components/404";
import DaftarJual from "./pages//DaftarJual";
import reportWebVitals from "./reportWebVitals";
import Transaksi from "./pages/Transaksi";
import Protected from "./components/Protected";
import { Provider } from "react-redux";
import { GoogleOAuthProvider } from "@react-oauth/google";
import store from "./redux/store";
import "./css/parent.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/." element={<App />} />
        <Route
          path="/login"
          element={
            <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_ID}>
              <Login />
            </GoogleOAuthProvider>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/preview/:id" element={<Preview />} />
        <Route
          path="/addproduct"
          element={
            <Protected>
              <AddProduct />
            </Protected>
          }
        />
        <Route
          path="/profile"
          element={
            <Protected>
              <EditProfile />
            </Protected>
          }
        />
        <Route
          path="/daftarjual"
          element={
            <Protected>
              <DaftarJual />
            </Protected>
          }
        ></Route>
        <Route
          path="/editproduct/:id"
          element={
            <Protected>
              <EditProduk />
            </Protected>
          }
        ></Route>
        <Route
          path="/notification"
          element={
            <Protected>
              <Transaksi />
            </Protected>
          }
        ></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
