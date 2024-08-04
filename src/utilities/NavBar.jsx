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
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
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
              <Link to={"#platform"}>فكرة المنصة</Link>{" "}
            </li>

            <li>
              <Link to={"#teachers"}>المدرسين</Link>{" "}
            </li>

            <li>
              <Link to={"#features"}>مزايا المنصة</Link>{" "}
            </li>

            <li>
              <Link to={"/"}>تواصل معنا</Link>{" "}
            </li>
          </ul>

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
