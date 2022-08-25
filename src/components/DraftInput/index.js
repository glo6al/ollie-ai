import React from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";

function DraftInput() {
	//codehere
	return (
		<Container>
			<Form>
				<Row className="justify-content-center">
					<Col xs={9}>
						<Form.Label>Title</Form.Label>
					</Col>
					<Col xs={9}>
						<Form.Control type="text"></Form.Control>
					</Col>
				</Row>
				<Row className="justify-content-center">
					<Col xs={9}>
						<Form.Label>Content Description</Form.Label>
					</Col>
					<Col xs={9}>
						<Form.Control type="text"></Form.Control>
					</Col>
				</Row>
				<Row className="justify-content-around">
					<Col xs={3}>
						<Button>S</Button>
					</Col>
					<Col xs={3}>
						<Button>M</Button>
					</Col>
					<Col xs={3}>
						<Button>L</Button>
					</Col>
				</Row>
				<Row className="justify-content-center">
					<Col xs={6}><Button>Compose</Button></Col>
				</Row>
			</Form>
		</Container>
	);
}

export default DraftInput;
