import React from "react";
import './Item.css'
const Items = (props) => {
    return (
        <div className="item">
        <h3>Title: {props.name}</h3>
        <p>Item Description: {props.description}</p>
        <p>Price: ${props.price}</p>
        </div>
    );
}

export default Items;