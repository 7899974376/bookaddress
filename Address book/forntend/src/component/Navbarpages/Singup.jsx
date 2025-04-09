import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate()
    
    
    const handleSubmit = (e) =>{
      e.preventDefault()
      axios.post('http://localhost:3001/register',{name, email, password})
      .then(result => {console.log(result)
        navigate('/login')
      })
      .catch(err=>console.log(err))
    }
    
      return (
        <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: '#5d6d7e'}}>
          <div className="p-5 bg-white shadow rounded" style={{ width: '350px' }}>
            <h2 className="mb-4">Register</h2>
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)}/>
            </div>
    
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)}/>
            </div>
    
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)}/>
            </div>
    
            <button type="submit" className="btn btn-success w-100 mb-3">Register</button>
            </form>
            <p className="text-center">Already Have an Account</p>
            <Link to="/login" className="btn btn-secondary w-100">Login</Link>
          </div>
        </div>
      );
    };
    
    export default Signup;
