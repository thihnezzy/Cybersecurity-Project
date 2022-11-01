import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardLayout from "./CardLayout/CardLayout";

const ProductListing = (props) =>{
    const data = props.data;

    return (
        <Container>
            <Row className="text-center"><h1>Product Listing</h1></Row>
            <Row sm={2} md={3} lg={4} className="g-4 mx-1">
                {data.map((item,index) =>(
                    <Col key={index} >
                        <CardLayout data={item}/>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default ProductListing;