import React from "react";
import { connect } from "react-redux";
import { deletePost } from "../../store/actions/postActions";
import { useNavigate, useParams } from "react-router-dom";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import CancelIcon from "@mui/icons-material/Cancel";

const DeletePost = (props) => {
  const history = useNavigate();

  const postID = useParams().id;
  const handleSubmit = (e) => {
    e.preventDefault();
    props.deletePost(postID);
    history("/posts");
  };

  console.log(history);

  return (
    <div>
      <h5>Are your sure to delete</h5>

      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        
      >
        <Button
          variant="outlined"
          startIcon={<DeleteIcon />}
          onClick={handleSubmit}
          style={{fontFamily:'Arial', fontSize:12}}
        >
          Delete
        </Button>
        <Button
          variant="contained"
          endIcon={<CancelIcon />}
          onClick={() => history(-1)}
          style={{fontFamily:'Arial', fontSize:12}}
        >
          Cancel
        </Button>
      </Stack>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (postID) => {
      dispatch(deletePost(postID));
    },
  };
};

export default connect(null, mapDispatchToProps)(DeletePost);
