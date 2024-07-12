import React from "react";
import { Link } from "react-router-dom";
import { Container, Button, Row, Col } from "react-bootstrap";
import plus from "../img/fi_plus.png";
import "../css/footer.css";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const FooterComponent = () => {
  const navigate = useNavigate();
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    await Swal.fire({
      title: "Warning",
      icon: "warning",
      text: "Silahkan login terlebih dahulu untuk mengakses halaman",
      confirmButtonText: "Ok",
    });
    return navigate("/login");
  };

  return (
    <footer className="fixed-bottom my-3">
      <Container>
        <Row className="justify-content-center">
          <Col md="auto" xs="auto">
            {isAuthenticated === true && user ? (
              <Link to="/addproduct">
                <Button type="submit" className="btn-jual">
                  <img src={plus} className="me-2" alt="plus.png" /> Jual
                </Button>
              </Link>
            ) : (
              <Button type="submit" className="btn-jual" onClick={handleSubmit}>
                <img src={plus} className="me-2" alt="plus.png" /> Jual
              </Button>
            )}
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterComponent;
