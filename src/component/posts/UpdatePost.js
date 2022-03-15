import React, { useEffect } from "react";
import { Form, Container } from "react-bootstrap";
import { connect } from "react-redux";
import { updatePost } from "../../store/actions/postActions";
import axios from "axios";
import { useParams } from "react-router-dom";
import MDEditor from "@uiw/react-md-editor";
import { useNavigate } from "react-router-dom";
import authServices from "../../store/services/authServices";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";


const UpdatePost = (props) => {
  const postID = useParams().id;
  const history = useNavigate();
  const url = "https://backend4ds.herokuapp.com";

  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");

  const post = {
    username: authServices().username
      ? authServices().username.toLowerCase()
      : "",
    title: title,
    content: content,
    id: parseInt(postID),
    dated_on: new Date(),
  };

  console.log(postID);
  console.log(props);

  useEffect(() => {
    axios.get(`${url}/posts/${postID}`).then((res) => {
      console.log(res.data);
      const post = res.data;
      setTitle(post.title);
      setContent(post.content);
    });
  }, [postID]);

  console.log(post);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.updatePost(post);
    history("/posts");
  };

  return (
    <Container>
      <h4>Update Course</h4>
      <Form>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <MDEditor value={title} onChange={setTitle} height={100} />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Content</Form.Label>
          <MDEditor value={content} onChange={setContent} height={500} />
        </Form.Group>

        <br/>

        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Button variant="outlined" onClick={handleSubmit}>
            Update
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
    updatePost: (post) => {
      dispatch(updatePost(post));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdatePost);
