import Image from "next/image";
import { Accordion, Button, Card, Col, Container, Row } from "react-bootstrap";
import BgImage from "../images/bg.jpg";
import EmblaCarousel from "./EmblaCarousel";
const TopBgCard = () => {
  const SLIDE_COUNT = 10;
  const slides = Array.from(Array(SLIDE_COUNT).keys());
  return (
    <div>
      <div>
        <Image src={BgImage} className="opacity-50" alt="" />
      </div>

      {/* Another card */}
      <Container>
        <Row
          style={{
            marginTop: "-8rem",
            background: "#fff",
            position: "relative",
            zIndex: 20,
          }}
          className="border p-4  "
        >
          <Col md={6}>
            <EmblaCarousel slides={slides} />
          </Col>
          <Col md={6}>
            <h3>Becky Silk Blazer</h3>
            <h3>$3000 </h3>

            {/* Accordion */}
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0" style={{ border: "none" }}>
                <Accordion.Header style={{ borderBottom: "1px solid #bdb9b9" }}>
                  Description
                </Accordion.Header>
                <Accordion.Body>
                  Eres daring Grigri Fortune swimsuit has the fit and coverage
                  of a bikini in a one-piece silhouette. This fuchsia style is
                  crafted from the labels sculpting peau douce fabric and has
                  flattering cutouts through the torso and back. Wear yours with
                  mirrored sunglasses on vacation.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1" style={{ border: "none" }}>
                <Accordion.Header style={{ borderBottom: "1px solid #bdb9b9" }}>
                  Designer Information
                </Accordion.Header>
                <Accordion.Body>
                  An infusion of West Coast cool and New York attitude, Rebecca
                  Minkoff is synonymous with It girl style. Minkoff burst on the
                  fashion scene with her best-selling Morning After Bag and
                  later expanded her offering with the Rebecca Minkoff
                  Collection - a range of luxe city staples with a downtown
                  romantic theme.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2" style={{ border: "none" }}>
                <Accordion.Header style={{ borderBottom: "1px solid #bdb9b9" }}>
                  Details and Care
                </Accordion.Header>
                <Accordion.Body>
                  An infusion of West Coast cool and New York attitude, Rebecca
                  Minkoff is synonymous with It girl style. Minkoff burst on the
                  fashion scene with her best-selling Morning After Bag and
                  later expanded her offering with the Rebecca Minkoff
                  Collection - a range of luxe city staples with a downtown
                  romantic theme.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TopBgCard;
