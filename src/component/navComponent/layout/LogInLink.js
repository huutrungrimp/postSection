import React from "react";
import { Box } from "@mui/material";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import authServices from "../../store/services/authServices";

import IconButton from "@mui/material/IconButton";

import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";

import MenuItem from "@mui/material/MenuItem";

const LogInLink = () => {
  const user = authServices() === undefined ? "" : authServices().username;

  console.log(user);

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>

            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem key="dashboard" >
                <Typography><Link href={`/posts/${user}/dashboard`}>Dashboard</Link></Typography>
              </MenuItem>
              <MenuItem key="createpost" >
                <Typography><Link href={"posts/createpost"}>New Posts</Link></Typography>
              </MenuItem>

              <MenuItem key="logout">
                <Typography><Link href="/logout">Logout</Link></Typography>
              </MenuItem>
            </Menu>
          </Box>
  );
};

export default LogInLink;
