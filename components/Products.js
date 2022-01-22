import { Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import SingleProduct from "./SingleProduct";

const Products = () => {
  const { products, selectedProduct } = useSelector((state) => state.product);
  const available = products.filter((pro) => pro.id !== selectedProduct.id);
  return (
    <Container className="py-5">
      <div className="text-center">
        <h3>You may also be interested in:</h3>
      </div>
      <Row xs={1} md={2} lg={4} className="g-5 mt-3">
        {available.map((product) => (
          <SingleProduct product={product} key={product.id} />
        ))}
      </Row>
    </Container>
  );
};

export default Products;
