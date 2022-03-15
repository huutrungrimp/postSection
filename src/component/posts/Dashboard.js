import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import MDEditor from "@uiw/react-md-editor";
import moment from "moment";
import { useNavigate } from "react-router-dom";

import DeleteIcon from "@mui/icons-material/Delete";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";

const Dashboard = ({ posts, username }) => {
  const history = useNavigate();
  console.log(posts);
  const myPosts =
    posts === undefined
      ? ""
      : posts.filter((post) => post.username.username === username);
  const length = Object.keys(myPosts).length;
  const defaultActiveKey = length === 0 ? "" : "post" + myPosts[0].id;

  console.log(myPosts);
  console.log(posts);
  console.log(username);
  console.log(length);
  console.log(defaultActiveKey);

  return (
    <div>
      {length === 0 ? (
        ""
      ) : (
        <Container>
          <Tab.Container defaultActiveKey={defaultActiveKey}>
            <Row>
              <Col sm={3}>
                <Nav className="flex-column">
                  {myPosts.map((post) => (
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
              <Col sm={9}>
                <Tab.Content>
                  {myPosts.map((post) => (
                    <Tab.Pane
                      key={"content" + post.id}
                      eventKey={"post" + post.id}
                    >
                      <Row>
                        <Col style={{ textAlign: "left" }}>
                          <Row>
                            <Col>
                              <h4>{post.title}</h4>
                              <h6
                                style={{
                                  fontSize: "15px",
                                  color: "blue",
                                  paddingBottom: "20px",
                                }}
                              >
                                Updated on{" "}
                                {moment(post.dated_on).format("YYYY-MM-D")}
                              </h6>
                            </Col>
                            <Col sm={3}>
                              <Stack direction="row" spacing={1}>
                                <Tooltip title="Delete">
                                  <IconButton>
                                    <DeleteIcon
                                      sx={{ color: "black" }}
                                      onClick={() => {
                                        history(`/posts/${post.id}/delete`);
                                      }}
                                    />
                                  </IconButton>
                                </Tooltip>
                                <Tooltip title="Edit">
                                  <IconButton>
                                    <EditTwoToneIcon
                                      sx={{ color: "blue" }}
                                      onClick={() => {
                                        history(`/posts/${post.id}/update`);
                                      }}
                                    />
                                  </IconButton>
                                </Tooltip>
                              </Stack>
                            </Col>
                          </Row>
                          <MDEditor.Markdown source={post.content} />
                        </Col>
                      </Row>
                    </Tab.Pane>
                  ))}
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      )}
    </div>
  );
};

export default Dashboard;
