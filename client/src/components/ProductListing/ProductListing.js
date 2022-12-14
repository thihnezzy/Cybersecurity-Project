import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from "./Product/Product";
import Navbar from '../NavBar/Navbar';
import {useEffect, useState} from "react";
import { fetchProducts,getProductsNumber } from "../../api/products";
import {commerce} from '../lib/commerce';
import Wrapper from '../Helpers/Wrapper';
const ProductListing = (props) =>{
    const [data, setData] = useState([]);
    const [totalItems, setTotalItems] = useState(0);
    async function fetchData() {
        try {
          const response = await fetchProducts();
          console.log(`products  >>>> ${response}`);
          setData(response.data)
        } catch (error) {
          console.error(error);
        }
      }

    //Create an array of products 
    useEffect(() => {
        fetchData();
        setTotalItems(getProductsNumber());
    }, []);
    console.log(data);
    return (
        <Wrapper>
        <Navbar totalItems={totalItems}/>
        <Container>
            
            <Row className="text-center"><h1>Product Listing</h1></Row>
            <Row sm={2} md={3} lg={4} className="g-4 mx-1">
                {data.map((item,index) =>(
                    <Col key={item._id} >
                        <Product product={item}/>
                    </Col>
                ))}
            </Row>
        </Container>
        </Wrapper>
    )
}

export default ProductListing;