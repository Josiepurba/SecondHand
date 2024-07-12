import {
  Carousel,
  Row,
  Col,
  Container,
  Button,
  Modal,
  Stack,
  Form,
} from "react-bootstrap";
import "../css/Preview.css";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import {
  clearProduct,
  getProductById,
  deleteProduct,
} from "../redux/actions/productsActions";
import { createTransaction } from "../redux/actions/transactionsActions";
import Swal from "sweetalert2";
import CurrencyFormat from "react-currency-format";
import User from "../img/user.png";

const PreviewProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const { productdetail, status } = useSelector((state) => state.product);
  const { statusTR } = useSelector((state) => state.transaction);
  let productId = useParams();

  useEffect(() => {
    if (productdetail.length === 0) {
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
      dispatch(getProductById(productId.id));
    }
  }, [dispatch, productId.id, productdetail.length]);

  const [negotiation, setNegotiation] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    const { nama, kota, alamat, noHp } = user;
    if (nama === null || kota === null || alamat === null || noHp === null) {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "Harap Lengkapi Info Akun",
        showConfirmButton: false,
        timer: 1000,
      });
      return navigate("/profile");
    } else if (negotiation === "") {
      Swal.fire({
        position: "top-end",
        icon: "warning",
        title: "Harap isi nilai negosiasi",
        showConfirmButton: false,
        timer: 1000,
      });
    } else {
      let data = {
        idUser: user.id,
        idProduct: productdetail.id,
        penawaran: parseInt(negotiation.replace(/[^0-9]/g, "")),
        status: "Menunggu",
      };
      Swal.fire({
        title: "Loading",
        text: "Permintaan sedang diproses harap tunggu sebentar",
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
      dispatch(createTransaction(data));
    }
  };

  const handleEdit = async () => {
    dispatch(clearProduct());
    return navigate("/editproduct/" + productId.id);
  };

  const handleHapus = async () => {
    Swal.fire({
      title: "Konfirmasi",
      text: "Produk akan terhapus secara permanen, apakah anda yakin untuk mengapus produk ini?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Loading",
          text: "Permintaan anda sedang diproses, harap tunggu sebentar",
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
        dispatch(deleteProduct(productId.id));
      }
    });
  };

  if (status === "deleted") {
    dispatch(clearProduct());
    return navigate("/");
  }

  if (statusTR === "OK") {
    dispatch(clearProduct());
    return navigate("/");
  }

  return (
    <>
      {productdetail.length === 0 ? (
        <></>
      ) : (
        <Container>
          <Row>
            <Col lg={10} md={12} sm={12} className="mx-auto">
              <Row className="gx-5 justify-content-center mt-4">
                <Col sm={8}>
                  <Row>
                    <Carousel variant="dark" className="preview-carousel">
                      {productdetail.productpics.length === 0 ? (
                        <></>
                      ) : (
                        productdetail.productpics.map((productpics, index) => (
                          <Carousel.Item
                            key={index}
                            className="preview-carousel"
                          >
                            <img
                              className="d-block w-100 h-100"
                              style={{ objectFit: "contain" }}
                              src={productpics.gambar}
                              alt="First slide"
                            />
                          </Carousel.Item>
                        ))
                      )}
                    </Carousel>
                  </Row>
                  <Row
                    className="mx-1 mt-4 mb-4 shadow-sm"
                    style={{ borderRadius: "20px" }}
                  >
                    <p className="fw-bold text-family ps-3 pt-3 pb-3">
                      Deskripsi
                    </p>
                    <p className="text-color ps-3 lh-base pb-3">
                      {productdetail.deskripsi}
                    </p>
                  </Row>
                </Col>
                <Col sm={4}>
                  <Row className="shadow-sm" style={{ borderRadius: "20px" }}>
                    <p className="fw-bold text-family ps-4 fs-4 pt-3">
                      {productdetail.nama}
                    </p>
                    <p className="text-color ps-4 pt-1">
                      {productdetail.kategori}
                    </p>
                    <CurrencyFormat
                      className="fw-bold text-family ps-4 pt-3"
                      value={productdetail.harga}
                      thousandSeparator={"."}
                      decimalSeparator={","}
                      prefix={"Rp. "}
                      placeholder="Rp 0.00"
                      displayType={"text"}
                      required
                    />

                    {localStorage.getItem("token") && user ? (
                      <>
                        {productdetail.user.id === user.id ? (
                          <>
                            <div className="d-grid mt-4 gap-3">
                              <Button
                                className="button-edit fw-semibold mb-1 text-black"
                                style={{ backgroundColor: "white" }}
                                onClick={handleEdit}
                              >
                                Edit
                              </Button>
                              <Button
                                className="button-delete fw-semibold mb-4 text-black"
                                style={{ backgroundColor: "white" }}
                                onClick={handleHapus}
                              >
                                Hapus
                              </Button>
                            </div>
                          </>
                        ) : (
                          <div className="d-grid mt-4 gap-3">
                            <Button
                              className="button-add fw-semibold text-white"
                              style={{ backgroundColor: "#7126B5" }}
                              onClick={handleShow}
                            >
                              Saya tertarik dan ingin nego
                            </Button>
                            <Modal
                              show={show}
                              onHide={handleClose}
                              centered
                              contentClassName="custom-modal"
                            >
                              <Modal.Header
                                variant="Header"
                                className="modalHeader"
                                closeButton
                              ></Modal.Header>
                              <Modal.Body className="judul">
                                Masukan tawaranmu di sini!
                              </Modal.Body>
                              <Modal.Body>
                                Harga tawaranmu akan diketahui penjual, jika
                                penjual cocok kamu akan segera dihubungi
                                penjual.
                                <Stack
                                  direction="horizontal"
                                  gap={3}
                                  className="infoPenjual mt-3"
                                >
                                  <img
                                    src={productdetail.productpics[0].gambar}
                                    alt=""
                                    className="image-profile"
                                  />
                                  <div>
                                    <h5 className="my-auto">
                                      {productdetail.nama}
                                    </h5>
                                    <p className="my-auto mt-2">
                                      <CurrencyFormat
                                        value={productdetail.harga}
                                        displayType={"text"}
                                        thousandSeparator={"."}
                                        decimalSeparator={","}
                                        prefix={"Rp. "}
                                      />
                                    </p>
                                  </div>
                                </Stack>
                                <Form className="nego">
                                  <Form.Group className="mb-3" controlId="">
                                    <Form.Label className="formLabel formLabelNego">
                                      Harga Tawar
                                    </Form.Label>
                                    <CurrencyFormat
                                      className="form-control formInput formNego"
                                      placeholder="Rp xxx"
                                      onChange={(e) =>
                                        setNegotiation(e.target.value)
                                      }
                                      thousandSeparator={"."}
                                      decimalSeparator={","}
                                      prefix={"Rp. "}
                                    />
                                  </Form.Group>
                                </Form>
                              </Modal.Body>
                              <Modal.Footer className="modalFooter">
                                <Button
                                  className="btnNego"
                                  variant="primary"
                                  onClick={handleSubmit}
                                >
                                  Kirim
                                </Button>
                              </Modal.Footer>
                            </Modal>
                          </div>
                        )}
                      </>
                    ) : (
                      <></>
                    )}
                  </Row>
                  <Row
                    className="mt-4 pt-3 shadow-sm"
                    style={{ borderRadius: "20px" }}
                  >
                    <Col lg={2} sm={3} className="me-3">
                      {productdetail.user.gambar !== null ? (
                        <div className="layout-foto">
                          <img
                            className="foto"
                            src={productdetail.user.gambar}
                            alt="Foto Profile"
                          />
                        </div>
                      ) : (
                        <div className="layout-foto">
                          <img className="foto" src={User} alt="Foto Profile" />
                        </div>
                      )}
                    </Col>
                    <Col lg={9} sm={10}>
                      <p className="fw-bold text-family ps-3 fs-6">
                        {productdetail.user.nama}
                      </p>
                      <p
                        className="text-color ps-3 fs-6 pt-2 pb-2"
                        style={{ marginTop: "-5px" }}
                      >
                        {productdetail.user.kota}
                      </p>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default PreviewProduct;
