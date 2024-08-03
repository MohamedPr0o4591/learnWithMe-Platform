import { Box, Container, Stack } from "@mui/material";
import React, { useEffect } from "react";
import mohamedNasrImg from "../../assets/img1.png";
import Card from "../../components/Card";
import mohamedNasrCover from "../../assets/img2.jpg";
import tasniemImg from "../../assets/img3.png";
import tasniemCover from "../../assets/img4.jpg";
import shrouqImg from "../../assets/img6.png";
import shrouqCover from "../../assets/img5.jpg";
import "./HomePage.css";

function HomePage() {
  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY;
      const header = document.querySelector(".header");
      const nav = document.querySelector(".nav");
      const windowHeight = window.innerHeight;

      if (header) {
        const scaleValue = 1 + scrollY / windowHeight;
        header.style.transform = `scale(${scaleValue})`;

        const opacityValue = Math.max(0, 1 - scrollY / windowHeight);
        header.style.opacity = opacityValue;
      }

      if (scrollY > 1000) {
        nav.classList.add("sticky");
      } else {
        nav.classList.remove("sticky");
      }
    }

    window.addEventListener("scroll", handleScroll);

    return (_) => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="homePage">
      {/* header component */}

      <section className="header">
        <h2>Learning</h2>
        <h2>with</h2>
        <h2>us</h2>
      </section>
    </div>
  );
}

export default HomePage;
