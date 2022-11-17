import React from "react";
import axios from 'axios';

import  Form  from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import AddNewProductForm from './AddNewProductForm';
import { Container } from "react-bootstrap";

const AddNewProduct = () =>{


    return (<Container>
        <AddNewProductForm/>
    </Container>)
}

export default AddNewProduct;