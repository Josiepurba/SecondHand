import { Row, Col } from "react-bootstrap";

// Import components
import LeftLogin from "../components/LeftLogin";
import RightLogin from "../components/RightLogin";
import "../css/Login.css";

const Login = () => {
  return (
    <>
      <Row className="regis-container">
        <Col className="background-cover">
          <LeftLogin />
        </Col>
        <Col className="register-form">
          <RightLogin />
        </Col>
      </Row>
    </>
  );
};
export default Login;
