import { HighlightOff } from "@mui/icons-material";
import { Box, IconButton, Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Login(props) {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="login-component">
        <Stack direction={"row"} alignItems={"center"}>
          <Box flex={1} />

          <IconButton color="inherit" onClick={() => props.setOpen(false)}>
            <HighlightOff color="error" fontSize="medium" />
          </IconButton>
        </Stack>

        <h2>تسجيل الدخول</h2>
        <div className="input-box ">
          <input type="email" required className="input-ltr" />
          <span>البريد الالكتروني</span>
        </div>
        <div className="input-box ">
          <input type="password" required className="input-ltr" />
          <span>كلمة المرور</span>
        </div>
        <div className="additional-inputs">
          <div className="remember-forgot">
            <label htmlFor="remember">خليك فاكرنى</label>
            <input type="checkbox" id="remember" />
          </div>

          <Link to="/forgot" onClick={(_) => props.setOpen(false)}>
            نسيت كلمة المرور؟
          </Link>
        </div>

        <input type="submit" value="دخول" />

        <Stack direction={"row"} alignItems={"center"} gap={2} mt={2}>
          <span>ليس لديك حساب ؟</span>

          <span
            className="text-primary"
            id="registration"
            onClick={(_) => props.setRegisterMode("sign up")}
          >
            إنشاء حساب جديد
          </span>
        </Stack>
      </div>
    </form>
  );
}

export default Login;
