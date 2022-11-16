import { Container } from '@material-ui/core';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Navbar from '../../NavBar/Navbar';
import Wrapper from '../../Helpers/Wrapper';
import classes from './Register.module.css';
import {Link, useNavigate} from 'react-router-dom';
import {registerUser, fetchUsersWithEmail, fetchUsersWithUsername} from '../../../api/users';
function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [username, setUsername] = useState('');
    const [invalidEmail,setInvalidEmail] = useState(false);
    const navigate = useNavigate();
    async function sendData () {
        try {
            const response = await registerUser({
                email,password,
                username});
            console.log("response ",response);    
        } catch (error) {
            console.log(error);
        }
    }
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        if (username.trim().length < 4){
            alert('Username must be at least 4 characters long');
            return;
        }
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        }else{
            setInvalidEmail(true);
            return;
        }

        if (password !== confirmPassword){    
            alert('Passwords do not match');
            return;
        }else if (password.trim().length < 6){
            alert('Password must be at least 6 characters long');
            return;
        }
        const usersWithEmail = await fetchUsersWithEmail(email);
        const usersWithUsername = await fetchUsersWithUsername(username);
        if (usersWithEmail.data.isExisted){
            alert('Email already exists');
            return;
        }
        if (usersWithUsername.data.isExisted){
            alert('Username already exists');
            return;
        }

        await sendData();
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setUsername('');
    }
    const onChangeEmailHandler = (e) => {
        setEmail(e.target.value);
        setInvalidEmail(false);
    }
    const onChangeUsernameHandler = (e) =>{
        setUsername(e.target.value);
    }
    const onChangePasswordHandler = (e) => {
        setPassword(e.target.value);
    }
    const onChangeConfirmPasswordHandler = (e) => {
        setConfirmPassword(e.target.value);
    }
    const onClickHandler = (e) =>{
    
        navigate('/login', {replace: true});
      }
    
  return (
    <Wrapper className="">
        <Navbar/>
    <Container className={`my-auto mt-5 w-50 ${classes.form}`}>
        <h2 className='text-center text-primary'>Registration Form</h2 >
        
        <Form.Text></Form.Text>
        <Form onSubmit={onSubmitHandler}>
        <Form.Group className={`mb-3 ${invalidEmail ? `${classes.invalid}` : ""}`} controlId="formEmail" >
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" value={email} onChange={onChangeEmailHandler} required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text"  value={username} onChange={onChangeUsernameHandler} required/>
        </Form.Group>
        

        <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" value={password} onChange={onChangePasswordHandler} required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPasswordConfirm">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" value={confirmPassword} onChange={onChangeConfirmPasswordHandler} required/>
        </Form.Group>
        <Button variant="primary" type="submit" >
            Register
        </Button>
        <Button variant="primary" type="button" className={`${classes.btn} mx-md-5`} onClick={onClickHandler}>
            Login
        </Button>
        
        </Form>
    </Container>
    </Wrapper>
  );
}

export default Register;