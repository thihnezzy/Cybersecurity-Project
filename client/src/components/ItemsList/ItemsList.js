import React from "react";

import Items from "./Items/Item";
import './ItemsList.css'
const ItemsList = () => {
    const itemsList = [
        {
            name: "item 1",
            description: "item 1 description",
            price: 1
        },
        {
            name: "item 2",
            description: "item 2 description",
            price: 2
        },
        {
            name: "item 3",
            description: "item 3 description",
            price: 3
        }
    ]

    return (
        <div className="item-list">
            {itemsList.map(item => 
                 (
                    <Items name={item.name} description={item.description} price={item.price}/>
                ))}
        </div>
    );
}

export default ItemsList;