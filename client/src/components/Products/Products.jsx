import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {useEffect, useState} from "react";
import { fetchProducts } from "../../api/products";
import {Grid} from '@material-ui/core';
import Product from './Product/Product';
const ProductListing = (props) =>{
    const [data, setData] = useState([]);
    
    async function fetchData() {
        try {
          const response = await fetchProducts();
          setData(response.data.slice(0,4))
        } catch (error) {
          console.error(error);
        }
      }

    //Create an array of products 
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <Container>
            <Row sm={2} md={3} lg={4} className="g-4 mx-1">
                <Grid container justifyContent="center" spacing={4}>
            {data.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3} >
                    <Product product={product} />
                </Grid>
            ))}
            </Grid>
            </Row>
        </Container>
    )
}

export default ProductListing;