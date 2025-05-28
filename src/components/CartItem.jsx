import React from 'react';
import { Card, Button, Row, Col, Form } from 'react-bootstrap';

// to access these properties we pass it as an argument
const CartItem = ({ item, onRemove, onQuantityChange }) => {
  // function to update the quantity 
  const handleChange = (e) => {
    const quantity = parseInt(e.target.value, 10);
    if (quantity > 0) {
      onQuantityChange(quantity);
    }
  };

  return (
    <Card className="mb-5 shadow pe-5">
      <Row className="g-0 align-items-center">
        <Col md={3}>
          <img
            src={item.images && item.images.length > 0 ? item.images[0] : ''}
            alt={item.title}
            className="img-fluid"
            style={{ maxHeight: '150px', objectFit: 'cover' }}
          />
        </Col>
        <Col md={6} sm={6} xs={9}>
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            {item.brand && <Card.Subtitle className="mb-2 text-muted">{item.brand}</Card.Subtitle>}
            <Card.Text>
              Price: ${item.price.toFixed(2)} <br />
              Total: ${(item.price * item.quantity).toFixed(2)}
            </Card.Text>
          </Card.Body>
        </Col>
        <Col md={3} sm={6} xs={3} className="d-flex align-items-center gap-3 p-2 flex-wrap">
          <Form.Control
            type="number"
            min="1"
            value={item.quantity}
            onChange={handleChange}
            style={{ width: '60px' }}
          />
          <Button variant="danger" onClick={onRemove}>
            Remove
          </Button>
        </Col>
      </Row>
    </Card>
  );
};

export default CartItem;
