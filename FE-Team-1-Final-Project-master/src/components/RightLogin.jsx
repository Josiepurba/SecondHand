import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../css/Register.css";
import { Container, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useGoogleLogin } from "@react-oauth/google";
import {
  login,
  loginWithGoogle,
  clearStatus,
} from "../redux/actions/authActions";

import Swal from "sweetalert2";

function RightLogin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, status } = useSelector((state) => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (error) {
      Swal.fire({
        title: "Warning!!",
        text: error,
        icon: "warning",
        confirmButtonText: "Ok",
      });
    }
  }, [error]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "") {
      Swal.fire({
        title: "Warning!!",
        text: "Email harus diisi",
        icon: "warning",
        confirmButtonText: "Ok",
      });
      return;
    }
    if (password === "") {
      Swal.fire({
        title: "Warning!!",
        text: "Password harus diisi",
        icon: "warning",
        confirmButtonText: "Ok",
      });
      return;
    }
    if (email !== "" && password !== "") {
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
      dispatch(login({ email, password }));
    }
  };

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
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
      dispatch(loginWithGoogle(tokenResponse.access_token));
    },
    onError: (error) => {
      alert(error);
    },
  });

  if (status === "login success") {
    navigate("/");
    dispatch(clearStatus());
  }
  return (
    <>
      <Container className="form-container">
        <Form className="form" onSubmit={handleSubmit}>
          <h3>Masuk</h3>
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
              type="password"
              className="form-border"
              placeholder="Masukkan password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <div className="margin-component">
            <Button type="submit" className="w-100 color form-border mt-2 mb-3">
              Masuk
            </Button>
          </div>
          <Form.Text className="margin-component">
            <center>
              Belum punya akun?
              <Link to="/register"> Daftar disini</Link>
              <div className="mb-2 mt-2">Or</div>
              <Button
                type="button"
                variant="success"
                className="w-100 form-border color-google mt-2 mb-3"
                onClick={() => handleGoogleLogin()}
              >
                <FontAwesomeIcon icon={faGoogle} /> Sign in with Google
              </Button>
            </center>
          </Form.Text>
        </Form>
      </Container>
    </>
  );
}

export default RightLogin;
