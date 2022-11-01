import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import './CardLayout.css';
const CardLayout = (props) => {
    const item = props.data;
    return (<Link to={`/products/${item.id}`} className="product-link"><Card style={{ width: '15rem' , height: '28rem'}}>
    <Card.Img variant="top" src={item.image} />
    <Card.Body>
      <Card.Title>{item.name}</Card.Title>
      <Card.Text>
        {item.description}
      </Card.Text>
    </Card.Body>
    <Card.Footer className="text-center" md={{span:4}}>
      <small className="text-muted">${item.price}</small>
      <Button variant="primary">Add to cart</Button>
    </Card.Footer>
  </Card></Link>)
}

export default CardLayout;