import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ProductList = () => {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/products", { method: "GET" })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <section className="products">
        {products.map((product) => (
          <Card style={{ width: "18rem" }} className="product">
            <center>
              <Card.Img
                variant="top"
                src={product.image}
                style={{ width: "9rem", height: "12rem" }}
              />
            </center>
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text style={{ overflow: "scroll", height: "200px" }}>
                {product.description}
              </Card.Text>
            </Card.Body>
            <Card.Footer
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <Card.Text>${product.price}</Card.Text>
              <Button variant="primary">Add to Cart</Button>
            </Card.Footer>
          </Card>
        ))}
      </section>
    </div>
  );
};

export default ProductList;
