import React from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";

function DraftInput() {
	//codehere
	return (
		<Container>
			<Form>
				<Row className="justify-content-center mt-5 mb-4">
					<Col xs={9}>
						<Form.Label className="heading mb-3">Title</Form.Label>
					</Col>
					<Col xs={9}>
						<Form.Control type="text" className="form"></Form.Control>
					</Col>
				</Row>
				<Row className="justify-content-center mb-5">
					<Col xs={9}>
						<Form.Label className="heading mb-3">Content Description</Form.Label>
					</Col>
					<Col xs={9}>
						<Form.Control as="textarea" rows={8} className="form"></Form.Control>
					</Col>
				</Row>
				<Row className="d-flex justify-content-center mb-5">
					<Col xs={9}>
						<Form.Label className="heading mb-4">Output Length</Form.Label>
					</Col>
					<Col xs={12}>
						<Row className="d-flex justify-content-center">
							<Col xs={3} className="text-center">
								<button className="sq-btn button">S</button>
							</Col>
							<Col xs={3} className="text-center">
								<button className="sq-btn button">M</button>
							</Col>
							<Col xs={3} className="text-center">
								<button className="sq-btn button">L</button>
							</Col>
						</Row>
					</Col>
				</Row>
				<Row className="justify-content-center">
					<Col xs={6} className="text-center">
						<button className="button">Compose</button>
					</Col>
				</Row>
			</Form>
		</Container>
	);
}

export default DraftInput;
