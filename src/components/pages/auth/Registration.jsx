import { CheckCircle, HighlightOff, Info } from "@mui/icons-material";
import { Box, IconButton, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { auth, db } from "../../../config/firebase";

var validateAr = /[\u0600-\u06FF]/;
var validateEn = /[a-zA-Z]/;
var validateNum = /\d/;
var date = new Date();

function Registration(props) {
  const [role, setRole] = useState("");
  const [primaryRole, setPrimaryRole] = useState("");
  const [classDetails, setClassDetails] = useState([]);
  const [scienceType, setScienceType] = useState("");
  const [scienceOption, setScienceOption] = useState("");

  const [active, setActive] = useState(false);
  const [loading, setLoading] = useState(false);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confPass, setConfPass] = useState("");
  const [userDate, setUserDate] = useState("");
  const [emailType, setEmailType] = useState("gmail");

  useEffect(() => {
    setEmail(email.replace(/[^a-zA-Z0-9._]/g, ""));
  }, [email]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    setActive(true);
    let flag;
    let userD;
    var validateAllAr = /^[\u0600-\u06FF\s]+$/;

    if (userDate !== "") {
      userD = new Date(userDate);
    }

    if (
      pass === confPass &&
      userD.getFullYear() <= date.getFullYear() - 7 &&
      validateAllAr.test(fullName)
    ) {
      flag = true;
    } else flag = false;

    if (flag) {
      try {
        const signInMethods = await auth.fetchSignInMethodsForEmail(
          `${email}${
            emailType === "gmail"
              ? "@gmail.com"
              : emailType === "hotmail"
              ? "@hotmail.com"
              : "@outlook.com"
          }`
        );
        if (signInMethods.length > 0) {
          alert("البريد الالكتروني مستخدم من قبل");
          setActive(false);
          return;
        }

        const userCredential = await auth.createUserWithEmailAndPassword(
          `${email}${
            emailType === "gmail"
              ? "@gmail.com"
              : emailType === "hotmail"
              ? "@hotmail.com"
              : "@outlook.com"
          }`,
          pass
        );

        await db
          .collection("users")
          .doc(userCredential.user.uid)
          .set({
            email: `${email}${
              emailType === "gmail"
                ? "@gmail.com"
                : emailType === "hotmail"
                ? "@hotmail.com"
                : "@outlook.com"
            }`,
            fullName,
            role,
            primaryRole,
            classDetails,
            scienceType,
            scienceOption,
            userDate,
          });

        await userCredential.user.sendEmailVerification();

        alert(
          "تم تسجيلك بنجاح. يرجى التحقق من بريدك الالكتروني لتفعيل الحساب قبل الدخول."
        );

        props.setRegisterMode("sign in");
      } catch (err) {
        console.error(err);
        alert("حدث خطأ أثناء عملية التسجيل: " + err.message);
      }
    } else {
      if (pass !== confPass) {
        alert("كلمة السر وتأكيد كلمة السر غير متطابقتين.");
      } else if (!validateAllAr.test(fullName)) {
        alert("الاسم غير صالح.");
      } else {
        alert("السن يجب ان لا يقل عن 7 سنوات.");
      }
    }

    setActive(false);
    setLoading(false);
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <Container>
        <Row className="register-row">
          <Col
            sx={12}
            lg={6}
            className={`register-col ${
              role !== "" && role !== "parent" ? "animated" : ""
            }`}
          >
            <div className="register-component">
              <Stack direction={"row"} alignItems={"center"}>
                <Box flex={1} />

                <IconButton
                  color="inherit"
                  onClick={() => props.setOpen(false)}
                >
                  <HighlightOff color="error" fontSize="medium" />
                </IconButton>
              </Stack>
              <h2>تسجيل في منصة Learn with me</h2>
              <div className="input-box">
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
                <span>الاسم بالكامل</span>
              </div>
              {fullName !== "" && (
                <ul>
                  <li>
                    {validateAr.test(fullName) ? (
                      <CheckCircle sx={{ color: "green", fontSize: "1rem" }} />
                    ) : (
                      <HighlightOff sx={{ color: "#e00", fontSize: "1rem" }} />
                    )}{" "}
                    <span>حروف عربية</span>
                  </li>

                  <li>
                    {!validateEn.test(fullName) ? (
                      <CheckCircle sx={{ color: "green", fontSize: "1rem" }} />
                    ) : (
                      <HighlightOff sx={{ color: "#e00", fontSize: "1rem" }} />
                    )}{" "}
                    <span>بدون حروف انجليزية</span>
                  </li>

                  <li>
                    {!validateNum.test(fullName) ? (
                      <CheckCircle sx={{ color: "green", fontSize: "1rem" }} />
                    ) : (
                      <HighlightOff sx={{ color: "#e00", fontSize: "1rem" }} />
                    )}{" "}
                    <span>بدون ارقام</span>
                  </li>
                </ul>
              )}
              <div className="input-box">
                <div className="label">
                  <label htmlFor="birthDate">تاريخ الميلاد</label>
                </div>
                <input
                  type="date"
                  required
                  id="birthDate"
                  value={userDate}
                  onChange={(e) => setUserDate(e.target.value)}
                />
              </div>
              <span className="d-block mt-2">
                <Info color="primary" fontSize="1rem" /> من بداية 7 سنوات
              </span>
              <div className="input-box">
                <div className="label">
                  <label htmlFor="gender">النوع</label>
                </div>

                <div id="gender">
                  <div className="inner-box">
                    <input type="radio" name="gender" id="male" required />
                    <label htmlFor="male">ذكر</label>
                  </div>
                  <div className="inner-box">
                    <input type="radio" name="gender" id="female" required />
                    <label htmlFor="female">انثي</label>
                  </div>
                </div>
              </div>
              <div className="input-box">
                <div className="label">
                  <label htmlFor="role">الدور</label>
                </div>
                <select
                  required
                  name="role"
                  id="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option value="">اختر الدور</option>
                  <option value="student">طالب</option>
                  <option value="teacher">معلم</option>
                  <option value="parent">ولي امر</option>
                  <option value="special">ذوي احتياجات خاصة</option>
                </select>
              </div>

              <div className="input-box">
                <div className="box-icon">
                  <Info color="primary" fontSize="1rem" className="info-icon" />

                  <p>التسجيل باستخدام حسابات الجيميل فقط</p>
                </div>

                <input
                  className="input-ltr"
                  type="text"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span>البريد الالكتروني</span>

                <select
                  value={emailType}
                  onChange={(e) => setEmailType(e.target.value)}
                >
                  <option value="gmail">@gmail.com</option>
                  <option value="hotmail">@hotmail.com</option>
                  <option value="outlook">@outlook.com</option>
                </select>
              </div>
              <div className="input-box">
                <input
                  className="input-ltr"
                  type="password"
                  required
                  id="password"
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                />
                <span>كلمة المرور</span>
              </div>
              <div className="input-box">
                <input
                  type="password"
                  required
                  className="input-ltr"
                  id="confirmPassword"
                  value={confPass}
                  onChange={(e) => setConfPass(e.target.value)}
                />
                <span>تأكيد كلمة المرور</span>
              </div>
              <div className="input-box">
                <input
                  type="submit"
                  value={`${loading ? "جاري التسجيل .." : "سجل الأن"}`}
                  id="submit"
                  className={`${loading ? "item-disabled" : ""}`}
                />
              </div>
              <Stack direction={"row"} alignItems={"center"} gap={2} mt={2}>
                <span>لديك حساب بالفعل؟</span>

                <span
                  className="text-primary"
                  id="registration"
                  onClick={(_) => props.setRegisterMode("sign in")}
                >
                  تسجيل دخول
                </span>
              </Stack>
            </div>
          </Col>

          {role !== "" && role !== "parent" && (
            <Col
              sx={12}
              lg={6}
              className={`register-col ${
                role !== "" && role !== "parent" ? "animated" : ""
              }`}
            >
              <div className="register-component">
                {/* for students */}
                {role === "student" && (
                  <>
                    <div className="input-box">
                      <div className="label">
                        <label htmlFor="level">المرحلة</label>
                      </div>

                      <select
                        required
                        name="level"
                        id="level"
                        value={primaryRole}
                        onChange={(e) => setPrimaryRole(e.target.value)}
                      >
                        <option value="">اختر المرحلة</option>
                        <option value="1">المرحلة الابتدائية</option>
                        <option value="2">المرحلة الاعدادية</option>
                        <option value="3">المرحلة الثانونية</option>
                      </select>
                    </div>

                    {primaryRole == 1 ? (
                      <div className="input-box">
                        <div className="label">
                          <label htmlFor="class">اختر الصف</label>
                        </div>

                        <select
                          required
                          name="class"
                          id="class"
                          value={classDetails.primary}
                          onChange={(e) =>
                            setClassDetails({
                              ...classDetails,
                              primary: e.target.value,
                            })
                          }
                        >
                          <option value="">اختر الصف</option>
                          <option value="1">الاول</option>
                          <option value="2">الثاني</option>
                          <option value="3">الثالث</option>
                          <option value="4">الرابع</option>
                          <option value="5">الخامس</option>
                          <option value="6">السادس</option>
                        </select>
                      </div>
                    ) : primaryRole == 2 || primaryRole == 3 ? (
                      <div className="input-box">
                        <div className="label">
                          <label htmlFor="class2">اختر الصف</label>
                        </div>

                        <select
                          required
                          name="class2"
                          id="class2"
                          value={classDetails.preparatory}
                          onChange={(e) =>
                            setClassDetails({
                              ...classDetails,
                              preparatory: e.target.value,
                            })
                          }
                        >
                          <option value="">اختر الصف</option>
                          <option value="1">الاول</option>
                          <option value="2">الثاني</option>
                          <option value="3">الثالث</option>
                        </select>
                      </div>
                    ) : null}
                    {primaryRole == 3 && classDetails.preparatory !== "" && (
                      <div className="input-box">
                        <div className="label">
                          <label htmlFor="scienceDetails">نوع الثانوية</label>
                        </div>

                        <select
                          required
                          name="scienceDetails"
                          id="scienceDetails"
                          value={scienceType}
                          onChange={(e) => setScienceType(e.target.value)}
                        >
                          <option value="">اختر نوع الثانوية</option>
                          <option value="normal">ثانوي عام</option>
                          <option value="azhri">ثانوي ازهري</option>
                          <option value="snaye3">ثانوي صنايع</option>
                          <option value="togari">ثانوي تجاري</option>
                        </select>
                      </div>
                    )}
                    {(classDetails.preparatory == 2 &&
                      primaryRole == 3 &&
                      scienceType === "normal") ||
                    (classDetails.preparatory == 3 &&
                      primaryRole == 3 &&
                      scienceType === "normal") ||
                    (classDetails.preparatory == 2 &&
                      primaryRole == 3 &&
                      scienceType === "azhri") ||
                    (classDetails.preparatory == 3 &&
                      primaryRole == 3 &&
                      scienceType === "azhri") ? (
                      <div className="input-box">
                        <div className="label">
                          <label htmlFor="options">نوع الشعبة:</label>
                        </div>

                        <select
                          required
                          name="options"
                          id="options"
                          value={scienceOption}
                          onChange={(e) => setScienceOption(e.target.value)}
                        >
                          <option value="">اختر نوع الشعبة</option>
                          <option value="science">علمى</option>
                          <option value="art">أدبى</option>
                        </select>
                      </div>
                    ) : null}

                    {classDetails.preparatory == 3 &&
                      primaryRole == 3 &&
                      scienceType === "normal" &&
                      scienceOption === "science" && (
                        <div className="input-box">
                          <div className="label">
                            <label htmlFor="scienceType">نوع العلمى:</label>
                          </div>

                          <select required name="scienceType" id="scienceType">
                            <option value="">اختر نوع العلمى</option>
                            <option value="sciences">علمى علوم</option>
                            <option value="maths">علمى رياضة</option>
                          </select>
                        </div>
                      )}
                  </>
                )}

                {/* for teachers */}
                {role === "teacher" && (
                  <>
                    <div className="input-box">
                      <div className="label">
                        <label htmlFor="specialRole">التخصص:</label>
                      </div>

                      <select required name="specialRole" id="specialRole">
                        <option value="">اختر التخصص</option>
                        <option value="programming">برمجة</option>
                        <option value="mathematics">رياضيات</option>
                        <option value="chemistry">كيمياء</option>
                        <option value="schience">علوم</option>
                        <option value="english">لغة انجليزية</option>
                        <option value="biology">بيولوجى</option>
                        <option value="special">ذوى احتياجات خاصة</option>
                        <option value="children">أطفال</option>
                      </select>
                    </div>
                  </>
                )}

                {/* for specialists */}
                {role === "special" && (
                  <>
                    <div className="input-box">
                      <div className="label">
                        <label htmlFor="specialType">نوع الإعاقة:</label>
                      </div>

                      <select required name="specialType" id="specialType">
                        <option value="">اختر النوع</option>
                        <option value="visual">إعاقة بصرية</option>
                        <option value="audio">إعاقة سمعية</option>
                        <option value="mind">إعاقة عقلية</option>
                        <option value="autism">توحد</option>
                      </select>
                    </div>
                  </>
                )}
              </div>
            </Col>
          )}
        </Row>
      </Container>
    </form>
  );
}

export default Registration;
