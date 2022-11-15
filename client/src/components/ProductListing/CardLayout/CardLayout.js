import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import classes from './CardLayout.module.css';
const CardLayout = (props) => {
    const item = props.data;
    return (
    <Link to={`/products/${item._id}`} className={`${classes["product-link"]}`}><Card className={classes.card} style={{ width: '15rem' , height: '28rem'}}>
      <Card.Img className={classes["card-img-top"]} variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
          {item.description}
        </Card.Text>
      </Card.Body>
      <Card.Footer className={`${classes["card-footer"]} text-center`} md={{span:4}}>
        <small className="text-muted">${item.price}</small>
        <Button variant="primary" className="add-to-cart">Add to cart</Button>
      </Card.Footer>
  </Card></Link>)
}

export default CardLayout;