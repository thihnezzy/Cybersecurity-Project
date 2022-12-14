import React, {useRef, useState, useEffect} from 'react';
import Navbar from '../NavBar/Navbar';
import Wrapper from '../Helpers/Wrapper'
import { validTransfert, makeTransfert } from '../../api/transfert';
import jwt_decode from 'jwt-decode';
import authService from "../Auth/auth.service";

import './transfert.css'

const Transfert = () => {
    const [currentUser,setCurrentUser] = useState(undefined);
    const userRef = useRef();

    const [user, setUser] = useState('');
    const [points, setPoints] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    const [total,setTotal] = useState(0);

    useEffect(() => {
        userRef.current.focus();
    }, []);

    const onSubmitHandler = async (e) => {
        const userMe = localStorage.getItem("token");
        e.preventDefault();
        try {
            const response = await validTransfert({
                    user, points, userMe
            });
            if(response.data["validation"] == true) {
                if (window.confirm("Voulez-vous vraiment envoyer les "+response.data["points"]+" points à "+response.data["receiver"])) {
                    const isTransfert = await makeTransfert({
                        sender: response.data["sender"],
                        receiver: response.data["receiver"],
                        points: response.data["points"]
                    });
                    if(isTransfert.data['status'] == true)
                        window.alert("Félicitaion : Vous venez de donner "+response.data["points"]+" points à "+response.data["receiver"]);
                    else
                        window.alert("Une erreur c'est produite : "+isTransfert.data['message']);
                }
            } else {
                window.alert("Une erreur c'est produite : "+response.data['message']);
            }
        } catch (error) {
            console.log(error);
        }
        setUser('');
        setPoints('');
        setSuccess(true);
    };

    return (
        <>
        <Wrapper>
            <Navbar totalItems={total}/>
            <form class="form-transfert" onSubmit={onSubmitHandler}>
                <label htmlFor="username">Send To:</label><br />
                <input
                    type="text"
                    id="username"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    required
                /><br /><br />
                <label htmlFor="username">Number Points:</label><br />
                <input
                    type="text"
                    id="username"
                    autoComplete="off"
                    onChange={(e) => setPoints(e.target.value)}
                    value={points}
                    required
                /><br /><br />
                <button>Transfert Points</button>
            </form>
        </Wrapper>
        </>
    );
}

export default Transfert;