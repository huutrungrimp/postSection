import authServices from "../../../store/services/authServices";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import Link from "@mui/material/Link";


const Navbarpage = () => {
  const pages = ["Home", "About", "Portfolio", "posts", "Resume", "Contact"];
  const username = authServices() === undefined ? "" : authServices().username;

  console.log(username);

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed" sx={{ top: 0, height: "70px" }} color="primary">
      <Container>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            component="div"
            sx={{
              mr: "100px",
              display: { xs: "none", md: "flex" },
              wordWrap: "break-word",
              width: "130px",
              lineHeight: 1,
            }}
          >
            Web Design & Data Analytics
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={handleCloseNavMenu}
                  component={Link}
                  href={`/${page.toLowerCase()}`}
                >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              wordWrap: "break-word",
              width: "130px",
              lineHeight: 1,
            }}
          >
            Web Design & Data Analytics
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
                component={Link}
                href={`/${page.toLowerCase()}`}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title={username.toUpperCase()}>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="https://www.tripsavvy.com/thmb/wdR55uljRmHMCpM26xB6rdDxxI8=/4003x3002/smart/filters:no_upscale()/parliament-hill-in-ottawa--ontario--canada-1212275972-9f6f6e45ce084df89aaebf972e15b27b.jpg" />
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
              {username === '' ? (
                <Box>
                  <MenuItem key="login">
                    <Link href="/login">Login</Link>
                  </MenuItem>
                  <MenuItem key="register">
                    <Link href="/register">Register</Link>
                  </MenuItem>
                </Box>
              ) : (
                <Box onClick={handleCloseUserMenu}>
                  <MenuItem key="dashboard">
                    <Link href="dashboard">Dashboard</Link>
                  </MenuItem>
                  <MenuItem key="createpost">
                    <Typography>
                      <Link href={"/createPost"}>New Posts</Link>
                    </Typography>
                  </MenuItem>
                  <MenuItem key="logout">
                    <Typography>
                      <Link href="/logout">Logout</Link>
                    </Typography>
                  </MenuItem>
                </Box>
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbarpage;
