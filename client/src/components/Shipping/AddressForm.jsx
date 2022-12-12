import React, { useState } from 'react';
import "./style.css";

import {Link, useNavigate} from 'react-router-dom';

function AddressForm() {
  const [check, setcheck] = useState(false)
  const [state, setstate] = useState({
    deliveryName: "",
    deliveryLastName: "",
    deliveryAddress: "",
    deliveryPhone: "",
  });
  const navigate = useNavigate();

  const onChange = (e) => {
    const {name, value} = e.target;
    setstate((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }
  const toStripe = () =>{
    navigate('/stripe');
}
  return (
    <div className="body">
    <section>
      <form>
        <h1>Delivery address</h1>
        <input className="input-font"
         type="text"
         name="deliveryName" 
         placeholder='Firt Name' 
         autoComplete='{false}' 
         onChange={onChange}
         />
         <input className="input-font"
         type="text"
         name="deliveryLastName" 
         placeholder='Last Name' 
         autoComplete='{false}' 
         onChange={onChange}
         />
         <input className="input-font"
         type="text"
         name="deliveryAddress" 
         placeholder='Address' 
         autoComplete='{false}' 
         onChange={onChange}
         />
         <input className="input-font"
         type="text"
         name="deliveryEmail" 
         placeholder='Email' 
         autoComplete='{false}' 
         onChange={onChange}
         />
         <input  onClick={toStripe} type='button' className='bth' value='Next' />
      </form>
      </section>
    </div>
    
  );
};

export default AddressForm;