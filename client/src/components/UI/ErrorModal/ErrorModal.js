import React from "react";
import ButtonUI from "../Button/Button";
import classes from './ErrorModal.module.css';
import Card from "../Card/Card";

const ErrorModal = props =>{
    
    return (
    <div>
        <div className={classes.backdrop} onClick={props.onConfirm}/>
    <Card className={classes.modal}>
        <header className={classes.header}>
            <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
            <p>{props.message}</p>
        </div>
        <footer className={classes.actions} onClick={props.onConfirm}>
            <ButtonUI>Ok</ButtonUI>
        </footer>
    </Card>
    </div>
    )

}

export default ErrorModal;