import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const repsonse = await fetch("https://fakestoreapi.com/products");
    const _products = await repsonse.json();
    setProducts(_products);
  };

  useEffect(() => fetchProducts(), []);

  return (
    <div>
      <Container>
        <Row>
          {products.map((product) => {
            return (
              <Col key={product.id}>
                <ProductCard
                  product={product}/>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Products;
