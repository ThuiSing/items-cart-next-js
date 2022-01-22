import Image from "next/image";
import { Accordion, Button, Col, Container, Form, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import BgImage from "../images/bg.jpg";
import EmblaCarousel from "./EmblaCarousel";
const TopBgCard = () => {
  const SLIDE_COUNT = 10;
  const slides = Array.from(Array(SLIDE_COUNT).keys());

  const { selectedProduct } = useSelector((state) => state.product);
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
            marginBottom: "8rem",
            padding: "2rem",
            WebkitBoxShadow: "-1px 5px 8px 1px rgba(0,0,0,0.69) ",
            boxShadow: "0px 10px 20px .5px rgba(0,0,0,0.50)",
            borderRadius: ".5rem",
          }}
        >
          <Col md={6}>
            <EmblaCarousel slides={slides} images={selectedProduct?.img} />
          </Col>
          <Col md={6}>
            <h3>{selectedProduct?.name}</h3>
            <h3>${selectedProduct?.price} </h3>

            {/* Accordion */}
            <Accordion defaultActiveKey="0" className="my-4">
              <Accordion.Item eventKey="0" style={{ border: "none" }}>
                <Accordion.Header style={{ borderBottom: "1px solid #bdb9b9" }}>
                  Description
                </Accordion.Header>
                <Accordion.Body>{selectedProduct.description}</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1" style={{ border: "none" }}>
                <Accordion.Header style={{ borderBottom: "1px solid #bdb9b9" }}>
                  Designer Information
                </Accordion.Header>
                <Accordion.Body>
                  {selectedProduct.designerInformation}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2" style={{ border: "none" }}>
                <Accordion.Header style={{ borderBottom: "1px solid #bdb9b9" }}>
                  Details and Care
                </Accordion.Header>
                <Accordion.Body>
                  <ul>
                    {selectedProduct?.CareDEtails.map((data, ind) => (
                      <li key={ind}>{data}</li>
                    ))}
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <div className="d-flex justify-content-between align-items-center mt-5">
              <div>
                <label htmlFor="size" className="text-secondary mb-2">
                  Select Size
                </label>
                <Form.Select id="size" size="md" style={{ width: "8rem" }}>
                  <option>Small</option>
                  <option>Medium</option>
                  <option>large</option>
                </Form.Select>
              </div>
              <div>
                <label className="text-secondary mb-2" htmlFor="color">
                  Select Color
                </label>
                <Form.Select id="color" size="md" style={{ width: "8rem" }}>
                  <option>red</option>
                  <option>green</option>
                  <option>Yellow</option>
                </Form.Select>
              </div>
            </div>
            <div className="text-end mt-4">
              <Button variant="dark" className="px-4">
                Add To Cart
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TopBgCard;
