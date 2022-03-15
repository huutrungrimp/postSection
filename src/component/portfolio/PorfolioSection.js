import { Container } from "@mui/material";
import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function PortfolioSection() {
  const navigate = useNavigate();

  return (
    <Container>
      <CardGroup>
        <Card>
          <Card.Img  src="https://www.prepareforcanada.com/wp-content/uploads/Ottawa_Landscape-1024x569.jpg" />
          <Card.Body>
            <Card.Title>Covid-19 in Ontario</Card.Title>
            <Card.Text>
              
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img  src="https://geology.com/world/world-map.gif" />
          <Card.Body>
            <Card.Title>Covid-19 around the world</Card.Title>
            <Card.Text>
              
            </Card.Text>
          </Card.Body>
        </Card>        
      </CardGroup>
    </Container>
  );
}

export default PortfolioSection;
