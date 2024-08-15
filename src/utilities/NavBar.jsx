import React, { useState } from "react";
import "./NavBar.css";
import "../pages/auth/Auth.css";
import {
  Box,
  Button,
  Container,
  IconButton,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import Registration from "./../components/pages/auth/Registration";
import Login from "../components/pages/auth/Login";
import logo from "../../public/logo.png";
import { CloseOutlined, MenuOutlined } from "@mui/icons-material";

function NavBar() {
  const [open, setOpen] = useState(false);
  const [slide, setSlide] = useState(false);
  const [registerMode, setRegisterMode] = useState("sign up");

  function handleHomeClick() {
    window.scrollTo(0, 0);
  }

  return (
    <div className="nav">
      <Container maxWidth={"xl"} className="main-container">
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          className="inner-main-container"
        >
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

          <Link to={"/"} className="logo" onClick={handleHomeClick}>
            <h3>learn with me</h3>
            <img src={logo} alt="Logo" />
          </Link>
        </Stack>
      </Container>

      {/* mobile screens */}

      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        className="inner-main-container-2"
      >
        <IconButton color="inherit" onClick={(_) => setSlide(!slide)}>
          {slide ? (
            <CloseOutlined className="icon" />
          ) : (
            <MenuOutlined className="icon" />
          )}
        </IconButton>

        <Link to={"/"} className="logo">
          <h3>learn with me</h3>
          <img src={logo} alt="Logo" />
        </Link>
      </Stack>

      {/* slide left menu */}

      <Box className={`slide-menu ${slide ? "slide-menu-active" : ""}`}>
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
    </div>
  );
}

export default NavBar;
