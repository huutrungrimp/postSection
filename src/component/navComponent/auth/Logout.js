import React from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { userLogout } from "../../../store/actions/authActions";
import { useNavigate } from "react-router-dom";

const Logout = ({ userLogout }) => {
  const history = useNavigate();
  console.log(history);

  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    userLogout();
    history("/");
  };

  return (
    <div className="formClass" style={{ marginTop: "70px" }}>
      <div
        className="row"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Are your sure to logout?
      </div>
      <div
        className="row"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button sm={3} variant="primary" onClick={handleSubmit}>
          Yes
        </Button>
        <Button sm={3} variant="primary" onClick={history.goBack}>
          No
        </Button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    userLogout: () => {
      dispatch(userLogout());
    },
  };
};
export default connect(null, mapDispatchToProps)(Logout);
