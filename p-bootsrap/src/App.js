import {
  Button,
  Container,
  Row,
  Col,
  Alert,
  Breadcrumb,
  BreadcrumbItem,
} from "react-bootstrap";

function App() {
  return (
    <>
      <Container>
        <Breadcrumb>
          <BreadcrumbItem href="/" active>
            Home
          </BreadcrumbItem>
          <BreadcrumbItem href="/Contact">Contact</BreadcrumbItem>
        </Breadcrumb>
        <Row className="mt-5">
          <Col>1 of 1</Col>
        </Row>
        <br />
        <Row>
          <Col>1 of 1</Col>
          <Col>1 of 1</Col>
          <Col>1 of 1</Col>
          <Col>1 of 1</Col>
        </Row>
        <br />
      </Container>
      <br />
      <Alert variant="danger" className="p-3 mx-5 mt-5">
        Pesan yang kamu masukkan salah
      </Alert>
      <center>
        <Button variant="dark">Klik</Button>
      </center>
    </>
  );
}

export default App;
