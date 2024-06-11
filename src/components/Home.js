// src/components/Home.js
import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, ProgressBar, Alert, Carousel, Modal, ListGroup } from 'react-bootstrap';

const Home = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Container className="mt-5">
        <Alert variant="info">
          <h1>Welcome to the Home Page!</h1>
          <p>This is a sample project demonstrating the use of React.js and Bootstrap 5.</p>
        </Alert>

        <Row className="my-4">
          <Col>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Modern workspace with computer setup.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.unsplash.com/photo-1513104890138-7c749659a591"
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Pizza.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>High-tech office setup with computer equipment.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>

        <Row className="my-4">
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Card Title 1</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant="primary" onClick={handleShow}>Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Card Title 2</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant="secondary">Discover</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Card Title 3</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant="success">Explore</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="my-4">
          <Col>
            <h2>Progress</h2>
            <ProgressBar striped variant="success" now={40} label={`${40}%`} className="mb-3" />
            <ProgressBar striped variant="info" now={60} label={`${60}%`} className="mb-3" />
            <ProgressBar striped variant="warning" now={80} label={`${80}%`} className="mb-3" />
            <ProgressBar striped variant="danger" now={90} label={`${90}%`} />
          </Col>
        </Row>

        <Row className="my-4">
          <Col>
            <Alert variant="warning">
              <h4>Important Notice</h4>
              <p>This is an important notice to all users. Please read it carefully.</p>
            </Alert>
          </Col>
        </Row>
      
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Home;
