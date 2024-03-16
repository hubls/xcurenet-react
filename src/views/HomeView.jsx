import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import MainBusinessView from "./MainBusinessView";

const HomeView = () => {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                안녕하세요
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <h1>반갑습니다.</h1>
              </div>
            </Col>
            <Col md={5} style={{ paddingBottom: 20 }}>
              <h3>
                인사를 하게되면.
              </h3>
            </Col>
          </Row>
          <Row>
            <h1>고생을 하게되면.</h1>
          </Row>
        </Container>
      </Container>
      <MainBusinessView/>
    </section>
  )
}

export default HomeView