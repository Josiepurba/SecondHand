import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProducts,
  getProductByKategory,
} from "../redux/actions/productsActions";
import { Button } from "react-bootstrap";
import SearchIcon from "@mui/icons-material/Search";
import { Typography } from "@mui/material";
import "../css/kategori.css";
import Swal from "sweetalert2";

function Kategori() {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.product);
  let statusFilter = "";

  React.useEffect(() => {
    if (status !== "produk kosong" && status === "" && status !== "logout") {
      Swal.fire({
        title: "Loading",
        text: "Mengambil data produk harap tunggu sebentar",
        icon: "info",
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        showConfirmButton: false,
        showCloseButton: false,
        showCancelButton: false,
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
      });
      dispatch(getAllProducts());
    }
  }, [dispatch, status]);

  const filterAll = (event) => {
    event.currentTarget.classList.remove("kategory-deactive");
    event.currentTarget.classList.add("kategory-active");
    document.getElementById("filter-hobi").classList.remove("kategory-active");
    document.getElementById("filter-hobi").classList.add("kategory-deactive");
    document
      .getElementById("filter-kendaraan")
      .classList.remove("kategory-active");
    document
      .getElementById("filter-kendaraan")
      .classList.add("kategory-deactive");
    document.getElementById("filter-baju").classList.remove("kategory-active");
    document.getElementById("filter-baju").classList.add("kategory-deactive");
    document
      .getElementById("filter-elektronik")
      .classList.remove("kategory-active");
    document
      .getElementById("filter-elektronik")
      .classList.add("kategory-deactive");
    document
      .getElementById("filter-kesehatan")
      .classList.remove("kategory-active");
    document
      .getElementById("filter-kesehatan")
      .classList.add("kategory-deactive");
    Swal.fire({
      title: "Loading",
      text: "Mengambil data produk harap tunggu sebentar",
      icon: "info",
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
      showConfirmButton: false,
      showCloseButton: false,
      showCancelButton: false,
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
    });
    dispatch(getAllProducts());
  };

  const filterByHobby = (event) => {
    statusFilter = "Hobi";
    event.currentTarget.classList.remove("kategory-deactive");
    event.currentTarget.classList.add("kategory-active");
    document.getElementById("filter-all").classList.remove("kategory-active");
    document.getElementById("filter-all").classList.add("kategory-deactive");
    document
      .getElementById("filter-kendaraan")
      .classList.remove("kategory-active");
    document
      .getElementById("filter-kendaraan")
      .classList.add("kategory-deactive");
    document.getElementById("filter-baju").classList.remove("kategory-active");
    document.getElementById("filter-baju").classList.add("kategory-deactive");
    document
      .getElementById("filter-elektronik")
      .classList.remove("kategory-active");
    document
      .getElementById("filter-elektronik")
      .classList.add("kategory-deactive");
    document
      .getElementById("filter-kesehatan")
      .classList.remove("kategory-active");
    document
      .getElementById("filter-kesehatan")
      .classList.add("kategory-deactive");
    Swal.fire({
      title: "Loading",
      text: "Mengambil data produk harap tunggu sebentar",
      icon: "info",
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
      showConfirmButton: false,
      showCloseButton: false,
      showCancelButton: false,
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
    });
    dispatch(getProductByKategory(statusFilter));
  };

  const filterByVehicle = (event) => {
    statusFilter = "Kendaraan";
    event.currentTarget.classList.remove("kategory-deactive");
    event.currentTarget.classList.add("kategory-active");
    document.getElementById("filter-all").classList.remove("kategory-active");
    document.getElementById("filter-all").classList.add("kategory-deactive");
    document.getElementById("filter-hobi").classList.remove("kategory-active");
    document.getElementById("filter-hobi").classList.add("kategory-deactive");
    document.getElementById("filter-baju").classList.remove("kategory-active");
    document.getElementById("filter-baju").classList.add("kategory-deactive");
    document
      .getElementById("filter-elektronik")
      .classList.remove("kategory-active");
    document
      .getElementById("filter-elektronik")
      .classList.add("kategory-deactive");
    document
      .getElementById("filter-kesehatan")
      .classList.remove("kategory-active");
    document
      .getElementById("filter-kesehatan")
      .classList.add("kategory-deactive");
    Swal.fire({
      title: "Loading",
      text: "Mengambil data produk harap tunggu sebentar",
      icon: "info",
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
      showConfirmButton: false,
      showCloseButton: false,
      showCancelButton: false,
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
    });
    dispatch(getProductByKategory(statusFilter));
  };

  const filterByCLothe = (event) => {
    statusFilter = "Baju";
    event.currentTarget.classList.remove("kategory-deactive");
    event.currentTarget.classList.add("kategory-active");
    document.getElementById("filter-all").classList.remove("kategory-active");
    document.getElementById("filter-all").classList.add("kategory-deactive");
    document.getElementById("filter-hobi").classList.remove("kategory-active");
    document.getElementById("filter-hobi").classList.add("kategory-deactive");
    document
      .getElementById("filter-kendaraan")
      .classList.remove("kategory-active");
    document
      .getElementById("filter-kendaraan")
      .classList.add("kategory-deactive");
    document
      .getElementById("filter-elektronik")
      .classList.remove("kategory-active");
    document
      .getElementById("filter-elektronik")
      .classList.add("kategory-deactive");
    document
      .getElementById("filter-kesehatan")
      .classList.remove("kategory-active");
    document
      .getElementById("filter-kesehatan")
      .classList.add("kategory-deactive");
    Swal.fire({
      title: "Loading",
      text: "Mengambil data produk harap tunggu sebentar",
      icon: "info",
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
      showConfirmButton: false,
      showCloseButton: false,
      showCancelButton: false,
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
    });
    dispatch(getProductByKategory(statusFilter));
  };

  const filterByElectronic = (event) => {
    statusFilter = "Elektronik";
    event.currentTarget.classList.remove("kategory-deactive");
    event.currentTarget.classList.add("kategory-active");
    document.getElementById("filter-all").classList.remove("kategory-active");
    document.getElementById("filter-all").classList.add("kategory-deactive");
    document.getElementById("filter-hobi").classList.remove("kategory-active");
    document.getElementById("filter-hobi").classList.add("kategory-deactive");
    document
      .getElementById("filter-kendaraan")
      .classList.remove("kategory-active");
    document
      .getElementById("filter-kendaraan")
      .classList.add("kategory-deactive");
    document.getElementById("filter-baju").classList.remove("kategory-active");
    document.getElementById("filter-baju").classList.add("kategory-deactive");
    document
      .getElementById("filter-kesehatan")
      .classList.remove("kategory-active");
    document
      .getElementById("filter-kesehatan")
      .classList.add("kategory-deactive");
    Swal.fire({
      title: "Loading",
      text: "Mengambil data produk harap tunggu sebentar",
      icon: "info",
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
      showConfirmButton: false,
      showCloseButton: false,
      showCancelButton: false,
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
    });
    dispatch(getProductByKategory(statusFilter));
  };

  const filterByHealth = (event) => {
    statusFilter = "Kesehatan";
    event.currentTarget.classList.remove("kategory-deactive");
    event.currentTarget.classList.add("kategory-active");
    document.getElementById("filter-all").classList.remove("kategory-active");
    document.getElementById("filter-all").classList.add("kategory-deactive");
    document.getElementById("filter-hobi").classList.remove("kategory-active");
    document.getElementById("filter-hobi").classList.add("kategory-deactive");
    document
      .getElementById("filter-kendaraan")
      .classList.remove("kategory-active");
    document
      .getElementById("filter-kendaraan")
      .classList.add("kategory-deactive");
    document.getElementById("filter-baju").classList.remove("kategory-active");
    document.getElementById("filter-baju").classList.add("kategory-deactive");
    document
      .getElementById("filter-elektronik")
      .classList.remove("kategory-active");
    document
      .getElementById("filter-elektronik")
      .classList.add("kategory-deactive");
    Swal.fire({
      title: "Loading",
      text: "Mengambil data produk harap tunggu sebentar",
      icon: "info",
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
      showConfirmButton: false,
      showCloseButton: false,
      showCancelButton: false,
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
    });
    dispatch(getProductByKategory(statusFilter));
  };

  return (
    <div className="container mt-5">
      <Typography variant="h6">Telusuri Kategori</Typography>
      <div className="d-flex justify-content-start scroll py-3">
        <Button
          startIcon={<SearchIcon />}
          id="filter-all"
          className="kategory-active btn-kategory me-2"
          onClick={filterAll}
        >
          <i className="bi bi-search me-2"></i>
          Semua
        </Button>
        <Button
          sx={{ borderRadius: "10px" }}
          startIcon={<SearchIcon />}
          id="filter-hobi"
          className="kategory-deactive btn-kategory me-2"
          onClick={filterByHobby}
        >
          <i className="bi bi-search me-2"></i>
          Hobi
        </Button>
        <Button
          sx={{ borderRadius: "10px" }}
          startIcon={<SearchIcon />}
          id="filter-kendaraan"
          className="kategory-deactive btn-kategory me-2"
          onClick={filterByVehicle}
        >
          <i className="bi bi-search me-2"></i>
          Kendaraan
        </Button>
        <Button
          className="kategory-deactive btn-kategory me-2"
          id="filter-baju"
          sx={{ borderRadius: "10px" }}
          startIcon={<SearchIcon />}
          onClick={filterByCLothe}
        >
          <i className="bi bi-search me-2"></i>
          Baju
        </Button>
        <Button
          className="kategory-deactive btn-kategory me-2"
          sx={{ borderRadius: "10px" }}
          startIcon={<SearchIcon />}
          id="filter-elektronik"
          onClick={filterByElectronic}
        >
          <i className="bi bi-search me-2"></i>
          Elektronik
        </Button>
        <Button
          className="kategory-deactive btn-kategory me-2"
          sx={{ borderRadius: "10px" }}
          id="filter-kesehatan"
          startIcon={<SearchIcon />}
          onClick={filterByHealth}
        >
          <i className="bi bi-search me-2"></i>
          Kesehatan
        </Button>
      </div>
    </div>
  );
}

export default Kategori;
