import { Col, Container, Row } from "react-bootstrap";

const data = [
  {
    id: 1,
    title: "2 Days Delivery",
    svgIcon: (
      <svg
        width={100}
        className="MuiSvgIcon-root jss202 jss207 "
        focusable="false"
        viewBox="0 0 24 24"
        aria-hidden="true"
        fill="#00ACC1"
      >
        <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path>
      </svg>
    ),
    description:
      "Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.",
  },
  {
    id: 2,
    title: "Refundable Policy",
    svgIcon: (
      <svg
        width={100}
        className="MuiSvgIcon-root jss202 jss207 "
        focusable="false"
        viewBox="0 0 24 24"
        aria-hidden="true"
        fill="#4CAF50"
      >
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"></path>
      </svg>
    ),
    description:
      "Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.",
  },
  {
    id: 3,
    title: "Popular Item",
    svgIcon: (
      <svg
        width={100}
        className="MuiSvgIcon-root jss202 jss207"
        focusable="false"
        viewBox="0 0 24 24"
        aria-hidden="true"
        fill="#E91E63"
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
      </svg>
    ),
    description:
      "Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.",
  },
];

const PromisedSection = () => {
  return (
    <Container className="my-5">
      <Row className="text-center ">
        {data.map((pr) => (
          <Col key={pr.id} md={6} lg={4} className="p-2">
            <div>{pr.svgIcon}</div>
            <div>
              <h5 className="header1 mt-3">{pr.title}</h5>
              <small className="text-secondary">{pr.description}</small>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PromisedSection;
