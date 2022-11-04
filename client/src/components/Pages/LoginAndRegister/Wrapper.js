import React from "react";

import classes from './LoginAndRegister.module.css';

const Wrapper = props =>{
    return (
        <div className={classes.container}>
            <div className={classes.forms}>
                {props.children}
            </div>
        </div>
    )
}

export default Wrapper;