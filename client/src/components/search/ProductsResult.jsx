import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {useEffect, useState} from "react";
import { fetchSearch } from "../../api/products";
import {Grid} from '@material-ui/core';
import Product from '../Products/Product/Product';
import { useSearchParams } from "react-router-dom";
import search from "./search";

const ResultListing = (props) =>{
    const [data, setData] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    async function fetch_search() {
        try {
          const response = await fetchSearch(searchParams.get("input"));
          setData(response.data.slice(0,8))
        } catch (error) {
          console.error(error);
        }
      }

    //Create an array of products 
    useEffect(() => {
        fetchSearch();
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

export default ResultListing;