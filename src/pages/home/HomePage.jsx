import { Box, Button, Container, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import mohamedNasrImg from "../../assets/img1.png";
import Card from "../../components/Card";
import mohamedNasrCover from "../../assets/img2.jpg";
import tasniemImg from "../../assets/img3.png";
import tasniemCover from "../../assets/img4.jpg";
import shrouqImg from "../../assets/img6.png";
import shrouqCover from "../../assets/img5.jpg";
import "./HomePage.css";
import logo from "../../../public/logo.png";
import cover from "../../assets/home-cover.jpg";
import AboutUs from "../../components/pages/home/AboutUs";

function HomePage() {
  const [nextBtn, setNextBtn] = useState("1");

  useEffect(() => {
    const header = document.querySelector(".header");
    const homePage = document.querySelector(".homePage");
    const nav = document.querySelector(".nav");

    if (nextBtn == 3) {
      header.style.transition = "all 1.5s ease";
      header.style.transform = "scale(4)";
      header.style.opacity = "0";
      header.style.pointerEvents = "none";
      nav.classList.add("sticky");
      homePage.style.background = `linear-gradient(to bottom, #000000 0%, hwb(0 0% 100% / 0.1) 100%),
    url(${cover}) no-repeat`;
      homePage.style.backgroundSize = "cover";

      localStorage.tutorial = true;
    }
  }, [nextBtn]);

  useEffect(() => {
    const nav = document.querySelector(".nav");

    if (localStorage.tutorial) {
      nav.classList.add("sticky");
    }
  }, []);

  // useEffect(() => {
  //   function handleScroll() {
  //     const scrollY = window.scrollY;
  //     const header = document.querySelector(".header");
  //     const nav = document.querySelector(".nav");
  //     const windowHeight = window.innerHeight;

  //     if (header) {
  //       const scaleValue = 1 + scrollY / windowHeight;
  //       header.style.transform = `scale(${scaleValue})`;

  //       const opacityValue = Math.max(0, 1 - scrollY / windowHeight);
  //       header.style.opacity = opacityValue;
  //     }

  //     if (scrollY > 1000) {
  //       nav.classList.add("sticky");
  //     } else {
  //       nav.classList.remove("sticky");
  //     }
  //   }

  //   window.addEventListener("scroll", handleScroll);

  //   return (_) => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <div className="homePage">
      {/* header component */}

      {!localStorage.tutorial && (
        <section className="header">
          <h2>Learning</h2>
          <h2>with</h2>
          <h2>us</h2>

          <div className="content">
            <div className="box">
              <Stack direction={"row"} className="logo-container">
                <h3>learn with me</h3>
                <img src={logo} alt="Logo" />
              </Stack>

              {nextBtn === "1" ? (
                <p>
                  نسعى لتقديم أفضل تجربة تعليمية عبر الإنترنت، مخصصة للطلاب من
                  الابتدائي، الإعدادي، الثانوي، الجامعي، وذوي الاحتياجات الخاصة.
                </p>
              ) : nextBtn === "2" ? (
                <ul>
                  <li>
                    <p>
                      تعلم وحب التعلم: نهدف إلى تحفيز الطلاب على اكتشاف شغفهم
                      بالتعلم من خلال محتوى تفاعلي وممتع.
                    </p>
                  </li>
                  <li>
                    <p>
                      تعليم عبر الإنترنت: نقدم دروسًا مباشرة ومسجلة تتيح للطلاب
                      التعلم في أي وقت ومن أي مكان.
                    </p>
                  </li>
                  <li>
                    <p>
                      خطط مستقبلية: نحن نعمل على توفير حضور شخصي في المستقبل،
                      مما يعزز تجربة التعلم العملية.
                    </p>
                  </li>
                </ul>
              ) : null}

              <Stack direction={"row"} mt={2} alignItems={"center"}>
                {nextBtn === "2" && (
                  <strong>ابدأ رحلتك التعليمية معنا اليوم!</strong>
                )}
                <Box flex={1} />

                <Button
                  color="primary"
                  variant="outlined"
                  className="btn"
                  onClick={(_) => setNextBtn(nextBtn === "1" ? "2" : "3")}
                >
                  {nextBtn === "1" ? "التالى" : "إبدأ الأن"}
                </Button>
              </Stack>
            </div>
          </div>
        </section>
      )}

      <Container maxWidth={"xl"} className="container">
        {/* about us */}

        <AboutUs />
      </Container>
    </div>
  );
}

export default HomePage;
