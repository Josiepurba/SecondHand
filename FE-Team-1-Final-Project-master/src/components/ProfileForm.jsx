import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Form, Button } from "react-bootstrap";
import UploadImage from "../img/uploadImage.png";
import { useNavigate } from "react-router-dom";
import "../css/addProduct.css";
import "../css/Profile.css";
import Swal from "sweetalert2";
import { updateInfoUsers, clearStatus } from "../redux/actions/authActions";
import CurrencyFormat from "react-currency-format";
import { clearProduct } from "../redux/actions/productsActions";

const ProfileForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, user, isAuthenticated, status } = useSelector(
    (state) => state.auth
  );
  const [gambar, setGambar] = useState("");

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

  const imgPreview = (e) => {
    if (e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        document.getElementById("gambar").src = event.target.result;
      };
      reader.readAsDataURL(e.target.files[0]);
      setGambar(e.target.files[0]);
    } else {
      document.getElementById("gambar").src = UploadImage;
      setGambar("");
    }
  };

  useEffect(() => {
    if (window.location.pathname === "/profile") {
      cekUserInfo();
    }
  });

  function cekUserInfo() {
    if (!isAuthenticated) {
      Swal.fire({
        title: "Warning!!",
        text: "Harus login terlebih dahulu",
        icon: "warning",
        confirmButtonText: "Ok",
      }).then((result) => {
        if (result.isConfirmed) {
          return navigate("/login");
        }
      });
    } else {
      if (user !== null) {
        if (user.nama !== null)
          document.getElementById("nama").value = user.nama;
        if (user.kota !== null)
          document.getElementById("kota").value = user.kota;
        if (user.alamat !== null)
          document.getElementById("alamat").value = user.alamat;
        if (user.noHp !== null) document.getElementById("hp").value = user.noHp;
        if (user.gambar !== null) {
          document.getElementById("gambar").src = user.gambar;
          setGambar(user.gambar);
        }
      }
    }
  }

  const handleSubmit = async () => {
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
    if (
      gambar === "" ||
      document.getElementById("nama").value === "" ||
      document.getElementById("kota").value === "" ||
      document.getElementById("alamat").value === "" ||
      document.getElementById("hp").value === ""
    ) {
      Swal.fire({
        title: "Warning!!",
        text: "Harap isi semua field",
        icon: "warning",
        confirmButtonText: "Ok",
      });
    } else {
      dispatch(
        updateInfoUsers({
          nama: document.getElementById("nama").value,
          kota: document.getElementById("kota").value,
          alamat: document.getElementById("alamat").value,
          hp: document.getElementById("hp").value,
          gambar,
        })
      );
    }
  };

  if (status === "Updated") {
    dispatch(clearStatus());
    dispatch(clearProduct());
    return navigate("/");
  }

  return (
    <Container className="w-50 my-5 ">
      <div className="image-upload d-flex justify-content-center">
        <label htmlFor="file-input1" id="preview">
          <img
            id="gambar"
            className="display-none image-preview m-2"
            src={UploadImage}
            alt=""
          />
        </label>
        <input
          id="file-input1"
          name="gambar"
          type="file"
          onChange={imgPreview}
          required
        />
      </div>
      <Form.Group className="mb-3">
        <Form.Label className="font-weight">Nama*</Form.Label>
        <Form.Control
          className="form-text-box w-full resize-none rounded-2xl border border-neutral-02 bg-neutral-01 py-3 px-4 text-neutral-03 focus:outline-none"
          type="text"
          placeholder="Nama"
          id="nama"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label className="font-weight">Kota*</Form.Label>
        <Form.Control
          className="form-text-box w-full resize-none rounded-2xl border border-neutral-02 bg-neutral-01 py-3 px-4 text-neutral-03 focus:outline-none"
          type="text"
          placeholder="Kota"
          id="kota"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label className="font-weight ">Alamat*</Form.Label>
        <textarea
          id="alamat"
          rows="2"
          className="w-full resize-none rounded-2xl border border-neutral-02 bg-neutral-01 py-3 px-4 text-neutral-03 focus:outline-none"
          placeholder="Contoh: Jalan Ikan Hiu 33"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label className="font-weight">No Handphone*</Form.Label>
        <CurrencyFormat
          prefix={"+62"}
          placeholder="+62"
          className="form-control form-text-box w-full resize-none rounded-2xl border border-neutral-02 bg-neutral-01 py-3 px-4 text-neutral-03 focus:outline-none"
          id="hp"
        />
      </Form.Group>
      <div className="my-5">
        <Button
          variant="primary"
          onClick={handleSubmit}
          type="submit"
          className="w-100 form-text-box button-link"
        >
          Simpan
        </Button>
      </div>
    </Container>
  );
};
export default ProfileForm;
