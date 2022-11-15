import { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [isBusy, setIsBusy] = useState(false);

  const fetchProductDetail = async () => {
    setIsBusy(true);
    const repsonse = await fetch(
      `https://fakestoreapi.com/products/${productId}`
    );
    const _product = await repsonse.json();
    setProduct(_product);
    setIsBusy(false);
  };

  useEffect(() => fetchProductDetail(), []);

  return (
    <Container className="d-flex justify-content-center" fluid>
      {isBusy ? (
        <Spinner animation="border" />
      ) : (
        <Row className="mt-4 p-5">
          <Col>
            <img src={product.image} alt="product" height={300} />
          </Col>
          <Col md={10} className="mx-3">
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <h4>${product.price}</h4>
          </Col>
        </Row>
      )}
    </Container>
  );
}
