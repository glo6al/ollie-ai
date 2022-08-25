import React from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";

function DraftInput() {
	//codehere
	return (
		<Container>
			<Form>
				<Row className="justify-content-center mt-5 mb-4">
					<Col xs={9}>
						<Form.Label>Title</Form.Label>
					</Col>
					<Col xs={9}>
						<Form.Control type="text"></Form.Control>
					</Col>
				</Row>
				<Row className="justify-content-center mb-5">
					<Col xs={9}>
						<Form.Label>Content Description</Form.Label>
					</Col>
					<Col xs={9}>
						<Form.Control as="textarea" rows={8}></Form.Control>
					</Col>
				</Row>
				<Row className="d-flex justify-content-center mb-5">
					<Col xs={2} className="text-center">
						<Button>S</Button>
					</Col>
					<Col xs={2} className="text-center">
						<Button>M</Button>
					</Col>
					<Col xs={2} className="text-center">
						<Button>L</Button>
					</Col>
				</Row>
				<Row className="justify-content-center">
					<Col xs={6} className="text-center">
						<Button >Compose</Button>
					</Col>
				</Row>
			</Form>
		</Container>
	);
}

export default DraftInput;
