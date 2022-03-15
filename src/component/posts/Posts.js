import React from "react";
import { Nav, Col, Container, Row, Button } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";

function Posts() {
  const poststyle = {
    color: "white",
    fontSize: "18px",
  };

  return (
    <Container
      style={{
        paddingTop: "20px",
        paddingBottom: "20px",
        marginTop: "70px",
        backgroundColor: "#c0c0c0",
      }}
    >
      <Row>
        <Col>
          <Nav
            style={{
              borderBottom: "solid 1px",
              paddingBottom: "1rem",
              marginBottom: "20px",
            }}
          >
            <Button variant="primary">
              <NavLink to="" style={poststyle}>
                All Posts
              </NavLink>
            </Button>{" "}
            <Button variant="secondary">
              <NavLink to="dashboard" style={poststyle}>
                My Posts
              </NavLink>
            </Button>{" "}
            <Button variant="success">
              <NavLink to="createpost" style={poststyle}>
                New Posts
              </NavLink>
            </Button>{" "}
          </Nav>
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
}

export default Posts;
