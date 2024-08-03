import React, { useState } from "react";
import "./NavBar.css";
import "../pages/auth/Auth.css";
import {
  Box,
  Button,
  Container,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import Registration from "./../components/pages/auth/Registration";
import Login from "../components/pages/auth/Login";
import logo from "../../public/logo.png";

function NavBar() {
  const [open, setOpen] = useState(false);
  const [registerMode, setRegisterMode] = useState("sign up");

  return (
    <div className="nav">
      <Container maxWidth={"xl"}>
        <Stack direction={"row"} alignItems={"center"}>
          <Stack direction={"row"} gap={2}>
            <Button
              variant="outlined"
              className="btn"
              onClick={() => setOpen(true)}
            >
              Start now
            </Button>
          </Stack>
          <Box flex={1} />

          <ul>
            <li>
              <Link to={"/"}> المدرسين</Link>{" "}
            </li>

            <li>
              <Link to={"/"}>فكرة المنصة</Link>{" "}
            </li>

            <li>
              <Link to={"/"}>تواصل معنا</Link>{" "}
            </li>
          </ul>
          <Box flex={1} />

          <Link to={"/"} className="logo">
            <h3>learn with me</h3>
            <img src={logo} alt="Logo" />
          </Link>
        </Stack>
      </Container>

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
