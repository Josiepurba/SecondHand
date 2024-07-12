import React, { useState } from "react";
import Header from "../components/Header";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import CardName from "../components/CardName";
import Modal from "react-bootstrap/Modal";

import image1 from "../img/profileseller.png";
import image2 from "../img/jam-image.png";

const InfoPenawar = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const handleClose1 = () => setShow(false);
  const handleShow1 = () => setShow(true);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  return (
    <>
      <div className="mb-5">
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 position-relative mx-auto">
              <div
                className="position-absolute"
                style={{ top: "30px", left: "-40px" }}
              >
                <AiOutlineArrowLeft className="d-none d-lg-block" size={20} />
              </div>
              <CardName />
              <h6 className="fw-bold my-4">Daftar Produkmu yang Ditawar</h6>

              <div className="card border-bottom border-0">
                <div className="d-flex container px-2">
                  <div className="">
                    <div>
                      <img
                        src={image2}
                        className="img-fluid rounded"
                        alt="..."
                      />
                    </div>
                  </div>
                  <div className="w-100 ms-3">
                    <div className="card-body p-0">
                      <p
                        className="text-muted fs-6 mb-0"
                        style={{ fontSize: 10 }}
                      >
                        <small>Penawaran produk</small>
                        <small className="float-end">20 Apr, 14:04</small>
                      </p>
                      <p className="card-text mb-0">Jam Tangan Casio</p>
                      <p className="card-text mb-0">Rp 250.000</p>
                      <p className="card-text mb-5">Ditawar Rp 200.000</p>
                    </div>
                  </div>

                  <div className="position-absolute w-100 bottom-0 mb-2">
                    <div className="float-sm-end d-flex float-none">
                      <button
                        onClick={handleShow2}
                        type="button"
                        className="btn btn-sm btn-outline-primary me-2 flex-grow-1 round px-4"
                      >
                        Tolak
                      </button>
                      <button
                        onClick={handleShow1}
                        type="button"
                        className="btn btn-sm btn-primary flex-grow-1 round px-4"
                      >
                        Terima
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal tawar */}
      <Modal
        show={show}
        onHide={handleClose1}
        contentClassName="shadow round"
        centered
        closeButton
      >
        <Modal.Body className="p-4">
          <p className="fw-bold mb-0">
            Yeay kamu berhasil mendapat harga yang sesuai
          </p>
          <p className="text-muted">
            Segera hubungi pembeli melalui whatsapp untuk transaksi selanjutnya
          </p>

          <div className="card bg-grey round border-0 p-3">
            <p className="text-center">Product Match</p>

            <div className="d-flex align-items-center ps-3">
              <div className="flex-shrink-0">
                <img src={image1} className="rounded" alt="..." />
              </div>

              <div className="flex-grow-1 ms-3">
                <h6 className="card-title fw-bold mb-0">Nama Penjual</h6>
                <p className="card-text text-muted">
                  <small>Kota</small>
                </p>
              </div>
            </div>

            <div className="d-flex ps-3 mt-3">
              <div className="flex-shrink-0">
                <img src={image2} className="rounded" alt="..." />
              </div>

              <div className="flex-grow-1 ms-3">
                <h6 className="card-title mb-0">Jam tangan</h6>
                <p className="card-text text-decoration-line-through mb-0">
                  <small>Rp. 250.000</small>
                </p>
                <p className="card-text">
                  <small>Ditawar Rp. 200.000</small>
                </p>
              </div>
            </div>
          </div>

          <div className="d-flex mt-3">
            <button type="button" className="btn btn-primary w-100 round">
              <span className="px-5">Hubungi via Whatsapp</span>

              <FaWhatsapp />
            </button>
          </div>
        </Modal.Body>
      </Modal>

      {/* Modal status */}
      <Modal
        show={show2}
        onHide={handleClose2}
        contentClassName="shadow round"
        centered
        closeButton
      >
        <Modal.Body className="p-4">
          <p className="fw-bold">Perbarui status penjualan produkmu</p>

          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              value="option1"
              checked
            />
            <label className="form-check-label" for="exampleRadios1">
              Berhasil terjual
            </label>
          </div>
          <p className="text-muted ms-4">
            Kamu telah sepakat menjual produk ini kepada pembeli
          </p>

          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios2"
              value="option2"
            />
            <label className="form-check-label" for="exampleRadios2">
              Batalkan transaksi
            </label>
          </div>
          <p className="text-muted ms-4">
            Kamu membatalkan transaksi produk ini dengan pembeli
          </p>

          <div className="d-flex mt-3">
            <button type="button" className="btn btn-primary w-100 round">
              Kirim
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default InfoPenawar;
