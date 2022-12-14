
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Container} from 'react-bootstrap'
import Wrapper from '../../Helpers/Wrapper';
import Navbar from '../../NavBar/Navbar';
import classes from './Login.module.css';
import {useEffect, useState} from 'react';
// import {loginUser, fetchUsersWithUsername} from '../../../api/users';
import { Link, useNavigate } from 'react-router-dom';
import authService from '../../Auth/auth.service';
function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();
  // async function fetchUser () {
  //   try {
  //     const response = await loginUser(username, password);
  //     return response;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (username.trim().length < 4){
      alert('Invalid username. Username must be at least 4 characters long');
      return;
    }
    if (password.trim().length < 6){
      alert('Invalid password. Password must be at least 6 characters long');
    }
    // const response = await fetchUser();
    // if (response.data.user === false) {
    //   alert('Invalid username or password');
    //   return;
    // }else{
    //   alert('Login successful');
    //   //Set the token (jwt)
    //   localStorage.setItem('token', response.data.token);
    //   //set token to axios common header
    //   // setAuthToken(response.data.token);
      
    //   setUserData(response.data.user)
    // }
    await authService.login(username,password).then(response =>{
      if (response.user) {
        alert('login successfully')
        console.log(response.user);
        navigate('/',{replace: true});
      }else{
        alert(response.message);
        console.log(response);
      }
    });

    
  }
  const onChangeUsernameHandler = (e) => {
    setUsername(e.target.value);
  }
  const onChangePasswordHandler = (e) => {
    setPassword(e.target.value);
  }
  const onClickHandler = (e) =>{
    
    navigate('/register', {replace: true});
  }
  return (<Wrapper>
    <Navbar/>
    <Container className={`my-auto mt-5 w-50 ${classes.form}`}>
      <h2 className='text-primary text-center'>Login</h2>
      <Form onSubmit={onSubmitHandler}>
        <Form.Group className={`${classes["form-control"]} mb-3 `} controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" value={username} onChange={onChangeUsernameHandler} />
        </Form.Group>
        <Form.Group className={`${classes["form-control"]} mb-3`} controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" value={password} onChange={onChangePasswordHandler}/>
        </Form.Group>
        <Form.Group className={classes['btn-container']}>
          <Button variant="primary" type="submit" className=''>
          Login
        </Button>
        <Button variant="primary" type="button" onClick={onClickHandler} className=" ">
          Register
        </Button>
        </Form.Group>
        {/* <small><Link to='/reset_password'>Forgot password?</Link></small> */}
      </Form>
      
    </Container>


  </Wrapper>
    
  );
}

export default Login;