import {Row, Col} from "react-bootstrap";

// Import components
import LeftRegister from "../components/LeftRegister";
import RightRegister from "../components/RightRegister";
import "../css/Register.css";

const Register = () => {
    return (
        <>
            <Row className="regis-container">
                <Col className="background-cover">
                    <LeftRegister />
                </Col>
                <Col className="register-form">
                    <RightRegister />
                </Col>
            </Row>
        </>
    );
};
export default Register;
