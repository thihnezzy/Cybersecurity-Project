import React from "react";

const Card = (props) => {
    
    return (<>
        <div className="card">
            <div className="card-header">
                <h3>{props.title}</h3>
            </div>
            <div className="card-body">
                <p>{props.description}</p>
                <img src="" alt=""/>
            </div>
        </div>
    </>)
}

export default Card;