import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardLayout from "./CardLayout/CardLayout";
import Navbar from '../NavBar/Navbar';
import {useEffect, useState} from "react";
import { fetchProducts } from "../../api/products";
import { Nav } from "react-bootstrap";
const ProductListing = (props) =>{
    const [data, setData] = useState([]);
    
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
    }, []);
    console.log(data);
    return (
        <Container>
            <Navbar/>
            <Row className="text-center"><h1>Product Listing</h1></Row>
            <Row sm={2} md={3} lg={4} className="g-4 mx-1">
                {data.map((item,index) =>(
                    <Col key={item._id} >
                        <CardLayout data={item}/>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default ProductListing;