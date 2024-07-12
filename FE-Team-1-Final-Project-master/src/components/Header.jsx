import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import {
  Container,
  Navbar,
  Nav,
  Button,
  Offcanvas,
  Stack,
  Dropdown,
  InputGroup,
  Form,
  Badge,
} from "react-bootstrap";
import CurrencyFormat from "react-currency-format";
import SimpleDateTime from "react-simple-timestamp-to-date";
import { clearStatus, logout, whoami } from "../redux/actions/authActions";
import Brand from "../img/Brand.png";
import SearchIcon from "../img/fi_search.png";
import LoginIcon from "../img/fi_log-in.png";
import ListIcon from "../img/fi_list.png";
import Bell from "../img/fi_bell.png";
import User from "../img/fi_user.png";

import "../css/header.css";

import {
  getProductByNama,
  getAllProducts,
  clearProduct,
  clearAllProduct,
  clearStatusProduct,
} from "../redux/actions/productsActions";
import {
  getTransactionBuyer,
  getTransactionSeller,
} from "../redux/actions/transactionsActions";
import Swal from "sweetalert2";

const NavbarComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, user, status } = useSelector((state) => state.auth);
  const { transactionSeller } = useSelector((state) => state.transaction);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(whoami());
      dispatch(getTransactionBuyer());
      dispatch(getTransactionSeller());
    }
  }, [dispatch, isAuthenticated]);

  const handleLogout = () => {
    dispatch(logout());
  };

  useEffect(() => {
    if (status === "logout" && !localStorage.getItem("token")) {
      dispatch(clearStatus());
      dispatch(clearProduct());
      return navigate("/");
    }
  }, [dispatch, navigate, status]);

  setTimeout(() => {
    if (localStorage.getItem("token")) {
      dispatch(whoami());
    }
  }, 5 * 60000);

  const handleLoginButton = async () => {
    dispatch(clearProduct());
  };

  const handleDaftarJual = async () => {
    dispatch(clearAllProduct());

    return navigate("/daftarjual");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let keyword = document.getElementById("form-search").value;
    if (window.location.pathname !== "/") {
      if (keyword === "") {
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
      } else {
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
        dispatch(getProductByNama(keyword));
      }
      return navigate("/");
    }
    if (keyword === "") {
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
    } else {
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
      dispatch(getProductByNama(keyword));
    }
  };

  const handleHome = async (e) => {
    e.preventDefault();
    if (status !== "Get All") {
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
    return navigate("/");
  };

  const handleBeranda = async (e) => {
    e.preventDefault();
    dispatch(clearProduct());
    dispatch(clearStatusProduct());
    return navigate("/");
  };

  const handleTransaksi = async (e) => {
    e.preventDefault();
    return navigate("/notification");
  };

  let transactionFiltered, transactionTotal;
  if (transactionSeller !== undefined) {
    transactionFiltered = transactionSeller.filter(
      (tr) => tr.status !== "Selesai" && tr.status !== "Ditolak"
    );

    transactionTotal = transactionFiltered.length;
  }
  return (
    <Container>
      <div className="navbar-component py-1">
        {["md"].map((expand) => (
          <Navbar
            key={expand}
            expand={expand}
            className="navbar-body py-1"
            fixed="top"
          >
            <Container className="navbar-body">
              <Navbar.Brand>
                <Button onClick={handleHome} className="btn-home">
                  <img src={Brand} alt="" />
                </Button>
              </Navbar.Brand>

              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Second Hand
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1">
                    {!user ? (
                      <>
                        {/* Search Box */}
                        <div className="search-box me-auto">
                          <InputGroup>
                            <Form onSubmit={handleSubmit}>
                              <div className="search-wrapper">
                                <Form.Control
                                  id="form-search"
                                  placeholder="Cari di sini ..."
                                  className="search-box-field"
                                />
                                <img src={SearchIcon} alt="" />
                              </div>
                            </Form>
                          </InputGroup>
                        </div>
                        {/* Login */}
                        <div className="fw-bold">
                          <Link to="/login" onClick={handleLoginButton}>
                            <Button className="button-link border-0">
                              <img src={LoginIcon} alt="" />
                              Masuk
                            </Button>
                          </Link>
                        </div>
                      </>
                    ) : (
                      <>
                        {/* Search Box */}
                        <div className="search-box me-auto">
                          <InputGroup>
                            <Form onSubmit={handleSubmit}>
                              <div className="search-wrapper">
                                <Form.Control
                                  id="form-search"
                                  placeholder="Cari di sini ..."
                                  className="search-box-field"
                                />
                                <img src={SearchIcon} alt="" />
                              </div>
                            </Form>
                          </InputGroup>
                        </div>
                        {/* Menu */}
                        <Dropdown>
                          <Dropdown.Toggle
                            id="dropdown-basic"
                            className="navbar-icon"
                          >
                            <img src={ListIcon} alt="" />
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item onClick={handleBeranda}>
                              Beranda
                            </Dropdown.Item>
                            <Dropdown.Item onClick={handleDaftarJual}>
                              Daftar Jual
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                        {/* Notification */}
                        <Dropdown>
                          <Dropdown.Toggle
                            id="dropdown-basic"
                            className="navbar-icon"
                          >
                            <img src={Bell} alt="" />
                            {transactionTotal !== 0 ? (
                              <Badge
                                pill
                                bg="danger"
                                style={{
                                  position: "absolute",
                                }}
                              >
                                {transactionTotal}
                              </Badge>
                            ) : (
                              <></>
                            )}
                          </Dropdown.Toggle>
                          <Dropdown.Menu className="notif">
                            <Dropdown.Item onClick={handleTransaksi}>
                              Transaksi
                            </Dropdown.Item>
                            {transactionSeller !== undefined ? (
                              <>
                                {transactionSeller.map((item, index) => {
                                  return (
                                    <Dropdown.Item
                                      key={`modal${index}`}
                                      onClick={() => navigate("/notification")}
                                    >
                                      <Stack
                                        direction="horizontal"
                                        gap={3}
                                        style={{
                                          overFlow: "auto",
                                        }}
                                      >
                                        <img
                                          src={
                                            item.product.productpics[0].gambar
                                          }
                                          alt=""
                                          className="imageSmall align-self-start mt-1"
                                        />
                                        <div>
                                          <p
                                            className="my-auto"
                                            style={{
                                              fontSize: "10px",
                                              color: "#BABABA",
                                            }}
                                          >
                                            Penawaran Produk
                                          </p>
                                          <h5
                                            className="my-auto"
                                            style={{
                                              fontSize: "12px",
                                              lineHeight: "22px",
                                            }}
                                          >
                                            {item.product.nama}
                                          </h5>
                                          <h5
                                            className="my-auto"
                                            style={{
                                              fontSize: "12px",
                                              lineHeight: "22px",
                                            }}
                                          >
                                            <CurrencyFormat
                                              value={item.product.harga}
                                              displayType={"text"}
                                              thousandSeparator={"."}
                                              decimalSeparator={","}
                                              prefix={"Rp. "}
                                            />
                                          </h5>
                                          <h5
                                            className="my-auto"
                                            style={{
                                              fontSize: "12px",
                                              lineHeight: "22px",
                                            }}
                                          >
                                            Ditawar{" "}
                                            <CurrencyFormat
                                              value={item.penawaran}
                                              displayType={"text"}
                                              thousandSeparator={"."}
                                              decimalSeparator={","}
                                              prefix={"Rp. "}
                                            />
                                          </h5>
                                        </div>
                                        <p
                                          className="align-self-start ms-auto"
                                          style={{
                                            fontSize: "12px",
                                            color: "#BABABA",
                                          }}
                                        >
                                          <SimpleDateTime
                                            dateSeparator="-"
                                            format="MYD"
                                            showTime="1"
                                            timeSeparator=":"
                                            meridians="1"
                                          >
                                            {item.createdAt}
                                          </SimpleDateTime>
                                        </p>
                                      </Stack>
                                    </Dropdown.Item>
                                  );
                                })}
                              </>
                            ) : (
                              <></>
                            )}
                          </Dropdown.Menu>
                        </Dropdown>
                        {/* Profile */}
                        <Dropdown>
                          <Dropdown.Toggle
                            id="dropdown-basic"
                            className="navbar-icon"
                          >
                            <img src={User} alt="" />
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item onClick={() => navigate("/profile")}>
                              Akun Saya
                            </Dropdown.Item>
                            <Dropdown.Item onClick={handleLogout}>
                              Keluar
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </>
                    )}
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </div>
    </Container>
  );
};

export default NavbarComponent;
