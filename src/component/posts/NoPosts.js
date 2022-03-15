import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function NoPosts() {
  const history = useNavigate();
  const onClick = (e) => {
    e.preventDefault();
    history("/createPost");
  };

  return (
    <Container style={{ marginTop: "100px" }}>
      <Row>
        <h4>Sorry, there are no posts. Do you want to create a post?</h4>
        <Button variant="primary" onClick={onClick}>
          Yes
        </Button>
        <Button variant="primary" onClick={history.goBack}>
          No
        </Button>
      </Row>
    </Container>
  );
}

export default NoPosts;
