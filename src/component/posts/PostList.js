import React from "react";
import { Container, Row, Col, Tab, Nav, Form } from "react-bootstrap";
import MDEditor from "@uiw/react-md-editor";

import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { FacebookShareButton, FacebookIcon } from "react-share";

const PostList = ({ posts }) => {
  console.log(posts);
  const length = Object.keys(posts).length;
  const defaultActiveKey = length === 0 ? "" : "post" + posts[0].id;

  return (
    <Container>
      <Tab.Container defaultActiveKey={defaultActiveKey}>
        <Row>
          <Col sm={3}>
            <Nav className="flex-column">
              {posts === undefined
                ? ""
                : posts.map((post) => (
                    <Nav.Item key={"nav" + post.id}>
                      <Nav.Link
                        eventKey={"post" + post.id}
                        style={{
                          textAlign: "left",
                          fontSize: 18,
                          paddingLeft: 0,
                        }}
                      >
                        {post.title}
                      </Nav.Link>
                    </Nav.Item>
                  ))}
            </Nav>
          </Col>
          <Col sm={9} style={{ textAlign: "left" }}>
            <Tab.Content>
              {posts === undefined
                ? ""
                : posts.map((post) => (
                    <Tab.Pane
                      key={"content" + post.id}
                      eventKey={"post" + post.id}
                    >
                      <MDEditor.Markdown
                        source={post.content}
                        style={{ fontSize: "16px", fontFamily: "Arial" }}
                      />
                    </Tab.Pane>
                  ))}
            </Tab.Content>
            <div className="col-6">
              <h5>Leave your comments</h5>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Leave your comments</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
              </Form>
            </div>
            <div className="row row-cols-10">
              <div className="col-1">
                <ThumbUpIcon color="primary" />
              </div>
              <div className="col-1">
                <ThumbDownAltIcon />
              </div>
              <div className="col-2">
                <FacebookShareButton>
                  <FacebookIcon size={36} />
                </FacebookShareButton>
              </div>
            </div>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
};

export default PostList;
