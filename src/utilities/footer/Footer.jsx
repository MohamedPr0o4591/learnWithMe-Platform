import React from "react";
import "./Footer.css";
import { Container } from "@mui/material";
import { Col, Row } from "react-bootstrap";
import {
  FacebookRounded,
  Instagram,
  LinkedIn,
  WhatsApp,
  YouTube,
} from "@mui/icons-material";

function Footer() {
  return (
    <div className="footer">
      <Container maxWidth="xl">
        <Row className="footer-row">
          <Col sm={12} lg={6} className="mt-4">
            <h4>مواقع التواصل الاجتماعى</h4>

            <ul>
              <li>
                <a href="" id="fb">
                  <FacebookRounded />
                </a>
              </li>

              <li>
                <a href="" id="whatsapp">
                  <WhatsApp />
                </a>
              </li>

              <li>
                <a href="" id="insta">
                  <Instagram />
                </a>
              </li>

              <li>
                <a href="" id="youtube">
                  <YouTube />
                </a>
              </li>

              <li>
                <a href="" id="linkedin">
                  <LinkedIn />
                </a>
              </li>
            </ul>
          </Col>

          <Col sm={12} lg={6} className="mt-4">
            <strong>Features</strong>

            {/* <strong>شركات معاونة للمنصة</strong> */}
            {/* <strong>المكافات والتحفيزات</strong> نظام نقاط لتحفيظ الطالب ع التفاعل مع المنصة */}
            {/* <strong>خدمات اضافية</strong> خدمات استشارية توجيه ادارية او دعم نفسي للطالب */}
            {/* <strong>الالعاب التعليمية</strong> العاب تفاعلية تساعد في تعزيز الفهم وتسهيل التعلم */}
            {/* <strong>الشهادات المهنية</strong> معلومات عن الشهادات التي يمكن الحصول عليها عند اكمال الدورات او المستويات المختلفة */}
            {/* <strong>الانجازات والاحصائيات</strong> عدد الطلاب المسجلين وعدد الدروس والمواعيد المتاحه ومعدل النجاح والتقييمات */}
            {/* <strong>FAQS</strong> */}
            {/* <strong>الشهادات</strong>  اراء الطلاب و اوليائ الامور */}
          </Col>
        </Row>

        <p>© 2024. All Rights Reserved.</p>
      </Container>
    </div>
  );
}

export default Footer;
