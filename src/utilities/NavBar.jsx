import React, { useEffect, useState } from "react";
import "./NavBar.css";
import "../pages/auth/Auth.css";
import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import Registration from "./../components/pages/auth/Registration";
import Login from "../components/pages/auth/Login";
import logo from "../../public/logo.png";
import {
  CloseOutlined,
  Logout,
  MenuOutlined,
  Settings,
} from "@mui/icons-material";
import { naviOptions } from "../components/pages/dashboard/home/data";

function NavBar(props) {
  const [open, setOpen] = useState(false);
  const [menuAnchorEl, setMenuAnchorEl] = React.useState(null);
  const menuOpen = Boolean(menuAnchorEl);
  const [slide, setSlide] = useState(false);
  const [registerMode, setRegisterMode] = useState("sign up");

  function handleHomeClick() {
    window.scrollTo(0, 0);
  }

  function handleLogOut() {
    setMenuAnchorEl(null);
    localStorage.removeItem("authToken");
    sessionStorage.removeItem("authToken");
    location.pathname = "/";
  }

  useEffect(() => {
    const nav = document.querySelector(".nav");
    if (props.auth) {
      nav.classList.add("sticky");
    }

    setSlide(false);
  }, [props.auth]);

  return (
    <div
      className="nav"
      style={{
        backgroundColor: `${props.auth && `rgba(0, 0, 0, 0.5)`}`,
        padding: `${props.auth && `10px 20px`}`,
      }}
    >
      <div className="main-container w-100">
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          className="inner-main-container"
        >
          {props.auth ? (
            <>
              <Stack alignItems={"center"} direction={"row"} gap={2}>
                <IconButton
                  color="inherit"
                  onClick={(e) => setMenuAnchorEl(e.currentTarget)}
                >
                  <Avatar
                    alt={props.userData?.fullName}
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: 40, height: 40 }}
                  />
                </IconButton>

                <Typography
                  variant="body1"
                  className="fw-bold fs-6"
                  style={{ color: "#fff" }}
                >
                  {props.userData?.fullName}
                </Typography>
              </Stack>
            </>
          ) : (
            <>
              <Stack direction={"row"} gap={2}>
                <Button
                  variant="outlined"
                  className="btn"
                  onClick={() => setOpen(true)}
                >
                  <span className="almarai-bold">إبدأ رحلتك الأن</span>
                </Button>
              </Stack>

              <ul>
                <li>
                  <a href="#platform">فكرة المنصة</a>
                </li>

                <li>
                  <a href="#teachers">المدرسين</a>
                </li>

                <li>
                  <a href="#features">مزايا المنصة</a>
                </li>

                <li>
                  <a href="#contact">تواصل معنا</a>
                </li>
              </ul>
            </>
          )}

          <Stack direction={"row"} gap={8} alignItems={"center"}>
            <Link
              to={
                localStorage.getItem("authToken") ||
                sessionStorage.getItem("authToken")
                  ? "/dashboard"
                  : "/"
              }
              className="logo"
              onClick={handleHomeClick}
            >
              <h3>learn with me</h3>
              <img src={logo} alt="Logo" />
            </Link>
          </Stack>
        </Stack>
      </div>

      {/* mobile screens */}

      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        className="inner-main-container-2"
      >
        <Box>
          <IconButton color="inherit" onClick={(_) => setSlide(!slide)}>
            {slide ? (
              <CloseOutlined className="icon" />
            ) : (
              <MenuOutlined className="icon" />
            )}
          </IconButton>
          {props.auth && (
            <IconButton
              color="inherit"
              onClick={(e) => setMenuAnchorEl(e.currentTarget)}
            >
              <Avatar
                alt={props.userData?.fullName}
                src="/static/images/avatar/1.jpg"
              />
            </IconButton>
          )}
        </Box>

        <Link
          to={
            localStorage.getItem("authToken") ||
            sessionStorage.getItem("authToken")
              ? "/dashboard"
              : "/"
          }
          className="logo"
        >
          <h3>learn with me</h3>
          <img src={logo} alt="Logo" />
        </Link>
      </Stack>

      {/* slide left menu */}

      <Box
        className={`slide-menu 
        ${props.auth && "tablet-screen"}
        ${slide && "slide-menu-active "}`}
      >
        {props.auth ? (
          <>
            <p>{props.userData?.fullName}</p>

            <ul className="slide-menu-ul">
              {naviOptions?.map((item, index) => {
                return (
                  <li key={index}>
                    <Link to={item.path} onClick={(_) => setSlide(false)}>
                      <div className="icon">{item.icon}</div>
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </>
        ) : (
          <>
            <Button
              variant="contained"
              className="btn"
              onClick={() => setOpen(true)}
            >
              <span className="almarai-bold">إبدأ رحلتك الأن</span>
            </Button>
            <ul>
              <li onClick={(_) => setSlide(false)}>
                <a href="#platform">
                  <div className="circle" />
                  <span>فكرة المنصة</span>
                </a>
              </li>

              <li onClick={(_) => setSlide(false)}>
                <a href="#teachers">
                  <div className="circle" />
                  <span>المدرسين</span>
                </a>
              </li>

              <li onClick={(_) => setSlide(false)}>
                <a href="#features">
                  <div className="circle" />
                  <span>مزايا المنصة</span>
                </a>
              </li>

              <li onClick={(_) => setSlide(false)}>
                <a href="#contact">
                  <div className="circle" />
                  <span>تواصل معنا</span>
                </a>
              </li>
            </ul>
          </>
        )}
      </Box>

      {/* modal */}

      <Modal
        open={open}
        onClose={(_) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="auth register">
          {registerMode === "sign up" ? (
            <Registration setOpen={setOpen} setRegisterMode={setRegisterMode} />
          ) : (
            <Login setOpen={setOpen} setRegisterMode={setRegisterMode} />
          )}
        </div>
      </Modal>

      <Menu
        anchorEl={menuAnchorEl}
        id="account-menu"
        open={menuOpen}
        onClose={(_) => setMenuAnchorEl(null)}
        onClick={(_) => setMenuAnchorEl(null)}
        PaperProps={{
          elevation: 0,
          sx: {
            direction: "ltr",
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&::before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
            minWidth: 200,
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={(_) => setMenuAnchorEl(null)}>
          <Avatar sx={{ marginRight: 0 + "px" }} /> Profile
        </MenuItem>

        <Divider />

        <MenuItem onClick={(_) => setMenuAnchorEl(null)}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleLogOut}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
}

export default NavBar;
