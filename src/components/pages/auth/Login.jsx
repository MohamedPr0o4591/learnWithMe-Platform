import { HighlightOff } from "@mui/icons-material";
import { Box, IconButton, Stack } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../../config/firebase";

function Login(props) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredential = await auth.signInWithEmailAndPassword(email, pass);
      const user = userCredential.user;

      if (!user.emailVerified) {
        alert("يرجى التحقق من بريدك الإلكتروني لتفعيل الحساب.");
        return;
      }

      if (rememberMe) {
        const user = userCredential.user;
        const idToken = await user.getIdToken();
        localStorage.setItem("authToken", idToken);
      }

      alert("تم تسجيل الدخول بنجاح");
      props.setOpen(false);
    } catch (err) {
      if (err.code === "auth/user-not-found") {
        alert("البريد الالكتروني غير صحيح");
      } else if (err.code === "auth/wrong-password") {
        alert("كلمة المرور غير صحيحة");
      } else {
        alert("البريد الالكترونى او كلمة المرور غير صحيحة");
      }
    }

    setLoading(false);
  }

  async function handleForgotPassword() {
    if (email.trim() === "") {
      alert("يرجى ادخال بريدك الالكتروني");
      return;
    }

    try {
      // const signInMethods = await auth.fetchSignInMethodsForEmail(email);

      // if (signInMethods.length === 0) {
      //   alert("البريد الإلكتروني ليس مسجلاً لدينا.");
      //   return;
      // }

      await auth.sendPasswordResetEmail(email);
      alert("تم إرسال رابط استعادة كلمة المرور إلى بريدك الإلكتروني.");
    } catch (err) {
      alert("حدث خطأ اثناء الارسال" + err.message);
    }
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
          <input
            type="email"
            required
            className="input-ltr"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span>البريد الالكتروني</span>
        </div>
        <div className="input-box ">
          <input
            type="password"
            required
            className="input-ltr"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          <span>كلمة المرور</span>
        </div>
        <div className="additional-inputs">
          <div className="remember-forgot">
            <label htmlFor="remember">خليك فاكرنى</label>
            <input
              type="checkbox"
              id="remember"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
          </div>

          <a href="#" onClick={handleForgotPassword}>
            نسيت كلمة المرور؟
          </a>
        </div>

        <input
          type="submit"
          value={`${loading ? "جاري تسجيل الدخول .." : "دخول"}`}
          className={`${loading ? "item-disabled" : ""}`}
        />

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
