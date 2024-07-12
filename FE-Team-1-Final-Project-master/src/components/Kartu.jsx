import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Card, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import productImg from "../img/product.png";
import { getProductById } from "../redux/actions/productsActions";

import "../css/kartuHomepage.css";
import Swal from "sweetalert2";
import CurrencyFormat from "react-currency-format";

const Kartu = () => {
  const { product, status, productdetail } = useSelector(
    (state) => state.product
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (id) => {
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
    dispatch(getProductById(id));
  };

  if (status === "Get Product") {
    return navigate("/preview/" + productdetail.id);
  }

  return (
    <Container className="mb-5">
      <Row>
        {product.length === 0 || product.message === "Product is Empty" ? (
          <>
            <center>
              <img
                src={productImg}
                alt="produk tidak tersedia.png"
                className="mt-5"
              />
              <h3 className="mb-5 pt-5 text-center">Produk Tidak Tersedia</h3>
            </center>
          </>
        ) : (
          product.map((product) => (
            <>
              {product.productpics.length === 0 ? (
                <></>
              ) : (
                <Col
                  key={product.id}
                  lg={2}
                  md={3}
                  sm={4}
                  xs={6}
                  className="mt-3"
                >
                  <Card
                    className="product-card"
                    onClick={() => handleSubmit(product.id)}
                  >
                    <Card.Img
                      variant="top"
                      src={product.productpics[0].gambar}
                      className="product-img"
                    />
                    <Card.Body>
                      <p className="product-nama mb-1">{product.nama}</p>
                      <p className="product-kategori mb-1">
                        {product.kategori}
                      </p>
                      <CurrencyFormat
                        className="product-harga"
                        value={product.harga}
                        thousandSeparator={"."}
                        decimalSeparator={","}
                        prefix={"Rp. "}
                        placeholder="Rp 0.00"
                        displayType="text"
                      />
                    </Card.Body>
                  </Card>
                </Col>
              )}
            </>
          ))
        )}
      </Row>
    </Container>
  );
};

export default Kartu;
