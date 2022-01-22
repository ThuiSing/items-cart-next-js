import Image from "next/image";
import { useState } from "react";
import { Card, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToSelectedProduct } from "../Redux/ProductSlices";

const SingleProduct = ({ product }) => {
  const [color, setColor] = useState("#b7afaf");

  const dispatch = useDispatch();

  const handleWhistle = () => {
    setColor(color === "#b7afaf" ? "#E91E63" : "#b7afaf");
  };
  const handleBtn = (product) => {
    dispatch(addToSelectedProduct(product));
  };
  return (
    <Col key={product.id}>
      <Card className="card">
        <div className="p-3">
          <div
            style={{
              boxShadow: "0px 10px 8px .2px rgba(0,0,0,0.50)",
              marginTop: "-3rem",
              borderRadius: ".3rem",
              overflow: "hidden",
            }}
          >
            <Image src={product?.img[0]} alt={product?.name} />
          </div>
        </div>
        <Card.Body className="text-center position-relative">
          <Card.Title>{product?.name}</Card.Title>
          <Card.Text className="my-2 text-secondary">
            {product?.description}
          </Card.Text>
          <button className="cardBtn" onClick={() => handleBtn(product)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </Card.Body>
        <Card.Footer className="bg-white border-0 d-flex justify-content-between align-items-center">
          <h5 className="text-secondary">${product.price}</h5>
          <span onClick={handleWhistle} style={{ cursor: "pointer" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill={color}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </span>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default SingleProduct;
