/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from "./Product/Product";
import Navbar from '../NavBar/Navbar';
import {useEffect, useState} from "react";
import { fetchSearch,getProductsNumber } from "../../api/products";
import {commerce} from '../lib/commerce';
import Wrapper from '../Helpers/Wrapper';
import {Grid} from '@material-ui/core';
import { useSearchParams } from "react-router-dom";

const search = (props) =>{
    const [data, setData] = useState([]);
    const [totalItems, setTotalItems] = useState(0);
	const [searchParams, setSearchParams] = useSearchParams();

    async function fetchsearch() {
        try {
			const response = await fetchSearch(searchParams.get("input"));
			console.log(`products  >>>> ${response}`);
          setData(response.data)
        } catch (error) {
          console.error(error);
        }
      }

    //Create an array of products 
    useEffect(() => {
        fetchsearch();
        setTotalItems(getProductsNumber());
    }, []);
    console.log(data);
    return (
        <Wrapper>
        <Navbar totalItems={totalItems}/>
        <Container>
            
            <Row className="text-center"><h1>Product Listing</h1></Row>
            <Row sm={2} md={3} lg={4} className="g-4 mx-1">
                {data.map((product) =>(
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3} >
                    <Product product={product} />
                </Grid>
                ))}
            </Row>
        </Container>
        </Wrapper>
    )
}

export default search;