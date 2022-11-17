import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ImageSlider from './ImageSlider/ImageSlider';
import IconMinus from '../images/icon-minus.svg';
import IconPlus from '../images/icon-plus.svg';
import Form from 'react-bootstrap/Form';
// import './ProductDetail.css';

import { useParams } from 'react-router-dom';
import { light } from '@material-ui/core/styles/createPalette';
import { lightBlue } from '@material-ui/core/colors';

import classes from './ProductDetail.module.css';

const ProductDetail = (props) =>{
  const {id} = useParams();
  const getSingleProductData = props.data.find(x => x?.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(getSingleProductData.price);


  const onClickMinusHandler = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setPrice(price - getSingleProductData.price);
    }
  }

  const onClickPlusHandler = () => {
    if (quantity < 99){
      setQuantity(quantity + 1);
      setPrice(price + getSingleProductData.price);
    }
  }

  return (
    <Container className={`${classes["product-container"]}`} bg={light} md={{span:3, offset:6}}>
      <Row>
        <Col md={6} className={`${classes['product-image']}`}>
          <ImageSlider data={getSingleProductData}/>
        </Col>

        <Col md={6} className={`${classes["product-detail"]}`}>
          <Row className={`${classes['product-detail__brand']}`}>
            {getSingleProductData.name}
          </Row>
          <Row className={`${classes['product-detail__name']}`}>
            <h2>{getSingleProductData.description}</h2>
          </Row>
          <Row>
            <p className={`${classes['product-detail__description']}`}>
              {getSingleProductData.description}
            </p>
          </Row>
            <Row className={`${classes['product-detail__price']}`}>
              <span>{`$${price.toFixed(2)}`}</span>
              <span>Promotion</span>
            </Row>


            <Row className='mt-5'>
              <Col className={`${classes['quantity-modification']}`}>
                <Form className={`${classes["form"]}`}>
                  <Form.Group controlId="minusIcon" className={`${classes["form-control"]}`}>
                    <Button variant="secondary" onClick={onClickMinusHandler}><img src={IconMinus} alt=""/></Button>
                  </Form.Group>
                  <Form.Group controlId="productQuantity" className={`${classes["form-control"]}`}>
                    <input type="" name="" value={quantity} disabled className=''/>
                  </Form.Group>
                  <Form.Group controlId="plusIcon" className={`${classes["form-control"]}`}>
                    <Button variant="secondary" bg={lightBlue} onClick={onClickPlusHandler}><img src={IconPlus} alt=""/></Button>
                  </Form.Group>
                </Form>
              </Col>
              <Col className={`${classes['add-to-cart']}`}>
                <Button variant="primary" className={`${classes['add-to-cart']}`}>Add to Cart</Button>
              </Col>
            </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetail;