import React from "react";
import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";

function Protected({ children }) {
  if (!localStorage.getItem("token")) {
    Swal.fire({
      title: "Warning!!",
      text: "Anda harus login terlebih dahulu untuk mengakses halaman ini",
      icon: "warning",
      confirmButtonText: "Ok",
    });
    return <Navigate to={`/login`} />;
  }
  return children;
}

export default Protected;
