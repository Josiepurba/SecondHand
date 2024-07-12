import {Container, Alert} from "react-bootstrap" 
const NotFound = () => {
  return(
    <Container className="mx-auto my-auto">
      <Alert  variant='danger'>
        <div className="text-center">
          <h1>404</h1>
          <p>Page Not Found</p>
        </div>
      </Alert>
    </Container>
  )
}
export default NotFound;