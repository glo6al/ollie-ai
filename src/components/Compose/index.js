import React from "react";
import { Form, Container, Row, Col, FormGroup } from "react-bootstrap";

function Compose() {
  return (
    <Container>
      <Form>
        <Row id="docEditor" className="justify-content-center">
          <Col xs={9}>
            <Form.Control
              as="textarea"
              rows={12}
              className="form"
              contentEditable="true"
              data-gramm="false"
              data-placeholder="Begin writing the workout..."
            ></Form.Control>
          </Col>
          <Row className="justify-content-center">
            <Col xs={6} className="text-center">
              <button type="submit" className="button" content="">
                Compose
              </button>
            </Col>
          </Row>
        </Row>
      </Form>
    </Container>
  );
}

export default Compose;
