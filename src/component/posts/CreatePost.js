import React from "react";
import { Form, Container } from "react-bootstrap";
import { connect } from "react-redux";
import { createPost } from "../../store/actions/postActions";
import authServices from "../../store/services/authServices";
import { useNavigate } from "react-router-dom";
import MDEditor from "@uiw/react-md-editor";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const PostForm = ({ createPost }) => {
  const history = useNavigate();

  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");

  const post = {
    username: authServices().username
      ? authServices().username.toLowerCase()
      : "",
    title: title,
    content: content,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(post);
    createPost(post);
    history("/posts");
  };

  console.log(post);

  return (
    <Container>
      <h5>Create a New Post</h5>
      <Form>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <MDEditor value={title} onChange={setTitle} height={100} />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Content</Form.Label>
          <MDEditor value={content} onChange={setContent} height={500} />
        </Form.Group>

        <br />

        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Button variant="outlined" onClick={handleSubmit}>
            Create
          </Button>
          <Button variant="outlined" onClick={() => history(-1)}>
            Cancel
          </Button>
        </Stack>
      </Form>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createPost: (post) => {
      dispatch(createPost(post));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
