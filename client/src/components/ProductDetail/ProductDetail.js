import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ImageSlider from './ImageSlider/ImageSlider';
import IconMinus from '../../images/icon-minus.svg';
import IconPlus from '../../images/icon-plus.svg';
import Form from 'react-bootstrap/Form';
import { fetchSingleProduct } from '../../api/products';
// import './ProductDetail.css';

import { useParams } from 'react-router-dom';
import { light } from '@material-ui/core/styles/createPalette';
import { lightBlue } from '@material-ui/core/colors';
import Navbar from '../NavBar/Navbar';
import Wrapper from '../Helpers/Wrapper'
import classes from './ProductDetail.module.css';

const ProductDetail = (props) =>{
  const {id} = useParams();
  const [data, setData] = useState("");
  const [price, setPrice] = useState(data.price);
  useEffect(() => {
  async function fetchData() {
    try {
      const response = await fetchSingleProduct(id);
      setData(response.data[0]);
      setPrice(response.data[0].price);
      console.log(response);
      console.log("products  >>>> ",data);
    } catch (error) {
      console.error(error);
    }
  }
  fetchData();
},[]); //to fetch the data once only
  const [quantity, setQuantity] = useState(1);
  
  const onClickMinusHandler = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setPrice(price - data.price);
      console.log(price);
    }
  }

  const onClickPlusHandler = () => {
    if (quantity < 99){
      setQuantity(quantity + 1);
      setPrice(price + data.price);
      console.log(price);
    }
  }
  return (
    <Wrapper>
      <Navbar/>
      {!data && <h2 className='text-center'>Cannot show product</h2>}
      {data && <Container className={`${classes["product-container"]}`} bg={light} md={{span:2, offset:4}} >
      <Row className='mx-5'>
        <Col md={6}className={`${classes['product-image']}`}>
          <ImageSlider data={data.image}/>
        </Col>
        <Col md={6} className={`${classes["product-detail"]}`}>
          <Row className={`${classes['product-detail__brand']}`}>
            {data.name}
          </Row>
          <Row className={`${classes['product-detail__name']}`}>
            <h2>{data.description}</h2>
          </Row>
          <Row>
            <p className={`${classes['product-detail__description']}`}>
              {data.description}
            </p>
          </Row>
            <Row className={`${classes['product-detail__price']}`}>
              <span>{`$${data.price.toFixed(2)}`}</span>
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
            <Row>
              <Col>
                <p className={`${classes['product-detail__price']}`}>Total: {`$${price.toFixed(2)}`}</p>
              </Col>
            </Row>

        </Col>
      </Row>
    </Container>}
    
    </Wrapper>
  );
}

export default ProductDetail;