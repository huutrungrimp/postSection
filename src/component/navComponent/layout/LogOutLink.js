import React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const LogOutLink = () => {

  return (
    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
      <Button
          key='register'
          sx={{ my: 2, color: "white", display: "block" }}
          component={Link}
          href="/register"
        >
          <Typography>Register</Typography>
        </Button>
        <Button
          key="login"
          sx={{ my: 2, color: "white", display: "block" }}
          component={Link}
          href="/login"
        >
          <Typography>Login</Typography>
        </Button>
    </Box>
  );
};

export default LogOutLink;
