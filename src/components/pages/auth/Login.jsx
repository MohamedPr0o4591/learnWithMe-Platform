import { HighlightOff } from "@mui/icons-material";
import { Alert, Box, IconButton, Snackbar, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../../config/firebase";

function Login(props) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredential = await auth.signInWithEmailAndPassword(email, pass);
      const user = userCredential.user;
      const idToken = await user.getIdToken();

      if (!user.emailVerified) {
        alert("يرجى التحقق من بريدك الإلكتروني لتفعيل الحساب.");
        return;
      }

      if (rememberMe) {
        localStorage.setItem("authToken", idToken);
      } else {
        sessionStorage.setItem("authToken", idToken);
      }

      navigate("/dashboard");
      props.setOpen(false);
    } catch (err) {
      let errorMessage = "حدث خطأ أثناء تسجيل الدخول.";

      if (err.code === "auth/user-not-found") {
        errorMessage = "البريد الإلكتروني غير صحيح.";
      } else if (err.code === "auth/wrong-password") {
        errorMessage = "كلمة المرور غير صحيحة.";
      } else {
        errorMessage = "البريد الإلكتروني أو كلمة المرور غير صحيحة.";
      }

      alert(errorMessage);
    } finally {
      setLoading(false); // تأكد من إيقاف التحميل سواء تم النجاح أو الفشل
    }
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
            <input
              type="checkbox"
              id="remember"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label htmlFor="remember">خليك فاكرنى</label>
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
