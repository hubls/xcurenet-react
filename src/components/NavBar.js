import React, { useState } from 'react';
import {Navbar, Nav, Container} from "react-bootstrap";
import logo from "../assets/logo.png";
import { Link } from 'react-router-dom';

function NavBar() {
  const [expand, updateExpanded] = useState(false); // 모바일로 볼때 햄버거 버튼
  const [navColour, updateNavBar] = useState(false); // 스크롤 움직였을 때 NavBar Background 나타나도록 하는 설정

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavBar(true);
    } else {
      updateNavBar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded")
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto" defaultActiveKey="#home">
            {/*<Nav.Item className="me-5">*/}
            {/*  <Nav.Link*/}
            {/*    as={Link}*/}
            {/*    to="/"*/}
            {/*    onClick={() => updateExpanded(false)}>*/}
            {/*    Home*/}
            {/*  </Nav.Link>*/}
            {/*</Nav.Item>*/}

            <Nav.Item className="me-5">
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}>
                회사소개
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="me-5">
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}>
                제품소개
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="me-5">
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}>
                고객지원
              </Nav.Link>
            </Nav.Item>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar;