import React from "react";
import Navigation from "./pageComponents/navbar";
import AthletesList from "./pageComponents/renderAthleteRegTable";
import RegistrationForm from "./pageComponents/registrationForm";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function HighlandGames() {
  return (
    <>
      {/* <Navigation /> */}
      <Container>
        <Row>
          <Col sm="12" lg="4">
            <RegistrationForm />
          </Col>
          <Col lg="8" sm="12">
            <AthletesList />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default HighlandGames;
