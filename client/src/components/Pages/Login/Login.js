
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Container} from 'react-bootstrap'
import Wrapper from '../../Helpers/Wrapper';
import Navbar from '../../NavBar/Navbar';
import classes from './Login.module.css';
import {useState} from 'react';
import {loginUser, fetchUsersWithUsername} from '../../../api/users';
import { Link, useNavigate } from 'react-router-dom';
function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  async function fetchUser () {
    try {
      const response = await fetchUsersWithUsername(username);
      return response;  
    } catch (error) {
      console.log(error);
    }
  }
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (username.trim().length < 4){
      alert('Invalid username. Username must be at least 4 characters long');
      return;
    }
    const user = await fetchUser();
    if (user.data.isExisted){
      if (password === user.data.password){
        alert('Login successfully');
      }else{
        alert('Wrong password');
        return
      }
    }else{
      alert('User does not exist');
      return;
    }
    navigate('/',{replace: true});
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
        <Form.Group className={`${classes["form-control"]} mb-3`} controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" value={username} onChange={onChangeUsernameHandler} />
        </Form.Group>
        <Form.Group className={`${classes["form-control"]} mb-3`} controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" value={password} onChange={onChangePasswordHandler}/>
        </Form.Group>
        <Button variant="primary" type="submit" >
          Login
        </Button>
        <Button variant="primary" type="button" onClick={onClickHandler} className="mx-md-5 ">
        Register
      </Button>
      </Form>
      
    </Container>


  </Wrapper>
    
  );
}

export default Login;