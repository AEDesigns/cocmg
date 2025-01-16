import React from "react";
import { Form, Button, Container } from "react-bootstrap";

function ContactForm() {
  return (
    <Container style={{ maxWidth: "600px", marginTop: "30px", marginBottom: "30px" }}>
      <h2 className="text-center mb-4">Get in Touch</h2>
      <Form>
        {/* Full Name */}
        <Form.Group controlId="formFullName" className="mb-3">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your full name" />
        </Form.Group>

        {/* Email Address */}
        <Form.Group controlId="formEmail" className="mb-3">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>

        {/* Dropdown Select */}
        <Form.Group controlId="formSelect" className="mb-3">
          <Form.Label>Reason for Contact</Form.Label>
          <Form.Control 
            as="select" 
            defaultValue="" 
            style={{ appearance: "auto", paddingRight: "30px" }} // Ensures the dropdown arrow is visible
          >
            <option value="" disabled>
              Select an option
            </option>
            <option>Church Happenings</option>
            <option>Join the Antique Car Show</option>
            <option>Become a Vendor</option>
            <option>Sign Up to Compete in the Highland Games</option>
          </Form.Control>
        </Form.Group>

        {/* Message */}
        <Form.Group controlId="formMessage" className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={5} placeholder="Enter your message" />
        </Form.Group>

        {/* Submit Button */}
        <Button variant="primary" type="submit" className="w-100">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default ContactForm;
