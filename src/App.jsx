import { Route, Routes, useNavigate } from "react-router";
import HomePage from "./pages/home/HomePage";
import NavBar from "./utilities/NavBar";
import Footer from "./utilities/footer/Footer";
import { useEffect, useState } from "react";
import Home from "./pages/dashboard/home/Home";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from "./config/firebase";

function App() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);
  const [auth, setAuth] = useState(undefined);
  const [openSideBar, setOpenSideBar] = useState(false);

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const userData = await getUserData(user.uid);
          setUserData(userData);
          console.log("User data:", userData);
        } catch (err) {
          console.log("Error fetching user data:", err);
        }
      } else {
        console.log("No user is signed in");
        setUserData(null);
      }

      const localToken = localStorage.getItem("authToken");
      const sessionToken = sessionStorage.getItem("authToken");
      const userAuth = localToken || sessionToken;

      if (location.pathname === "/dashboard" && !userAuth) {
        navigate("/");
      }

      user
        .getIdTokenResult()
        .then((idTokenResult) => {
          if (idTokenResult.token !== userAuth) {
            navigate("/");
            localStorage.removeItem("authToken");
            sessionStorage.removeItem("authToken");
          }
        })
        .catch((error) => {
          localStorage.removeItem("authToken");
          sessionStorage.removeItem("authToken");
          navigate("/");
        });

      setLoading(false);
    });

    return (_) => unsubscribe(); // Clean up the listener
  }, [navigate]);

  async function getUserData(userId) {
    try {
      const doc = await db.collection("users").doc(userId).get();
      if (doc.exists) {
        return doc.data();
      } else {
        console.log("No such document!");
        return null;
      }
    } catch (err) {
      console.log("Error getting user data:", err);
      return null;
    }
  }

  useEffect(() => {
    setAuth(
      localStorage.getItem("authToken") || sessionStorage.getItem("authToken")
    );
  }, [navigate]);

  return (
    <div className="App">
      {/* <div className="blurBall" /> */}
      <NavBar
        auth={auth}
        userData={userData}
        setOpenSideBar={setOpenSideBar}
        openSideBar={openSideBar}
      />
      <Routes>
        <Route index element={<HomePage auth={auth} />} />
        <Route
          path="*"
          element={
            <h2 className="text-center fw-bold mt-5 text-danger">
              Page not found
            </h2>
          }
        />

        <Route
          path="/dashboard"
          element={
            <Home setOpenSideBar={setOpenSideBar} openSideBar={openSideBar} />
          }
        >
          <Route index element={<h2>Hello Home</h2>} />
          <Route
            path="student_timetable"
            element={<h2>Hello student_timetable</h2>}
          />
          <Route path="courses" element={<h2>Hello courses</h2>} />
          <Route path="tasks" element={<h2>Hello tasks</h2>} />
          <Route path="classroom" element={<h2>Hello classroom</h2>} />
          <Route path="exams" element={<h2>Hello exams</h2>} />
        </Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
