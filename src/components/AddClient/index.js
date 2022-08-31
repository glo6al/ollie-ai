import React from 'react';
import { Form, Container, Row, Col } from "react-bootstrap";

function AddClient() {
	//codehere
	return (
		<Container>
			<Form>
				<Row className="justify-content-center mt-5 mb-4">
					<Col xs={9}>
						<Form.Label className="heading mb-3">Picture</Form.Label>
					</Col>
					<Col xs={9}>
                        <Form.Control type="file" className="form" />
					</Col>
				</Row>
				<Row className="justify-content-center mb-5">
                    <Col xs={9}>
						<Form.Label className="heading mb-3">First Name</Form.Label>
					</Col>
					<Col xs={9}>
						<Form.Control type="text" className="form" placeholder='Enter first name'></Form.Control>
					</Col>
				</Row>
                <Row className="justify-content-center mb-5">
                    <Col xs={9}>
						<Form.Label className="heading mb-3">Last Name</Form.Label>
					</Col>
					<Col xs={9}>
						<Form.Control type="text" className="form" placeholder='Enter last name'></Form.Control>
					</Col>
				</Row>
				<Row className="d-flex justify-content-center mb-5">
                    <Col xs={9}>
                        <Form.Label className="heading mb-3">Email</Form.Label>
					</Col>
					<Col xs={9}>
                        <Form.Control type="email" className="form" placeholder="Enter email" />
					</Col>
				</Row>
                <Row className="justify-content-center mb-5">
                    <Col xs={3}>
						<Form.Label className="heading mb-3">Height</Form.Label>
					</Col>
					<Col xs={6}>
						<Form.Control type="text" className="form" placeholder='Enter height in inches'></Form.Control>
					</Col>
				</Row>
                <Row className="justify-content-center mb-5">
                    <Col xs={3}>
						<Form.Label className="heading mb-3">Weight</Form.Label>
					</Col>
					<Col xs={6}>
						<Form.Control type="text" className="form" placeholder='Enter weight in pounds'></Form.Control>
					</Col>
				</Row>
			
                <Row className="d-flex justify-content-center mb-5">
                    <Col xs={9}>
                        <Form.Select aria-label="Programming Focus" className="form" id="dropdown-basic">
                            <option>Select a Programming Focus</option>
                            <option value="1">Bodybuilding</option>
                            <option value="2">Functional Fitness</option>
                            <option value="3">Olympic Weightlifting Boot Camp</option>
                        </Form.Select>
                    </Col>
				</Row>
				<Row className="justify-content-center">
					<Col xs={6} className="text-center">
						<button className="button">Submit</button>
					</Col>
                </Row>
			</Form>
		</Container>
	);
}

export default AddClient;
