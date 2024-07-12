import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import "../css/Register.css";
import { Container, Form, Button } from "react-bootstrap";
import Swal from "sweetalert2";

import { clearStatus, register } from "../redux/actions/authActions";

function RightRegister() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { status } = useSelector((state) => state.auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nama, setName] = useState("");
  const [lihatPassword, setLihatPassword] = useState("password");

  const displayPassword = async (e) => {
    if (e.target.checked === true) {
      setLihatPassword("text");
    } else {
      setLihatPassword("password");
    }
  };

  const registerSubmit = async (e) => {
    e.preventDefault();
    if (nama === "") {
      Swal.fire({
        title: "Warning!!",
        text: "Nama tidak boleh kosong",
        icon: "warning",
        confirmButtonText: "Ok",
      });
      return;
    } else if (email === "") {
      Swal.fire({
        title: "Warning!!",
        text: "Email tidak boleh kosong",
        icon: "warning",
        confirmButtonText: "Ok",
      });
      return;
    } else if (
      // eslint-disable-next-line no-useless-escape
      email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) === null
    ) {
      Swal.fire({
        title: "Warning!!",
        text: "Email tidak valid",
        icon: "warning",
        confirmButtonText: "Ok",
      });
      return;
    } else if (password === "") {
      Swal.fire({
        title: "Warning!!",
        text: "Password tidak boleh kosong",
        icon: "warning",
        confirmButtonText: "Ok",
      });
      return;
    } else {
      Swal.fire({
        title: "Konfirmasi",
        text: "Data yang anda masukkan sudah benar?",
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
          dispatch(register({ nama, email, password }));
        }
      });
    }
  };
  useEffect(() => {
    if (status === "register success") {
      dispatch(clearStatus());
      return navigate("/login");
    }
  }, [dispatch, navigate, status]);
  return (
    <>
      <Container className="form-container">
        <Form className="form" onSubmit={registerSubmit}>
          <h3>Daftar</h3>
          <Form.Group controlId="formBasicName" className="margin-component">
            <Form.Label className="label">Nama</Form.Label>
            <Form.Control
              type="text"
              className="form-border"
              placeholder="Name Lengkap"
              value={nama}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail" className="margin-component">
            <Form.Label className="label">Email</Form.Label>
            <Form.Control
              type="text"
              className="form-border"
              placeholder="Contoh: johndee@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="password" className="margin-component">
            <Form.Label className="label">Password</Form.Label>
            <Form.Control
              type={lihatPassword}
              className="form-border"
              placeholder="Masukkan password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="margin-component">
            <Form.Check
              type="checkbox"
              label="Lihat password"
              id="seePassword"
              onChange={displayPassword}
            />
          </Form.Group>
          <div className="margin-component">
            <Button type="submit" className="w-100 color form-border mt-2 mb-3">
              Daftar
            </Button>
          </div>
          <Form.Text className="margin-component">
            <center>
              Sudah punya akun?
              <Link to="/login"> Masuk disini</Link>
            </center>
          </Form.Text>
        </Form>
      </Container>
    </>
  );
}

export default RightRegister;
